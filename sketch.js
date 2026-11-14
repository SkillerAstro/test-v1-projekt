let spieler, boden, kiste;

function setup() {
    new Canvas(600, 400);
    world.gravity.y = 10; // Schwerkraft aktivieren

    // Spieler (Kreis) erstellen
    spieler = new Sprite(100, 100, 40);
    spieler.color = 'dodgerblue';

    // Kiste als dynamisches Hindernis
    kiste = new Sprite(300, 200, 50, 50);
    kiste.color = 'orange';

    // Statischer Boden ('s' = static)
    boden = new Sprite(300, 380, 600, 40, 's');
    boden.color = 'limegreen';
    print("Hello World")
}

function update() {
    background(30);

    // Steuerung mit den Pfeiltasten
    if (kb.pressing('left')) spieler.vel.x = -5;
    if (kb.pressing('right')) spieler.vel.x = 5;
    
    // Springen, wenn die Leertaste oder Pfeil-nach-oben gedrückt wird
    if (kb.presses('up') || kb.presses('space')) {
        spieler.vel.y = -7;
    }
}