import { characters } from './characters';
import { missions } from './missions';

class GameEngine {
  constructor() {
    this.characters = characters;
    this.missions = missions;
    this.currentCharacter = null;
    this.currentMissionIndex = 0;
    this.completedMissions = [];
    this.playerStats = {
      score: 0,
      attempts: 0,
      hintsUsed: 0
    };
  }

  getCharacters() {
    return this.characters;
  }

  selectCharacter(characterKey) {
    if (!this.characters[characterKey]) {
      throw new Error('Personagem não encontrado');
    }

    this.currentCharacter = this.characters[characterKey];
    this.currentMissionIndex = 0;
    this.completedMissions = [];
    this.playerStats.attempts = 0;
    this.playerStats.hintsUsed = 0;

    return {
      character: this.currentCharacter,
      firstMission: this.getCurrentMission()
    };
  }

  getCurrentMission() {
    if (!this.currentCharacter) return null;
    const key = this.currentCharacter.key;
    return this.missions[key]?.[this.currentMissionIndex] || null;
  }

  getProgress() {
    if (!this.currentCharacter) return 0;
    const totalMissions = this.missions[this.currentCharacter.key]?.length || 1;
    return Math.floor((this.currentMissionIndex / totalMissions) * 100);
  }

  getHint() {
    const mission = this.getCurrentMission();
    if (!mission) return 'Nenhuma missão ativa';

    this.playerStats.hintsUsed++;
    this.playerStats.score = Math.max(0, this.playerStats.score - 5);

    return mission.hint || 'Sem dica disponível.';
  }

  normalizeSQL(sql) {
    return sql
      .trim()
      .replace(/\s+/g, ' ') // Remove espaços múltiplos
      .replace(/;+$/, '') // Remove ponto e vírgula no final
      .replace(/`|"/g, "'") // Normaliza aspas
      .toLowerCase();
  }

  isSQLEquivalent(userSQL, expectedSQL) {
    const normalizedUser = this.normalizeSQL(userSQL);
    const normalizedExpected = this.normalizeSQL(expectedSQL);

    if (normalizedUser === normalizedExpected) return true;

    if (normalizedExpected.startsWith('select')) {
      const userParts = normalizedUser.split(/\s+/);
      const expectedParts = normalizedExpected.split(/\s+/);

      return (
        userParts[0] === 'select' &&
        userParts.includes('from') &&
        userParts[userParts.indexOf('from') + 1] ===
          expectedParts[expectedParts.indexOf('from') + 1]
      );
    }

    return false;
  }

  executeCommand(userInput) {
    this.playerStats.attempts++;
    const mission = this.getCurrentMission();

    if (!mission) {
      return {
        success: false,
        message: 'Nenhuma missão ativa. Selecione um personagem primeiro.',
        stats: this.playerStats
      };
    }

    const isCorrect = this.isSQLEquivalent(userInput, mission.expectedCommand);

    if (isCorrect) {
      this.completedMissions.push(mission);
      this.playerStats.score += 100 - this.playerStats.hintsUsed * 5;
      this.playerStats.hintsUsed = 0;

      const missionsList = this.missions[this.currentCharacter.key];
      const isLastMission = this.currentMissionIndex === missionsList.length - 1;

      if (isLastMission) {
        const finalMessage = `
🌟 Você derrotou o Dragão Sombrio e recuperou todos os Cristais Elementais!
🛡️ O Reino de Eldoria está a salvo graças à sua coragem e raciocínio lógico!
🏆 Pontuação final: ${this.playerStats.score}
📚 Total de tentativas: ${this.playerStats.attempts}

A sabedoria retornou às montanhas de Eldoria e as águas voltaram a fluir puras nas florestas encantadas.
Os aldeões cantam seu nome nas tavernas, e você se tornou uma lenda viva! 🎉
        `;
        return {
          success: true,
          message: finalMessage,
          completed: true,
          stats: this.playerStats,
          nextMission: null
        };
      } else {
        this.currentMissionIndex++;
        return {
          success: true,
          message: mission.successMessage,
          progress: this.getProgress(),
          completed: false,
          stats: this.playerStats,
          nextMission: this.getCurrentMission()
        };
      }
    } else {
      return {
        success: false,
        message:
          mission.failureMessage ||
          `Comando incorreto. Tente novamente. (Dica: ${mission.hint})`,
        stats: this.playerStats
      };
    }
  }

  getCharacterProgress(characterKey) {
    const completed = this.completedMissions.filter(
      (m) => m.character === characterKey
    ).length;
    const total = this.missions[characterKey]?.length || 0;
    return { completed, total };
  }

  resetGame() {
    this.currentCharacter = null;
    this.currentMissionIndex = 0;
    this.completedMissions = [];
    this.playerStats = {
      score: 0,
      attempts: 0,
      hintsUsed: 0
    };
  }
}

export default GameEngine;
