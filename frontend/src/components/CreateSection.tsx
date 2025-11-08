// src/components/CreateSection.tsx
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Sparkles, ArrowRight, Upload, Grid3X3, Link2 } from 'lucide-react';

interface Card {
  title: string;
  body: string;
  image?: string;
  status?: 'draft' | 'done';
}

const todoCards: Card[] = [
  {
    title: 'Threads idea',
    body: 'New post about the earliest ceramics date back to 24,000',
    image: '/threads.png',
  },
];

const draftCards: Card[] = [
  {
    title: 'Meet the Maker',
    body: 'If the making out of the holiday market is anything to go by, we’ve got some serious talent here!',
    image: '/MeetTheMaker.jpg',
  },
  {
    title: 'Material Insights',
    body: 'Not all clay is created equal—here’s a quick primer on the types of clay you can use and how they behave.',
    image: 'materialInsights.jpg',
  },
];

const doneCards: Card[] = [
  {
    title: 'Event Workshop – Clay Bells',
    body: 'We love seeing our pieces in their new homes! Thanks for sharing, @ceramicfan',
    image: 'GardenBells.jpg',
  },
];

const TYPEWRITER_TEXT = 'Provide a list of content ideas about amateur pottery |';
const TYPE_SPEED = 70;
const DELETE_SPEED = 90;
const PAUSE = 1500;

export default function CreateSection() {
  const [prompt, setPrompt] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const type = () => {
      if (!isDeleting && prompt.length < TYPEWRITER_TEXT.length) {
        setPrompt(TYPEWRITER_TEXT.slice(0, prompt.length + 1));
        timeoutRef.current = setTimeout(type, TYPE_SPEED);
      } else if (!isDeleting && prompt.length === TYPEWRITER_TEXT.length) {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), PAUSE);
      } else if (isDeleting && prompt.length > 0) {
        setPrompt(TYPEWRITER_TEXT.slice(0, prompt.length - 1));
        timeoutRef.current = setTimeout(type, DELETE_SPEED);
      } else if (isDeleting && prompt.length === 0) {
        setIsDeleting(false);
        timeoutRef.current = setTimeout(type, TYPE_SPEED);
      }
    };

    timeoutRef.current = setTimeout(type, TYPE_SPEED);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [prompt, isDeleting]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-orange-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left – Hero */}
        <div className="space-y-6">
            <p className="text-sm font-semibold text-[#3C48F6] uppercase tracking-wider">PUBLISH</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Turn any idea into the perfect post
          </h1>

          <p className="text-lg text-gray-700">
            Whether you’re flying solo or working with a team, Buffer has all the
            features to help you create, organize, and repurpose your content for
            any channel. There’s also an <strong>AI Assistant</strong> if you need it.
          </p>

          <button className="inline-flex items-center gap-2 bg-[#3C48F6] text-white font-medium px-6 py-3 rounded-full hover:bg-[#3C48F6] hover:scale-105 ease-in-out hover:shadow-3xl duration:300 transition">
            Learn more
            <ArrowRight className="w-5 h-5" />
          </button>

          <ul className="mt-12 space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Upload className="w-6 h-6 text-[#3C48F6]" />
              Import content from Canva, Dropbox, Google and more
            </li>
            <li className="flex items-center gap-3">
              <Grid3X3 className="w-6 h-6 text-[#3C48F6]" />
              Visually organize your ideas into groups or themes
            </li>
            <li className="flex items-center gap-3">
              <Link2 className="w-6 h-6 text-[#3C48F6]" />
              Add a beautiful link in bio page to your profiles
            </li>
          </ul>
        </div>

        {/* Right – AI + Board */}
        <div className="relative">
          {/* AI Assistant Modal */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md z-10">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-[#3C48F6]" />
                <h3 className="font-semibold text-gray-900">AI Assistant</h3>
              </div>

              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-sm"
                rows={3}
                value={prompt}
                readOnly
                placeholder=""
              />

              <button className="mt-4 w-full bg-[#3C48F6] text-white font-medium py-2.5 rounded-lg hover:bg-[#3C48F6] transition">
                Generate Ideas
              </button>
            </div>
          </div>

          {/* Kanban Board */}
          <div className="mt-48 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex gap-4 border-b border-gray-200 mb-4">
              {['Tags', 'Board', 'Gallery'].map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 px-1 font-medium transition ${
                    tab === 'Board'
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Column title="To Do" cards={todoCards} />
              <Column title="Drafts" cards={draftCards} />
              <Column title="Done" cards={doneCards} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Column Component ---------- */
function Column({ title, cards }: { title: string; cards: Card[] }) {
  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-gray-800">{title}</h4>
      {cards.map((card, i) => (
        <div
          key={i}
          className={`bg-white rounded-lg shadow-sm p-3 space-y-2 overflow-hidden ${
            card.status === 'draft' ? 'ring-2 ring-yellow-400' : ''
          }`}
        >
          {card.image ? (
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-32 object-cover rounded-md mb-2"
              loading="lazy"
            />
          ) : (
            <div className="bg-gray-200 border-2 border-dashed rounded-md w-full h-32 mb-2" />
          )}
          <h5 className="font-medium text-gray-900 text-sm">{card.title}</h5>
          <p className="text-xs text-gray-600 line-clamp-2">{card.body}</p>
        </div>
      ))}
    </div>
  );
}