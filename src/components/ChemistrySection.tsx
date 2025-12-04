import { motion } from 'motion/react';
import { Microscope, GraduationCap, Heart, Sparkles } from 'lucide-react';

const qualities = [
  {
    icon: Microscope,
    title: "Conhecimento",
    description: "Você nos ensinou a enxergar o mundo através das lentes da ciência",
    formula: "H₂O → Vida"
  },
  {
    icon: GraduationCap,
    title: "Dedicação",
    description: "Cada aula foi uma experiência única de aprendizado e descoberta",
    formula: "C₆H₁₂O₆ → Energia"
  },
  {
    icon: Heart,
    title: "Inspiração",
    description: "Sua paixão pela química contagiou todos nós",
    formula: "Fe + Você → Determinação"
  },
  {
    icon: Sparkles,
    title: "Transformação",
    description: "Catalisou nossa transformação de alunos para profissionais",
    formula: "Nós + Você → Futuro"
  }
];

export function ChemistrySection() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl text-center mb-16 text-green-800"
        >
          A Fórmula do Professor Perfeito
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {qualities.map((quality, index) => {
            const Icon = quality.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-green-200 hover:border-green-300 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-4 text-white">
                    <Icon size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2 text-green-800">{quality.title}</h3>
                    <p className="text-green-700 mb-3">{quality.description}</p>
                    <div className="inline-block bg-green-100 px-4 py-2 rounded-lg border border-green-300">
                      <code className="text-green-800">{quality.formula}</code>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative chemistry elements */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-white rounded-full px-8 py-4 text-xl">
              pH da Gratidão = ∞
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
