import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/DanielFreitasFerreira.png" alt="Murilo Messias" />
      <div>
        <strong>Daniel Freitas Ferreira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
