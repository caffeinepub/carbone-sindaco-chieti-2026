import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  ExternalLink,
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
const WA_INFO =
  "https://wa.me/393927960983?text=Buongiorno%2C%20vorrei%20maggiori%20informazioni%20sulla%20raccolta%20firme.";

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
    title: "Formazione economica",
    desc: "Laurea in Economia e MBA LUISS — solide basi per governare con metodo.",
  },
  {
    id: "metodo",
    title: "Metodo e controllo",
    desc: "Consulenza direzionale, budgeting e corporate finance: decide con i numeri.",
  },
  {
    id: "esperienza",
    title: "Esperienza amministrativa",
    desc: "Consiglio comunale, attività produttive e bilanci: conosce la macchina pubblica.",
  },
  {
    id: "visione",
    title: "Visione per la città",
    desc: "Priorità chiare, risultati misurabili, impegni rendicontabili ai cittadini.",
  },
];

const howItWorksSteps = [
  {
    id: "verifica",
    icon: <CheckCircle2 className="w-8 h-8 text-brand-blue" />,
    step: "01",
    title: "Verifica di essere elettore",
    desc: "Controlla di essere iscritto alle liste elettorali del Comune di Chieti.",
  },
  {
    id: "firma",
    icon: <PenLine className="w-8 h-8 text-brand-blue" />,
    step: "02",
    title: "Firma per una lista civica",
    desc: "Apponi la tua firma per permettere la presentazione di una lista alle elezioni.",
  },
  {
    id: "scheda",
    icon: <Vote className="w-8 h-8 text-brand-blue" />,
    step: "03",
    title: "La proposta va sulla scheda",
    desc: "Con la tua firma, aiuti una proposta seria a essere presente alla consultazione.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo text */}
            <div className="flex-shrink-0">
              <span className="font-display font-bold text-brand-blue text-lg leading-tight">
                Carbone Sindaco
                <span className="block text-xs font-sans font-medium text-muted-foreground tracking-widest uppercase">
                  Chieti 2026
                </span>
              </span>
            </div>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  data-ocid="nav.link"
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium text-foreground hover:text-brand-blue transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href={WA_CHIAMA}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="nav.secondary_button"
                aria-label="Chiama ora Alessandro Carbone su WhatsApp"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-brand-blue border border-brand-blue rounded hover:bg-brand-blue hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Chiama ora
              </a>
              <a
                href={WA_PRENOTA}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="nav.primary_button"
                aria-label="Prenota la tua firma su WhatsApp"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-brand-blue text-white rounded hover:opacity-90 transition-opacity"
              >
                <PenLine className="w-3.5 h-3.5" />
                Prenota la firma
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="lg:hidden p-2 rounded text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Apri menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border px-4 py-4">
            <nav className="flex flex-col gap-3 mb-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  data-ocid="nav.link"
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-medium text-foreground hover:text-brand-blue py-1"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <a
                href={WA_CHIAMA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 text-sm font-medium text-brand-blue border border-brand-blue rounded"
              >
                <Phone className="w-4 h-4" /> Chiama ora
              </a>
              <a
                href={WA_PRENOTA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 text-sm font-medium bg-brand-blue text-white rounded"
              >
                <PenLine className="w-4 h-4" /> Prenota la firma
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: text */}
              <div>
                <p className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-brand-gold bg-brand-gold/10 px-3 py-1 rounded mb-5">
                  Raccolta firme · Chieti 2026
                </p>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-brand-blue leading-tight mb-4">
                  Una firma può far crescere una scelta civica per Chieti
                </h1>
                {/* Slogan */}
                <div className="flex items-center gap-2 mb-5">
                  <ClipboardList
                    className="w-5 h-5 text-brand-gold flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-base font-sans font-medium text-muted-foreground">
                    dal pianto, al{" "}
                    <strong className="text-brand-blue font-bold tracking-wide">
                      PIANO
                    </strong>
                  </p>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  Le liste civiche hanno bisogno dei cittadini per essere
                  presenti sulla scheda. Firmare non significa votare: significa
                  rendere possibile una proposta seria, conoscere il programma e
                  partecipare da vicino.
                </p>

                {/* 3 info badges */}
                <div className="grid sm:grid-cols-3 gap-3 mb-8">
                  <div className="bg-brand-grey-light rounded-lg p-3 text-center">
                    <p className="text-xs font-semibold text-brand-blue">
                      Chi può firmare
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Elettori del Comune di Chieti
                    </p>
                  </div>
                  <div className="bg-brand-grey-light rounded-lg p-3 text-center">
                    <p className="text-xs font-semibold text-brand-blue">
                      Non è un voto
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Solo per presentare la lista
                    </p>
                  </div>
                  <div className="bg-brand-grey-light rounded-lg p-3 text-center">
                    <p className="text-xs font-semibold text-brand-blue">
                      Ogni firma conta
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Una firma per lista, sempre
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_PRENOTA}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="hero.primary_button"
                    aria-label="Prenota la tua firma su WhatsApp"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-medium rounded hover:opacity-90 transition-opacity shadow-card"
                  >
                    <PenLine className="w-4 h-4" />
                    Prenota la tua firma
                  </a>
                  <a
                    href={WA_CHIAMA}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="hero.secondary_button"
                    aria-label="Chiama ora Alessandro Carbone su WhatsApp"
                    className="inline-flex items-center gap-2 px-6 py-3 text-brand-blue border border-brand-blue font-medium rounded hover:bg-brand-blue hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Chiama ora
                  </a>
                </div>
              </div>

              {/* Right: hero photo — ONE photo only, no text overlay */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative max-w-[480px] w-full">
                  <div className="absolute inset-0 bg-brand-blue/8 rounded-2xl translate-x-3 translate-y-3 -z-10" />
                  <img
                    src="/assets/uploads/Ale-con-persone-5.jpeg"
                    alt="Alessandro Carbone incontra i cittadini di Chieti"
                    className="w-full h-auto rounded-2xl object-cover object-top shadow-card-hover"
                    style={{ maxHeight: "520px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COME FUNZIONA ──────────────────────────────────────────────────── */}
        <section id="come-funziona" className="section-alt py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-blue mb-3">
                Come funziona
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Tre passi semplici per contribuire a portare una proposta civica
                sulla scheda
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-4 relative">
              {howItWorksSteps.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-white rounded-xl p-6 shadow-card text-center"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-xs font-bold px-3 py-0.5 rounded-full">
                    {item.step}
                  </div>
                  <div className="flex justify-center mb-4 mt-2">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-brand-blue text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PERCHÉ PARTECIPARE ─────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-blue mb-5 leading-tight">
                  Partecipare è il primo modo per rimettere in moto la città
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  La partecipazione civica non è rumore di fondo. È presenza
                  reale, ascolto concreto, responsabilità condivisa. Quando i
                  cittadini scelgono di esserci, la città può davvero cambiare
                  direzione.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Firmare per una lista civica è un gesto semplice ma
                  significativo: significa dire che vuoi che ci sia una scelta
                  in più sulla scheda, una proposta costruita sui fatti, sul
                  metodo e sulla vicinanza ai cittadini.
                </p>
                <a
                  href={WA_PRENOTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Prenota la tua firma su WhatsApp"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
                >
                  Prenota la tua firma <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Foto abbraccio — contenitore elegante e ridotto */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-64 max-w-full">
                  <div className="absolute inset-0 bg-brand-gold/10 rounded-2xl translate-x-2.5 translate-y-2.5 -z-10" />
                  <img
                    src="/assets/uploads/Ale-abbraccio--1.jpeg"
                    alt="Alessandro Carbone con un cittadino"
                    className="w-full h-auto rounded-2xl object-cover shadow-card"
                    style={{ maxHeight: "320px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CANDIDATO ─────────────────────────────────────────────────────── */}
        <section id="candidato" className="section-alt py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Foto ritratto — max 240px, no upscale */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-60 max-w-full">
                  <div className="absolute inset-0 bg-brand-blue/8 rounded-2xl translate-x-2.5 translate-y-2.5 -z-10" />
                  <img
                    src="/assets/uploads/FOTO-ALE-3.png"
                    alt="Alessandro Carbone, candidato sindaco di Chieti"
                    className="w-full h-auto rounded-2xl object-cover object-top shadow-card"
                    style={{ maxWidth: "240px" }}
                  />
                </div>
              </div>

              {/* Bio + cards */}
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-brand-gold mb-3">
                  Il Candidato
                </p>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-blue mb-2">
                  Alessandro Carbone
                </h2>
                <p className="text-sm font-medium text-muted-foreground mb-4">
                  Candidato Sindaco · Chieti 2026
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-7">
                  Formazione economica, esperienza in corporate finance e
                  consulenza direzionale, passato amministrativo in consiglio
                  comunale. Alessandro Carbone porta a Chieti un metodo
                  concreto: pianificare, misurare, rendere conto.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {candidatoCards.map((card) => (
                    <div
                      key={card.id}
                      className="bg-white rounded-lg p-4 shadow-card border border-border"
                    >
                      <div className="w-1 h-6 bg-brand-gold rounded-full mb-2" />
                      <h3 className="font-display font-semibold text-brand-blue text-sm mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROGRAMMA ─────────────────────────────────────────────────────── */}
        <section id="programma" className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-blue mb-3">
                Il Programma
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Sei assi concreti per riportare Chieti a essere una città che
                funziona, che cresce e che tiene insieme i suoi cittadini.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {programmaItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-5 shadow-card border border-border hover:shadow-card-hover transition-shadow"
                >
                  <span
                    className="text-3xl mb-3 block"
                    role="img"
                    aria-label={item.title}
                  >
                    {item.icon}
                  </span>
                  <h3 className="font-display font-bold text-brand-blue text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3 italic">
                    {item.desc}
                  </p>
                  <ul className="space-y-1">
                    {item.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-center gap-1.5 text-xs text-foreground"
                      >
                        <ChevronRight className="w-3 h-3 text-brand-gold flex-shrink-0" />
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
        <section id="liste" className="section-alt py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-blue mb-3">
                Le quattro liste della coalizione
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Quattro proposte civiche diverse, un unico obiettivo: portare
                Chieti verso il futuro.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {liste.map((lista) => (
                <article
                  key={lista.id}
                  data-ocid={lista.ocid}
                  className="bg-white rounded-xl p-6 shadow-card border border-border hover:shadow-card-hover transition-shadow flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {/* Logo rotondo */}
                    <div
                      className="flex-shrink-0 rounded-full bg-white border border-border flex items-center justify-center overflow-hidden"
                      style={{ width: 90, height: 90 }}
                    >
                      <img
                        src={lista.logo}
                        alt={`Logo ${lista.name}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          objectPosition: "center",
                          borderRadius: "50%",
                          padding: 4,
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-brand-blue text-lg">
                        {lista.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {lista.desc}
                      </p>
                    </div>
                  </div>

                  {/* Keyword pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {lista.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-xs px-2 py-0.5 rounded-full bg-brand-grey-light text-brand-blue font-medium"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  <a
                    href={lista.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Scopri programma e candidati di ${lista.name}`}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue border border-brand-blue rounded px-4 py-2 hover:bg-brand-blue hover:text-white transition-colors w-fit"
                  >
                    Scopri programma e candidati{" "}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── LINK ESTERNI ──────────────────────────────────────────────────── */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-brand-blue mb-8 text-center">
              Dove trovare programma e candidati
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {liste.map((lista) => (
                <a
                  key={lista.id}
                  href={lista.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 bg-brand-grey-light rounded-xl p-5 hover:shadow-card transition-shadow text-center group"
                >
                  <div
                    className="rounded-full bg-white border border-border flex items-center justify-center overflow-hidden"
                    style={{ width: 56, height: 56 }}
                  >
                    <img
                      src={lista.logo}
                      alt={lista.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        padding: 3,
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <span className="font-semibold text-brand-blue text-sm group-hover:underline">
                    {lista.name}
                  </span>
                  <span className="text-xs text-muted-foreground break-all">
                    {lista.url.replace("https://", "")}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-brand-gold" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section id="faq" className="section-alt py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-blue mb-3">
                Domande frequenti
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem
                value="item-1"
                data-ocid="faq.item.1"
                className="bg-white rounded-xl border border-border px-5"
              >
                <AccordionTrigger className="font-sans font-semibold text-brand-blue text-sm py-4 hover:no-underline">
                  Firmare significa già votare?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                  No. Firmare serve solo a presentare una lista alle elezioni.
                  Il voto avviene dopo, il giorno delle elezioni. Sono due atti
                  completamente distinti.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                data-ocid="faq.item.2"
                className="bg-white rounded-xl border border-border px-5"
              >
                <AccordionTrigger className="font-sans font-semibold text-brand-blue text-sm py-4 hover:no-underline">
                  Chi può firmare?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                  Può firmare chiunque sia iscritto alle liste elettorali del
                  Comune di Chieti. Se sei residente e hai compiuto 18 anni,
                  puoi partecipare.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                data-ocid="faq.item.3"
                className="bg-white rounded-xl border border-border px-5"
              >
                <AccordionTrigger className="font-sans font-semibold text-brand-blue text-sm py-4 hover:no-underline">
                  Perché ogni firma conta?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                  Ogni elettore può sottoscrivere una sola lista. Questo rende
                  ogni firma preziosa e determinante per permettere a una lista
                  civica di essere presente sulla scheda.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                data-ocid="faq.item.4"
                className="bg-white rounded-xl border border-border px-5"
              >
                <AccordionTrigger className="font-sans font-semibold text-brand-blue text-sm py-4 hover:no-underline">
                  Dove posso firmare?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
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
                className="bg-white rounded-xl border border-border px-5"
              >
                <AccordionTrigger className="font-sans font-semibold text-brand-blue text-sm py-4 hover:no-underline">
                  Posso parlare direttamente con il candidato?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                  Sì. Alessandro Carbone è direttamente raggiungibile su
                  WhatsApp al numero 392 79 60 983.{" "}
                  <a
                    href={WA_CHIAMA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-brand-blue font-semibold underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Scrivi ora
                  </a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* ── CTA FINALE ────────────────────────────────────────────────────── */}
        <section className="bg-brand-blue py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Chieti riparte dalle persone che scelgono di esserci
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              Una firma è il primo passo per portare sulla scheda una proposta
              civica seria, vicina alla città e pronta a misurarsi sui
              risultati.
            </p>

            {/* Numero in evidenza */}
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-xl px-5 py-3 mb-8">
              <Phone className="w-5 h-5 text-brand-gold" />
              <span className="text-white font-bold text-xl tracking-widest">
                392 79 60 983
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_CHIAMA}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="cta.primary_button"
                aria-label="Chiama il candidato su WhatsApp"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-blue font-semibold rounded hover:bg-white/90 transition-opacity"
              >
                <Phone className="w-4 h-4" /> Chiama il candidato
              </a>
              <a
                href={WA_INFO}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="cta.secondary_button"
                aria-label="Scrivi su WhatsApp"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white font-semibold rounded hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Scrivi su WhatsApp
              </a>
              <a
                href={WA_PRENOTA}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prenota un appuntamento su WhatsApp"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-white font-semibold rounded hover:opacity-90 transition-opacity"
              >
                <Calendar className="w-4 h-4" /> Prenota appuntamento
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="bg-foreground py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-white/60">
            Coalizione civica Carbone Sindaco · Chieti 2026 · Raccolta firme
          </p>
          <p className="text-xs text-white/40 mt-1">
            © {new Date().getFullYear()}. Realizzato con ♥ usando{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/60"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
