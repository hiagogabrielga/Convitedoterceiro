import Image from "next/image";
import styles from "./modalConvite.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
export default function ModalConvite({ show, setShow }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.backdrop}
          onClick={() => setShow(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* ETAPA 1 e 2: linha vertical crescendo, depois expandindo */}
          <motion.div
            className={styles.modalBox}
            onClick={(e) => e.stopPropagation()}
            initial={{
              width: "0",
              height: "0",
            }}
            animate={{
              height: "90%", // altura do modal
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            whileInView={{
              width: "50%", // largura final
              transition: {
                delay: 0.3,
                duration: 0.35,
                ease: "easeOut",
              },
            }}
            exit={{
              width: "2px",
              height: "0px",
              opacity: 0,
              transition: { duration: 0.3 },
            }}
          >
            <button className={styles.closeBtn} onClick={() => setShow(false)}>
              <X size={26} />
            </button>

            <motion.div
              className={styles.content}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.3 }}
            >
              <h1>Querido Professor! 🧪</h1>
              <p>
                Assim como uma reação exotérmica libera energia e calor, sua
                presença em nossas vidas liberou conhecimento, inspiração e
                alegria!
              </p>
              <p>
                Você foi o catalisador perfeito que acelerou nossa jornada de
                aprendizado, tornando cada conceito complexo em algo fascinante
                e compreensível.
              </p>
              <div>
                <p>
                  Por isso, com muito carinho e gratidão, gostaríamos de fazer
                  um convite especial:
                </p>
                <p>Seja nosso Paraninfo! 🎓✨</p>
              </div>
              <p>
                Queremos que você esteja ao nosso lado neste momento tão
                importante, representando todos os ensinamentos valiosos e a
                conexão especial que construímos juntos.
              </p>
              <h3>
                Sua presença tornará nossa formatura ainda mais especial! 💚
              </h3>
              <h4>Com todo nosso carinho e admiração,</h4>
              <h4>3ºA e 3ºB de Informática</h4>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
