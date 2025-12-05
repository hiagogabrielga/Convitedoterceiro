"use client";
import styles from "./page.module.css";
import {
  Microscope,
  Heart,
  GraduationCap,
  Sparkles,
  Mail,
  Plus,
  Equal,
  MoveRight,
  Infinity,
} from "lucide-react";
import React from "react";
import ModalConvite from "@/components/ModalConvite";
=======
import { Atom, FlaskConical, Beaker, Microscope, Heart, Sparkles, GraduationCap, Mail } from 'lucide-react';
>>>>>>> 011b0138cc109885996446b6015e9024fcb05d6e

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.titulo}>Uma Reação Especial</h1>
        <div className={styles.cardInesquecivel}>
          <h2 className={styles.textoCard}>
            Quando elementos especiais se combinam...
          </h2>
          <h3 className={styles.equacao}>
            Alunos <Plus /> Professor <MoveRight />{" "}
            <span className={styles.resultadoInesquecivel}>Inesquecível</span>
          </h3>
        </div>
        <p className={styles.textoSolto}>
          Algumas reações químicas resultam em compostos estáveis e preciosos. A
          sua influência em nossas vidas criou uma ligação que queremos
          preservar para sempre.
        </p>
        <div className={styles.formularProfessor}>
          <h2 className={styles.subTitulo}>A Fórmula do Professor Perfeito</h2>
          <div className={styles.containerCards}>
            <div className={styles.card}>
              <div className={styles.containerIcon}>
                <Microscope className={styles.icon} />
              </div>
              <div className={styles.containerConteudo}>
                <div className={styles.conteudo}>
                  <h3 className={styles.tituloCard}>Conhecimento</h3>
                  <p className={styles.paragrafoCard}>
                    Conhecimento Você nos ensinou a enxergar o mundo através das
                    lentes da ciência
                  </p>
                </div>
                <div className={styles.containerEquacao}>
                  <p className={styles.equacaoCard}>
                    H₂O <MoveRight /> Vida
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.containerIcon}>
                <GraduationCap className={styles.icon} />
              </div>
              <div className={styles.containerConteudo}>
                <div className={styles.conteudo}>
                  <h3 className={styles.tituloCard}>Dedicação</h3>
                  <p className={styles.paragrafoCard}>
                    Cada aula foi uma experiência única de aprendizado e
                    descoberta
                  </p>
                </div>
                <div className={styles.containerEquacao}>
                  <p className={styles.equacaoCard}>
                    pC₆H₁₂O₆ <MoveRight /> Energia
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.containerIcon}>
                <Heart className={styles.icon} />
              </div>
              <div className={styles.containerConteudo}>
                <div className={styles.conteudo}>
                  <h3 className={styles.tituloCard}>Inspiração</h3>
                  <p className={styles.paragrafoCard}>Sua paixão pela química contagiou todos nós</p>
                </div>
                <div className={styles.containerEquacao}>
                  <p className={styles.equacaoCard}>
                    Fe <Plus /> Você <MoveRight /> Determinação
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.containerIcon}>
                <Sparkles className={styles.icon} />
              </div>
              <div className={styles.containerConteudo}>
                <div className={styles.conteudo}>
                  <h3 className={styles.tituloCard}>Transformação</h3>
                  <p className={styles.paragrafoCard}>
                    Catalisou nossa transformação de alunos para profissionais
                  </p>
                </div>
                <div className={styles.containerEquacao}>
                  <p className={styles.equacaoCard}>
                    Nós <Plus /> Você <MoveRight /> Futuro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerBotaoZoeira}>
          <button onClick={() => setShowZueria(!showZueria)} className={styles.botaoZoeria}>
            pH da Gratidão <Equal /> <Infinity />
          </button>
        </div>
        <div className={styles.containerBotaoConvite}>
          <h2 className={styles.tituloConvite}>E agora, chegou o momento da pergunta mais importante...</h2>
          <div>
            <button onClick={() => setShowConvite(!showConvite)} className={styles.botaoConvite}>
              <Mail />
              Abrir convite Especial
              <Sparkles />
            </button>
          </div>
        </div>
        <ModalConvite show={showConvite} setShow={setShowConvite} />
        <ModalZueira show={showZueria} setShow={setShowZueria} />
      </main>
    </div>
  );
}
