import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Heart, Award } from 'lucide-react';

interface InvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InvitationModal({ isOpen, onClose }: InvitationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
            }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl md:max-h-[90vh] bg-gradient-to-br from-green-50 via-white to-emerald-50 rounded-3xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
            >
              <X size={24} className="text-green-700" />
            </button>

            {/* Confetti animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl"
                  initial={{
                    top: -20,
                    left: `${Math.random() * 100}%`,
                    opacity: 1,
                  }}
                  animate={{
                    top: '100%',
                    opacity: 0,
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                >
                  {['🧪', '⚗️', '🔬', '✨', '🎓', '💚', '🌟'][i % 7]}
                </motion.div>
              ))}
            </div>

            {/* Content */}
            <div className="relative p-8 md:p-12 overflow-y-auto max-h-full">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                {/* Icon header */}
                <motion.div
                  className="flex justify-center gap-4 mb-6"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Award size={48} className="text-yellow-500" />
                  <Heart size={48} className="text-red-500" />
                  <Sparkles size={48} className="text-green-500" />
                </motion.div>

                {/* Main title */}
                <motion.h2
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    delay: 0.5,
                  }}
                  className="text-5xl md:text-6xl mb-8 text-green-800"
                >
                  Querido Professor! 🧪
                </motion.h2>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-6 text-xl md:text-2xl text-green-700 leading-relaxed"
                >
                  <p>
                    Assim como uma <span className="text-emerald-600">reação exotérmica</span> libera
                    energia e calor, sua presença em nossas vidas liberou 
                    <span className="text-emerald-600"> conhecimento, inspiração e alegria!</span>
                  </p>

                  <p>
                    Você foi o <span className="text-green-600">catalisador perfeito</span> que 
                    acelerou nossa jornada de aprendizado, tornando cada conceito complexo 
                    em algo <span className="text-green-600">fascinante e compreensível</span>.
                  </p>

                  <motion.div
                    className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 rounded-2xl p-6 my-8"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(16, 185, 129, 0.3)',
                        '0 0 40px rgba(16, 185, 129, 0.5)',
                        '0 0 20px rgba(16, 185, 129, 0.3)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <p className="text-3xl md:text-4xl text-green-800 mb-4">
                      Por isso, com muito carinho e gratidão, gostaríamos de fazer um convite especial:
                    </p>
                    
                    <motion.p
                      className="text-4xl md:text-5xl text-emerald-700"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      <strong>Seja nosso Paraninfo!</strong> 🎓✨
                    </motion.p>
                  </motion.div>

                  <p>
                    Queremos que você esteja ao nosso lado neste momento tão importante,
                    representando todos os <span className="text-emerald-600">ensinamentos valiosos</span> e
                    a <span className="text-emerald-600">conexão especial</span> que construímos juntos.
                  </p>

                  <p className="text-2xl md:text-3xl text-green-800 pt-4">
                    Sua presença tornará nossa formatura ainda mais especial! 💚
                  </p>
                </motion.div>

                {/* Signature */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-12 pt-8 border-t-2 border-green-300"
                >
                  <p className="text-2xl text-green-700">
                    Com todo nosso carinho e admiração,
                  </p>
                  <p className="text-3xl text-emerald-700 mt-2">
                    <strong>Sua Turma</strong> 🧪💚
                  </p>
                </motion.div>

                {/* Decorative elements */}
                <div className="flex justify-center gap-4 mt-8 text-4xl">
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⚗️
                  </motion.span>
                  <motion.span
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  >
                    🔬
                  </motion.span>
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  >
                    🧬
                  </motion.span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
