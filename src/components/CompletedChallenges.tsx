import { useContext } from 'react';
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css';
import { ChallengeBox } from './ChallengeBox';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.CompletedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}