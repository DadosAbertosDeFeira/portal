import { Link } from "atoms/Link";

const anchors = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#voluntarios", label: "Voluntários" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#colabore", label: "Colabore" },
  { href: "/#contato", label: "Contato" },
  {
    href: "https://anchor.fm/cidadesabertas/",
    label: "Podcast",
    target: "_blank",
  },
  {
    href: "https://dadosabertosdefeira.medium.com",
    label: "Blog",
    target: "_blank",
  },
];

export function HeaderAnchors() {
  return (
    <ul className="z-20 my-auto flex flex-row justify-start space-x-xl text-sm font-bold">
      {anchors.map(({ href, label, ...props }) => {
        return (
          <li key={label}>
            <Link href={href} {...props}>
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
