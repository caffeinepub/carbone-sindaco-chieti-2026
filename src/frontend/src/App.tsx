import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  ExternalLink,
  GraduationCap,
  HelpCircle,
  Landmark,
  Lightbulb,
  Menu,
  MessageCircle,
  PenLine,
  Phone,
  Vote,
  X,
} from "lucide-react";
import { useState } from "react";

// ─── WhatsApp links ───────────────────────────────────────────────────────────
const WA_PRENOTA =
  "https://wa.me/393927960983?text=Buongiorno%2C%20vorrei%20prenotare%20la%20mia%20firma%20per%20la%20presentazione%20delle%20liste.";
const WA_CHIAMA =
  "https://wa.me/393927960983?text=Buongiorno%2C%20vorrei%20contattare%20Alessandro%20Carbone.";

// ─── Data ─────────────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Come funziona", href: "#come-funziona" },
  { label: "Il Candidato", href: "#candidato" },
  { label: "Programma", href: "#programma" },
  { label: "Le Liste", href: "#liste" },
  { label: "FAQ", href: "#faq" },
];

const programmaItems = [
  {
    id: "decoro",
    icon: "🏗️",
    title: "Decoro urbano e manutenzione",
    desc: "Strade curate e spazi dignitosi per tutti",
    points: [
      "Manutenzione ordinaria",
      "Asfalti e marciapiedi",
      "Pulizia e verde",
    ],
  },
  {
    id: "servizi",
    icon: "🏛️",
    title: "Servizi essenziali semplici",
    desc: "Uffici vicini, pratiche veloci",
    points: ["Digitalizzazione", "Sportelli efficienti", "Meno burocrazia"],
  },
  {
    id: "centro",
    icon: "🏙️",
    title: "Centro storico e turismo",
    desc: "Valorizzare il cuore della città",
    points: [
      "Attrattività turistica",
      "Sostegno commercio locale",
      "Eventi culturali",
    ],
  },
  {
    id: "connessione",
    icon: "🔗",
    title: "Chieti Alta e Chieti Scalo",
    desc: "Una città più connessa",
    points: ["Trasporti integrati", "Parcheggi", "Collegamento funzionale"],
  },
  {
    id: "universita",
    icon: "🎓",
    title: "Università, lavoro, innovazione",
    desc: "Il futuro parte da qui",
    points: [
      "Polo universitario",
      "Distretto aerospaziale",
      "Start-up e impresa",
    ],
  },
  {
    id: "sanita",
    icon: "🏥",
    title: "Sanità, sport, qualità della vita",
    desc: "Vivere bene a Chieti",
    points: [
      "Servizi sanitari locali",
      "Impianti sportivi",
      "Longevità attiva",
    ],
  },
];

const liste = [
  {
    id: "chieti-sceglie",
    name: "Chieti Sceglie",
    logo: "/assets/uploads/logo-chieti-sceglie-carbone-7.jpg",
    desc: "Impresa, commercio e futuro universitario",
    keywords: ["impresa", "commercio", "università"],
    url: "https://www.chietisceglie.it",
    ocid: "liste.item.1",
  },
  {
    id: "chieti-scalo-noi",
    name: "Chieti Scalo Noi",
    logo: "/assets/uploads/CHIETI-SCALO-NOI-LOGO-4.jpeg",
    desc: "Il territorio, la salute, la comunità",
    keywords: ["territorio", "sanità", "comunità"],
    url: "https://www.chietiscalonoi.it",
    ocid: "liste.item.2",
  },
  {
    id: "liberali-per-chieti",
    name: "Liberali per Chieti",
    logo: "/assets/uploads/LIBERALI-PER-CHIETI-LOGO-6.jpeg",
    desc: "Sport, eventi e qualità urbana",
    keywords: ["sport", "infrastrutture", "decoro"],
    url: "https://www.liberaliperchieti.it",
    ocid: "liste.item.3",
  },
  {
    id: "chieti-al-centro",
    name: "Chieti al Centro",
    logo: "/assets/uploads/CHIETI-AL-CENTRO-LOGO-2.jpeg",
    desc: "Servizi, turismo e centralità",
    keywords: ["servizi", "turismo", "futuro"],
    url: "https://www.chietialcentro.it",
    ocid: "liste.item.4",
  },
];

