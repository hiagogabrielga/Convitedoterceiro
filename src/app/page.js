"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Microscope, Heart, GraduationCap, Sparkles, Mail } from "lucide-react";
import React from "react";
import ModalConvite from "@/components/ModalConvite";
import ModalZueira from "@/components/ModalZueira";
export default function Home() {
  const [showZueria, setShowZueria] = React.useState(false);
  const [showConvite, setShowConvite] = React.useState(false);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Uma Reação Especial</h1>
        <div>
          <h2>Quando elementos especiais se combinam...</h2>
          <h3>Alunos + Professor → Inesquecível</h3>
        </div>
        <p>
          Algumas reações químicas resultam em compostos estáveis e preciosos. A
          sua influência em nossas vidas criou uma ligação que queremos
          preservar para sempre.
        </p>
        <div>
          <h2>A Fórmula do Professor Perfeito</h2>
          <div>
            <div>
              <Microscope />
            </div>
            <div>
              <div>
                <h3>Conhecimento</h3>
                <p>
                  Conhecimento Você nos ensinou a enxergar o mundo através das
                  lentes da ciência
                </p>
              </div>
              <div>
                <p>H₂O → Vida</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <GraduationCap />
            </div>
            <div>
              <div>
                <h3>Dedicação</h3>
                <p>
                  Cada aula foi uma experiência única de aprendizado e
                  descoberta
                </p>
              </div>
              <div>
                <p>pC₆H₁₂O₆ → Energia</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Heart />
            </div>
            <div>
              <div>
                <h3>Inspiração</h3>
                <p>Sua paixão pela química contagiou todos nós</p>
              </div>
              <div>
                <p>Fe + Você → Determinação</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Sparkles />
            </div>
            <div>
              <div>
                <h3>Transformação</h3>
                <p>
                  Catalisou nossa transformação de alunos para profissionais
                </p>
              </div>
              <div>
                <p>Nós + Você → Futuro</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button onClick={() => setShowZueria(!showZueria)}>pH da Gratidão = ∞</button>
        </div>
        <div>
          <h2>E agora, chegou o momento da pergunta mais importante...</h2>
          <div>
            <button onClick={() => setShowConvite(!showConvite)}>
              <Mail />
              Abrir convite Especial
              <Sparkles />
            </button>
          </div>
        </div>
        {showConvite && <div><ModalConvite/></div>}
        {showZueria && <div><ModalZueira/></div>}
      </main>
    </div>
  );
}
