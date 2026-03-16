import { motion } from "framer-motion";
import {
  BatteryCharging,
  CheckCircle2,
  ChevronDown,
  Laptop,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Smartphone,
  Wifi,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import logoMark from "./assets/logo-mark.png";
import logoWordmark from "./assets/logo-wordmark.png";

import repair1 from "./assets/repairs/repair-1.jpeg";
import repair2 from "./assets/repairs/repair-2.jpeg";
import repair3 from "./assets/repairs/repair-3.jpeg";
import repair4 from "./assets/repairs/repair-4.jpeg";
import repair5 from "./assets/repairs/repair-5.jpeg";
import appleLogo from "./assets/brands/apple.png";
import googleLogo from "./assets/brands/google.png";
import huaweiLogo from "./assets/brands/huawei.png";
import oneplusLogo from "./assets/brands/oneplus.png";
import oppoLogo from "./assets/brands/oppo.svg";
import redmiLogo from "./assets/brands/redmi.svg";
import samsungLogo from "./assets/brands/samsung.png";
import xiaomiLogo from "./assets/brands/xiaomi.png";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" },
};

const services = [
  {
    icon: Laptop,
    title: "Dépannage informatique",
    text: "Votre ordinateur rame, plante ou devient pénible à utiliser ? Vous retrouvez un appareil plus fluide, plus stable et plus agréable au quotidien.",
  },
  {
    icon: Wifi,
    title: "Réseau & Wi‑Fi",
    text: "Votre connexion coupe, ralentit ou ne couvre pas correctement votre espace ? Vous profitez d’un réseau plus stable, mieux sécurisé et plus confortable.",
  },
  {
    icon: Smartphone,
    title: "Réparation smartphones & tablettes",
    text: "Écran cassé, batterie faible, appareil qui ne démarre plus : vous savez rapidement si votre modèle peut être pris en charge et quelle solution est possible.",
  },
  {
    icon: ShieldCheck,
    title: "Protection numérique",
    text: "Vous voulez éviter les pertes de données et les mauvaises surprises ? Vos appareils et vos accès sont mieux protégés avec des conseils simples à appliquer.",
  },
];

const forfaits = [
  {
    title: "Entretien Essentiel",
    price: "59€",
    subtitle: "Votre PC manque d’entretien ?",
    items: [
      "Nettoyage interne (dépoussiérage)",
      "Contrôle matériel & températures",
      "Mise à jour système",
      "Optimisation légère",
    ],
  },
  {
    title: "Réparation / Optimisation",
    price: "49€",
    subtitle: "Écran cassé, batterie à remplacer, PC lent ?",
    items: [
      "Remplacement écran cassé",
      "Remplacement clavier défectueux",
      "Remplacement batterie",
      "Remplacement disque dur",
      "Remplacement RAM défectueuse",
      "Upgrade vers SSD",
      "Upgrade RAM",
    ],
  },
  {
    title: "Accompagnement Digital",
    price: "49€",
    subtitle: "Besoin d’aide avec le numérique ?",
    items: [
      "Initiation informatique",
      "Aide démarches en ligne",
      "Assistance smartphone / tablette",
      "Conseils pratiques adaptés",
    ],
  },
  {
    title: "PC sur mesure",
    price: "150€",
    subtitle: "Besoin d’un PC fait pour vous ?",
    items: [
      "Conseil choix composants",
      "Montage complet",
      "Installation & optimisation Windows",
      "Installation pilotes",
      "Tests de performance",
    ],
    options: ["Transfert données", "Installation logiciels", "Configuration sécurité"],
  },
  {
    title: "Nettoyage Premium",
    price: "89€",
    subtitle: "Votre ordinateur surchauffe ou fait du bruit ?",
    items: [
      "Nettoyage interne complet",
      "Remplacement pâte thermique",
      "Vérification refroidissement",
      "Optimisation avancée",
      "Test stabilité",
      "Vérification sécurité",
    ],
  },
];

const repairCards = [
  {
    icon: MonitorSmartphone,
    title: "Écran cassé ou tactile défectueux",
    text: "Vous retrouvez un affichage net, un tactile réactif et un appareil agréable à utiliser au lieu d’un téléphone frustrant au quotidien.",
  },
  {
    icon: BatteryCharging,
    title: "Batterie usée ou autonomie réduite",
    text: "Vous retrouvez plus d’autonomie, moins de recharges inutiles et un appareil plus fiable tout au long de la journée.",
  },
  {
    icon: Wrench,
    title: "Diagnostic & réparation multi‑marques",
    text: "Vous obtenez rapidement une réponse claire sur la prise en charge de votre modèle et sur la meilleure solution à envisager.",
  },
];

