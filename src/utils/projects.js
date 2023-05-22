import MariaQuiteria from '../../public/assets/maria-quiteria.png';
import BotDOU from '../../public/assets/bot-dou.png';
import DefaultProject from '../../public/assets/default-project.jpeg';
import CidadesAbertas from '../../public/assets/logo-cidades-abertas-podcast.png';

export default [
  {
    name: 'Maria Quitéria',
    type: ['raspagem de dados', 'busca de dados'],
    description:
      'Tem a missão de libertar dados do município de Feira de Santana. Responsável pela raspagem e o armazenamento.',
    link: 'https://github.com/DadosAbertosDeFeira/maria-quiteria',
    logo: {
      path: MariaQuiteria,
      description: 'Logo do Projeto Maria Quitéria',
    },
  },
  {
    name: 'Bot do DOU',
    type: ['bot', 'twitter'],
    description:
      'Já pensou se você pudesse ler uma thread no Twitter com os pontos mais importantes do Diário Oficial de Feira de Santana ao invés de ler um documento enorme? Temos um bot pra isso!',
    link: 'https://twitter.com/DiarioDeFeira',
    logo: {
      path: BotDOU,
      description: 'Logo do projeto Bot do DOU',
    },
  },
  {
    name: 'Empacotador',
    type: ['publicação de dados'],
    description:
      'Colocamos os dados que coletamos em pacotes, assim fica mais fácil para que pesquisadores, programadores e jornalistas acessem seu conteúdo.',
    link: 'https://github.com/DadosAbertosDeFeira/empacotador',
    logo: {
      path: DefaultProject,
      description: 'Logo do Projeto Empacotador',
    },
  },
  {
    name: 'Podcast Cidades Abertas',
    type: ['podcast'],
    description:
      'A discussão sobre dados abertos e transparência dentro das cidades ainda está muito tímida. Nós queremos mudar isso.',
    link: 'https://anchor.fm/cidadesabertas/',
    logo: {
      path: CidadesAbertas,
      description: 'Logo do Podcast Cidades Abertas',
    },
  },
  {
    name: 'Laiá (pedidos de informação)',
    type: ['pedidos de informação'],
    description:
      'Gerencie e compartilhe publicamente o status dos seus pedidos de informação',
    link: 'https://pedidos.dadosabertosdefeira.com.br/',
    logo: {
      path: DefaultProject,
      description: 'Logo do projeto Pedidos',
    },
  },
  {
    name: 'Prometido',
    type: ['controle social'],
    description:
      'Promessa é dívida. Vamos acompanhar o que foi prometido na campanha.',
    link: 'https://github.com/DadosAbertosDeFeira/prometido',
    logo: {
      path: DefaultProject,
      description: 'Logo do projeto Prometido',
    },
  },
  {
    name: 'tcm-ba',
    type: ['raspagem de dados'],
    description:
      'Aqui você encontrará raspadores para o site do Tribunal de Contas dos Municípios da Bahia.',
    link: 'https://github.com/DadosAbertosDeFeira/tcm-ba',
    logo: {
      path: DefaultProject,
      description: 'Logo do projeto tcm-ba',
    },
  },
  {
    name: 'Tomba',
    type: ['processamento de linguagem natural', 'ciência de dados'],
    description:
      'Identifique endereços, bairros e outras localizações brasileiras automaticamente em um texto.',
    link: 'https://github.com/DadosAbertosDeFeira/tomba',
    logo: {
      path: DefaultProject,
      description: 'Logo do projeto tomba',
    },
  },
  // {
  //   name: 'Empacotador',
  //   type: ['publicação de dados'],
  //   description:
  //     'Tem a missão de libertar dados do município de Feira de Santana. Responsável pela raspagem e o armazenamento.',
  //   link: '',
  //   logo: {
  //     path: '/assets/maria-quiteria.png',
  //     description: 'Logo do Projeto Empacotador',
  //   },
  // },
];
