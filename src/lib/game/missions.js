export const missions = {
  warrior: [
    {
      description: "📜 Crie seu inventário de guerreiro (chame de inventario_guerreiro)",
      expectedCommand: "CREATE TABLE inventario_guerreiro (nome_item VARCHAR(50), forca INT);",
      successMessage: "✅ Inventário criado! Agora você pode começar sua jornada.",
      failureMessage: "❌ Use: CREATE TABLE inventario_guerreiro (nome_item VARCHAR(50), forca INT);",
      hint: "Dica: Comece com CREATE TABLE",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "🔍 Veja se sua tabela foi criada (mostre as tabelas)",
      expectedCommand: "SHOW TABLES;",
      successMessage: "✅ Tabela encontrada! Seu inventário está pronto para uso.",
      failureMessage: "❌ Use: SHOW TABLES;",
      hint: "Dica: SHOW TABLES mostra o que foi criado",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "🛡️ Adicione a Espada de Madeira ao inventário",
      expectedCommand: "INSERT INTO inventario_guerreiro (nome_item, forca) VALUES ('Espada de Madeira', 5);",
      successMessage: "✅ Primeira arma adquirida! Hora de treinar.",
      failureMessage: "❌ Use: INSERT INTO inventario_guerreiro (nome_item, forca) VALUES ('Espada de Madeira', 5);",
      hint: "Dica: use INSERT INTO nome_tabela (colunas) VALUES (valores)",
      image: "/assets/warrior-scene.jpg"  
    },
    {
      description: "🔍 Veja tudo que tem no seu inventário",
      expectedCommand: "SELECT * FROM inventario_guerreiro;",
      successMessage: "✅ Arma confirmada! Você está pronto para sua primeira missão.",
      failureMessage: "❌ Use: SELECT * FROM inventario_guerreiro;",
      hint: "Dica: SELECT * mostra tudo da tabela",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "⚔️ Missão: veja itens com força maior que 3",
      expectedCommand: "SELECT * FROM inventario_guerreiro WHERE forca > 3;",
      successMessage: "✅ Missão cumprida! Você ganha uma Espada de Ferro.",
      failureMessage: "❌ Use: SELECT * FROM inventario_guerreiro WHERE forca > 3;",
      hint: "Dica: use WHERE para filtrar os resultados",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "🔄 Atualize seu inventário com uma nova espada (apague a antiga e adicione a nova)",
      expectedCommand: "DELETE FROM inventario_guerreiro; INSERT INTO inventario_guerreiro (nome_item, forca) VALUES ('Espada de Ferro', 15);",
      successMessage: "✅ Arma atualizada! Você se sente mais forte.",
      failureMessage: "❌ Use DELETE para apagar e INSERT para adicionar a nova espada",
      hint: "Dica: dois comandos — DELETE e depois INSERT",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "🔍 Mostre tudo de novo no seu inventário",
      expectedCommand: "SELECT * FROM inventario_guerreiro;",
      successMessage: "✅ Preparação completa! Hora de enfrentar o Orc Chefe.",
      failureMessage: "❌ Use: SELECT * FROM inventario_guerreiro;",
      hint: "Dica: SELECT * mostra tudo da tabela",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "🏆 Atualize o nome da sua arma para Espada de Aço",
      expectedCommand: "UPDATE inventario_guerreiro SET nome_item = 'Espada de Aço', forca = 30 WHERE nome_item = 'Espada de Ferro';",
      successMessage: "✅ Vitória épica! Sua espada foi aprimorada.",
      failureMessage: "❌ Use: UPDATE inventario_guerreiro SET nome_item = 'Espada de Aço', forca = 30 WHERE nome_item = 'Espada de Ferro';",
      hint: "Dica: UPDATE nome_tabela SET coluna = valor WHERE condição",
      image: "/assets/warrior-scene.jpg"
    },
    {
      description: "🐉 Verifique se a força total é suficiente (use somar)",
      expectedCommand: "SELECT SUM(forca) FROM inventario_guerreiro;",
      successMessage: "✅ Força suficiente! Você derrota o Dragão!",
      failureMessage: "❌ Use: SELECT SUM(forca) FROM inventario_guerreiro;",
      hint: "Dica: SUM soma os valores de uma coluna numérica",
      image: "/assets/warrior-scene.jpg"
    }
  ],

  mage: [
    {
      description: "📜 Crie seu grimório de magias (tabela magias_mago)",
      expectedCommand: "CREATE TABLE magias_mago (nome_magia VARCHAR(50), poder INT, custo_mana INT);",
      successMessage: "✅ Grimório criado! O caminho da magia começa.",
      failureMessage: "❌ Use: CREATE TABLE magias_mago (nome_magia VARCHAR(50), poder INT, custo_mana INT);",
      hint: "Dica: Crie uma tabela com 3 colunas",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "🔍 Veja as colunas da sua tabela",
      expectedCommand: "DESCRIBE magias_mago;",
      successMessage: "✅ Estrutura verificada! Pronto para aprender feitiços.",
      failureMessage: "❌ Use: DESCRIBE magias_mago;",
      hint: "Dica: DESCRIBE nome_da_tabela",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "✨ Aprenda o feitiço 'Luz' com poder 5 e custo de mana 2",
      expectedCommand: "INSERT INTO magias_mago (nome_magia, poder, custo_mana) VALUES ('Luz', 5, 2);",
      successMessage: "✅ Feitiço aprendido! Agora você pode iluminar caminhos.",
      failureMessage: "❌ Use: INSERT INTO magias_mago (...) VALUES (...)",
      hint: "Dica: Use INSERT INTO + colunas + VALUES",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "🔍 Veja as magias com custo de mana até 5",
      expectedCommand: "SELECT * FROM magias_mago WHERE custo_mana <= 5;",
      successMessage: "✅ Feitiços disponíveis confirmados!",
      failureMessage: "❌ Use: SELECT * FROM magias_mago WHERE custo_mana <= 5;",
      hint: "Dica: WHERE custo_mana <= 5",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "🔥 Aprenda 'Bola de Fogo' com poder 20 e custo 10",
      expectedCommand: "INSERT INTO magias_mago (nome_magia, poder, custo_mana) VALUES ('Bola de Fogo', 20, 10);",
      successMessage: "✅ Inimigos derrotados! Novo feitiço aprendido.",
      failureMessage: "❌ Use: INSERT INTO magias_mago (...) VALUES (...)",
      hint: "Dica: INSERT INTO magias_mago VALUES ('nome', poder, custo)",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "🔍 Veja magias com poder maior que 10",
      expectedCommand: "SELECT nome_magia FROM magias_mago WHERE poder > 10;",
      successMessage: "✅ Feitiços poderosos identificados!",
      failureMessage: "❌ Use: SELECT nome_magia FROM magias_mago WHERE poder > 10;",
      hint: "Dica: WHERE poder > 10",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "📚 Atualize 'Luz' para 'Luz Solar' com poder 15",
      expectedCommand: "UPDATE magias_mago SET nome_magia = 'Luz Solar', poder = 15 WHERE nome_magia = 'Luz';",
      successMessage: "✅ Feitiço aprimorado! Seu conhecimento cresce.",
      failureMessage: "❌ Use: UPDATE com SET e WHERE",
      hint: "Dica: UPDATE tabela SET coluna=valor WHERE condição",
      image: "/assets/mage-scene.jpg"
    },
    {
      description: "⚡ Liste magias com eficiência (poder/custo) maior que 1.5",
      expectedCommand: "SELECT nome_magia FROM magias_mago WHERE (poder*1.0/custo_mana) > 1.5;",
      successMessage: "✅ Eficiência mágica comprovada! Você se torna um Arquimago!",
      failureMessage: "❌ Use: SELECT com cálculo",
      hint: "Dica: SELECT nome_magia WHERE (poder/custo) > 1.5",
      image: "/assets/mage-scene.jpg"
    }
  ],

  rogue: [
    {
      description: "📜 Crie sua bolsa de ferramentas (tabela equipamento_ladino)",
      expectedCommand: "CREATE TABLE equipamento_ladino (nome_item VARCHAR(50), nivel_furtividade INT);",
      successMessage: "✅ Bolsa criada! Hora de coletar equipamentos.",
      failureMessage: "❌ Use: CREATE TABLE equipamento_ladino (nome_item VARCHAR(50), nivel_furtividade INT);",
      hint: "Dica: Crie a tabela com 2 colunas",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🔍 Veja os itens com furtividade maior que 0",
      expectedCommand: "SELECT * FROM equipamento_ladino WHERE nivel_furtividade > 0;",
      successMessage: "✅ Busca concluída! Hora de conseguir seu primeiro equipamento.",
      failureMessage: "❌ Use: SELECT * FROM equipamento_ladino WHERE nivel_furtividade > 0;",
      hint: "Dica: Mesmo que esteja vazia, SELECT funciona",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🗝️ Adicione a Ganzuá Velha com furtividade 3",
      expectedCommand: "INSERT INTO equipamento_ladino (nome_item, nivel_furtividade) VALUES ('Ganzuá Velha', 3);",
      successMessage: "✅ Item roubado! Seu kit está começando.",
      failureMessage: "❌ Use: INSERT INTO equipamento_ladino (...) VALUES (...)",
      hint: "Dica: INSERT INTO tabela (colunas) VALUES (valores)",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🔍 Veja itens com furtividade maior ou igual a 3",
      expectedCommand: "SELECT * FROM equipamento_ladino WHERE nivel_furtividade >= 3;",
      successMessage: "✅ Itens confiáveis no kit!",
      failureMessage: "❌ Use: SELECT * WHERE nivel_furtividade >= 3;",
      hint: "Dica: WHERE >= 3",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🗡️ Troque a Ganzuá Velha por Adaga Afiada (furtividade 10)",
      expectedCommand: "UPDATE equipamento_ladino SET nome_item = 'Adaga Afiada', nivel_furtividade = 10 WHERE nome_item = 'Ganzuá Velha';",
      successMessage: "✅ Equipamento atualizado! Você está mais letal.",
      failureMessage: "❌ Use: UPDATE com WHERE",
      hint: "Dica: UPDATE + SET + WHERE",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🔍 Conte quantos itens tem na bolsa",
      expectedCommand: "SELECT COUNT(*) FROM equipamento_ladino;",
      successMessage: "✅ Bolsa cheia! Pronto para a missão.",
      failureMessage: "❌ Use: SELECT COUNT(*) FROM equipamento_ladino;",
      hint: "Dica: COUNT conta registros",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🚪 Delete a Adaga Afiada para passar despercebido",
      expectedCommand: "DELETE FROM equipamento_ladino WHERE nome_item = 'Adaga Afiada';",
      successMessage: "✅ Passagem limpa! Missão concluída.",
      failureMessage: "❌ Use: DELETE FROM equipamento_ladino WHERE nome_item = 'Adaga Afiada';",
      hint: "Dica: DELETE com WHERE",
      image: "/assets/rogue-scene.jpg"
    },
    {
      description: "🔍 Veja se a bolsa está vazia",
      expectedCommand: "SELECT * FROM equipamento_ladino;",
      successMessage: "✅ Bolsa vazia e pronta para o próximo roubo!",
      failureMessage: "❌ Use: SELECT * FROM equipamento_ladino;",
      hint: "Dica: SELECT * mostra tudo da tabela",
      image: "/assets/rogue-scene.jpg"
    }
  ]
};
