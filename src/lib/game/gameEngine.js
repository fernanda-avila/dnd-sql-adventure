import { characters } from './characters';
import { missions } from './missions';


class GameEngine {
  constructor() {
    this.characters = characters;
    this.missions = missions
    this.currentCharacter = null;
    this.currentMissionIndex = 0;
    this.completedMissions = [];
  }

  getCharacters() {
    return this.characters;
  }

  selectCharacter(characterKey) {
    this.currentCharacter = this.characters[characterKey];
    this.currentMissionIndex = 0;
    this.completedMissions = [];
    return this.currentCharacter;
  }

  getCurrentMission() {
    if (!this.currentCharacter) return null;
    const key = this.currentCharacter.key;
    return this.missions[key]?.[this.currentMissionIndex] || null;
  }

  getHint() {
    const mission = this.getCurrentMission();
    return mission?.hint || 'Sem dica disponível.';
  }

  executeCommand(userInput) {
    const mission = this.getCurrentMission();
    if (!mission) {
      return {
        success: false,
        message: 'Nenhuma missão atual selecionada.'
      };
    }

    const normalize = str =>
      str.trim().replace(/\s+/g, ' ').toLowerCase();

    const expected = normalize(mission.expectedCommand);
    const given = normalize(userInput);

    const isCorrect = expected === given;

    if (isCorrect) {
      this.completedMissions.push(mission);
      this.currentMissionIndex++;

      return {
        success: true,
        message: mission.successMessage,
        newMission: this.currentMissionIndex < this.missions[this.currentCharacter.key].length
      };
    } else {
      return {
        success: false,
        message: mission.failureMessage || 'Comando incorreto. Tente novamente.'
      };
    }
  }
}

export default GameEngine;
