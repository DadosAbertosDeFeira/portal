import PropTypes from "prop-types";
import Image from "next/image";

import Link from "next/link";
import { Text } from "@/components/atoms/Text";

import Twitter from "../../../public/assets/icons/twitter.svg";
import Instagram from "../../../public/assets/icons/instagram.svg";
import LinkedIn from "../../../public/assets/icons/linkedin.svg";
import Github from "../../../public/assets/icons/github.svg";

export default function VolunteersCard({
  name,
  role,
  picture,
  linkedin,
  github,
  instagram,
  twitter,
}) {
  return (
    <div className="flex flex-row p-4 max-w-[390px] min-w-[288px] w-full rounded-[4px] border-solid border-t-[3px] border-primary-dark bg-gray-lightest shadow">
      <Image
        src={picture}
        alt={name}
        width={70}
        height={70}
        className="bg-white rounded-[50%] mr-4"
      />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <Text className="">{name}</Text>
          <Text className="mt-[0.1rem] text-primary-dark">{role}</Text>
        </div>
        <div className="flex flex-row">
          {twitter && (
            <Link
              className="mr-4"
              href={`https://www.twitter.com/${twitter}`}
              target="_self"
            >
              <Image className="h-5 w-5" src={Twitter} alt="Twitter icon" />
            </Link>
          )}
          {linkedin && (
            <Link
              className="mr-4"
              href={`https://www.linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image className="h-5 w-5" src={LinkedIn} alt="Linkedin icon" />
            </Link>
          )}
          {instagram && (
            <Link
              className="mr-4"
              href={`https://www.instagram.com/${instagram}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image className="h-5 w-5" src={Instagram} alt="Instagram icon" />
            </Link>
          )}
          {github && (
            <Link
              className="mr-4"
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image className="h-5 w-5" src={Github} alt="Github icon" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

VolunteersCard.defaultProps = {
  linkedin: null,
  github: null,
  instagram: null,
  twitter: null,
};

VolunteersCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  instagram: PropTypes.string,
  twitter: PropTypes.string,
};
