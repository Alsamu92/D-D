
export const acciones = [
    // --------------POSICION 0-----------------
    {
      accion: "La misión ha tenido éxito, tienes el paquete y ya solo falta entregarlo. Lamentablemente, tu grupo no ha tenido la misma suerte que tú y tendrás que hacer el camino de vuelta sin ayuda de nadie. Para colmo, el único que conocía el camino de vuelta está esparcido por el suelo y mancha tus botas.",
      accionMasInfo: "Con la oscuridad aproximándose, decides si avanzar a través del bosque o acampar para planificar tu próximo movimiento.",
      opcion: ["Adelante con el camino", "Acampar"],
    },
  
    // --------------POSICION 1-----------------
    {
      accion: "Has pasado toda la noche caminando y no sabes cuánto falta para llegar, ni siquiera si vas en la dirección correcta cuando te encuentras en una encrucijada",
      accionMasInfo: "En la encrucijada, evaluas las opciones: un camino lleno de piedras a la derecha y otro más despejado a la izquierda.",
      opcion: ["Izquierda", "Derecha"],
    },
  
    // --------------POSICION 2-----------------
    {
      accion: "Te encuentras con un grupo de bandidos que bloquean el camino. Tienes que decidir si enfrentarte a ellos o intentar pasar desapercibido. Encuentras un antiguo santuario abandonado. Puedes investigar o seguir tu camino.",
      accionMasInfo: "Ante los bandidos, consideras si es mejor luchar o tratar de pasar inadvertido. Además, ves un santuario antiguo cerca y decides si explorarlo o continuar tu viaje.",
      opcion: ["Enfrentarte a los bandidos", "Investigar el santuario"],
    },
  
    // --------------POSICION 3-----------------
    {
      accion: "Encuentras una bifurcación en el camino. Un cartel antiguo sugiere que la senda de la izquierda es más corta, pero la de la derecha es más segura.",
      accionMasInfo: "Frente a la bifurcación, te enfrentas a la decisión de tomar la senda más corta, según un cartel antiguo, o la senda más segura por la derecha. Además, descubres una cueva con extrañas luces y decides si explorarla o seguir el camino principal.",
      opcion: ["Tomar la senda corta", "Explorar la cueva"],
    },
  
    // --------------POSICION 4-----------------
    {
      accion: "Encuentras una aldea escondida en el bosque. Los aldeanos te cuentan sobre una criatura misteriosa que aterroriza la región.",
      accionMasInfo: "En la aldea escondida, los aldeanos te hablan sobre una criatura misteriosa. Además, descubres una fuente mágica que emite una luz brillante y te preguntas si deberías beber de ella.",
      opcion: ["Ayudar a la aldea", "Beber del manantial mágico"],
    },
  
    // --------------POSICION 5-----------------
    {
      accion: "Te topas con una feria ambulante de mercaderes. Ofrecen objetos únicos y raros, pero a precios elevados.",
      accionMasInfo: "En la feria ambulante, los mercaderes ofrecen objetos únicos a precios elevados. También encuentras un camino oculto que podría llevarte directamente a tu destino y debes decidir si comprar en la feria o tomar el camino oculto.",
      opcion: ["Comprar en la feria", "Tomar el camino oculto"],
    },
  
    // --------------POSICION 6-----------------
    {
      accion: "Escuchas un extraño canto que parece venir de un claro. Te acercas para investigar.",
      accionMasInfo: "Al acercarte al claro, escuchas un extraño canto. Además, encuentras un puente roto sobre un río y debes decidir si intentar cruzar o buscar otra ruta.",
      opcion: ["Investigar el canto", "Intentar cruzar el puente"],
    }
  ];

// --------------POSICION 7-----------------

// --------------POSICION 8-----------------

// --------------POSICION 9-----------------

// --------------POSICION 10-----------------


// --------------POSICION 11-----------------
// --------------POSICION 12-----------------

// --------------POSICION 13-----------------

// --------------POSICION 14-----------------
// --------------POSICION 15-----------------
// --------------POSICION 16-----------------
// --------------POSICION 17-----------------
// --------------POSICION 18-----------------
// --------------POSICION 19-----------------
// --------------POSICION 20-----------------
// --------------POSICION 21-----------------
// --------------POSICION 22-----------------
// --------------POSICION 23-----------------
// --------------POSICION 24-----------------
// --------------POSICION 25-----------------
// --------------POSICION 26-----------------
// --------------POSICION 27-----------------
// --------------POSICION 28-----------------
// --------------POSICION 29-----------------
// --------------POSICION 30-----------------

