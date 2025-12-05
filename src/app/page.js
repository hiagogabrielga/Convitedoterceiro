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
  Atom,
  Beaker,
  FlaskConical,
  FlaskRound,
  TestTube,
} from "lucide-react";
import React, { useState } from "react";
import ModalConvite from "@/components/ModalConvite";
import ModalZueira from "@/components/ModalZueira";
import LogoLoop from "@/components/loop";
import { PiCrown } from "react-icons/pi";

export default function Home() {
  const [showZueira, setShowZueira] = useState(false);
  const [showConvite, setShowConvite] = useState(false);

  const team_A = [
    { id: 1, name: "Alini Perroni", avatar: "/img/AliniPerroni3A.heif", featured: true },
    { id: 1, name: "Beatriz Tesser", avatar: "/img/beatrizTesser3A.png", featured: true },
    { id: 1, name: "Camile Dias", avatar: "/img/Camille Dias 3A.jpg", featured: true },
    { id: 1, name: "Isabelly Lopes", avatar: "/img/Isa Lopes 3A.heif", featured: true },
    { id: 1, name: "João Oliveira", avatar: "/img/J.Oliveira.png", featured: true },
    { id: 1, name: "Leticia Silva", avatar: "/img/Leticia.S.A.jpeg", featured: true },
    { id: 1, name: "Luana Vitoria", avatar: "/img/LuanaVitória_3°A.jpg", featured: true },
    { id: 1, name: "Sofia Melo", avatar: "/img/Sofia3A.jpg", featured: true },
    
  ];

  const team_B = [
    { id: 1, name: "Ana Clara", avatar: "/img/anaclara3B.jpg", featured: true },
    { id: 1, name: "Ana Paula", avatar: "/img/Anapaula3B.jpg", featured: true },
    { id: 1, name: "Biatriz Baltazar", avatar: "/img/BiaBaltazar3°B.jpg", featured: true },
    { id: 1, name: "Brenda", avatar: "/img/Brenda3B.jpg", featured: true },
    { id: 1, name: "Caua", avatar: "/img/Caua3B.jpg", featured: true },
    { id: 1, name: "Fran", avatar: "/img/Fran3B.jpg", featured: true },
    { id: 1, name: "Yasmin", avatar: "/img/Yamin3B.jpg", featured: true },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.decoracaoRotativa} style={{ top: "10%", left: "20%" }}>
        <Atom size={120} />
      </div>
      <div className={styles.decoracaoPulsando} style={{ top: "50%", right: "10%" }}>
        <Beaker size={120} />
      </div>
      <div className={styles.decoracaoLevitando} style={{ top: "70%", left: "10%" }}>
        <FlaskConical size={120} />
      </div>
      <div className={styles.decoracaoPulsando} style={{ bottom: "-30%", left: "20%" }}>
        <FlaskRound size={120} />
      </div>
      <div className={styles.decoracaoRotativa} style={{ bottom: "-20%", right: "20%" }}>
        <Microscope size={100} />
      </div>
      <div className={styles.decoracaoLevitando} style={{ top: "10%", right: "10%" }}>
        <TestTube size={120} />
      </div>
      <main className={styles.main}>
        <h1 className={styles.titulo}>Uma Reação Especial 🧪</h1>
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
                  <p className={styles.paragrafoCard}>
                    Sua paixão pela química contagiou todos nós
                  </p>
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
          <div
            className={styles.botaoZoeria}
          >
            pH da Gratidão <Equal /> <Infinity />
          </div>
        </div>

        {(() => {
          const makeCardNode = (m) => ({
            // node: o conteúdo real que será renderizado pelo LogoLoop (seu card)
            node: (
              <article
                className={`${styles.teamCard} ${m.featured ? styles.teamCardFeatured : ""} ${m.role === "Abelha Rainha" ? styles.roleQueen : ""}`}
              >
                <div className={styles.teamAvatar}>
                  <img src={m.avatar} alt={m.name} />
                </div>
                <h3 className={styles.teamName}>{m.name}</h3>
                <p className={styles.role}>{m.role}{m.role && <PiCrown className={styles.coroa} />}</p>
                {m.featured && <span className={styles.teamUnderline} />}
              </article>
            ),
            ariaLabel: m.name, // acessibilidade
            title: m.name,
          });

          // aqui você pode particionar como quiser; por exemplo, metade em cima e metade em baixo:
          const logos_A = team_A.map(makeCardNode);
          const logos_B = team_B.map(makeCardNode);

          return (
            <>
              <h1 className={styles.turma}>3°A Informática</h1>
              {/* === Linha 1 (para a esquerda) === */}
              <div className={styles.loopRow}>
                <LogoLoop
                  logos={logos_A}
                  speed={200}
                  direction="left"
                  logoHeight={200}   // altura alvo do item no loop (ajuste fino se precisar)
                  gap={30}
                  pauseOnHover
                  scaleOnHover
                  fadeOut


                />
              </div>
              <h1 className={styles.turma}>3°B Informática</h1>
              {/* === Linha 2 (para a direita) === */}
              <div className={styles.loopRow}>
                <LogoLoop
                  logos={logos_B}
                  speed={200}
                  direction="right"
                  logoHeight={200}
                  gap={30}
                  pauseOnHover
                  scaleOnHover
                  fadeOut

                />
              </div>
            </>
          );
        })()}

        <div className={styles.containerBotaoConvite}>
          <h2 className={styles.tituloConvite}>
            E agora, chegou o momento da pergunta mais importante...
          </h2>
          <div>
            <button
              onClick={() => setShowConvite(!showConvite)}
              className={styles.botaoConvite}
            >
              <Mail />
              Abrir convite Especial
              <Sparkles />
            </button>
          </div>
        </div>
        <ModalConvite show={showConvite} setShow={setShowConvite} />
        <ModalZueira show={showZueira} setShow={setShowZueira} />
      </main>
    </div>
  );
}
