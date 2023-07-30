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
    name: "Shuttleworth Foundation",
    image: ShuttleWorth,
    link: "https://shuttleworthfoundation.org/",
  },
  {
    id: "goethe",
    name: "Goethe Institut",
    image: TramasDemocraticas,
    link: "https://www.goethe.de/ins/br/pt/kul/sup/trd/edi.html",
  },
];

const institutional = [
  {
    id: "okbr",
    name: "Open Knowledge Brasil",
    image: Okbr,
    link: "https://ok.org.br/",
  },
  {
    id: "pgcc",
    name: "Programa de Pós-Graduação em Ciência de computação da UEFS",
    image: PgccUefs,
    link: "https://pgcc.uefs.br/",
  },
];

const regular = [
  {
    id: "absam",
    name: "Absam",
    image: Absam,
    link: "https://absam.io/",
    className: "absamimage",
  },
  {
    id: "1password",
    name: "1Password",
    image: OnePassword,
    link: "https://github.com/1Password/1password-teams-open-source",
  },
  {
    id: "netlify",
    name: "Netlify",
    image: Netlify,
    link: "https://www.netlify.com/open-source/",
  },
  {
    id: "jetbrains",
    name: "Jetbrains",
    image: JetBrains,
    link: "https://www.jetbrains.com/?from=DadosAbertosDeFeira",
  },
  {
    id: "mLabs",
    name: "mLabs",
    image: MLabs,
    link: "https://www.mlabs.com.br/",
  },
];

export const supporters = { financial, institutional, regular };
