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

  // Validação mais inteligente de comandos SQL
  normalizeSQL(sql) {
    return sql
      .trim()
      .replace(/\s+/g, ' ') // Remove espaços múltiplos
      .replace(/;+$/, '') // Remove ponto e vírgula no final
      .replace(/`|"/g, "'") // Normaliza aspas
      .toLowerCase();
  }

  // Comparação flexível de comandos SQL
  isSQLEquivalent(userSQL, expectedSQL) {
    const normalizedUser = this.normalizeSQL(userSQL);
    const normalizedExpected = this.normalizeSQL(expectedSQL);
    
    // Comparação exata
    if (normalizedUser === normalizedExpected) return true;
    
    // Verificação para comandos SELECT (ordem das colunas pode variar)
    if (normalizedExpected.startsWith('select')) {
      const userParts = normalizedUser.split(/\s+/);
      const expectedParts = normalizedExpected.split(/\s+/);
      
      // Comparação básica de estrutura
      return userParts[0] === 'select' && 
             userParts.includes('from') &&
             userParts[userParts.indexOf('from') + 1] === 
             expectedParts[expectedParts.indexOf('from') + 1];
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
      this.currentMissionIndex++;
      this.playerStats.score += 100 - (this.playerStats.hintsUsed * 5);
      this.playerStats.hintsUsed = 0; // Reseta dicas usadas após sucesso

      const hasMoreMissions = this.currentMissionIndex < 
                            this.missions[this.currentCharacter.key].length;
      
      return {
        success: true,
        message: mission.successMessage,
        progress: this.getProgress(),
        completed: !hasMoreMissions,
        stats: this.playerStats,
        nextMission: hasMoreMissions ? this.getCurrentMission() : null
      };
    } else {
      return {
        success: false,
        message: mission.failureMessage || `Comando incorreto. Tente novamente. (Dica: ${mission.hint})`,
        stats: this.playerStats
      };
    }
  }

  // Métodos adicionais para melhor experiência
  getCharacterProgress(characterKey) {
    const completed = this.completedMissions.filter(
      m => m.character === characterKey
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