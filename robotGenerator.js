goog.provide('Blockly.Arduino.Robotdulab');
goog.require('Blockly.Arduino');


var setup_robotdulab = "robotDuLAB.begin();\n";

var define_robotdulab = '#include <Servo.h>\n'+
  '#include <Adafruit_NeoPixel.h>\n'+
  '#include <RobotDuLAB.h>\n'+
  '#define TRIGGER_PIN 2 // broche trig du capteur US HC-SR04\n'+
  '#define ECHO_PIN 4 // broche echo du capteur US HC-SR04\n'+
  '#define ROUE_DROITE_PIN 5\n'+
  '#define ROUE_GAUCHE_PIN 3\n'+
  '#define ANNEAU_LED_PIN 6\n\n'+
  'RobotDuLAB robotDuLAB(TRIGGER_PIN, ECHO_PIN, ROUE_DROITE_PIN, ROUE_GAUCHE_PIN, ANNEAU_LED_PIN);\n'+
  'boolean estBlanc(){\n'+
  '      int val;\n'+
  '      val=analogRead(A0);\n'+
  '      return val <150;\n'+
  '}\n'+
  '\n'+
  'boolean estNoir(){\n'+
  '      int val;\n'+
  '      val=analogRead(A0);\n'+
  '      return val > 300;\n'+
  '}\n';

Blockly.Arduino ['Avancer'] = function (block)  {
  Blockly.Arduino.setups_["setup_robotdulab"] = setup_robotdulab;
  Blockly.Arduino.definitions_["define_robotdulab"] = define_robotdulab;
  var code  ="robotDuLAB.Avancer();\n";
  return  code;
};

Blockly.Arduino ['Reculer'] = function (block)  {
  Blockly.Arduino.setups_["setup_robotdulab"] = setup_robotdulab;
  Blockly.Arduino.definitions_["define_robotdulab"] = define_robotdulab;
  var code  ="robotDuLAB.Reculer();\n";
  return  code;
};

Blockly.Arduino ['Reculer_Et_Attendre'] = function (block)  {
  Blockly.Arduino.setups_["setup_robotdulab"] = setup_robotdulab;
  Blockly.Arduino.definitions_["define_robotdulab"] = define_robotdulab;
  var code  ="robotDuLAB.Reculer();\n";
  var time = Blockly.Arduino.valueToCode(block, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);
  code  +="delay("+time+");\n";
  return  code;
};

Blockly.Arduino ['Arreter'] = function (block)  {
  Blockly.Arduino.setups_["setup_robotdulab"] = setup_robotdulab;
  Blockly.Arduino.definitions_["define_robotdulab"] = define_robotdulab;
  var code  ="robotDuLAB.Arreter();\n";
  return  code;
};

Blockly.Arduino ['TournerAGauche'] = function (block)  {
  Blockly.Arduino.setups_["setup_robotdulab"] = setup_robotdulab;
  Blockly.Arduino.definitions_["define_robotdulab"] = define_robotdulab;
  var code  ="robotDuLAB.TournerAGauche();\n";
  return  code;
};

Blockly.Arduino ['TournerADroite'] = function (block)  {
  Blockly.Arduino.setups_["setup_robotdulab"] = setup_robotdulab;
  Blockly.Arduino.definitions_["define_robotdulab"] = define_robotdulab;
  var code  ="robotDuLAB.TournerADroite();\n";
  return  code;
};

Blockly.Arduino ['Attendre'] = function (block)  {
  var time = Blockly.Arduino.valueToCode(block, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);
  var code  ="delay("+time+");\n";
  return  code;
};

Blockly.Arduino ['AnimerAnneauLed'] = function (block)  {
  Blockly.Arduino.setups_["setup_robotdulab"] = setup_robotdulab;
  Blockly.Arduino.definitions_["define_robotdulab"] = define_robotdulab;
  
  var couleur = Blockly.Arduino.valueToCode(block, 'Couleur', Blockly.Arduino.ORDER_ATOMIC)||'VERT';
  var animation = Blockly.Arduino.valueToCode(block, 'Animation', Blockly.Arduino.ORDER_ATOMIC)||'COULEUR';

  var code  ="robotDuLAB.AnimerAnneauLed("+animation+","+couleur+");\n";
  return  code;
};

