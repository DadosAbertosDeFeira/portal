import OnePassword from "@assets/1password.svg";
import Absam from "@assets/absam.webp";
import JetBrains from "@assets/jetbrains.svg";
import MLabs from "@assets/mLabs.png";
import Netlify from "@assets/netlify.svg";
import Okbr from "@assets/okbr-logo.png";
import PgccUefs from "@assets/pgcc-uefs.jpeg";
import ShuttleWorth from "@assets/shuttleworth-funded.jpeg";
import TramasDemocraticas from "@assets/tramas-democraticas.png";

const financial = [
  {
    id: "shuttleworth",
    image: ShuttleWorth,
    link: "https://shuttleworthfoundation.org/",
    name: "Shuttleworth Foundation",
  },
  {
    id: "goethe",
    image: TramasDemocraticas,
    link: "https://www.goethe.de/ins/br/pt/kul/sup/trd/edi.html",
    name: "Goethe Institut",
  },
];

const institutional = [
  {
    id: "okbr",
    image: Okbr,
    link: "https://ok.org.br/",
    name: "Open Knowledge Brasil",
  },
  {
    id: "pgcc",
    image: PgccUefs,
    link: "https://pgcc.uefs.br/",
    name: "Programa de Pós-Graduação em Ciência de computação da UEFS",
  },
];

const regular = [
  {
    className: "absamimage",
    id: "absam",
    image: Absam,
    link: "https://absam.io/",
    name: "Absam",
  },
  {
    id: "1password",
    image: OnePassword,
    link: "https://github.com/1Password/1password-teams-open-source",
    name: "1Password",
  },
  {
    id: "netlify",
    image: Netlify,
    link: "https://www.netlify.com/open-source/",
    name: "Netlify",
  },
  {
    id: "jetbrains",
    image: JetBrains,
    link: "https://www.jetbrains.com/?from=DadosAbertosDeFeira",
    name: "Jetbrains",
  },
  {
    id: "mLabs",
    image: MLabs,
    link: "https://www.mlabs.com.br/",
    name: "mLabs",
  },
];

export const supporters = { financial, institutional, regular };