const iphonePrices = [
  ["iPhone 8 / Plus", "45 €", "25 €"],
  ["iPhone X", "55 €", "25 €"],
  ["iPhone XS / Max", "55 €", "30 €"],
  ["iPhone XR", "55 €", "30 €"],
  ["iPhone SE (2020)", "65 €", "30 €"],
  ["iPhone 11 / Pro / Max", "65 €", "30 €"],
  ["iPhone SE (2022)", "75 €", "30 €"],
  ["iPhone 12 / Plus / Pro / Max", "85 €", "30 €"],
  ["iPhone 13 / Mini / Pro / Max", "115 €", "30 €"],
  ["iPhone 14 / Plus / Pro / Max", "115 €", "40 €"],
  ["iPhone 15 / Plus / Pro / Max", "130 €", "50 €"],
  ["iPhone 16 / Plus / Pro / Max", "150 €", "70 €"],
];

const brands = [
  { name: "Apple", logo: appleLogo },
  { name: "Samsung", logo: samsungLogo },
  { name: "Xiaomi", logo: xiaomiLogo },
  { name: "Huawei", logo: huaweiLogo },
  { name: "Oppo", logo: oppoLogo },
  { name: "OnePlus", logo: oneplusLogo },
  { name: "Google", logo: googleLogo },
  { name: "Redmi", logo: redmiLogo },
];

const testimonials = [
  { name: "V. A.", quote: "Rapide et très professionnel. Je recommande à 100% !" },
  {
    name: "V. P.",
    quote:
      "Il a su réparer deux smartphones : l’un avait littéralement cramé au soleil 🤣. Le deuxième, suite à une chute, ne s’allumait plus du tout et l’écran était complètement fissuré. Il a réussi à récupérer toutes mes données, à changer l’écran, et le téléphone fonctionne aujourd’hui comme avant. Depuis son intervention, les deux téléphones fonctionnent à merveille grâce à Zank ! Franchement, travail au top, je recommande à 100 % 👌📱",
  },
  { name: "S. L.", quote: "👌 qualité du travail & du service impeccable … à recommander !!!!" },
];

const faqs = [
  {
    q: "Réparez-vous uniquement les iPhone ?",
    a: "Non. Vous pouvez aussi demander une prise en charge pour de nombreux smartphones Android et certaines tablettes, notamment Samsung, Xiaomi, Huawei et d’autres modèles selon les pièces disponibles.",
  },
  {
    q: "Peut-on demander de l’aide à distance ?",
    a: "Oui. Si votre problème peut être résolu à distance, vous êtes guidé pas à pas pour installer AnyDesk simplement et recevoir une assistance rapide.",
  },
  {
    q: "Les prix affichés couvrent-ils tous les modèles ?",
    a: "Les tarifs affichés concernent les modèles les plus demandés. Pour tout modèle non affiché, le prix est communiqué sur demande.",
  },
];

const repairGallery = [
  {
    src: repair2,
    title: "Samsung — finition propre",
    text: "Réparation mise en avant : rendu propre après remplacement du dos arrière.",
  },
  {
    src: repair1,
    title: "Samsung — remplacement de dos",
    text: "Exemple avant / après sur Samsung avec dos remplacé proprement.",
  },
  {
    src: repair3,
    title: "iPhone — écran remplacé",
    text: "Comparaison avant / après pour un écran fortement endommagé.",
  },
  {
    src: repair4,
    title: "iPhone — dos arrière remis en état",
    text: "Exemple de dos cassé remplacé avec finition propre.",
  },
  {
    src: repair5,
    title: "iPhone — batterie remplacée",
    text: "Intervention batterie avec appareil complet visible.",
  },
];

