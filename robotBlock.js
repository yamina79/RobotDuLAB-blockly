Blockly.Blocks['Avancer'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.appendDummyInput()
        .appendField("Avancer");
    this.setColour(300);
    this.setTooltip('Fait avancer le robot');
   }
};

Blockly.Blocks['Avancer_Et_Attendre'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.setColour(300);
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField("Avancer et Attendre")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setTooltip('Le robot avance et attend un temps donné en millisecondes avant de passer à l\'instruction suivante');
  }
};

Blockly.Blocks['Reculer_Et_Attendre'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.setColour(300);
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField("Reculer et Attendre")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setTooltip('Le robot recule et attend un temps donné en millisecondes avant de passer à l\'instruction suivante');
  }
};


Blockly.Blocks['Reculer'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.appendDummyInput()
        .appendField("Reculer");
    this.setColour(300);
    this.setTooltip('Fait reculer le robot');
   }
};

Blockly.Blocks['Arreter'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.appendDummyInput()
        .appendField("Arreter");
    this.setColour(300);
    this.setTooltip('Stoppe le robot');
   }
};

Blockly.Blocks['TournerAGauche'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.appendDummyInput()
        .appendField("Tourner à gauche");
    this.setColour(300);
    this.setTooltip('Fait tourner à gauche le robot');
   }
};

Blockly.Blocks['TournerADroite'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.appendDummyInput()
        .appendField("Tourner à droite");
    this.setColour(300);
    this.setTooltip('Fait tourner à droite le robot');
   }
};

Blockly.Blocks['Attendre'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.setColour(300);
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField("Attendre")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setTooltip('Le robot attends un temps donné en millisecondes avant de passer à l\'instruction suivante');
  }
};

Blockly.Blocks['AnimerAnneauLed'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.setColour(300);
    this.appendDummyInput()
        .appendField("Animer Anneau de Led");

    this.appendValueInput('Couleur')
        .appendField("Couleur")
        .setCheck('Couleur')
        .setAlign(Blockly.ALIGN_RIGHT);

    this.appendValueInput('Animation')
        .appendField("Animation")
        .setCheck('Animation')
        .setAlign(Blockly.ALIGN_RIGHT);

    this.setTooltip('Le robot attends un temps donné en millisecondes avant de passer à l\'instruction suivante');
  }
};

Blockly.Blocks['Distance'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.appendDummyInput()
        .appendField("Distance obstacle");
    this.setOutput(true, 'Number');
    this.setColour(300);
    this.setTooltip('Retourne la distance en centimetre de l\'obstacle');
   }
};

Blockly.Blocks['Animation'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField('Animation')
        .appendField(new Blockly.FieldDropdown([["Couleur", "COULEUR"], 
                                                ["Arc en ciel", "ARC_EN_CIEL"], 
                                                ["Arc en ciel cyclique", "ARC_EN_CIEL_CYCLIQUE"], 
                                                ["Couleur cyclique", "COULEUR_CYCLIQUE"]]), 
                                                    "Animation");
        
    this.setTooltip('Permet de choisir le motif d\'animation de l\'anneau de LED');

    this.setOutput(true, 'Animation');
    this.setColour(0);

  }
};

Blockly.Blocks['VERT'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("VERT");
    this.setOutput(true, 'Couleur');
    this.setColour(95);
    this.setTooltip('');
  }
};

Blockly.Blocks['ROUGE'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("ROUGE");
    this.setOutput(true, 'Couleur');
    this.setColour(0);
    this.setTooltip('');
  }
};

Blockly.Blocks['MAGENTA'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("MAGENTA");
    this.setOutput(true, 'Couleur');
    this.setColour(300);
    this.setTooltip('');
  }
};

Blockly.Blocks['BLEU'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("BLEU");
    this.setOutput(true, 'Couleur');
    this.setColour(240);
    this.setTooltip('');
  }
};

Blockly.Blocks['TURQUOISE'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("TURQUOISE");
    this.setOutput(true, 'Couleur');
    this.setColour(180);
    this.setTooltip('');
  }
};

Blockly.Blocks['VIOLET'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("VIOLET");
    this.setOutput(true, 'Couleur');
    this.setColour(310);
    this.setTooltip('');
  }
};

Blockly.Blocks['JAUNE'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("JAUNE");
    this.setOutput(true, 'Couleur');
    this.setColour(50);
    this.setTooltip('');
  }
};

Blockly.Blocks['loop_dist_inf'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendValueInput("Distance")
        .setCheck('Number')
        .appendField("tant que distance <");
    this.setInputsInline(true);
    this.appendStatementInput("Faire")
        .setCheck(null)
        .appendField("faire");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
  }
};

Blockly.Blocks['loop_dist_sup'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendValueInput("Distance")
        .setCheck('Number')
        .appendField("tant que distance >");
    this.setInputsInline(true);
    this.appendStatementInput("Faire")
        .setCheck(null)
        .appendField("faire");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
  }
};


Blockly.Blocks['if_inf'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendValueInput("Distance")
        .setCheck('Number')
        .appendField("si distance (en cm) <");
    this.setInputsInline(true);
    this.appendStatementInput("Faire")
        .setCheck(null)
        .appendField("alors");
    this.setColour(210);
    this.setTooltip('');
  }
};

Blockly.Blocks['if_sup'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendValueInput("Distance")
        .setCheck('Number')
        .appendField("si distance (en cm) >");
    this.setInputsInline(true);
    this.appendStatementInput("Faire")
        .setCheck(null)
        .appendField("alors");

    this.setColour(210);
    this.setTooltip('');
  }
};