const candidatoCards = [
  {
    id: "formazione",
    icon: GraduationCap,
    title: "Formazione economica",
    desc: "Laurea in Economia e MBA LUISS — solide basi per governare con metodo.",
  },
  {
    id: "metodo",
    icon: BarChart3,
    title: "Metodo e controllo",
    desc: "Consulenza direzionale, budgeting e corporate finance: decide con i numeri.",
  },
  {
    id: "esperienza",
    icon: Landmark,
    title: "Esperienza amministrativa",
    desc: "Consiglio comunale, attività produttive e bilanci: conosce la macchina pubblica.",
  },
  {
    id: "visione",
    icon: Lightbulb,
    title: "Visione per la città",
    desc: "Priorità chiare, risultati misurabili, impegni rendicontabili ai cittadini.",
  },
];

// ─── WhatsApp SVG Icon ─────────────────────────────────────────────────────────
function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <circle cx="16" cy="16" r="16" fill="white" />
      <path
        d="M16 5C9.925 5 5 9.925 5 16c0 1.96.51 3.8 1.4 5.4L5 27l5.75-1.38A11 11 0 0 0 16 27c6.075 0 11-4.925 11-11S22.075 5 16 5zm0 20c-1.65 0-3.22-.43-4.58-1.19l-.33-.19-3.41.82.85-3.32-.2-.34A9 9 0 0 1 7 16c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9zm4.96-6.76c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.31 0 1.36.99 2.67 1.13 2.86.14.18 1.95 2.98 4.73 4.18.66.28 1.18.45 1.58.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"
        fill="#25D366"
      />
    </svg>
  );
}

