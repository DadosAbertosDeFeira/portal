import PropTypes from 'prop-types';
import BodyText from '../BodyText';

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
          <BodyText className={styles.volunteersInfoName}>{name}</BodyText>
          <BodyText size="medium" className={styles.volunteersInfoRole}>
            {role}
          </BodyText>
        </div>
        <div className={styles.volunteersIconContainer}>
          {linkedin && (
            <a
              href={`https://www.linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/icons/linkedin.svg" alt="Linkedin icon" />
            </a>
          )}
          {instagram && (
            <a
              href={`https://www.instagram.com/${instagram}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/icons/instagram.svg" alt="Instagram icon" />
            </a>
          )}
          {github && (
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/icons/github.svg" alt="Github icon" />
            </a>
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
