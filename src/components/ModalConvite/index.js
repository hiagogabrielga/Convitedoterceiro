import Image from "next/image";
import styles from "./modalConvite.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Heart, Award } from "lucide-react";
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
              height: "95%", // altura do modal
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            whileInView={{
              width: "var(--modal-width)", // largura vem do CSS
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
            <div className={styles.emojiRain}>
              {Array.from({ length: 20 }).map((_, i) => (
                <span key={i} className={styles.emoji}>
                  {
                    [
                      "🧪",
                      "⚗️",
                      "🧫",
                      "🧬",
                      "🔬",
                      "🔥",
                      "💥",
                      "⚡",
                      "💧",
                      "🌡️",
                      "💨",
                      "🧊",
                      "☁️",
                      "🌫️",
                      "⚛️",
                      "💠",
                      "🧴",
                      "💊",
                      "🍃",
                    ][Math.floor(Math.random() * 19)]
                  }
                </span>
              ))}
            </div>
            <button className={styles.closeBtn} onClick={() => setShow(false)}>
              <X size={26} />
            </button>

            <motion.div
              className={styles.content}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.3 }}
            >
              <div className={styles.decoracaoPulsando}>
                <Award size={60} color="#e0d421ff" />
                <Heart size={60} color="#e21414ff" />
                <Sparkles size={60} color="#488d20ff" />
              </div>
              <h1 className={styles.titulo}>
                Querido Professor Alan Candido! 🧪
              </h1>
              <p className={styles.paragrafo}>
                Assim como uma reação exotérmica libera energia e calor, sua
                presença em nossas vidas liberou conhecimento, inspiração e
                alegria!
              </p>
              <p className={styles.paragrafo}>
                Você foi o catalisador perfeito que acelerou nossa jornada de
                aprendizado, tornando cada conceito complexo em algo fascinante
                e compreensível.
              </p>
              <div className={styles.card}>
                <p className={styles.paragrafoCard}>
                  Por isso, com muito carinho e gratidão, gostaríamos de fazer
                  um convite especial:
                </p>
                <p className={styles.paraninfo}>Seja nosso Paraninfo! 🎓✨</p>
              </div>
              <p className={styles.paragrafo}>
                Queremos que você esteja ao nosso lado neste momento tão
                importante, representando todos os ensinamentos valiosos e a
                conexão especial que construímos juntos.
              </p>
              <h3 className={styles.rodape}>
                Sua presença tornará nossa formatura ainda mais especial! 💚
              </h3>
              <h4 className={styles.paragrafo}>
                Com todo nosso carinho e admiração,
              </h4>
              <h4 className={styles.turmas}>3ºA e 3ºB de Informática</h4>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
