export const missions = {
  warrior: [
    {
      description: "O Dragão Sombrio ataca! Use sua Espada de Aço para atacar.",
      expectedCommand: "SELECT * FROM warrior_inventory WHERE item_name = 'Espada de Aço';",
      successMessage: "Ataque com Espada de Aço bem-sucedido!",
      failureMessage: "Você precisa usar SELECT para verificar se tem a Espada de Aço.",
      hint: "SELECT * FROM warrior_inventory WHERE item_name = 'Espada de Aço';"
    },
    {
      description: "O Dragão destruiu sua Espada de Aço! Você perdeu sua arma.",
      expectedCommand: "DELETE FROM warrior_inventory WHERE item_name = 'Espada de Aço';",
      successMessage: "Espada de Aço removida do inventário, você está desarmado.",
      failureMessage: "Use DELETE para remover a Espada de Aço do inventário.",
      hint: "DELETE FROM warrior_inventory WHERE item_name = 'Espada de Aço';"
    },
    {
      description: "Você precisa encontrar a Espada de Dragão para derrotar o inimigo.",
      expectedCommand: "SELECT * FROM warrior_inventory WHERE item_name = 'Espada de Dragão';",
      successMessage: "Espada de Dragão encontrada no inventário!",
      failureMessage: "A Espada de Dragão não está no inventário. Use SELECT para procurar.",
      hint: "SELECT * FROM warrior_inventory WHERE item_name = 'Espada de Dragão';"
    },
    {
      description: "Aprimore a Espada de Dragão para torná-la lendária e vencer o Dragão Sombrio.",
      expectedCommand: "UPDATE warrior_inventory SET item_name = 'Espada de Dragão Lendária' WHERE item_name = 'Espada de Dragão';",
      successMessage: "Espada de Dragão aprimorada para versão lendária!",
      failureMessage: "Use UPDATE para aprimorar a Espada de Dragão.",
      hint: "UPDATE warrior_inventory SET item_name = 'Espada de Dragão Lendária' WHERE item_name = 'Espada de Dragão';"
    },
    {
      description: "Você encontra um escudo antigo. Pegue-o para aumentar sua defesa.",
      expectedCommand: "SELECT * FROM warrior_inventory WHERE item_name = 'Escudo Antigo';",
      successMessage: "Escudo Antigo encontrado! Defesa aumentada.",
      failureMessage: "Use SELECT para procurar o Escudo Antigo.",
      hint: "SELECT * FROM warrior_inventory WHERE item_name = 'Escudo Antigo';"
    },
    {
      description: "O escudo está danificado. Remova-o do seu inventário.",
      expectedCommand: "DELETE FROM warrior_inventory WHERE item_name = 'Escudo Antigo';",
      successMessage: "Escudo Antigo removido do inventário.",
      failureMessage: "Use DELETE para remover o escudo danificado.",
      hint: "DELETE FROM warrior_inventory WHERE item_name = 'Escudo Antigo';"
    },
    {
      description: "Você encontra uma Poção de Cura. Adicione-a ao seu inventário.",
      expectedCommand: "SELECT * FROM warrior_inventory WHERE item_name = 'Poção de Cura';",
      successMessage: "Poção de Cura adicionada ao inventário!",
      failureMessage: "Use SELECT para verificar se a Poção de Cura está no inventário.",
      hint: "SELECT * FROM warrior_inventory WHERE item_name = 'Poção de Cura';"
    },
    {
      description: "Use a Poção de Cura para recuperar sua vida.",
      expectedCommand: "DELETE FROM warrior_inventory WHERE item_name = 'Poção de Cura';",
      successMessage: "Poção de Cura usada, vida recuperada.",
      failureMessage: "Use DELETE para remover a Poção de Cura após o uso.",
      hint: "DELETE FROM warrior_inventory WHERE item_name = 'Poção de Cura';"
    },
    {
      description: "Encontre e equipe a Armadura de Ouro para enfrentar o chefe final.",
      expectedCommand: "SELECT * FROM warrior_inventory WHERE item_name = 'Armadura de Ouro';",
      successMessage: "Armadura de Ouro equipada! Pronto para a batalha final.",
      failureMessage: "Use SELECT para procurar a Armadura de Ouro.",
      hint: "SELECT * FROM warrior_inventory WHERE item_name = 'Armadura de Ouro';"
    }
  ],
  mage: [
    {
      description: "O Lorde das Trevas aparece! Lance sua Bola de Fogo para atacar.",
      expectedCommand: "SELECT * FROM mage_spells WHERE spell_name = 'Bola de Fogo';",
      successMessage: "Bola de Fogo lançada com sucesso!",
      failureMessage: "Você precisa usar SELECT para verificar se tem a Bola de Fogo.",
      hint: "SELECT * FROM mage_spells WHERE spell_name = 'Bola de Fogo';"
    },
    {
      description: "A magia não foi suficiente! Aprimore a Bola de Fogo para aumentar seu poder.",
      expectedCommand: "UPDATE mage_spells SET spell_name = 'Bola de Fogo Suprema' WHERE spell_name = 'Bola de Fogo';",
      successMessage: "Magia atualizada para Bola de Fogo Suprema!",
      failureMessage: "Use UPDATE para aprimorar a magia no grimório.",
      hint: "UPDATE mage_spells SET spell_name = 'Bola de Fogo Suprema' WHERE spell_name = 'Bola de Fogo';"
    },
    {
      description: "Lance a Bola de Fogo Suprema para derrotar o Lorde das Trevas.",
      expectedCommand: "SELECT * FROM mage_spells WHERE spell_name = 'Bola de Fogo Suprema';",
      successMessage: "Bola de Fogo Suprema lançada, inimigo derrotado!",
      failureMessage: "Use SELECT para encontrar a magia aprimorada no grimório.",
      hint: "SELECT * FROM mage_spells WHERE spell_name = 'Bola de Fogo Suprema';"
    },
    {
      description: "Após a batalha, a magia se perde. Remova a Bola de Fogo Suprema do grimório.",
      expectedCommand: "DELETE FROM mage_spells WHERE spell_name = 'Bola de Fogo Suprema';",
      successMessage: "Magia removida do grimório.",
      failureMessage: "Use DELETE para remover a magia do grimório.",
      hint: "DELETE FROM mage_spells WHERE spell_name = 'Bola de Fogo Suprema';"
    },
    {
      description: "Você encontra um novo feitiço: Gelo Eterno. Adicione ao grimório.",
      expectedCommand: "SELECT * FROM mage_spells WHERE spell_name = 'Gelo Eterno';",
      successMessage: "Feitiço Gelo Eterno adicionado ao grimório!",
      failureMessage: "Use SELECT para verificar se o feitiço está no grimório.",
      hint: "SELECT * FROM mage_spells WHERE spell_name = 'Gelo Eterno';"
    },
    {
      description: "O feitiço Gelo Eterno está fraco. Aprimore-o.",
      expectedCommand: "UPDATE mage_spells SET spell_name = 'Gelo Eterno Supremo' WHERE spell_name = 'Gelo Eterno';",
      successMessage: "Feitiço aprimorado para Gelo Eterno Supremo!",
      failureMessage: "Use UPDATE para aprimorar o feitiço.",
      hint: "UPDATE mage_spells SET spell_name = 'Gelo Eterno Supremo' WHERE spell_name = 'Gelo Eterno';"
    },
    {
      description: "Use o Gelo Eterno Supremo para congelar o inimigo.",
      expectedCommand: "SELECT * FROM mage_spells WHERE spell_name = 'Gelo Eterno Supremo';",
      successMessage: "Inimigo congelado com Gelo Eterno Supremo!",
      failureMessage: "Use SELECT para encontrar o feitiço aprimorado.",
      hint: "SELECT * FROM mage_spells WHERE spell_name = 'Gelo Eterno Supremo';"
    },
    {
      description: "Após a batalha, remova o Gelo Eterno Supremo do grimório.",
      expectedCommand: "DELETE FROM mage_spells WHERE spell_name = 'Gelo Eterno Supremo';",
      successMessage: "Feitiço removido do grimório.",
      failureMessage: "Use DELETE para remover o feitiço do grimório.",
      hint: "DELETE FROM mage_spells WHERE spell_name = 'Gelo Eterno Supremo';"
    },
    {
      description: "Encontre e equipe o Cajado Arcano para aumentar seu poder mágico.",
      expectedCommand: "SELECT * FROM mage_spells WHERE spell_name = 'Cajado Arcano';",
      successMessage: "Cajado Arcano equipado! Poder mágico aumentado.",
      failureMessage: "Use SELECT para procurar o Cajado Arcano.",
      hint: "SELECT * FROM mage_spells WHERE spell_name = 'Cajado Arcano';"
    }
  ],
  rogue: [
    {
      description: "Você está diante da porta trancada da Fortaleza Negra. Use sua Ganzuá para arrombar.",
      expectedCommand: "SELECT * FROM rogue_tools WHERE tool_name = 'Ganzuá';",
      successMessage: "Porta arrombada com sucesso usando a Ganzuá!",
      failureMessage: "Use SELECT para verificar se você tem a Ganzuá.",
      hint: "SELECT * FROM rogue_tools WHERE tool_name = 'Ganzuá';"
    },
    {
      description: "Durante a fuga, você perde a Ganzuá. Ela não está mais com você.",
      expectedCommand: "DELETE FROM rogue_tools WHERE tool_name = 'Ganzuá';",
      successMessage: "Ganzuá removida do kit, você está vulnerável.",
      failureMessage: "Use DELETE para remover a Ganzuá do kit.",
      hint: "DELETE FROM rogue_tools WHERE tool_name = 'Ganzuá';"
    },
    {
      description: "Para um ataque surpresa, você precisa da Adaga Sombria. Procure-a no kit.",
      expectedCommand: "SELECT * FROM rogue_tools WHERE tool_name = 'Adaga Sombria';",
      successMessage: "Adaga Sombria encontrada, ataque furtivo pronto!",
      failureMessage: "Adaga Sombria não está no kit. Use SELECT para procurar.",
      hint: "SELECT * FROM rogue_tools WHERE tool_name = 'Adaga Sombria';"
    },
    {
      description: "Aprimore a Adaga Sombria para garantir a vitória na missão.",
      expectedCommand: "UPDATE rogue_tools SET tool_name = 'Adaga Sombria Mestra' WHERE tool_name = 'Adaga Sombria';",
      successMessage: "Adaga Sombria aprimorada para versão mestra!",
      failureMessage: "Use UPDATE para aprimorar a Adaga Sombria.",
      hint: "UPDATE rogue_tools SET tool_name = 'Adaga Sombria Mestra' WHERE tool_name = 'Adaga Sombria';"
    },
    {
      description: "Você encontra uma Capa de Invisibilidade. Procure-a no kit.",
      expectedCommand: "SELECT * FROM rogue_tools WHERE tool_name = 'Capa de Invisibilidade';",
      successMessage: "Capa de Invisibilidade encontrada! Agora você pode se esconder.",
      failureMessage: "Use SELECT para procurar a Capa de Invisibilidade.",
      hint: "SELECT * FROM rogue_tools WHERE tool_name = 'Capa de Invisibilidade';"
    }
  ]
};

