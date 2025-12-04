"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { Infinity, Equal, Plus, MoveRight } from "lucide-react";
import ModalConvite from "@/components/ModalConvite";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className={styles.container}>

      <div className={`${styles.icon} ${styles.iconAtom}`}>⚛️</div>
      <div className={`${styles.icon} ${styles.iconTube}`}>🧪</div>
      <div className={`${styles.icon} ${styles.iconCoat}`}>🥼</div>

      <h1 className={styles.title}>
        Uma Reação Especial <span className={styles.emoji}>🧪</span>
      </h1>

      <div className={styles.box}>
        <p className={styles.subtitle}>
          Quando elementos especiais se combinam...
        </p>

        <h2 className={styles.formula}>
          Alunos <span className={styles.symbol}> <Plus /> </span> Professor
          <span className={styles.symbol}> <MoveRight /> </span> Inesquecível
        </h2>
      </div>

      <p className={styles.text}>
        Algumas reações químicas resultam em compostos estáveis e preciosos.
        A sua influência em nossas vidas criou uma ligação que queremos preservar
        para sempre.
      </p>

      {/* NOVA SEÇÃO — A Fórmula do Professor Perfeito */}
      <h2 className={styles.sectionTitle}>A Fórmula do Professor Perfeito</h2>

      <div className={styles.cardGrid}>

        {/* Conhecimento */}
        <div className={styles.card}>
          <div className={styles.cardIcon}>🔬</div>
          <div>
            <h3 className={styles.cardTitle}>Conhecimento</h3>
            <p className={styles.cardText}>
              Você nos ensinou a enxergar o mundo através das lentes da ciência
            </p>
            <div className={styles.tag}>H₂O <MoveRight /> Vida</div>
          </div>
        </div>

        {/* Dedicação */}
        <div className={styles.card}>
          <div className={styles.cardIcon}>🎓</div>
          <div>
            <h3 className={styles.cardTitle}>Dedicação</h3>
            <p className={styles.cardText}>
              Cada aula foi uma experiência única de aprendizado e descoberta
            </p>
            <div className={styles.tag}>C₆H₁₂O₆ <MoveRight /> Energia</div>
          </div>
        </div>

        {/* Inspiração */}
        <div className={styles.card}>
          <div className={styles.cardIcon}>💚</div>
          <div>
            <h3 className={styles.cardTitle}>Inspiração</h3>
            <p className={styles.cardText}>
              Sua paixão pela química contagiou todos nós
            </p>
            <div className={styles.tag}>Fe + Você <MoveRight /> Determinação</div>
          </div>
        </div>

        {/* Transformação */}
        <div className={styles.card}>
          <div className={styles.cardIcon}>⚗️</div>
          <div>
            <h3 className={styles.cardTitle}>Transformação</h3>
            <p className={styles.cardText}>
              Catalisou nossa transformação de alunos para profissionais
            </p>
            <div className={styles.tag}>Nós + Você <MoveRight /> Futuro</div>
          </div>
        </div>

      </div>

      <button className={styles.footerTag}>pH da Gratidão <Equal /> <Infinity size={20}/></button>


      {/* Título acima do botão */}
      <h2 className={styles.questionText}>
        E agora, chegou o momento da pergunta mais importante...
      </h2>

      {/* Botão que abre o modal */}
      <button className={styles.inviteButton} onClick={() => setOpenModal(true)}>
        <span className={styles.iconMail}>✉️</span>
        Abrir Convite Especial
        <span className={styles.iconSpark}>✨</span>
      </button>

      {/* MODAL */}
      {openModal && (

        <ModalConvite open={true}/>
      )}

    </main>
  );
}