// ─── Section Divider ──────────────────────────────────────────────────────────
function SectionDivider() {
  return <div className="w-12 h-1 bg-brand-gold mx-auto mt-3 mb-6 rounded" />;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // FIX C/L: chiude menu prima di scrollare, compensa header sticky
  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(id);
    if (el) {
      // scroll-margin-top già impostato via CSS, smooth da CSS
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      {/* FIX C: sticky header con z-index alto e shadow leggera */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
            {/* Logo text */}
            <div className="flex-shrink-0 min-w-0">
              <span className="font-display font-bold text-brand-blue text-lg lg:text-2xl leading-tight block">
                Carbone Sindaco
              </span>
              <span className="block text-xs font-sans font-medium text-muted-foreground tracking-widest uppercase">
                Chieti 2026
              </span>
            </div>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-6"
              aria-label="Navigazione principale"
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  data-ocid="nav.link"
                  onClick={() => scrollTo(link.href)}
                  // FIX E: min-h 44px per touch target
                  className="text-base font-medium text-foreground hover:text-brand-blue transition-colors min-h-[44px] px-1"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <a
                href={WA_CHIAMA}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="nav.secondary_button"
                aria-label="Chiama ora Alessandro Carbone su WhatsApp"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-base font-medium text-brand-blue border border-brand-blue rounded hover:bg-brand-blue hover:text-white transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4" />
                Chiama ora
              </a>
              <a
                href={WA_PRENOTA}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="nav.primary_button"
                aria-label="Prenota la tua firma su WhatsApp"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-base font-medium bg-brand-blue text-white rounded hover:opacity-90 transition-opacity min-h-[44px]"
              >
                <PenLine className="w-4 h-4" />
                Prenota la firma
              </a>
            </div>

            {/* FIX E: Mobile hamburger con touch target minimo 44px */}
            <button
              type="button"
              className="lg:hidden p-3 rounded text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* FIX C: Mobile menu – overlay ordinato, voci ben spaziate */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border px-4 py-5 shadow-md">
            <nav className="flex flex-col gap-1 mb-5" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  data-ocid="nav.link"
                  onClick={() => scrollTo(link.href)}
                  // FIX E: altezza minima 44px garantita
                  className="text-left text-lg font-medium text-foreground hover:text-brand-blue hover:bg-brand-grey-light px-3 py-3 rounded-lg transition-colors min-h-[44px] w-full"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <a
                href={WA_CHIAMA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 text-lg font-semibold text-brand-blue border-2 border-brand-blue rounded-xl min-h-[56px] hover:bg-brand-blue hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" /> Chiama ora
              </a>
              <a
                href={WA_PRENOTA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 text-lg font-semibold bg-brand-blue text-white rounded-xl min-h-[56px] hover:opacity-90 transition-opacity"
              >
                <PenLine className="w-5 h-5 flex-shrink-0" /> Prenota la firma
              </a>
            </div>
          </div>
        )}
      </header>

      {/* FIX floating button: pb-32 per garantire spazio visibile sopra il bottone fisso */}
      <main className="pb-32">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        {/* FIX B: hero section – titolo responsive con clamp(), CTA in colonna su mobile */}
        <section className="bg-white py-10 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: text */}
              <div>
                <p className="inline-block text-sm font-sans font-semibold tracking-widest uppercase text-brand-gold bg-brand-gold/10 px-3 py-1.5 rounded mb-4">
                  Raccolta firme · Chieti 2026
                </p>
                {/* FIX B: font size via classe custom con clamp() definita in CSS */}
                <h1 className="text-hero font-display font-bold text-brand-blue mb-4">
                  Una firma può far crescere una scelta civica per Chieti
                </h1>
                {/* Slogan */}
                <div className="flex items-center gap-2 mb-4">
                  <ClipboardList
                    className="w-5 h-5 text-brand-gold flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-base sm:text-lg font-sans font-medium text-muted-foreground">
                    dal pianto, al{" "}
                    <strong className="text-brand-blue font-bold tracking-wide">
                      PIANO
                    </strong>
                  </p>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                  A differenza dei partiti tradizionali già presenti in
                  Parlamento, le liste civiche nascono dal basso e per legge
                  devono raccogliere le firme dei cittadini per poter
                  partecipare alle elezioni.
                </p>
                <p className="text-base sm:text-lg font-semibold text-brand-blue leading-relaxed mb-7">
                  La tua firma viene prima del voto e rende possibile che la
                  nostra voce, e la tua, siano presenti sulla scheda elettorale
                  di Chieti!
                </p>

                {/* FIX G/I: 3 info badges – grid fluido, padding coerente */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
                  <div className="bg-brand-grey-light rounded-xl p-4 text-center">
                    <p className="text-sm font-bold text-brand-blue">
                      Chi può firmare
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Elettori del Comune di Chieti
                    </p>
                  </div>
                  <div className="bg-brand-grey-light rounded-xl p-4 text-center">
                    <p className="text-sm font-bold text-brand-blue">
                      Non è un voto
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Solo per presentare la lista
                    </p>
                  </div>
                  <div className="bg-brand-grey-light rounded-xl p-4 text-center">
                    <p className="text-sm font-bold text-brand-blue">
                      Ogni firma conta
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Una firma per lista, sempre
                    </p>
                  </div>
                </div>

                {/* FIX B: CTA in colonna su mobile, affiancate da sm+ */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={WA_PRENOTA}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="hero.primary_button"
                    aria-label="Prenota la tua firma su WhatsApp"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand-blue text-white text-base sm:text-lg font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-card min-h-[52px]"
                  >
                    <PenLine className="w-5 h-5 flex-shrink-0" />
                    Prenota la tua firma
                  </a>
                  <a
                    href={WA_CHIAMA}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="hero.secondary_button"
                    aria-label="Chiama ora Alessandro Carbone su WhatsApp"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 text-brand-blue border-2 border-brand-blue text-base sm:text-lg font-semibold rounded-xl hover:bg-brand-blue hover:text-white transition-colors min-h-[52px]"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    Chiama ora
                  </a>
                </div>
              </div>

              {/* FIX A/J: hero photo – rimosse shadow con translateX che causavano overflow */}
              <div className="flex justify-center lg:justify-end mt-2 lg:mt-0">
                <div className="relative w-full max-w-[480px]">
                  <img
                    src="/assets/uploads/Ale-con-persone-5.jpeg"
                    alt="Alessandro Carbone incontra i cittadini di Chieti"
                    className="w-full rounded-2xl object-cover object-top shadow-card-hover"
                    style={{ aspectRatio: "4/5", maxHeight: "520px" }}
                    loading="eager"
                    width="480"
                    height="600"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COME FUNZIONA ──────────────────────────────────────────────────── */}
        {/* FIX I/J: REWRITE COMPLETO – era buggy con md:contents + grid-cols-3 */}
        {/* Il bug: 5 grid item (3 cards + 2 arrows) con grid-cols-3 produceva 2 righe */}
        <section id="come-funziona" className="section-alt py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-section-title font-display font-bold text-brand-blue mb-2">
                Come funziona
              </h2>
              <SectionDivider />
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
                Tre passi semplici per contribuire a portare una proposta civica
                sulla scheda
              </p>
            </div>

            {/* FIX: grid pulita 3 colonne su desktop, 1 colonna su mobile */}
            {/* Frecce connettore come colonne auto separate – nessun contents trick */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-2 items-stretch">
              {/* Step 01 */}
              <div className="relative bg-white rounded-2xl p-7 shadow-card text-center hover:shadow-card-hover transition-shadow">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-sm font-bold px-4 py-1 rounded-full">
                  01
                </div>
                <div className="flex justify-center mb-4 mt-3">
                  <CheckCircle2 className="w-10 h-10 text-brand-blue" />
                </div>
                <h3 className="font-display font-bold text-brand-blue text-lg sm:text-xl mb-3">
                  Verifica di essere elettore
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Controlla di essere iscritto alle liste elettorali del Comune
                  di Chieti.{" "}
                  <a
                    href="https://www.anagrafenazionale.interno.it/area-cittadino/certificati/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue font-semibold underline hover:opacity-80 transition-opacity"
                  >
                    È possibile scaricare il certificato di iscrizione alle
                    liste elettorali ON LINE
                  </a>
                  .
                </p>
              </div>

              {/* FIX: Freccia connettore come elemento separato nel grid */}
              <div className="hidden md:flex items-center justify-center px-1">
                <div className="bg-brand-gold/20 rounded-full p-1.5">
                  <ArrowRight
                    className="w-5 h-5 text-brand-gold"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Step 02 */}
              <div className="relative bg-white rounded-2xl p-7 shadow-card text-center hover:shadow-card-hover transition-shadow">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-sm font-bold px-4 py-1 rounded-full">
                  02
                </div>
                <div className="flex justify-center mb-4 mt-3">
                  <PenLine className="w-10 h-10 text-brand-blue" />
                </div>
                <h3 className="font-display font-bold text-brand-blue text-lg sm:text-xl mb-3">
                  Firma per una lista civica
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Apponi la tua firma per permettere la presentazione di una
                  lista alle elezioni.
                </p>
              </div>

              {/* Freccia connettore */}
              <div className="hidden md:flex items-center justify-center px-1">
                <div className="bg-brand-gold/20 rounded-full p-1.5">
                  <ArrowRight
                    className="w-5 h-5 text-brand-gold"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Step 03 */}
              <div className="relative bg-white rounded-2xl p-7 shadow-card text-center hover:shadow-card-hover transition-shadow">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-sm font-bold px-4 py-1 rounded-full">
                  03
                </div>
                <div className="flex justify-center mb-4 mt-3">
                  <Vote className="w-10 h-10 text-brand-blue" />
                </div>
                <h3 className="font-display font-bold text-brand-blue text-lg sm:text-xl mb-3">
                  La proposta va sulla scheda
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Con la tua firma, aiuti una proposta seria a essere presente
                  alla consultazione.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PERCHÉ PARTECIPARE ─────────────────────────────────────────────── */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              {/* Text */}
              <div>
                <h2 className="text-section-title font-display font-bold text-brand-blue mb-4 leading-tight">
                  Partecipare è il primo modo per rimettere in moto la città
                </h2>
                <div className="w-12 h-1 bg-brand-gold mb-6 rounded" />
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5">
                  la partecipazione civica non è rumore di fondo, è presenza
                  reale, ascolto concreto, responsabilità condivisa, quando i
                  cittadini scelgono di esserci, la città può davvero cambiare
                  direzione
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-7">
                  Firmare per una lista civica è un gesto semplice ma
                  significativo: significa dire che vuoi che ci sia una scelta
                  in più sulla scheda, una proposta costruita sui fatti, sul
                  metodo e sulla vicinanza ai cittadini.
                </p>

                {/* FIX A: Funnel infographic – fix overflow mobile con grid a 5 colonne */}
                <div
                  className="grid items-center gap-2 mb-8 bg-brand-grey-light rounded-2xl p-4 sm:p-5"
                  style={{ gridTemplateColumns: "1fr auto 1fr auto 1fr" }}
                >
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="bg-white rounded-full p-2.5 shadow-sm">
                      <PenLine
                        className="w-5 h-5 text-brand-gold"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-brand-blue text-center leading-tight">
                      Firma
                    </span>
                  </div>
                  <ArrowRight
                    className="w-4 h-4 text-brand-gold flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="bg-white rounded-full p-2.5 shadow-sm">
                      <ClipboardList
                        className="w-5 h-5 text-brand-gold"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-brand-blue text-center leading-tight">
                      Lista sulla scheda
                    </span>
                  </div>
                  <ArrowRight
                    className="w-4 h-4 text-brand-gold flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="bg-white rounded-full p-2.5 shadow-sm">
                      <Vote
                        className="w-5 h-5 text-brand-gold"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-brand-blue text-center leading-tight">
                      Voto libero
                    </span>
                  </div>
                </div>

                {/* FIX E: CTA con target touch adeguato */}
                <a
                  href={WA_PRENOTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Prenota la tua firma su WhatsApp"
                  className="inline-flex items-center gap-2 text-base font-semibold text-brand-blue hover:underline min-h-[44px]"
                >
                  Prenota la tua firma <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* FIX J: Foto abbraccio – aspect-ratio coerente, dimensioni più generose */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/assets/uploads/Ale-abbraccio--1.jpeg"
                  alt="Alessandro Carbone con un cittadino"
                  className="w-full max-w-sm rounded-2xl object-cover shadow-card"
                  style={{ aspectRatio: "4/5" }}
                  loading="lazy"
                  width="400"
                  height="500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CANDIDATO ─────────────────────────────────────────────────────── */}
        <section id="candidato" className="section-alt py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
              {/* FIX J: Foto ritratto – dimensioni più generose, aspect-ratio coerente */}
              <div className="flex justify-center lg:justify-start">
                <img
                  src="/assets/uploads/FOTO-ALE-3.png"
                  alt="Alessandro Carbone, candidato sindaco di Chieti"
                  className="w-full max-w-[280px] lg:max-w-[360px] rounded-2xl object-cover object-top shadow-card"
                  style={{ aspectRatio: "3/4" }}
                  loading="lazy"
                  width="360"
                  height="480"
                />
              </div>

              {/* Bio + cards */}
              <div>
                <p className="text-sm font-semibold tracking-widest uppercase text-brand-gold mb-3">
                  Il Candidato
                </p>
                <h2 className="text-section-title font-display font-bold text-brand-blue mb-2">
                  Alessandro Carbone
                </h2>
                <div className="w-12 h-1 bg-brand-gold mb-4 rounded" />
                <p className="text-base font-medium text-muted-foreground mb-5">
                  Candidato Sindaco · Chieti 2026
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-7">
                  Formazione economica, esperienza in corporate finance e
                  consulenza direzionale, passato amministrativo in consiglio
                  comunale. Alessandro Carbone porta a Chieti un metodo
                  concreto: pianificare, misurare, rendere conto.
                </p>

                {/* FIX I: border-radius uniformato a rounded-2xl (era rounded-xl) */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {candidatoCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={card.id}
                        className="bg-white rounded-2xl p-5 shadow-card border border-border hover:shadow-card-hover transition-shadow"
                      >
                        <Icon
                          className="w-7 h-7 text-brand-gold mb-3"
                          aria-hidden="true"
                        />
                        <div className="w-1 h-6 bg-brand-gold rounded-full mb-3" />
                        <h3 className="font-display font-semibold text-brand-blue text-base mb-2">
                          {card.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROGRAMMA ─────────────────────────────────────────────────────── */}
        <section id="programma" className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-section-title font-display font-bold text-brand-blue mb-2">
                Il Programma
              </h2>
              <SectionDivider />
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
                Sei assi concreti per riportare Chieti a essere una città che
                funziona, che cresce e che tiene insieme i suoi cittadini.
              </p>
            </div>

            {/* FIX I/A: grid con minmax per evitare overflow su schermi stretti */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {programmaItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover transition-shadow flex flex-col"
                >
                  <span
                    className="text-3xl mb-4 block"
                    role="img"
                    aria-label={item.title}
                  >
                    {item.icon}
                  </span>
                  <h3 className="font-display font-bold text-brand-blue text-base sm:text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 italic">
                    {item.desc}
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {item.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-center gap-2 text-sm sm:text-base text-foreground"
                      >
                        <ChevronRight className="w-4 h-4 text-brand-gold flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LE QUATTRO LISTE ──────────────────────────────────────────────── */}
        <section id="liste" className="section-alt py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-section-title font-display font-bold text-brand-blue mb-2">
                Le quattro liste della coalizione
              </h2>
              <SectionDivider />
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
                Quattro proposte civiche diverse, un unico obiettivo: portare
                Chieti verso il futuro.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {liste.map((lista) => (
                <article
                  key={lista.id}
                  data-ocid={lista.ocid}
                  className="bg-white rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover transition-shadow flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-5">
                    {/* FIX J: Logo rotondo – aspect-ratio 1/1, object-fit:contain, niente deformazioni */}
                    <div
                      className="flex-shrink-0 rounded-full bg-white border border-border flex items-center justify-center overflow-hidden"
                      style={{ width: 88, height: 88 }}
                    >
                      <img
                        src={lista.logo}
                        alt={`Logo ${lista.name}`}
                        width="88"
                        height="88"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          objectPosition: "center",
                          padding: 6,
                        }}
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-brand-blue text-lg sm:text-xl leading-tight">
                        {lista.name}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mt-1">
                        {lista.desc}
                      </p>
                    </div>
                  </div>

                  {/* Keyword pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {lista.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-xs sm:text-sm px-3 py-1 rounded-full bg-brand-grey-light text-brand-blue font-medium"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  {/* FIX E: CTA con touch target adeguato, w-full su mobile */}
                  <a
                    href={lista.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Scopri programma e candidati di ${lista.name}`}
                    className="mt-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-brand-blue border border-brand-blue rounded-xl px-5 py-3 hover:bg-brand-blue hover:text-white transition-colors min-h-[48px] w-full sm:w-fit"
                  >
                    Scopri programma e candidati{" "}
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── LINK ESTERNI ──────────────────────────────────────────────────── */}
        {/* FIX G: padding verticale uniformato con py-14 lg:py-20 */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-section-title font-display font-bold text-brand-blue mb-2 text-center">
              Dove trovare programma e candidati
            </h2>
            <SectionDivider />
            {/* FIX A: grid con min-width per evitare overflow su schermi 320px */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {liste.map((lista) => (
                <a
                  key={lista.id}
                  href={lista.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 bg-brand-grey-light rounded-2xl p-4 sm:p-6 hover:shadow-card transition-shadow text-center group min-h-[44px]"
                >
                  <div
                    className="rounded-full bg-white border border-border flex items-center justify-center overflow-hidden flex-shrink-0"
                    style={{ width: 56, height: 56 }}
                  >
                    <img
                      src={lista.logo}
                      alt={lista.name}
                      width="56"
                      height="56"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        padding: 4,
                      }}
                      loading="lazy"
                    />
                  </div>
                  <span className="font-semibold text-brand-blue text-sm sm:text-base group-hover:underline leading-tight">
                    {lista.name}
                  </span>
                  {/* FIX D: URL truncata, no overflow */}
                  <span className="text-xs text-muted-foreground truncate w-full text-center">
                    {lista.url.replace("https://", "")}
                  </span>
                  <ExternalLink className="w-4 h-4 text-brand-gold flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section id="faq" className="section-alt py-14 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-section-title font-display font-bold text-brand-blue mb-2 flex items-center justify-center gap-3">
                <HelpCircle
                  className="w-8 h-8 text-brand-gold flex-shrink-0"
                  aria-hidden="true"
                />
                Domande frequenti
              </h2>
              <SectionDivider />
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem
                value="item-1"
                data-ocid="faq.item.1"
                className="bg-white rounded-2xl border border-border px-5 sm:px-6"
              >
                <AccordionTrigger className="font-sans font-semibold text-brand-blue text-base py-5 hover:no-underline text-left">
                  Firmare significa già votare?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-5 leading-relaxed">
                  No. Firmare serve solo a presentare una lista alle elezioni.
                  Il voto avviene dopo, il giorno delle elezioni. Sono due atti
                  completamente distinti.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                data-ocid="faq.item.2"
                className="bg-white rounded-2xl border border-border px-5 sm:px-6"
              >
                <AccordionTrigger className="font-sans font-semibold text-brand-blue text-base py-5 hover:no-underline text-left">
                  Chi può firmare?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-5 leading-relaxed">
                  Può firmare chiunque sia iscritto alle liste elettorali del
                  Comune di Chieti. Se sei residente e hai compiuto 18 anni,
                  puoi partecipare.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                data-ocid="faq.item.3"
                className="bg-white rounded-2xl border border-border px-5 sm:px-6"
              >
                <AccordionTrigger className="font-sans font-semibold text-brand-blue text-base py-5 hover:no-underline text-left">
                  Perché ogni firma conta?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-5 leading-relaxed">
                  Ogni elettore può sottoscrivere una sola lista. Questo rende
                  ogni firma preziosa e determinante per permettere a una lista
                  civica di essere presente sulla scheda.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                data-ocid="faq.item.4"
                className="bg-white rounded-2xl border border-border px-5 sm:px-6"
              >
                <AccordionTrigger className="font-sans font-semibold text-brand-blue text-base py-5 hover:no-underline text-left">
                  Dove posso firmare?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-5 leading-relaxed">
                  Contatta direttamente Alessandro Carbone su WhatsApp per
                  prenotare un appuntamento comodo per te.{" "}
                  <a
                    href={WA_PRENOTA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue font-semibold underline"
                  >
                    Prenota la firma ora →
                  </a>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                data-ocid="faq.item.5"
                className="bg-white rounded-2xl border border-border px-5 sm:px-6"
              >
                <AccordionTrigger className="font-sans font-semibold text-brand-blue text-base py-5 hover:no-underline text-left">
                  Posso parlare direttamente con il candidato?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-5 leading-relaxed">
                  Sì. Alessandro Carbone è direttamente raggiungibile su
                  WhatsApp al numero 392 79 60 983.{" "}
                  <a
                    href={WA_CHIAMA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-brand-blue font-semibold underline"
                  >
                    <MessageCircle className="w-4 h-4" /> Scrivi ora
                  </a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      {/* ── FLOATING WHATSAPP BUTTON ───────────────────────────────────────── */}
      {/* FIX A: bottone che overflow su 320px – ridotto padding e testo responsive */}
      <a
        href={WA_CHIAMA}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="whatsapp.primary_button"
        aria-label="Linea diretta con Alessandro su WhatsApp"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-[#25D366] text-white font-bold rounded-full shadow-2xl px-4 sm:px-6 py-3 sm:py-4 hover:bg-[#1ebe5d] transition-all hover:scale-105 active:scale-95 whitespace-nowrap max-w-[calc(100vw-2rem)]"
        style={{ boxShadow: "0 8px 32px rgba(37,211,102,0.50)" }}
      >
        <WhatsAppIcon size={26} />
        {/* FIX A: testo più piccolo su mobile per evitare overflow su 320px */}
        <span className="text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase">
          LINEA DIRETTA CON ALESSANDRO
        </span>
      </a>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      {/* FIX: padding bottom aumentato per non essere coperto dal floating button */}
      <footer className="bg-foreground py-8 pb-24 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-white/70">
            Coalizione civica Carbone Sindaco · Chieti 2026 · Raccolta firme
          </p>
          <p className="text-xs text-white/50 mt-1">
            © {new Date().getFullYear()} Coalizione civica Carbone Sindaco ·
            Chieti 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
