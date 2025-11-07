import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext'; // adjust path if needed

function LearnMoreButton({ className = '' }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <button
      className={`
        inline-flex items-center gap-1 bg-[#3C48F6] text-white text-sm font-medium
        px-3 py-1.5 rounded-full hover:bg-[#3C48F6] transition-shadow hover:shadow-md
        whitespace-nowrap ${className}
      `}
    >
      {t("Learn more", "En savoir plus")}
      <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
    </button>
  );
}

function CommentItem({
  avatar,
  name,
  text,
  time,
  replying = false,
}: {
  avatar: string;
  name: string;
  text: string;
  time: string;
  replying?: boolean;
}) {
  const { t } = useLanguage();
  return (
    <div className={`flex gap-2 ${replying ? 'ml-8' : ''}`}>
      <img
        src={avatar}
        alt={name}
        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex-1">
        <p className="text-sm">
          <span className="font-medium text-gray-900">{name}</span>{' '}
          <span className="text-gray-700">{t(text, text)}</span>
        </p>
        <p className="text-xs text-gray-500 mt-0.5">{t(time, time)}</p>
      </div>
    </div>
  );
}

export default function EngageSection() {
  const { t } = useLanguage();

  return (
    <div className="relative bg-lime-100 rounded-3xl mt-8 p-8 md:p-10 shadow-sm overflow-hidden h-full flex flex-col">
      {/* === Top: Your Original Text === */}
      <div className="space-y-6 flex-1 z-20">
        <p className="text-lime-600 font-medium uppercase tracking-wider text-sm">
          {t("Engage", "Engager")}
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
          {t("Reply To Comments in a Flash", "Répondez aux commentaires en un éclair")}
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          {t(
            "Engage with your audience on Facebook and Instagram at",
            "Interagissez avec votre audience sur Facebook et Instagram à"
          )}
          <span className="font-bold"> {t("10× speed", "10× plus vite")}</span>.
          {t(
            " Buffer will help you triage and respond to comments from one simple dashboard.",
            " Buffer vous aidera à trier et répondre aux commentaires depuis un tableau de bord simple."
          )}
        </p>
      </div>

      {/* === Visual Showcase: Instagram Comment Panel === */}
      <div className="relative mt-3 mb-16 z-0">
        <div className="bg-white rounded-2xl shadow-md p-5 max-w-md mx-auto space-y-4 z-20">
          {/* Header */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{t("3 unanswered comments", "3 commentaires non répondus")}</span>
            <button className="underline hover:text-gray-700">
              {t("Hide", "Cacher")}
            </button>
          </div>

          {/* Post Preview */}
          <div className="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop"
              alt={t("Knit-along project", "Projet de tricot collaboratif")}
              className="w-20 h-20 rounded-xl object-cover shadow-sm flex-shrink-0"
            />

            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                {t(
                  "I’m starting a monthly virtual knit-along where we can all work on the same project together! Who’s in?",
                  "Je commence un tricot collaboratif virtuel mensuel où nous pourrons tous travailler sur le même projet ! Qui est partant ?"
                )}
              </p>
              <div className="flex gap-2 mt-2 text-gray-400">
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs">{t("12 hours ago", "Il y a 12 heures")}</span>
              </div>
            </div>
          </div>

          {/* Comment 1 */}
          <CommentItem
            avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop"
            name="rachelastral"
            text="Love this idea! How do I sign up?"
            time="5h"
            replying
          />

          {/* Reply Input */}
          <div className="flex items-center gap-2 mt-3">
            <img
              src="/Avatar.svg"
              alt={t("you", "vous")}
              className="w-8 h-8 rounded-full"
            />
            <input
              type="text"
              placeholder={t("Reply...", "Répondre...")}
              className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition">
              {t("Reply", "Répondre")}
            </button>
          </div>

          {/* Comment 2 */}
          <CommentItem
            avatar="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=60&h=60&fit=crop"
            name="Maya Cook"
            text="Great idea Emma!"
            time="45m"
          />
        </div>
      </div>

      {/* === Learn More Button – Bottom Left === */}
      <div className="mt-auto z-20">
        <a
          href="#"
          className="bg-[#3C48F6] text-white font-semibold py-3 px-6 rounded-3xl flex items-center justify-center gap-2 w-fit transition-transform duration-400 hover:scale-105 hover:shadow-3xl hover:bg-[#3C48F6] ease-in-out"
        >
          {t("Learn more", "En savoir plus")}
        </a>
      </div>
    </div>
  );
}
