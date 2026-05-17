import { motion } from "motion/react";
import { MessageCircle, Users, LayoutGrid, ArrowUpRight } from "lucide-react";

const COMMUNITY_LINKS = {
  channel: "https://whatsapp.com/channel/0029Vb7zk5kC6ZveJ7ZVkg0J",
  group: "https://chat.whatsapp.com/BSymefaxBV6Jm6i0RPp8Lr"
};

export default function Community() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-secondary/50 rounded-[40px] px-8 py-12 md:p-16 border border-brand-primary/10 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-8 h-[2px] bg-brand-primary" />
                <span className="text-brand-primary font-black uppercase tracking-[0.2em] text-[10px]">Join the family</span>
              </motion.div>
              
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Stay Refreshed, <br />
                <span className="text-brand-primary italic">Together.</span>
              </h2>
              
              <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                Join our vibrant communities on WhatsApp to get exclusive updates, fresh batch alerts, and join the conversation with other Just It fans.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <motion.a
                whileHover={{ y: -5 }}
                href={COMMUNITY_LINKS.channel}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-primary/5 transition-all group flex flex-col"
              >
                <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                  <LayoutGrid size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  Channel
                  <ArrowUpRight size={16} className="text-gray-300 group-hover:text-brand-primary transition-colors" />
                </h3>
                <p className="text-gray-500 text-sm mb-6">Official updates, new flavors, and brand news.</p>
                <span className="mt-auto text-[10px] font-black uppercase tracking-widest text-brand-primary">Join Channel</span>
              </motion.a>

              <motion.a
                whileHover={{ y: -5 }}
                href={COMMUNITY_LINKS.group}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-primary/5 transition-all group flex flex-col"
              >
                <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  Group
                  <ArrowUpRight size={16} className="text-gray-300 group-hover:text-brand-primary transition-colors" />
                </h3>
                <p className="text-gray-500 text-sm mb-6">Connect with fellow enthusiasts and share the vibe.</p>
                <span className="mt-auto text-[10px] font-black uppercase tracking-widest text-brand-primary">Join Group</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
