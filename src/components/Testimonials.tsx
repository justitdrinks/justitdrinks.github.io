import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Kevin M.",
    role: "Regular Customer",
    content: "The Jaba juice is a lifesaver for late night shifts. Smooth energy without the crash I get from coffee. Just It has nailed the authentic taste!",
    rating: 5,
    avatar: "/images/testimonials/user-1.jpg",
    placeholder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
  },
  {
    id: 2,
    name: "Sarah W.",
    role: "Fitness Enthusiast",
    content: "I love the Natural Juice collection. Baobab Bliss is my post-workout reward. It's refreshing to have real, locally-sourced healthy options.",
    rating: 5,
    avatar: "/images/testimonials/user-2.jpg",
    placeholder: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
  },
  {
    id: 3,
    name: "Brian O.",
    role: "Creative Director",
    content: "The Moratina is sophisticated and perfectly balanced. It's become our go-to drink for creative brainstorming sessions. Pure vibes!",
    rating: 5,
    avatar: "/images/testimonials/user-3.jpg",
    placeholder: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
  },
  {
    id: 4,
    name: "Anita T.",
    role: "Events Manager",
    content: "We ordered Just It for a corporate event and it was the highlight. The packaging and the taste variety kept everyone talking. Exceptional service!",
    rating: 5,
    avatar: "/images/testimonials/user-4.jpg",
    placeholder: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"
  },
  {
    id: 5,
    name: "David K.",
    role: "Software Engineer",
    content: "Ginger Blast Jaba is my secret weapon for debugging. It keeps me sharp and the ginger gives that perfect spicy kick. Highly recommend!",
    rating: 5,
    avatar: "/images/testimonials/user-5.jpg",
    placeholder: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200"
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[2px] bg-brand-primary" />
              <span className="text-brand-primary font-black uppercase tracking-[0.2em] text-[10px]">What they say</span>
            </motion.div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Loved by the <br />
              <span className="text-brand-primary italic">Community.</span>
            </h2>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400 hover:border-brand-primary hover:text-brand-primary transition-all bg-white shadow-sm"
            >
              <ChevronRight className="rotate-180" size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400 hover:border-brand-primary hover:text-brand-primary transition-all bg-white shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x scroll-px-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="snap-start flex-shrink-0 w-[300px] md:w-[400px] bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm relative group hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors">
                <Quote size={56} fill="currentColor" />
              </div>

              <div className="flex items-center gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#FFD700" className="text-[#FFD700]" />
                ))}
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10 italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gray-100 border-2 border-brand-secondary">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = t.placeholder;
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-[10px] uppercase font-black tracking-widest text-brand-primary/60">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
