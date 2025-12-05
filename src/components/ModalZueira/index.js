"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import styles from "./modalZueira.module.css";

export default function ModalZueira({ show, setShow }) {
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
              width: "2px",
              height: "0px",
            }}
            animate={{
              height: "300px", // altura do modal
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            whileInView={{
              width: "420px", // largura final
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
              Aqui vem o modal da foto maravilhosa do Alan do ENEM
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
