export const missions = {
  warrior: [
    {
      description: "📜 Capítulo 1: O Início - Crie seu inventário de guerreiro (tabela 'warrior_inventory')",
      expectedCommand: "CREATE TABLE warrior_inventory (item_name VARCHAR(50), strength INT);",
      successMessage: "✅ Inventário criado! Agora você pode começar sua jornada.",
      failureMessage: "❌ Use: CREATE TABLE warrior_inventory (item_name VARCHAR(50), strength INT);",
      hint: "Dica: Primeiro crie a tabela com CREATE TABLE",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "🔍 Verifique se sua tabela foi criada corretamente (mostre todas as tabelas disponíveis)",
      expectedCommand: "SELECT name FROM sqlite_master WHERE type='table';",
      successMessage: "✅ Tabela encontrada! Seu inventário está pronto para uso.",
      failureMessage: "❌ Use SELECT para verificar tabelas existentes",
      hint: "Dica: SELECT name FROM sqlite_master WHERE type='table';",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "🛡️ Seu mestre lhe dá uma Espada de Madeira (força: 5). Adicione ao inventário",
      expectedCommand: "INSERT INTO warrior_inventory VALUES ('Espada de Madeira', 5);",
      successMessage: "✅ Primeira arma adquirida! Hora de treinar.",
      failureMessage: "❌ Use INSERT INTO warrior_inventory VALUES ('Espada de Madeira', 5);",
      hint: "Dica: INSERT INTO tabela VALUES (valor1, valor2)",
      image: "/assets/warrior-scene.jpg"  
    },
    {
      description: "🔍 Confira se a Espada de Madeira está no inventário",
      expectedCommand: "SELECT * FROM warrior_inventory WHERE item_name = 'Espada de Madeira';",
      successMessage: "✅ Arma confirmada! Você está pronto para sua primeira missão.",
      failureMessage: "❌ Use SELECT para verificar itens",
      hint: "Dica: SELECT * FROM tabela WHERE condição",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "⚔️ Missão: Derrote Goblin! Verifique se tem armas com força > 3",
      expectedCommand: "SELECT * FROM warrior_inventory WHERE strength > 3;",
      successMessage: "✅ Missão cumprida! Você ganha uma Espada de Ferro (força: 15).",
      failureMessage: "❌ Use SELECT com condição numérica",
      hint: "Dica: SELECT * FROM tabela WHERE coluna > valor",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "🔄 Substitua sua espada velha pela nova Espada de Ferro",
      expectedCommand: "DELETE FROM warrior_inventory; INSERT INTO warrior_inventory VALUES ('Espada de Ferro', 15);",
      successMessage: "✅ Arma atualizada! Você se sente mais forte.",
      failureMessage: "❌ Remova a antiga primeiro, depois insira a nova",
      hint: "Dica: Dois comandos - DELETE depois INSERT",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "🔍 Liste todos seus itens para preparar a próxima missão",
      expectedCommand: "SELECT * FROM warrior_inventory;",
      successMessage: "✅ Preparação completa! Hora de enfrentar o Orc Chefe.",
      failureMessage: "❌ Use SELECT * para ver todos os itens",
      hint: "Dica: SELECT * FROM tabela",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "🏆 Derrote o Orc Chefe! Atualize sua espada para 'Espada de Aço' (força: 30)",
      expectedCommand: "UPDATE warrior_inventory SET item_name = 'Espada de Aço', strength = 30;",
      successMessage: "✅ Vitória épica! Sua espada foi aprimorada.",
      failureMessage: "❌ Use UPDATE para modificar múltiplas colunas",
      hint: "Dica: UPDATE tabela SET col1=valor1, col2=valor2",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "🐉 Desafio Final: Verifique se tem equipamento suficiente (força total >= 30)",
      expectedCommand: "SELECT SUM(strength) FROM warrior_inventory;",
      successMessage: "✅ Força suficiente! Você derrota o Dragão e vira lenda!",
      failureMessage: "❌ Use SUM para calcular força total",
      hint: "Dica: SELECT SUM(coluna) FROM tabela",
      image: "/assets/warrior-scene.jpg"
    }
  ],
  mage: [
    {
      description: "📜 Capítulo 1: O Aprendiz - Crie seu grimório (tabela 'mage_spells')",
      expectedCommand: "CREATE TABLE mage_spells (spell_name VARCHAR(50), power INT, mana_cost INT);",
      successMessage: "✅ Grimório criado! O caminho da magia começa.",
      failureMessage: "❌ Use: CREATE TABLE mage_spells (spell_name VARCHAR(50), power INT, mana_cost INT);",
      hint: "Dica: Crie tabela com múltiplas colunas",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "🔍 Verifique a estrutura do seu grimório (mostre as colunas)",
      expectedCommand: "PRAGMA table_info(mage_spells);",
      successMessage: "✅ Estrutura verificada! Pronto para aprender feitiços.",
      failureMessage: "❌ Use PRAGMA para verificar colunas",
      hint: "Dica: PRAGMA table_info(nome_tabela);",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "✨ Aprenda seu primeiro feitiço: 'Luz' (poder: 5, custo: 2)",
      expectedCommand: "INSERT INTO mage_spells VALUES ('Luz', 5, 2);",
      successMessage: "✅ Feitiço aprendido! Agora você pode iluminar caminhos.",
      failureMessage: "❌ Use INSERT com múltiplos valores",
      hint: "Dica: INSERT INTO tabela VALUES (valor1, valor2, valor3)",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "🔍 Liste todos feitiços com custo de mana <= 5",
      expectedCommand: "SELECT * FROM mage_spells WHERE mana_cost <= 5;",
      successMessage: "✅ Feitiços disponíveis confirmados!",
      failureMessage: "❌ Use SELECT com condição",
      hint: "Dica: SELECT * FROM tabela WHERE coluna <= valor",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "🔥 Derrote os Ratos Mutantes! Aprenda 'Bola de Fogo' (poder: 20, custo: 10)",
      expectedCommand: "INSERT INTO mage_spells VALUES ('Bola de Fogo', 20, 10);",
      successMessage: "✅ Inimigos derrotados! Novo feitiço poderoso aprendido.",
      failureMessage: "❌ Adicione o novo feitiço",
      hint: "Dica: INSERT INTO tabela VALUES ('Bola de Fogo', 20, 10)",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "🔍 Compare os feitiços: Liste os com poder > 10",
      expectedCommand: "SELECT spell_name FROM mage_spells WHERE power > 10;",
      successMessage: "✅ Feitiços poderosos identificados!",
      failureMessage: "❌ Use SELECT com colunas específicas",
      hint: "Dica: SELECT coluna FROM tabela WHERE condição",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "📚 Encontre o Tomo Antigo e atualize 'Luz' para 'Luz Solar' (poder: 15)",
      expectedCommand: "UPDATE mage_spells SET spell_name = 'Luz Solar', power = 15 WHERE spell_name = 'Luz';",
      successMessage: "✅ Feitiço aprimorado! Seu conhecimento cresce.",
      failureMessage: "❌ Use UPDATE com condição específica",
      hint: "Dica: UPDATE tabela SET col1=valor WHERE condição",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "⚡ Desafio Final: Liste feitiços por eficiência (poder/mana) > 1.5",
      expectedCommand: "SELECT spell_name FROM mage_spells WHERE (power*1.0/mana_cost) > 1.5;",
      successMessage: "✅ Eficiência mágica comprovada! Você se torna um Arquimago!",
      failureMessage: "❌ Use cálculo na condição",
      hint: "Dica: SELECT com (power/mana_cost) > valor",
      image: "/assets/mage-scene.jpg"
    }
  ],
  rogue: [
    {
      description: "📜 Capítulo 1: O Ladino - Crie sua bolsa de ferramentas (tabela 'rogue_gear')",
      expectedCommand: "CREATE TABLE rogue_gear (item_name VARCHAR(50), stealth_level INT);",
      successMessage: "✅ Bolsa criada! Hora de coletar equipamentos.",
      failureMessage: "❌ Use: CREATE TABLE rogue_gear (item_name VARCHAR(50), stealth_level INT);",
      hint: "Dica: Crie tabela com colunas para nome e nível",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🔍 Verifique itens com stealth_level > 0 (sua bolsa está vazia?)",
      expectedCommand: "SELECT * FROM rogue_gear WHERE stealth_level > 0;",
      successMessage: "✅ Busca concluída! Hora de conseguir seu primeiro equipamento.",
      failureMessage: "❌ Use SELECT mesmo com tabela vazia",
      hint: "Dica: SELECT funciona mesmo sem resultados",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🗝️ Roube uma 'Ganzuá Velha' (stealth: 3) do mercador distraído",
      expectedCommand: "INSERT INTO rogue_gear VALUES ('Ganzuá Velha', 3);",
      successMessage: "✅ Primeira aquisição! Hora de praticar lockpicking.",
      failureMessage: "❌ Adicione o item à tabela",
      hint: "Dica: INSERT INTO tabela VALUES ('nome', valor)",
      image: "/assets/rogue-scene"
    },
    {
      description: "🔍 Liste todos itens com stealth_level entre 2 e 5",
      expectedCommand: "SELECT * FROM rogue_gear WHERE stealth_level BETWEEN 2 AND 5;",
      successMessage: "✅ Itens identificados! Você está pronto para se infiltrar.",
      failureMessage: "❌ Use BETWEEN para faixas de valores",
      hint: "Dica: SELECT com BETWEEN valor1 AND valor2",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🏰 Missão: Infiltre-se no castelo! Atualize sua ganzuá para 'Ganzuá Mestra' (stealth: 7)",
      expectedCommand: "UPDATE rogue_gear SET item_name = 'Ganzuá Mestra', stealth_level = 7 WHERE item_name = 'Ganzuá Velha';",
      successMessage: "✅ Infiltração bem-sucedida! Você encontra um 'Mapa do Tesouro'.",
      failureMessage: "❌ Atualize nome e nível simultaneamente",
      hint: "Dica: UPDATE com SET múltiplo e WHERE",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🔍 Verifique se tem itens com stealth_level >= 5 para a próxima missão",
      expectedCommand: "SELECT COUNT(*) FROM rogue_gear WHERE stealth_level >= 5;",
      successMessage: "✅ Equipamento adequado! Você pode enfrentar a Guarda Real.",
      failureMessage: "❌ Use COUNT para verificar quantidade",
      hint: "Dica: SELECT COUNT(*) FROM tabela WHERE condição",
      image: "/assets/rogue-scene.jpg"
    }
  ]
};
