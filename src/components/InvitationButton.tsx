import { motion } from 'motion/react';
import { Mail, Sparkles } from 'lucide-react';

interface InvitationButtonProps {
  onClick: () => void;
}

export function InvitationButton({ onClick }: InvitationButtonProps) {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-2xl text-green-700 mb-8">
            E agora, chegou o momento da pergunta mais importante...
          </p>
          
          <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white px-12 py-6 rounded-2xl text-2xl shadow-2xl hover:shadow-green-300/50 transition-all duration-300"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
              animate={{
                background: [
                  'linear-gradient(0deg, rgba(16, 185, 129, 0.3) 0%, rgba(5, 150, 105, 0.3) 100%)',
                  'linear-gradient(360deg, rgba(16, 185, 129, 0.3) 0%, rgba(5, 150, 105, 0.3) 100%)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <span className="relative flex items-center gap-3">
              <Mail size={32} />
              Abrir Convite Especial
              <Sparkles size={32} />
            </span>
            
            {/* Floating particles */}
            <motion.div
              className="absolute -top-2 -right-2 text-yellow-300"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              ✨
            </motion.div>
            
            <motion.div
              className="absolute -bottom-2 -left-2 text-yellow-300"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1.5,
              }}
            >
              ✨
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
