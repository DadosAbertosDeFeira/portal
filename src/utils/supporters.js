import ShuttleWorth from "../../public/assets/shuttleworth-funded.jpeg";
import TramasDemocraticas from "../../public/assets/tramas-democraticas.png";
import Okbr from "../../public/assets/okbr-logo.png";
import PgccUefs from "../../public/assets/pgcc-uefs.jpeg";
import Absam from "../../public/assets/absam.webp";
import OnePassword from "../../public/assets/1password.svg";
import Netlify from "../../public/assets/netlify.svg";
import JetBrains from "../../public/assets/jetbrains.svg";
import MLabs from "../../public/assets/mLabs.png";

export default {
  financial: [
    {
      id: "shuttleworth",
      name: "Shuttleworth Foundation",
      logo: ShuttleWorth,
      link: "https://shuttleworthfoundation.org/",
    },
    {
      id: "goethe",
      name: "Goethe Institut",
      logo: TramasDemocraticas,
      link: "https://www.goethe.de/ins/br/pt/kul/sup/trd/edi.html",
    },
  ],
  institutional: [
    {
      id: "okbr",
      name: "Open Knowledge Brasil",
      logo: Okbr,
      link: "https://ok.org.br/",
    },
    {
      id: "pgcc",
      name: "Programa de Pós-Graduação em Ciência de computação da UEFS",
      logo: PgccUefs,
      link: "https://pgcc.uefs.br/",
    },
  ],
  regular: [
    {
      id: "absam",
      name: "Absam",
      logo: Absam,
      link: "https://absam.io/",
      className: "absamLogo",
    },
    {
      id: "1password",
      name: "1Password",
      logo: OnePassword,
      link: "https://github.com/1Password/1password-teams-open-source",
    },
    {
      id: "netlify",
      name: "Netlify",
      logo: Netlify,
      link: "https://www.netlify.com/open-source/",
    },
    {
      id: "jetbrains",
      name: "Jetbrains",
      logo: JetBrains,
      link: "https://www.jetbrains.com/?from=DadosAbertosDeFeira",
    },
    {
      id: "mLabs",
      name: "mLabs",
      logo: MLabs,
      link: "https://www.mlabs.com.br/",
    },
  ],
};
