// components/GameComplete.js
import styles from './GameComplete.module.css';

export default function GameComplete({ onRestart }) {
  return (
    <div className={styles.container}>
      <h1>🎉 Parabéns! 🎉</h1>
      <p>Você concluiu todas as missões do MySQL RPG Adventure!</p>
      <button onClick={onRestart} className={styles.restartButton}>
        Jogar Novamente
      </button>
    </div>
  );
}
