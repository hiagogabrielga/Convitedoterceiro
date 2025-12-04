"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { Atom, FlaskConical, Beaker, Microscope, Heart, Sparkles, GraduationCap, Mail } from 'lucide-react';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className={styles.container}>

      {/* Ícones decorativos */}
      <div className={`${styles.icon} ${styles.iconAtom}`}><Atom /></div>
      <div className={`${styles.icon} ${styles.iconTube}`}><Beaker /></div>
      <div className={`${styles.icon} ${styles.iconCoat}`}><FlaskConical /></div>

      <h1 className={styles.title}>
        Uma Reação Especial <span className={styles.emoji}>🧪</span>
      </h1>

      <div className={styles.box}>
        <p className={styles.subtitle}>
          Quando elementos especiais se combinam...
        </p>

        <h2 className={styles.formula}>
          Alunos <span className={styles.symbol}> + </span> Professor
          <span className={styles.symbol}> → </span> Inesquecível
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
          <div className={styles.cardIcon}><Microscope /></div>
          <div>
            <h3 className={styles.cardTitle}>Conhecimento</h3>
            <p className={styles.cardText}>
              Você nos ensinou a enxergar o mundo através das lentes da ciência
            </p>
            <div className={styles.tag}>H₂O → Vida</div>
          </div>
        </div>

        {/* Dedicação */}
        <div className={styles.card}>
          <div className={styles.cardIcon}><GraduationCap /></div>
          <div>
            <h3 className={styles.cardTitle}>Dedicação</h3>
            <p className={styles.cardText}>
              Cada aula foi uma experiência única de aprendizado e descoberta
            </p>
            <div className={styles.tag}>C₆H₁₂O₆ → Energia</div>
          </div>
        </div>

        {/* Inspiração */}
        <div className={styles.card}>
          <div className={styles.cardIcon}><Heart /></div>
          <div>
            <h3 className={styles.cardTitle}>Inspiração</h3>
            <p className={styles.cardText}>
              Sua paixão pela química contagiou todos nós
            </p>
            <div className={styles.tag}>Fe + Você → Determinação</div>
          </div>
        </div>

        {/* Transformação */}
        <div className={styles.card}>
          <div className={styles.cardIcon}><Sparkles /></div>
          <div>
            <h3 className={styles.cardTitle}>Transformação</h3>
            <p className={styles.cardText}>
              Catalisou nossa transformação de alunos para profissionais
            </p>
            <div className={styles.tag}>Nós + Você → Futuro</div>
          </div>
        </div>

      </div>

      <div className={styles.footerTag}>pH da Gratidão = ∞</div>


      {/* Título acima do botão */}
      <h2 className={styles.questionText}>
        E agora, chegou o momento da pergunta mais importante...
      </h2>

      {/* Botão que abre o modal */}
      <button className={styles.inviteButton} onClick={() => setOpenModal(true)}>
        <span className={styles.iconMail}><Mail /></span>
        Abrir Convite Especial
        <span className={styles.iconSpark}><Sparkles /></span>
      </button>

      {/* MODAL */}
      {openModal && (
        <div className={styles.modalOverlay} onClick={() => setOpenModal(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className={styles.modalTitle}>💌 Convite Especial</h3>

            <p className={styles.modalText}>
              Prepare-se... algo muito especial está prestes a acontecer!
            </p>

            <button
              className={styles.closeButton}
              onClick={() => setOpenModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
