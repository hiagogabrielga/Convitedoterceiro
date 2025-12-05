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
    {
      id: 1,
      name: "Alini de Sousa Perroni",
      avatar: "/img/AliniPerroni3A.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Ana Caroline Cordeiro Pereira",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96133.giWqtqul43cv.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Ana Isabely Ribeiro Belchior",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96138.yNVvHd7nT9Hh.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Anne Gabriele Salvador Bassi",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96105.Snt2lsQEhZPM.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Beatriz Eduarda Bianchessi Tesser",
      avatar: "/img/beatrizTesser3A.png",
      featured: true,
    },
    {
      id: 1,
      name: "Camille Patricio Pagani Dias",
      avatar: "/img/Camille Dias 3A.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Carlos Eduardo Gomes de Oliveira",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96143.uvSEro0AucQ7.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Hiago Gabriel Gonçalves André",
      avatar:
        "/img/hiago3A.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Isabelly Lopes Bispo",
      avatar: "/img/Isa-Lopes-3A.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Jholemar Adonai Souza Balbino",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96071.tOrizGIshV5Q.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "João Gabriel Corso",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96227.WLnLQO41nuG-.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "João Gabriel Soares Inglez",
      avatar:
        "/img/inglez3A.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "João Pedro Bento de Andrade",
      avatar:
        "/img/bento3A.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "João Pedro Guerini Pasquali",
      avatar:
        "/img/guerini3A.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "João Vinícius Guimarães Vieira",
      avatar:
        "/img/vini3A.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "João Vitor Lopes Almendra",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96413.uCIR1GpiLCoo.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "João Vitor Silva de Oliveira",
      avatar: "/img/J.Oliveira.png",
      featured: true,
    },
    {
      id: 1,
      name: "Júlia Pereira da Mata",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96136.rdHUaAnnRCML.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Lavínia Stein Schmoller",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96207.thotPux87xCs.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Letícia Silva Almeida",
      avatar: "/img/Leticia.S.A.jpeg",
      featured: true,
    },
    {
      id: 1,
      name: "Lívia Darold Araripe",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/98845.VMebZTuMEkjo.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Luana Vitória Oliveira de Jesus",
      avatar: "/img/LuanaVitória_3°A.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Luz Nascimento Miranda",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96199.wH8kXJHFmzI4.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Marcos Vinícius Siqueira Lopes Cassimiro",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96116.EXUhzw5vOoe9.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Maria Eduarda de Sousa de Oliveira",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96221.ghS336fd04bZ.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Maria Eduarda Gonçalves Lima",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96209.xWUhg6gTb8DX.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Maria Fernanda Menezes Bossa",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96122.8bNLlL0q47Bj.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Mariana Zorzi",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96097.r3SSGQsVnIdV.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Max Costa Cardoso",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/80107.HcSM0MCRwbcE.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Nathan Teixeira Lopes",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96266.eSm-9FGUtchh.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Sofia Caroline Silva de Melo",
      avatar: "/img/Sofia3A.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Vitor Gabriel Capelleto",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96101.JeIEbkh_zsYL.jpg",
      featured: true,
    },
  ];

  const team_B = [
    {
      id: 1,
      name: "Ana Clara Rodrigues Nunes",
      avatar: "/img/AnaClara3B.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Ana Gabriely de Oliveira",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96053.KnfPGR14AXfv.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Ana Paula Cecilio de Oliveira",
      avatar: "/img/Anapaula3B.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "André Orocondo Lopes Aguirre",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96076.XuyEWl2HEJi9.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Beatriz Alexandra de Oliveira Medina",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96044.w8qXzhRtjjzX.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Beatriz Baltazar da Silva",
      avatar: "/img/BiaBaltazar3°B.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Brenda Vitória Gomes de Matos",
      avatar: "/img/Brenda3B.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Bruno Henrique Scharf Silva",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96041.5xfYtuLzIwQE.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Caio Franco Siaticoski",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96085.oB8pCGd2eDe9.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Cauã Rodrigo de Almeida da Silva",
      avatar: "/img/Caua3B.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Francielli Daiane Oliveira Dias",
      avatar: "/img/Fran3B.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Ikarus Barros Duarte",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96061.t2gPE0txfrXt.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Isabella Mackowiak Dallabrida",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96065.BHQVwBwN7fpG.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Jonas Lima da Silva",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/79689.KeufaHtODRmc.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "José Sbaraini de Paula e Silva",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96410.gqQTsNw0wwVK.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Julio Otávio da Silva",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96042.MadPcl0ZYjjs.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Letícia Gabriélle Andrade Ferreira",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96038.OdZ5NjEx7iXj.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Luiz Antonio Amorim Tércio",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/97571.cKrCg0zVGvwm.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Manoela Gabriella Couto Dessbesel",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/95565.JbrBInn8efOr.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Manoela Raycca Couto Dessbesel",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/95266.ka2YZ6A4faSw.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Marianny Gonçalves Moreira",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96048.2ZT5gmyhYVNo.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Maria Ritha de Kássia Santos",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96052.wj0Wbs98lLCH.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Priscila Zygoski Taborda",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96559.UNfgR6XbFnb6.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Rodolfo Bezerra Lisboa",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/97138.U2MAgHyTrIcA.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Thamylla Leticia Alves de Andrade",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96083.8Rou5oEah7ZR.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Vinícius Avila Momenti",
      avatar:
        "https://suap.ifro.edu.br/media/alunos/150x200/96078.qld5H_sKQjH7.jpg",
      featured: true,
    },
    {
      id: 1,
      name: "Yasmin Santos Moreno",
      avatar: "/img/Yamin3B.jpg",
      featured: true,
    },
  ];

  return (
    <div className={styles.page}>
      <div
        className={styles.decoracaoRotativa}
        style={{ top: "10%", left: "20%" }}
      >
        <Atom size={120} />
      </div>
      <div
        className={styles.decoracaoPulsando}
        style={{ top: "50%", right: "10%" }}
      >
        <Beaker size={120} />
      </div>
      <div
        className={styles.decoracaoLevitando}
        style={{ top: "70%", left: "10%" }}
      >
        <FlaskConical size={120} />
      </div>
      <div
        className={styles.decoracaoPulsando}
        style={{ bottom: "-30%", left: "20%" }}
      >
        <FlaskRound size={120} />
      </div>
      <div
        className={styles.decoracaoRotativa}
        style={{ bottom: "-20%", right: "20%" }}
      >
        <Microscope size={100} />
      </div>
      <div
        className={styles.decoracaoLevitando}
        style={{ top: "10%", right: "10%" }}
      >
        <TestTube size={120} />
      </div>
      <main className={styles.main}>
        <div className={styles.padding}>
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
            Algumas reações químicas resultam em compostos estáveis e preciosos.
            A sua influência em nossas vidas criou uma ligação que queremos
            preservar para sempre.
          </p>
          <div className={styles.formularProfessor}>
            <h2 className={styles.subTitulo}>
              A Fórmula do Professor Perfeito
            </h2>
            <div className={styles.containerCards}>
              <div className={styles.card}>
                <div className={styles.containerIcon}>
                  <Microscope className={styles.icon} />
                </div>
                <div className={styles.containerConteudo}>
                  <div className={styles.conteudo}>
                    <h3 className={styles.tituloCard}>Conhecimento</h3>
                    <p className={styles.paragrafoCard}>
                      Conhecimento Você nos ensinou a enxergar o mundo através
                      das lentes da ciência
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
            <div className={styles.botaoZoeria}>
              pH da Gratidão <Equal /> <Infinity />
            </div>
          </div>
        </div>

        {(() => {
          const makeCardNode = (m) => ({
            // node: o conteúdo real que será renderizado pelo LogoLoop (seu card)
            node: (
              <article
                className={`${styles.teamCard} ${
                  m.featured ? styles.teamCardFeatured : ""
                } ${m.role === "Abelha Rainha" ? styles.roleQueen : ""}`}
              >
                <div className={styles.teamAvatar}>
                  <img src={m.avatar} alt={m.name} />
                </div>
                <h3 className={styles.teamName}>{m.name}</h3>
                <p className={styles.role}>
                  {m.role}
                  {m.role && <PiCrown className={styles.coroa} />}
                </p>
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
                  logoHeight={200} // altura alvo do item no loop (ajuste fino se precisar)
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