Blockly.Arduino ['Distance'] = function (block)  {
  Blockly.Arduino.setups_["setup_robotdulab"] = setup_robotdulab;
  Blockly.Arduino.definitions_["define_robotdulab"] = define_robotdulab;
  var code  ="robotDuLAB.getDistanceObstacle();";
  return [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['Animation'] = function (block)  {
  var dropdown_option = block.getFieldValue('Animation');
  var value_option = Blockly.Arduino.valueToCode(block, 'Animation', Blockly.Arduino.ORDER_ATOMIC);
  var code  = dropdown_option;
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['VERT'] = function (block)  {
  var code  ="VERT";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['ROUGE'] = function (block)  {
  var code  ="ROUGE";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['MAGENTA'] = function (block)  {
  var code  ="MAGENTA";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['BLEU'] = function (block)  {
  var code  ="BLEU";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['TURQUOISE'] = function (block)  {

  var code  ="TURQUOISE";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['VIOLET'] = function (block)  {
  var code  ="VIOLET";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['JAUNE'] = function (block) {
  var code  ="JAUNE";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['loop_dist_inf'] = function(block) {
  Blockly.Arduino.setups_["setup_robotdulab"] = setup_robotdulab;
  Blockly.Arduino.definitions_["define_robotdulab"] = define_robotdulab;
  var value_while = Blockly.Arduino.valueToCode(block, 'Distance', Blockly.Arduino.ORDER_ATOMIC);
  var statements_do = Blockly.Arduino.statementToCode(block, 'Faire');

  var code = 'while (robotDuLAB.getDistanceObstacle() < ' + value_while +')\n{\n'+ statements_do +'}\n';
  return code;
};

Blockly.Arduino['loop_dist_sup'] = function(block) {
  Blockly.Arduino.setups_["setup_robotdulab"] = setup_robotdulab;
  Blockly.Arduino.definitions_["define_robotdulab"] = define_robotdulab;
  var value_while = Blockly.Arduino.valueToCode(block, 'Distance', Blockly.Arduino.ORDER_ATOMIC);
  var statements_do = Blockly.Arduino.statementToCode(block, 'Faire');

  var code = 'while (robotDuLAB.getDistanceObstacle() > ' + value_while +')\n{\n'+ statements_do +'}\n';
  return code;
};

Blockly.Arduino['if_inf'] = function(block) {
  Blockly.Arduino.setups_["setup_robotdulab"] = setup_robotdulab;
  Blockly.Arduino.definitions_["define_robotdulab"] = define_robotdulab;
  var value_distance = Blockly.Arduino.valueToCode(block, 'Distance', Blockly.Arduino.ORDER_ATOMIC) || '20';
  var statements_faire = Blockly.Arduino.statementToCode(block, 'Faire');

  var code = 'if (robotDuLAB.getDistanceObstacle() < ' + value_distance +  ')\n{\n' +
              statements_faire + '} \n';

  return code;
};

Blockly.Arduino['if_blanc'] = function(block) {
  Blockly.Arduino.setups_["setup_robotdulab"] = setup_robotdulab;
  Blockly.Arduino.definitions_["define_robotdulab"] = define_robotdulab;
  var statements_faire = Blockly.Arduino.statementToCode(block, 'Faire');
  var code = 'if (estBlanc())\n{\n' +
              statements_faire + '} \n';

  return code;
};

Blockly.Arduino['if_noir'] = function(block) {
  Blockly.Arduino.setups_["setup_robotdulab"] = setup_robotdulab;
  Blockly.Arduino.definitions_["define_robotdulab"] = define_robotdulab;
  var statements_faire = Blockly.Arduino.statementToCode(block, 'Faire');
  var code = 'if (estBlanc())\n{\n' +
              statements_faire + '} \n';

  return code;
};

Blockly.Arduino['blanc'] = function(block) {
  Blockly.Arduino.setups_["setup_robotdulab"] = setup_robotdulab;
  Blockly.Arduino.definitions_["define_robotdulab"] = define_robotdulab;
  var code  ="estBlanc()";
  return [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['noir'] = function(block) {
  Blockly.Arduino.setups_["setup_robotdulab"] = setup_robotdulab;
  Blockly.Arduino.definitions_["define_robotdulab"] = define_robotdulab;
  var code  ="estNoir()";
  return [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['if_sup'] = function(block) {
  Blockly.Arduino.setups_["setup_robotdulab"] = setup_robotdulab;
  Blockly.Arduino.definitions_["define_robotdulab"] = define_robotdulab;
  var value_distance = Blockly.Arduino.valueToCode(block, 'Distance', Blockly.Arduino.ORDER_ATOMIC) || '20';
  var statements_faire = Blockly.Arduino.statementToCode(block, 'Faire');

  var code = 'if (robotDuLAB.getDistanceObstacle() > ' + value_distance +  ')\n{\n' +
              statements_faire + '} \n';

  return code;
};