function getAnyDeskTarget() {
  if (typeof navigator === "undefined") {
    return {
      href: "https://download.anydesk.com/AnyDesk.exe",
      label: "Télécharger AnyDesk pour Windows",
    };
  }

  const ua = navigator.userAgent || navigator.vendor || "";
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/i.test(ua);
  const isChromeOS = /CrOS/i.test(ua);
  const isMac = /Macintosh|Mac OS X/i.test(ua) && !isIOS;
  const isWindows = /Windows/i.test(ua);

  if (isIOS) {
    return {
      href: "https://apps.apple.com/us/app/anydesk-remote-desktop/id1176131273",
      label: "Ouvrir AnyDesk dans l’App Store",
    };
  }

  if (isChromeOS) {
    return {
      href: "https://play.google.com/store/apps/details?id=com.anydesk.anydeskandroid",
      label: "Ouvrir AnyDesk pour Chrome OS",
    };
  }

  if (isAndroid) {
    return {
      href: "https://play.google.com/store/apps/details?id=com.anydesk.anydeskandroid",
      label: "Ouvrir AnyDesk dans Google Play",
    };
  }

  if (isMac) {
    return {
      href: "https://download.anydesk.com/anydesk.dmg",
      label: "Télécharger AnyDesk pour macOS",
    };
  }

  if (isWindows) {
    return {
      href: "https://download.anydesk.com/AnyDesk.exe",
      label: "Télécharger AnyDesk pour Windows",
    };
  }

  return {
    href: "https://download.anydesk.com/AnyDesk.exe",
    label: "Télécharger AnyDesk",
  };
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-black/65">{text}</p> : null}
    </div>
  );
}