export default missions;
missions.warrior.push(
    {
        description: "Você encontra uma Lança de Prata. Adicione-a ao seu inventário.",
        expectedCommand: "SELECT * FROM warrior_inventory WHERE item_name = 'Lança de Prata';",
        successMessage: "Lança de Prata adicionada ao inventário!",
        failureMessage: "Use SELECT para verificar se a Lança de Prata está no inventário.",
        hint: "SELECT * FROM warrior_inventory WHERE item_name = 'Lança de Prata';"
    },
    {
        description: "A Lança de Prata está enferrujada. Remova-a do inventário.",
        expectedCommand: "DELETE FROM warrior_inventory WHERE item_name = 'Lança de Prata';",
        successMessage: "Lança de Prata removida do inventário.",
        failureMessage: "Use DELETE para remover a Lança de Prata.",
        hint: "DELETE FROM warrior_inventory WHERE item_name = 'Lança de Prata';"
    },
    {
        description: "Você encontra um Elmo de Ferro. Procure-o no inventário.",
        expectedCommand: "SELECT * FROM warrior_inventory WHERE item_name = 'Elmo de Ferro';",
        successMessage: "Elmo de Ferro encontrado! Proteção aumentada.",
        failureMessage: "Use SELECT para procurar o Elmo de Ferro.",
        hint: "SELECT * FROM warrior_inventory WHERE item_name = 'Elmo de Ferro';"
    },
    {
        description: "Aprimore o Elmo de Ferro para Elmo de Ferro Reforçado.",
        expectedCommand: "UPDATE warrior_inventory SET item_name = 'Elmo de Ferro Reforçado' WHERE item_name = 'Elmo de Ferro';",
        successMessage: "Elmo de Ferro aprimorado para versão reforçada!",
        failureMessage: "Use UPDATE para aprimorar o Elmo de Ferro.",
        hint: "UPDATE warrior_inventory SET item_name = 'Elmo de Ferro Reforçado' WHERE item_name = 'Elmo de Ferro';"
    },
    {
        description: "Remova o Elmo de Ferro Reforçado após a batalha.",
        expectedCommand: "DELETE FROM warrior_inventory WHERE item_name = 'Elmo de Ferro Reforçado';",
        successMessage: "Elmo de Ferro Reforçado removido do inventário.",
        failureMessage: "Use DELETE para remover o Elmo de Ferro Reforçado.",
        hint: "DELETE FROM warrior_inventory WHERE item_name = 'Elmo de Ferro Reforçado';"
    }
);

