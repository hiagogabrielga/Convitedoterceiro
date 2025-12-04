import { motion } from 'motion/react';
import { Beaker, FlaskConical, Atom } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden py-20 px-6">
      {/* Animated floating molecules */}
      <motion.div
        className="absolute top-10 left-10 text-green-300 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Atom size={80} />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 text-emerald-300 opacity-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FlaskConical size={60} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/4 text-teal-300 opacity-20"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Beaker size={70} />
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl mb-4 text-green-800">
            Uma Reação Especial 🧪
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-block bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-green-200 my-8"
        >
          <p className="text-2xl text-green-700 mb-4">
            Quando elementos especiais se combinam...
          </p>
          <div className="flex items-center justify-center gap-4 text-4xl">
            <span className="text-green-600">Alunos</span>
            <span className="text-emerald-600">+</span>
            <span className="text-green-600">Professor</span>
            <span className="text-emerald-600">→</span>
            <span className="text-teal-600">Inesquecível</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-green-700 max-w-2xl mx-auto"
        >
          Algumas reações químicas resultam em compostos estáveis e preciosos.
          A sua influência em nossas vidas criou uma ligação que queremos preservar para sempre.
        </motion.p>
      </div>
    </div>
  );
}
