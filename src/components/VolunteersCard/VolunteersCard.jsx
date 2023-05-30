import PropTypes from 'prop-types';
import Image from 'next/image';

import Link from 'next/link';
import BodyText from '../BodyText';

import Twitter from '../../../public/assets/icons/twitter.svg';
import Instagram from '../../../public/assets/icons/instagram.svg';
import LinkedIn from '../../../public/assets/icons/linkedin.svg';
import Github from '../../../public/assets/icons/github.svg';

import styles from './styles.module.scss';

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
    <div className={styles.volunteers}>
      <Image
        src={picture}
        alt={name}
        width={70}
        height={70}
        className={styles.volunteersPicture}
      />
      <div className={styles.volunteersInfo}>
        <div>
          <BodyText className={styles.volunteersInfoName}>{name}</BodyText>
          <BodyText size="medium" className={styles.volunteersInfoRole}>
            {role}
          </BodyText>
        </div>
        <div className={styles.volunteersIconContainer}>
          {twitter && (
            <Link href={`https://www.twitter.com/${twitter}`} target="_self">
              <Image src={Twitter} alt="Twitter icon" />
            </Link>
          )}
          {linkedin && (
            <Link
              href={`https://www.linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image src={LinkedIn} alt="Linkedin icon" />
            </Link>
          )}
          {instagram && (
            <Link
              href={`https://www.instagram.com/${instagram}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Instagram} alt="Instagram icon" />
            </Link>
          )}
          {github && (
            <Link
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Github} alt="Github icon" />
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