missions.mage.push(
    {
        description: "Você descobre o feitiço Raio Arcano. Adicione ao grimório.",
        expectedCommand: "SELECT * FROM mage_spells WHERE spell_name = 'Raio Arcano';",
        successMessage: "Feitiço Raio Arcano adicionado ao grimório!",
        failureMessage: "Use SELECT para verificar se o feitiço está no grimório.",
        hint: "SELECT * FROM mage_spells WHERE spell_name = 'Raio Arcano';"
    },
    {
        description: "O Raio Arcano está fraco. Aprimore-o.",
        expectedCommand: "UPDATE mage_spells SET spell_name = 'Raio Arcano Supremo' WHERE spell_name = 'Raio Arcano';",
        successMessage: "Feitiço aprimorado para Raio Arcano Supremo!",
        failureMessage: "Use UPDATE para aprimorar o feitiço.",
        hint: "UPDATE mage_spells SET spell_name = 'Raio Arcano Supremo' WHERE spell_name = 'Raio Arcano';"
    },
    {
        description: "Use o Raio Arcano Supremo para atacar o inimigo.",
        expectedCommand: "SELECT * FROM mage_spells WHERE spell_name = 'Raio Arcano Supremo';",
        successMessage: "Inimigo atingido com Raio Arcano Supremo!",
        failureMessage: "Use SELECT para encontrar o feitiço aprimorado.",
        hint: "SELECT * FROM mage_spells WHERE spell_name = 'Raio Arcano Supremo';"
    },
    {
        description: "Após o uso, remova o Raio Arcano Supremo do grimório.",
        expectedCommand: "DELETE FROM mage_spells WHERE spell_name = 'Raio Arcano Supremo';",
        successMessage: "Feitiço removido do grimório.",
        failureMessage: "Use DELETE para remover o feitiço do grimório.",
        hint: "DELETE FROM mage_spells WHERE spell_name = 'Raio Arcano Supremo';"
    },
    {
        description: "Encontre e equipe o Manto Místico para proteção extra.",
        expectedCommand: "SELECT * FROM mage_spells WHERE spell_name = 'Manto Místico';",
        successMessage: "Manto Místico equipado! Proteção aumentada.",
        failureMessage: "Use SELECT para procurar o Manto Místico.",
        hint: "SELECT * FROM mage_spells WHERE spell_name = 'Manto Místico';"
    }
);

