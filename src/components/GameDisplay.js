import { useState } from 'react';
import GameComplete from './GameComplete';
import { characters, characterDetails } from '@/lib/game/characters';
import GameEngine from '../lib/game/gameEngine';
import styles from './GameDisplay.module.css';

export default function GameDisplay() {
  const [game] = useState(() => new GameEngine());
  const [stage, setStage] = useState('selectCharacter');
  const [terminalLines, setTerminalLines] = useState(['# MySQL RPG Adventure']);
  const [command, setCommand] = useState('');
  const [dica, setDica] = useState(null);

  const handleSelectCharacter = (key) => {
    game.selectCharacter(key);
    setStage('mission');
    const mission = game.getCurrentMission();
    setTerminalLines([`# Missão 1: ${mission.description}`]);
  };

  const handleCommandSubmit = () => {
    const result = game.executeCommand(command);
    const newLines = [...terminalLines, `> ${command}`];

    if (result.success) {
      newLines.push(result.message);
      if (result.newMission) {
        const nextMission = game.getCurrentMission();
        newLines.push(`# Missão ${game.currentMissionIndex + 1}: ${nextMission.description}`);
      } else {
        newLines.push('# Parabéns! Você concluiu todas as missões.');
        setStage('complete'); 
      }
    } else {
      newLines.push(result.message);
    }

    setTerminalLines(newLines);
    setCommand('');
    setDica(null);
  };

  const handleDica = () => {
    setDica(game.getHint());
  };

  const handleRestart = () => {
    game.reset(); // precisa implementar esse método no GameEngine
    setStage('selectCharacter');
    setTerminalLines(['# MySQL RPG Adventure']);
    setCommand('');
    setDica(null);
  };

  return (
    <div className={styles.container}>
      {stage === 'complete' ? (
        <GameComplete onRestart={handleRestart} />
      ) : (
        <>
          {/* Coluna da esquerda */}
          <div className={styles.leftColumn}>
            {game.currentCharacter && (
              <div className={styles.characterCard}>
                <h3>Classe: {game.currentCharacter.name}</h3>
                <p>{game.currentCharacter.description}</p>
                <img
                  src={characterDetails[game.currentCharacter.key].image}
                  alt={game.currentCharacter.name}
                  className={styles.characterImage}
                />
              </div>
            )}

            <div className={styles.terminal}>
              {terminalLines.map((line, index) => (
                <div key={index} className={styles.line}>{line}</div>
              ))}

              {stage === 'selectCharacter' && (
                <div className={styles.selectCharacterContainer}>
                  <h2>MySQL RPG Adventure</h2>
                  <p>Escolha seu personagem:</p>
                  <div className={styles.characterButtons}>
                    {Object.entries(characters).map(([key, character]) => (
                      <div key={key} style={{ textAlign: 'center' }}>
                        <button
                          onClick={() => handleSelectCharacter(key)}
                          aria-label={`Selecionar ${character.name}`}
                        >
                          <img src={characterDetails[key].image} alt={character.name} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {stage === 'mission' && (
                <div className={styles.inputGroup}>
                  <input
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    placeholder="Digite seu comando SQL..."
                    className={styles.commandInput}
                  />
                  <button onClick={handleCommandSubmit} className={styles.executarButton}>Executar</button>
                  <button onClick={handleDica} className={styles.dicaButton}>Dica</button>
                </div>
              )}

              {dica && <p className={styles.dica}><strong>Dica:</strong> {dica}</p>}
            </div>
          </div>

          {/* Coluna da direita com imagem da missão */}
          {stage === 'mission' && (
            <div className={styles.missionImageCard}>
              <img
                src={game.getCurrentMission().image}
                alt="Imagem da missão"
                className={styles.missionImage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
