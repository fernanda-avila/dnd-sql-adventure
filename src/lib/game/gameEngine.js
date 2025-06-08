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
    this.playerStats = { score: 0, attempts: 0, hintsUsed: 0 };

    return {
      character: this.currentCharacter,
      mission: this.getCurrentMission()
    };
  }

  getCurrentMission() {
    if (!this.currentCharacter) return null;
    const key = this.currentCharacter.key;
    return this.missions[key]?.[this.currentMissionIndex] || null;
  }

  getHint() {
    const mission = this.getCurrentMission();
    if (!mission) return 'Nenhuma missão ativa';

    this.playerStats.hintsUsed++;
    this.playerStats.score = Math.max(0, this.playerStats.score - 5);
    return mission.hint;
  }

  normalizeSQL(sql) {
    return sql
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/;+$/, '')
      .replace(/`|"/g, "'")
      .toLowerCase();
  }

  isSQLEquivalent(userSQL, expectedSQL) {
    const u = this.normalizeSQL(userSQL);
    const e = this.normalizeSQL(expectedSQL);
    if (u === e) return true;

    // considera SELECT simples
    if (e.startsWith('select')) {
      const uParts = u.split(' ');
      const eParts = e.split(' ');
      return (
        uParts[0] === 'select' &&
        uParts.includes('from') &&
        uParts[uParts.indexOf('from') + 1] ===
          eParts[eParts.indexOf('from') + 1]
      );
    }

    return false;
  }

  executeCommand(userInput) {
    this.playerStats.attempts++;
    const mission = this.getCurrentMission();
    if (!mission)
      return { success: false, message: 'Selecione um personagem primeiro.', stats: this.playerStats };

    const correct = this.isSQLEquivalent(userInput, mission.expectedCommand);
    if (correct) {
      const key = this.currentCharacter.key;
      this.completedMissions.push({ ...mission, character: key });
      const gained = 100 - this.playerStats.hintsUsed * 5;
      this.playerStats.score += gained;
      this.playerStats.hintsUsed = 0;

      const missionsList = this.missions[key];
      const last = this.currentMissionIndex >= missionsList.length - 1;

      if (last) {
        const story = `
🌟 Você recuperou todos os cristais da classe ${this.currentCharacter.key.toUpperCase()}!
🏆 Pontuação final: ${this.playerStats.score}
🎯 Tentou ${this.playerStats.attempts} vezes

Sua aventura se encerra com glória e histórias que serão contadas por gerações.`;

        return {
          success: true,
          message: story,
          completed: true,
          stats: this.playerStats
        };
      }

      this.currentMissionIndex++;
      return {
        success: true,
        message: mission.successMessage,
        nextMission: this.getCurrentMission(),
        progress: Math.floor((this.currentMissionIndex / missionsList.length) * 100),
        stats: this.playerStats
      };
    }

    return {
      success: false,
      message: mission.failureMessage || `Errado! Dica: ${mission.hint}`,
      stats: this.playerStats
    };
  }

  reset() {
    this.currentCharacter = null;
    this.currentMissionIndex = 0;
    this.completedMissions = [];
    this.playerStats = { score: 0, attempts: 0, hintsUsed: 0 };
  }
}

export default GameEngine;