missions.rogue.push(
    {
        description: "Você encontra uma Bomba de Fumaça. Procure-a no kit.",
        expectedCommand: "SELECT * FROM rogue_tools WHERE tool_name = 'Bomba de Fumaça';",
        successMessage: "Bomba de Fumaça encontrada! Pronto para fuga rápida.",
        failureMessage: "Use SELECT para procurar a Bomba de Fumaça.",
        hint: "SELECT * FROM rogue_tools WHERE tool_name = 'Bomba de Fumaça';"
    },
    {
        description: "Use a Bomba de Fumaça para escapar de um inimigo.",
        expectedCommand: "DELETE FROM rogue_tools WHERE tool_name = 'Bomba de Fumaça';",
        successMessage: "Bomba de Fumaça usada, fuga bem-sucedida.",
        failureMessage: "Use DELETE para remover a Bomba de Fumaça após o uso.",
        hint: "DELETE FROM rogue_tools WHERE tool_name = 'Bomba de Fumaça';"
    },
    {
        description: "Você encontra uma Armadilha de Urso. Adicione ao kit.",
        expectedCommand: "SELECT * FROM rogue_tools WHERE tool_name = 'Armadilha de Urso';",
        successMessage: "Armadilha de Urso adicionada ao kit!",
        failureMessage: "Use SELECT para verificar se a Armadilha de Urso está no kit.",
        hint: "SELECT * FROM rogue_tools WHERE tool_name = 'Armadilha de Urso';"
    },
    {
        description: "Aprimore a Armadilha de Urso para Armadilha de Urso Afiada.",
        expectedCommand: "UPDATE rogue_tools SET tool_name = 'Armadilha de Urso Afiada' WHERE tool_name = 'Armadilha de Urso';",
        successMessage: "Armadilha de Urso aprimorada para versão afiada!",
        failureMessage: "Use UPDATE para aprimorar a Armadilha de Urso.",
        hint: "UPDATE rogue_tools SET tool_name = 'Armadilha de Urso Afiada' WHERE tool_name = 'Armadilha de Urso';"
    },
    {
        description: "Remova a Armadilha de Urso Afiada após o uso.",
        expectedCommand: "DELETE FROM rogue_tools WHERE tool_name = 'Armadilha de Urso Afiada';",
        successMessage: "Armadilha de Urso Afiada removida do kit.",
        failureMessage: "Use DELETE para remover a Armadilha de Urso Afiada.",
        hint: "DELETE FROM rogue_tools WHERE tool_name = 'Armadilha de Urso Afiada';"
    }
);