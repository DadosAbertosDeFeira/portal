import PropTypes from 'prop-types';

import Link from '../Link';

import styles from './styles.module.scss';

export default function VolunteersCard({
  name,
  role,
  picture,
  linkedin,
  github,
  instagram,
}) {
  return (
    <div className={styles.volunteers}>
      <img src={picture} alt={name} className={styles.volunteersPicture} />
      <div className={styles.volunteersInfo}>
        <div>
          <strong className={styles.volunteersInfoName}>{name}</strong>
          <span className={styles.volunteersInfoRole}>{role}</span>
        </div>
        <div className={styles.volunteersIconContainer}>
          {linkedin && (
            <Link href={`https://www.linkedin.com/in/${linkedin}`}>
              <img src="/assets/icons/linkedin.svg" alt="Linkedin icon" />
            </Link>
          )}
          {instagram && (
            <Link href={`https://www.instagram.com/${instagram}`}>
              <img src="/assets/icons/instagram.svg" alt="Instagram icon" />
            </Link>
          )}
          {github && (
            <Link href={`https://github.com/${github}`}>
              <img src="/assets/icons/github.svg" alt="Github icon" />
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
};

VolunteersCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  instagram: PropTypes.string,
};
