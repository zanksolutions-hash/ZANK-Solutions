import { useEffect, useState } from "react";

type CookieChoice = "accepted" | "essential" | "custom" | null;

const STORAGE_KEY = "zank_cookie_choice";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedChoice = localStorage.getItem(STORAGE_KEY);
    if (!savedChoice) {
      setIsVisible(true);
    }
  }, []);

  const saveChoice = (choice: Exclude<CookieChoice, null>) => {
    localStorage.setItem(STORAGE_KEY, choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-[100] px-4 sm:bottom-6 sm:px-6">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
        <div className="flex items-start justify-between gap-4 px-6 pb-4 pt-5 sm:px-8 sm:pb-5 sm:pt-6">
          <div className="min-w-0">
            <button
              type="button"
              onClick={() => saveChoice("essential")}
              className="text-sm text-black/65 underline underline-offset-2 transition hover:text-black"
            >
              Continuer sans accepter
            </button>

            <h3 className="mt-3 text-[1.7rem] font-semibold leading-[1.05] tracking-tight text-black sm:text-[2rem]">
              Votre confidentialité compte.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-black/68 sm:text-base">
              Nous utilisons des cookies pour améliorer votre expérience,
              mesurer l’audience et proposer un site plus utile. Vous pouvez
              accepter tous les cookies, continuer avec les cookies essentiels
              uniquement, ou personnaliser votre choix.
            </p>
          </div>

          <div className="shrink-0 pl-2 text-right">
            <p className="text-lg font-semibold tracking-tight text-black/75 sm:text-xl">
              ZANK
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-black/35">
              Solutions
            </p>
          </div>
        </div>

        <div className="border-t border-black/8 bg-[#fafafa] px-6 py-3 text-center text-xs text-black/45 sm:px-8">
          Préférences de cookies enregistrées sur cet appareil
        </div>

        <div className="grid grid-cols-1 border-t border-black/8 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => saveChoice("custom")}
            className="border-b border-black/8 px-6 py-4 text-base font-medium text-black transition hover:bg-black/5 sm:border-b-0 sm:border-r"
          >
            Personnaliser
          </button>

          <button
            type="button"
            onClick={() => saveChoice("accepted")}
            className="px-6 py-4 text-base font-medium text-black transition hover:bg-black/5"
          >
            Tout autoriser
          </button>
        </div>
      </div>
    </div>
  );
}
