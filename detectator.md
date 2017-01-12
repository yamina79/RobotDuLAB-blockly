DETECTATOR
=================

Présentation et objectifs
--------------------------
Détectator va permettre à l'arduino de réagir suivant la couleur de marquage au sol.

Pré-requis
-----------
Carte arduino
Avoir installé le logiciel arduino
Capteur de niveau de gris : DFR0022
Cables jumper

Nom de votre tutoriel
----------------------
**Etape 1** : 

Après avoir préparé le matériel, nous commençons à relier les éléments selon le shémas dont le lien est renseigné ci-dessous

**Etape 2** : 

Rédiger le programme qui va permettre l'arduino de réagir suivant la couleur de marquage au sol, Blanc Detectator s'arrête et Noir Détectator avance 

**Etape 3** :

```Cpp
void setup()
{
  Serial.begin(9600); // open serial port, set the baud rate to 9600 bps
}
void loop()
{
      int val;
      val=analogRead(0);   //connect grayscale sensor to Analog 0
      Serial.println(val,DEC);//print the value to serial        
      delay(100);
}
```





Schéma de câblage du capteur à l'arduino
----------------------------------------
Cliquer sur le lien ci-dessous

https://www.dfrobot.com/wiki/index.php/DFRobot_Grayscale_Sensor_(SKU:DFR0022)
