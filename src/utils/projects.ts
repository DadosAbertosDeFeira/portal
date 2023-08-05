import BotDOU from "@assets/bot-dou.png";
import DefaultProject from "@assets/default-project.jpeg";
import CidadesAbertas from "@assets/logo-cidades-abertas-podcast.png";
import MariaQuiteria from "@assets/maria-quiteria.png";
import type { StaticImageData } from "next/image";

export type Project = {
  name: string;
  type: string[];
  description: string;
  link: string;
  logo: {
    path: string | StaticImageData;
    description: string;
  };
};

export const projects: Project[] = [
  {
    description:
      "Tem a missão de libertar dados do município de Feira de Santana. Responsável pela raspagem e o armazenamento.",
    link: "https://github.com/DadosAbertosDeFeira/maria-quiteria",
    logo: {
      path: MariaQuiteria,
      description: "Logo do Projeto Maria Quitéria",
    },
    name: "Maria Quitéria",
    type: ["raspagem de dados", "busca de dados"],
  },
  {
    description:
      "Já pensou se você pudesse ler uma thread no Twitter com os pontos mais importantes do Diário Oficial de Feira de Santana ao invés de ler um documento enorme? Temos um bot pra isso!",
    link: "https://twitter.com/DiarioDeFeira",
    logo: {
      path: BotDOU,
      description: "Logo do projeto Bot do DOU",
    },
    name: "Bot do DOU",
    type: ["bot", "twitter"],
  },
  {
    description:
      "A discussão sobre dados abertos e transparência dentro das cidades ainda está muito tímida. Nós queremos mudar isso.",
    link: "https://anchor.fm/cidadesabertas/",
    logo: {
      path: CidadesAbertas,
      description: "Logo do Podcast Cidades Abertas",
    },
    name: "Podcast Cidades Abertas",
    type: ["podcast"],
  },
  {
    description:
      "Gerencie e compartilhe publicamente o status dos seus pedidos de informação",
    link: "https://pedidos.dadosabertosdefeira.com.br/",
    logo: {
      path: DefaultProject,
      description: "Logo do projeto Pedidos",
    },
    name: "Laiá (pedidos de informação)",
    type: ["pedidos de informação"],
  },
  {
    description:
      "Aqui você encontrará raspadores para o site do Tribunal de Contas dos Municípios da Bahia.",
    link: "https://github.com/DadosAbertosDeFeira/tcm-ba",
    logo: {
      path: DefaultProject,
      description: "Logo do projeto tcm-ba",
    },
    name: "tcm-ba",
    type: ["raspagem de dados"],
  },
  {
    description:
      "Identifique endereços, bairros e outras localizações brasileiras automaticamente em um texto.",
    link: "https://github.com/DadosAbertosDeFeira/tomba",
    logo: {
      path: DefaultProject,
      description: "Logo do projeto tomba",
    },
    name: "Tomba",
    type: ["processamento de linguagem natural", "ciência de dados"],
  },
  // {
  //   name: 'Empacotador',
  //   type: ['publicação de dados'],
  //   description:
  //   link: '',
  //     'Tem a missão de libertar dados do município de Feira de Santana. Responsável pela raspagem e o armazenamento.',
  //   logo: {
  //     path: '/assets/maria-quiteria.png',
  //     description: 'Logo do Projeto Empacotador',
  //   },
  // },
];