export const secuelas = [
    // --------------POSICION 0-----------------
    {
      consecuencias: [
        { Lirena: "", Bruster: "", Krista: "", Furtur: "", Darion: "" },
        { Lirena: "", Bruster: "", Krista: "", Furtur: "", Darion: "" }
      ],
      rutas: [
        { Lirena: 1, Bruster: 1, Krista: 1, Furtur: 1, Darion: 1 },
        { Lirena: 2, Bruster: 2, Krista: 2, Furtur: 2, Darion: 2 }
      ],
      salud: [
        { Lirena: -30, Bruster: -20, Krista: 0, Furtur: -30, Darion: 10 },
        { Lirena: 0, Bruster: 0, Krista: 0, Furtur: 0, Darion: 0 }
      ],
      oro: [
        { Lirena: 0, Bruster: 0, Krista: 0, Furtur: 0, Darion: 0 },
        { Lirena: 0, Bruster: 0, Krista: 0, Furtur: -10, Darion: 0 }
      ],
    },
    // --------------POSICION 1-----------------
    {
      consecuencias: [
        { Lirena: "", Bruster: "", Krista: "", Furtur: "", Darion: "" },
        { Lirena: "", Bruster: "", Krista: "", Furtur: "", Darion: "" }
      ],
      rutas: [
        { Lirena: 4, Bruster: 5, Krista: 6, Furtur: 4, Darion: 3 },
        { Lirena: 4, Bruster: 4, Krista: 4, Furtur: 4, Darion: 4 }
      ],
      salud: [
        { Lirena: 0, Bruster: 0, Krista: 0, Furtur: 0, Darion: 0 },
        { Lirena: -10, Bruster: -20, Krista: 0, Furtur: 0, Darion: 0 }
      ],
      oro: [
        { Lirena: 0, Bruster: 0, Krista: 0, Furtur: 0, Darion: 0 },
        { Lirena: 0, Bruster: 0, Krista: 0, Furtur: 0, Darion: 0 }
      ],
    },
    // --------------POSICION 2-----------------
    {
      consecuencias: [
        { Lirena: "", Bruster: "", Krista: "", Furtur: "", Darion: "" },
        { Lirena: "", Bruster: "", Krista: "", Furtur: "", Darion: "" }
      ],
      rutas: [
        { Lirena: 3, Bruster: 4, Krista: 5, Furtur: 6, Darion: 4 },
        { Lirena: 3, Bruster: 3, Krista: 3, Furtur: 3, Darion: 3 }
      ],
      salud: [
        { Lirena: -25, Bruster: 0, Krista: -15, Furtur: -10, Darion: 0 },
        { Lirena: 0, Bruster: -10, Krista: 0, Furtur: -5, Darion: 0 }
      ],
      oro: [
        { Lirena: 0, Bruster: 20, Krista: 0, Furtur: 0, Darion: 0 },
        { Lirena: 0, Bruster: 0, Krista: -5, Furtur: 0, Darion: 0 }
      ],
    },
  ];

  

// --------------POSICION 6-----------------

// --------------POSICION 7-----------------

// --------------POSICION 8-----------------

// --------------POSICION 9-----------------

// --------------POSICION 10-----------------

// --------------POSICION 11-----------------

// --------------POSICION 12-----------------

// --------------POSICION 13-----------------

// --------------POSICION 14-----------------
// --------------POSICION 15-----------------
// --------------POSICION 16-----------------
// --------------POSICION 17-----------------
// --------------POSICION 18-----------------
// --------------POSICION 19-----------------
// --------------POSICION 20-----------------
// --------------POSICION 21-----------------
// --------------POSICION 22-----------------
// --------------POSICION 23-----------------
// --------------POSICION 24-----------------
// --------------POSICION 25-----------------
// --------------POSICION 26-----------------
// --------------POSICION 27-----------------
// --------------POSICION 28-----------------
// --------------POSICION 29-----------------
// --------------POSICION 30-----------------
