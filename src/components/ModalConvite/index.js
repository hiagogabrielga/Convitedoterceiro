import { motion, AnimatePresence } from "framer-motion";

export default function ModalConvite({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={onClose}
        >
          {/* BLOCO QUE ANIMA */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl overflow-hidden"
            style={{
              background: "white",
            }}
            /** 1. Começa como uma linha bem fina */
            initial={{ height: 0, width: 4 }}

            /** 2. Cresce verticalmente até a altura final */
            animate={{
              height: 300,
              width: 600,
              transition: {
                height: { duration: 0.4, ease: "easeOut" },
                width: {
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.4, // só abre para os lados depois de chegar na altura
                },
              },
            }}

            /** 3. Ao sair, encolhe ao contrário */
            exit={{
              width: 4,
              height: 0,
              transition: {
                width: { duration: 0.3 },
                height: { duration: 0.3, delay: 0.3 },
              },
            }}
          >
            {/* Conteúdo do Modal */}
            <div className="p-6">
              <h2 className="text-xl font-bold">Modal com Animação</h2>
              <p>A linha sobe e depois abre para os lados.</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