function RepairCarousel() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  return (
    <>
      <div className="mt-12 rounded-[2rem] border border-black/10 bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/40">Réalisations</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-black">
              Faites défiler les photos de réparations.
            </h3>
          </div>
          <p className="hidden text-sm text-black/45 md:block">Glissez à gauche ou à droite pour parcourir.</p>
        </div>

        <div className="-mx-1 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory gap-5 px-1">
            {repairGallery.map((item, idx) => (
              <article
                key={`${item.title}-${idx}`}
                className={`min-w-[76%] snap-center overflow-hidden rounded-[1.7rem] border border-black/8 bg-[#f5f5f7] sm:min-w-[46%] lg:min-w-[31%] ${
                  idx === 0 ? "ring-2 ring-black/10" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className="block w-full text-left"
                  aria-label={`Ouvrir la photo : ${item.title}`}
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[#d7d7da]">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover object-center transition duration-500 hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-base font-semibold text-black">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-black/62">{item.text}</p>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>

      {lightboxIndex !== null ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/88 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label="Galerie de réparations">
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg"
            aria-label="Fermer la galerie"
          >
            <X size={20} />
          </button>

          <div className="mx-auto w-full max-w-5xl">
            <div className="overflow-hidden rounded-[1.8rem] bg-[#1d1d1f] p-3 sm:p-4">
              <div className="overflow-hidden rounded-[1.2rem] bg-[#111]">
                <img
                  src={repairGallery[lightboxIndex].src}
                  alt={repairGallery[lightboxIndex].title}
                  className="max-h-[78vh] w-full object-contain"
                />
              </div>
              <div className="px-2 pb-2 pt-4 text-white">
                <h4 className="text-xl font-semibold">{repairGallery[lightboxIndex].title}</h4>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
                  {repairGallery[lightboxIndex].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const anydeskTarget = useMemo(() => getAnyDeskTarget(), []);

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-black selection:bg-black selection:text-white">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#accueil" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <img src={logoMark} alt="ZANK Solutions" className="h-14 w-auto object-contain sm:h-[4.6rem]" />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-black/70 lg:flex">
            <a href="#accueil" className="transition hover:text-black">Accueil</a>
            <a href="#services" className="transition hover:text-black">Services</a>
            <a href="#forfaits" className="transition hover:text-black">Forfaits</a>
            <a href="#reparation-gsm" className="transition hover:text-black">Réparation GSM</a>
            <a href="#support" className="transition hover:text-black">Support</a>
            <a href="#contact" className="transition hover:text-black">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="https://wa.me/32499469864" className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-black transition hover:bg-black/5">WhatsApp</a>
            <a href="#contact" className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:scale-[1.02]">Demander une aide</a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen ? (
          <div id="mobile-navigation" className="border-t border-black/5 bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4">
              <a href="#accueil" onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-black/70 hover:bg-black/5 hover:text-black">Accueil</a>
              <a href="#services" onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-black/70 hover:bg-black/5 hover:text-black">Services</a>
              <a href="#forfaits" onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-black/70 hover:bg-black/5 hover:text-black">Forfaits</a>
              <a href="#reparation-gsm" onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-black/70 hover:bg-black/5 hover:text-black">Réparation GSM</a>
              <a href="#support" onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-black/70 hover:bg-black/5 hover:text-black">Support</a>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-black/70 hover:bg-black/5 hover:text-black">Contact</a>
              <a href="https://wa.me/32499469864" className="mt-2 rounded-full border border-black/10 px-4 py-3 text-center text-sm font-medium text-black">WhatsApp</a>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section id="accueil" className="section-anchor relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.07),transparent_36%)]" />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-28">
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-black/55">
                Informatique · Réparation · Assistance
              </div>
              <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-black sm:text-6xl lg:text-7xl">
                Un problème informatique ou un smartphone à réparer ?
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65 sm:text-xl">
                Vous êtes au bon endroit pour obtenir une solution claire et rapide.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02]">Demander un devis</a>
                <a href="#reparation-gsm" className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-black/5">Voir les réparations</a>
              </div>

              <div className="mt-12">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-black/42">
                  Nous avons une solution
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-sm">
                  <p className="text-3xl font-semibold tracking-tight">Simple</p>
                  <p className="mt-2 text-sm text-black/55">Vous comprenez rapidement quelle solution choisir et comment obtenir de l’aide.</p>
                </div>
                <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-sm">
                  <p className="text-3xl font-semibold tracking-tight">Fiable</p>
                  <p className="mt-2 text-sm text-black/55">Vous bénéficiez d’une prise en charge sérieuse, claire et professionnelle du début à la fin.</p>
                </div>
                <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-sm">
                  <p className="text-3xl font-semibold tracking-tight">Rapide</p>
                  <p className="mt-2 text-sm text-black/55">Vous pouvez demander une aide, une réparation ou un devis sans perdre de temps.</p>
                </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="relative">
              <div className="absolute -inset-8 rounded-[3rem] bg-black/[0.05] blur-3xl" />
              <div className="relative rounded-[2.2rem] border border-black/10 bg-white p-6 lg:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
                <div className="rounded-[1.9rem] bg-[#f5f5f7] p-6 lg:p-8">
                  <img src={logoWordmark} alt="ZANK Solutions" className="mx-auto h-32 w-auto object-contain sm:h-44 lg:h-52" />
                  <div className="mt-7 grid gap-4">
                    <a href="#services" className="block rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                      <p className="text-sm font-semibold text-black">Support informatique</p>
                      <p className="mt-2 text-sm leading-6 text-black/55">Vous retrouvez un ordinateur plus stable, plus fluide et plus agréable à utiliser au quotidien.</p>
                    </a>
                    <a href="#reparation-gsm" className="block rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                      <p className="text-sm font-semibold text-black">Réparation smartphones & tablettes</p>
                      <p className="mt-2 text-sm leading-6 text-black/55">Vous savez rapidement si votre appareil peut être pris en charge et quelle réparation est adaptée.</p>
                    </a>
                    <a href="#support" className="block rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                      <p className="text-sm font-semibold text-black">Support à distance</p>
                      <p className="mt-2 text-sm leading-6 text-black/55">Vous êtes guidé simplement pour recevoir une aide rapide, sans déplacement inutile.</p>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="section-anchor mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <motion.div {...fadeUp}>
            <SectionTitle
              eyebrow="Services"
              title="Des solutions informatiques pensées pour vous simplifier la vie."
              text="Dépannage, optimisation, réseau, sécurité et accompagnement clair."
            />
          </motion.div>

          <div className="mt-14">
            <div className="hide-scrollbar premium-swipe -mr-5 overflow-x-auto pb-5 pr-2 md:mr-0 md:overflow-visible md:pr-0">
              <div className="flex snap-x snap-mandatory gap-5 pr-8 md:grid md:grid-cols-2 md:gap-6 md:pr-0 xl:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                    className="min-w-[82%] snap-start rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 md:min-w-0"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-lg">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-black">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-black/62">{service.text}</p>
                  </motion.article>
                );
              })}
              </div>
            </div>
          </div>
        </section>

        <section id="forfaits" className="section-anchor bg-white">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <motion.div {...fadeUp}>
              <SectionTitle
                eyebrow="Forfaits informatiques"
                title="Des forfaits clairs pour savoir rapidement ce qui est inclus."
                text="Entretien, optimisation, accompagnement, PC sur mesure ou nettoyage avancé : vous choisissez l’offre qui correspond le mieux à votre besoin."
              />
            </motion.div>

            <div className="mt-14">
              <div className="hide-scrollbar premium-swipe -mr-5 overflow-x-auto pb-5 pr-2 md:mr-0 md:overflow-visible md:pr-0">
                <div className="flex snap-x snap-mandatory gap-5 pr-8 md:grid md:grid-cols-2 md:gap-6 md:pr-0 xl:grid-cols-3">
              {forfaits.map((forfait, index) => (
                <motion.article
                  key={forfait.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                  className={`min-w-[84%] snap-start rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.04)] md:min-w-0 ${forfait.title === "PC sur mesure" ? "xl:col-span-2" : ""}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/40">Forfait</p>
                      <h3 className="mt-2 text-3xl font-semibold tracking-tight text-black">{forfait.title}</h3>
                      <p className="mt-3 text-base text-black/65">{forfait.subtitle}</p>
                    </div>
                    <div className="rounded-full bg-black px-5 py-3 text-xl font-semibold text-white">{forfait.price}</div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {forfait.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-black/72">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-black" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {forfait.options ? (
                    <div className="mt-8 rounded-[1.5rem] border border-black/8 bg-white p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/40">Options</p>
                      <div className="mt-4 space-y-3">
                        {forfait.options.map((option) => (
                          <div key={option} className="flex items-start gap-3 text-sm text-black/72">
                            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-black" />
                            <span>{option}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </motion.article>
              ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reparation-gsm" className="section-anchor mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <motion.div {...fadeUp}>
            <SectionTitle
              eyebrow="Réparation GSM"
              title="Réparer votre smartphone sans stress, sans mauvaise surprise."
              text="Écran, batterie, diagnostic et prise en charge multi-marques."
            />
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex h-14 min-w-[96px] items-center justify-center rounded-full border border-black/10 bg-white px-5 shadow-sm"
                title={brand.name}
                aria-label={brand.name}
              >
                <img src={brand.logo} alt={brand.name} className="max-h-6 w-auto object-contain opacity-90" />
              </div>
            ))}
          </div>

          <RepairCarousel />

          <div className="mt-14">
            <div className="hide-scrollbar premium-swipe -mr-5 overflow-x-auto pb-5 pr-2 md:mr-0 md:overflow-visible md:pr-0">
              <div className="flex snap-x snap-mandatory gap-5 pr-8 md:grid md:grid-cols-3 md:gap-6 md:pr-0">
            {repairCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.05 }} className="min-w-[82%] snap-start rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)] md:min-w-0">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-black">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-black/62">{item.text}</p>
                </motion.div>
              );
            })}
              </div>
            </div>
          </div>

          <motion.div {...fadeUp} className="mt-14 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
            <div className="border-b border-black/8 px-8 py-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/40">Tarifs iPhone</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-black">Écran à partir de / Batterie à partir de</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-black/60">Vous pouvez vous faire une idée rapidement des tarifs avant de demander votre devis ou votre réparation.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-black/8 bg-[#f5f5f7] text-sm text-black/60">
                    <th className="px-6 py-4 font-semibold">Modèle</th>
                    <th className="px-6 py-4 font-semibold">Écran à partir de</th>
                    <th className="px-6 py-4 font-semibold">Batterie à partir de</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-black/75">
                  {iphonePrices.map((row) => (
                    <tr key={row[0]} className="border-b border-black/6 last:border-b-0">
                      <td className="px-6 py-4 font-medium">{row[0]}</td>
                      <td className="px-6 py-4">{row[1]}</td>
                      <td className="px-6 py-4">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-black/8 px-8 py-5">
              <p className="text-sm leading-7 text-black/62">Les tarifs affichés concernent les modèles les plus demandés. Pour tout modèle non affiché, le prix est communiqué sur demande.</p>
            </div>
          </motion.div>
        </section>

        <section id="support" className="section-anchor bg-black text-white">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <motion.div {...fadeUp} className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Support</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Recevez une assistance à distance rapide et rassurante.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                  Quelques étapes simples pour être aidé sans perdre de temps.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a href={anydeskTarget.href} target="_blank" rel="noreferrer" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]">{anydeskTarget.label}</a>
                  <a href="#contact" className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">Demander une assistance</a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                <div className="space-y-4">
                  {["Téléchargez AnyDesk", "Ouvrez le fichier téléchargé", "Communiquez votre identifiant", "Recevez votre assistance rapidement"].map((step, index) => (
                    <div key={step} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-black">{index + 1}</div>
                      <p className="pt-2 text-sm leading-6 text-white/75">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <motion.div {...fadeUp}>
            <SectionTitle
              eyebrow="Avis clients"
              title="Vous pouvez avancer avec plus de confiance."
              text="Voici quelques retours de clients qui ont déjà fait appel à ZANK Solutions."
            />
          </motion.div>

          <div className="mt-14">
            <div className="hide-scrollbar premium-swipe -mr-5 overflow-x-auto pb-5 pr-2 md:mr-0 md:overflow-visible md:pr-0">
              <div className="flex snap-x snap-mandatory gap-5 pr-8 md:grid md:grid-cols-3 md:gap-6 md:pr-0">
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.05 }} className="min-w-[84%] snap-start rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)] md:min-w-0">
                <p className="text-sm leading-7 text-black/68">“{testimonial.quote}”</p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-black/40">{testimonial.name}</p>
              </motion.div>
            ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <motion.div {...fadeUp}>
              <SectionTitle
                eyebrow="Questions fréquentes"
                title="Vous trouvez rapidement les réponses aux questions les plus courantes."
                text="Avant de prendre contact, vous pouvez déjà vérifier ici les points les plus demandés."
              />
            </motion.div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;

                return (
                  <motion.div
                    key={faq.q}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: index * 0.04 }}
                    className="overflow-hidden rounded-[1.8rem] border border-black/8 bg-[#f5f5f7]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex((current) => (current === index ? null : index))}
                      className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                    >
                      <span className="text-lg font-semibold tracking-tight text-black">{faq.q}</span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-black/55 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isOpen ? (
                      <div id={`faq-panel-${index}`} className="px-7 pb-7">
                        <p className="text-sm leading-7 text-black/63">{faq.a}</p>
                      </div>
                    ) : null}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section-anchor bg-[#0a0a0a] text-white">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Demandez votre devis ou votre aide rapidement.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                Par téléphone, email ou WhatsApp, contactez-nous en quelques secondes.
              </p>
            </motion.div>

            <div className="mt-12">
              <div className="hide-scrollbar premium-swipe -mr-5 overflow-x-auto pb-5 pr-2 md:mr-0 md:overflow-visible md:pr-0">
                <div className="flex snap-x snap-mandatory gap-5 pr-8 md:grid md:grid-cols-3 md:gap-6 md:pr-0">
                <a href="https://wa.me/32499469864" className="min-w-[82%] snap-start rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10 md:min-w-0">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black"><MessageCircle size={20} /></div>
                  <p className="text-sm text-white/45">WhatsApp</p>
                  <p className="mt-3 text-lg font-medium text-white">Message rapide</p>
                </a>
                <a href="tel:+32499469864" className="min-w-[82%] snap-start rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10 md:min-w-0">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black"><Phone size={20} /></div>
                  <p className="text-sm text-white/45">Téléphone</p>
                  <p className="mt-3 text-lg font-medium text-white">+32 499 469 864</p>
                </a>
                <a href="mailto:info@zanksolutions.be" className="min-w-[82%] snap-start rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10 md:min-w-0">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black"><Mail size={20} /></div>
                  <p className="text-sm text-white/45">Email</p>
                  <p className="mt-3 text-lg font-medium text-white">info@zanksolutions.be</p>
                </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#050505] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">Mentions légales</p>
              <p className="mt-4 text-sm leading-7 text-white/70">
                ZANK Solutions — site vitrine d’information et de prise de contact.
              </p>
              <p className="mt-2 text-sm leading-7 text-white/70">TVA : BE1033.509.066</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">Coordonnées</p>
              <p className="mt-4 text-sm leading-7 text-white/70">Téléphone : +32 499 469 864</p>
              <p className="text-sm leading-7 text-white/70">Email : info@zanksolutions.be</p>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/45">
            © {new Date().getFullYear()} ZANK Solutions. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
