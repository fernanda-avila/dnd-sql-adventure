export const missions = {
  warrior: [
    {
      description: "📜 Capítulo 1: O Início - Crie seu inventário de guerreiro (tabela 'inventario_guerreiro')",
      expectedCommand: "CREATE TABLE inventario_guerreiro (nome_item VARCHAR(50), forca INT);",
      successMessage: "✅ Inventário criado! Agora você pode começar sua jornada.",
      failureMessage: "❌ Use: CREATE TABLE inventario_guerreiro (nome_item VARCHAR(50), forca INT);",
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
      expectedCommand: "INSERT INTO inventario_guerreiro VALUES ('Espada de Madeira', 5);",
      successMessage: "✅ Primeira arma adquirida! Hora de treinar.",
      failureMessage: "❌ Use INSERT INTO inventario_guerreiro VALUES ('Espada de Madeira', 5);",
      hint: "Dica: INSERT INTO tabela VALUES (valor1, valor2)",
      image: "/assets/warrior-scene.jpg"  
    },
    {
      description: "🔍 Confira se a Espada de Madeira está no inventário",
      expectedCommand: "SELECT * FROM inventario_guerreiro WHERE nome_item = 'Espada de Madeira';",
      successMessage: "✅ Arma confirmada! Você está pronto para sua primeira missão.",
      failureMessage: "❌ Use SELECT para verificar itens",
      hint: "Dica: SELECT * FROM tabela WHERE condição",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "⚔️ Missão: Derrote Goblin! Verifique se tem armas com força > 3",
      expectedCommand: "SELECT * FROM inventario_guerreiro WHERE forca > 3;",
      successMessage: "✅ Missão cumprida! Você ganha uma Espada de Ferro (força: 15).",
      failureMessage: "❌ Use SELECT com condição numérica",
      hint: "Dica: SELECT * FROM tabela WHERE coluna > valor",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "🔄 Substitua sua espada velha pela nova Espada de Ferro",
      expectedCommand: "DELETE FROM inventario_guerreiro; INSERT INTO inventario_guerreiro VALUES ('Espada de Ferro', 15);",
      successMessage: "✅ Arma atualizada! Você se sente mais forte.",
      failureMessage: "❌ Remova a antiga primeiro, depois insira a nova",
      hint: "Dica: Dois comandos - DELETE depois INSERT",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "🔍 Liste todos seus itens para preparar a próxima missão",
      expectedCommand: "SELECT * FROM inventario_guerreiro;",
      successMessage: "✅ Preparação completa! Hora de enfrentar o Orc Chefe.",
      failureMessage: "❌ Use SELECT * para ver todos os itens",
      hint: "Dica: SELECT * FROM tabela",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "🏆 Derrote o Orc Chefe! Atualize sua espada para 'Espada de Aço' (força: 30)",
      expectedCommand: "UPDATE inventario_guerreiro SET nome_item = 'Espada de Aço', forca = 30;",
      successMessage: "✅ Vitória épica! Sua espada foi aprimorada.",
      failureMessage: "❌ Use UPDATE para modificar múltiplas colunas",
      hint: "Dica: UPDATE tabela SET col1=valor1, col2=valor2",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "🐉 Desafio Final: Verifique se tem equipamento suficiente (força total >= 30)",
      expectedCommand: "SELECT SUM(forca) FROM inventario_guerreiro;",
      successMessage: "✅ Força suficiente! Você derrota o Dragão e vira lenda!",
      failureMessage: "❌ Use SUM para calcular força total",
      hint: "Dica: SELECT SUM(coluna) FROM tabela",
      image: "/assets/warrior-scene.jpg"
    }
  ],

  mage: [
    {
      description: "📜 Capítulo 1: O Aprendiz - Crie seu grimório (tabela 'magias_mago')",
      expectedCommand: "CREATE TABLE magias_mago (nome_magia VARCHAR(50), poder INT, custo_mana INT);",
      successMessage: "✅ Grimório criado! O caminho da magia começa.",
      failureMessage: "❌ Use: CREATE TABLE magias_mago (nome_magia VARCHAR(50), poder INT, custo_mana INT);",
      hint: "Dica: Crie tabela com múltiplas colunas",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "🔍 Verifique a estrutura do seu grimório (mostre as colunas)",
      expectedCommand: "PRAGMA table_info(magias_mago);",
      successMessage: "✅ Estrutura verificada! Pronto para aprender feitiços.",
      failureMessage: "❌ Use PRAGMA para verificar colunas",
      hint: "Dica: PRAGMA table_info(nome_tabela);",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "✨ Aprenda seu primeiro feitiço: 'Luz' (poder: 5, custo: 2)",
      expectedCommand: "INSERT INTO magias_mago VALUES ('Luz', 5, 2);",
      successMessage: "✅ Feitiço aprendido! Agora você pode iluminar caminhos.",
      failureMessage: "❌ Use INSERT com múltiplos valores",
      hint: "Dica: INSERT INTO tabela VALUES (valor1, valor2, valor3)",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "🔍 Liste todos feitiços com custo de mana <= 5",
      expectedCommand: "SELECT * FROM magias_mago WHERE custo_mana <= 5;",
      successMessage: "✅ Feitiços disponíveis confirmados!",
      failureMessage: "❌ Use SELECT com condição",
      hint: "Dica: SELECT * FROM tabela WHERE coluna <= valor",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "🔥 Derrote os Ratos Mutantes! Aprenda 'Bola de Fogo' (poder: 20, custo: 10)",
      expectedCommand: "INSERT INTO magias_mago VALUES ('Bola de Fogo', 20, 10);",
      successMessage: "✅ Inimigos derrotados! Novo feitiço poderoso aprendido.",
      failureMessage: "❌ Adicione o novo feitiço",
      hint: "Dica: INSERT INTO tabela VALUES ('Bola de Fogo', 20, 10)",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "🔍 Compare os feitiços: Liste os com poder > 10",
      expectedCommand: "SELECT nome_magia FROM magias_mago WHERE poder > 10;",
      successMessage: "✅ Feitiços poderosos identificados!",
      failureMessage: "❌ Use SELECT com colunas específicas",
      hint: "Dica: SELECT coluna FROM tabela WHERE condição",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "📚 Encontre o Tomo Antigo e atualize 'Luz' para 'Luz Solar' (poder: 15)",
      expectedCommand: "UPDATE magias_mago SET nome_magia = 'Luz Solar', poder = 15 WHERE nome_magia = 'Luz';",
      successMessage: "✅ Feitiço aprimorado! Seu conhecimento cresce.",
      failureMessage: "❌ Use UPDATE com condição específica",
      hint: "Dica: UPDATE tabela SET col1=valor WHERE condição",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "⚡ Desafio Final: Liste feitiços por eficiência (poder/custo_mana) > 1.5",
      expectedCommand: "SELECT nome_magia FROM magias_mago WHERE (poder*1.0/custo_mana) > 1.5;",
      successMessage: "✅ Eficiência mágica comprovada! Você se torna um Arquimago!",
      failureMessage: "❌ Use cálculo na condição",
      hint: "Dica: SELECT com (poder/custo_mana) > valor",
      image: "/assets/mage-scene.jpg"
    }
  ],

  rogue: [
    {
      description: "📜 Capítulo 1: O Ladino - Crie sua bolsa de ferramentas (tabela 'equipamento_ladino') que inclua nome_item VARCHAR(50) e nivel_furtividade INT",
      expectedCommand: "CREATE TABLE equipamento_ladino (nome_item VARCHAR(50), nivel_furtividade INT);",
      successMessage: "✅ Bolsa criada! Hora de coletar equipamentos.",
      failureMessage: "❌ Use: CREATE TABLE equipamento_ladino (nome_item VARCHAR(50), nivel_furtividade INT);",
      hint: "Dica: Crie tabela com colunas para nome e nível",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🔍 Verifique itens com nível de furtividade > 0 (sua bolsa está vazia?)",
      expectedCommand: "SELECT * FROM equipamento_ladino WHERE nivel_furtividade > 0;",
      successMessage: "✅ Busca concluída! Hora de conseguir seu primeiro equipamento.",
      failureMessage: "❌ Use SELECT mesmo com tabela vazia",
      hint: "Dica: SELECT funciona mesmo sem resultados",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🗝️ Roube uma 'Ganzuá Velha' (furtividade: 3) do mercador distraído",
      expectedCommand: "INSERT INTO equipamento_ladino VALUES ('Ganzuá Velha', 3);",
      successMessage: "✅ Item roubado! Seu kit está começando.",
      failureMessage: "❌ Use INSERT para adicionar o item",
      hint: "Dica: INSERT INTO tabela VALUES ('nome', valor)",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🔍 Liste os itens com nível de furtividade >= 3",
      expectedCommand: "SELECT * FROM equipamento_ladino WHERE nivel_furtividade >= 3;",
      successMessage: "✅ Itens confiáveis no kit!",
      failureMessage: "❌ Use SELECT com condição >= ",
      hint: "Dica: SELECT * FROM tabela WHERE coluna >= valor",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🗡️ Troque a 'Ganzuá Velha' por 'Adaga Afiada' (furtividade: 10)",
      expectedCommand: "UPDATE equipamento_ladino SET nome_item = 'Adaga Afiada', nivel_furtividade = 10 WHERE nome_item = 'Ganzuá Velha';",
      successMessage: "✅ Equipamento atualizado! Você está mais letal.",
      failureMessage: "❌ Use UPDATE com condição WHERE",
      hint: "Dica: UPDATE tabela SET colunas WHERE condição",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🔍 Conte quantos itens você tem na bolsa",
      expectedCommand: "SELECT COUNT(*) FROM equipamento_ladino;",
      successMessage: "✅ Bolsa cheia! Pronto para a missão.",
      failureMessage: "❌ Use COUNT para contar registros",
      hint: "Dica: SELECT COUNT(*) FROM tabela",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🚪 Missão: Delete o item 'Adaga Afiada' para passar despercebido",
      expectedCommand: "DELETE FROM equipamento_ladino WHERE nome_item = 'Adaga Afiada';",
      successMessage: "✅ Passagem limpa! Missão concluída.",
      failureMessage: "❌ Use DELETE com condição WHERE",
      hint: "Dica: DELETE FROM tabela WHERE condição",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🔍 Verifique se a bolsa está vazia agora",
      expectedCommand: "SELECT * FROM equipamento_ladino;",
      successMessage: "✅ Bolsa vazia e pronta para o próximo roubo!",
      failureMessage: "❌ Use SELECT para listar itens",
      hint: "Dica: SELECT * FROM tabela",
      image: "/assets/rogue-scene.jpg"
    }
  ]
};
