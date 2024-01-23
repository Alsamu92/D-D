export const acciones = [
  // --------------ACCION 0-----------------
  {
    accion:
      "La primera prueba es una carrera nocturna por el bosque.Es necesario tener una vista aguda en malas condiciones si quieres entrar en la guarida de un dragón y salir con vida.",
  habilidad:["sigilo","fuerza","sabiduria"],
    opcion: [
      "Seguir al corredor más hábil y adelantarle si se despista.",
      "Afrontar la carrera con normalidad.",
      "Ir a buscar un farol y provisiones antes de salir."
    ],
  },
  // --------------ACCION 1-----------------
   {
    accion:
      "Muchos quedaron en el bosque. Ahora debereís recoger del lago una esfera roja. Aguantar la respiración es vital para no inhalar humo en tu batalla final.",
      habilidad:["carisma","destreza","sigilo"],
    opcion: [
      "Buscar al alquimista para que te de ayuda.",
      "Saltar desde el risco para llegar antes al fondo.",
      "Observar desde dónde la arrojan."
    ]
  },
  // --------------ACCION 2-----------------
  {
    accion: "Mantener la calma es un don valorado para esta tarea. Los animales a los que os enfrentaís son ciegos pero detectan el movimiento. Conseguid pasar la noche estando quietos y demostrareís que la poseeis.",
    habilidad:["fuerza","sabiduria","carisma"],
    opcion: [
      "Mantenerte firme con todo tu equipamiento.",
      "Hacer estiramientos y acolchar las botas",
      "Forzar a los demás a moverse para descansar mientas les atacan."
    ]
  },
  // --------------ACCION 3-----------------
  {
    accion: "El personaje descubre un complot para envenenar un manantial crucial para la supervivencia del pueblo. Al llegar al lugar, se encuentra con guardias que protegen la fuente que le sobornan para que mantenga la boca cerrada.",
    habilidad:["destreza","sigilo","fuerza"],
    opcion: [
      "Negarte y tratar de de sacarles más información",
      "Aceptar el soborno",
      "Enfrentamiento físico"
    ]
  },
  // --------------ACCION 4-----------------
  {
    accion: "Explorando una antigua biblioteca, el personaje descubre un libro misterioso que contiene información crucial para  el reino.",
    habilidad:["sabiduria","carisma","destreza"],
    opcion: [
      "LLevarlo a la biblioteca para que lo estudien y mejoren infraestructura.",
      "Levarlo a los hospitales para solucionar una epidemia.",
      "Guardarse el libro para venderlo al mejor postor."
    ]
  },

];

export const secuelas = [
  // --------------SECUELA 0-----------------
  {
    consecuencias: [
      //CONSECUENCIA 1------------------------------
      {
       buena:"La crrera ha sido un paseo, ese guerrero conoce el bosque como la palma de su mano.En los últimos metros, sin que nadie te vea, le haces la zancadilla y le adelantas ganando la prueba y unos puntos.",
       regular:"El plan no ha ido nada mal, consigues seguirle pero no hay quien le adelante. Pasas la prueba sin pena ni gloria.",
       mala:"¡No hay quien le siga!Le has perdido y apenas consigues acabar la carrera. Esperas que las heridas te dejen continuar"
      },
      //CONSECUENCIA 2------------------------------
      {
        buena:"Naciste para correr esta carrera. Tu buena resistencia y una vista perfecta te permiten terminar la carrera en primer puesto, ganando unos puntos y la admiración de todos",
        regular:"Quizá te sobreestimaste un poco, pero consigues acabar en un buen puesto. Vivirás un día más.",
        mala:"Las piernas no te han respondido como esperabas, hace mucho frío y no ves nada. Acabas la carrera malamente. No sin heridas."
       },
      //CONSECUENCIA 3------------------------------
      {
        buena:"Mientras todos salen corriendo te tomas el tiempo de ir a por cosas. A mitad de la noche,cuando ellos no ven nada, tú sigues un camino que consigues ver con tu farol.LLegas primero",
        regular:"No has conseguido recuperar el tiempo que perdiste en ir a buscar las cosas, pero al menos te permite acabar la carrera en una buena posición.",
        mala:"Cuando consigues el farol ya casi todos llevan la mitad de la prueba. Consigues acabarla pero has tenido que hacer un esfuerzo mucho mas alto que los demás."
       },
    ],
    imagenes:[
     { buena:"https://res.cloudinary.com/djfkchzyq/image/upload/v1705975817/soluciones/b3qrc2bxezkfgtureasc.jpg",
      regular:"https://res.cloudinary.com/djfkchzyq/image/upload/v1705975817/soluciones/b3qrc2bxezkfgtureasc.jpg",
      mala:"https://res.cloudinary.com/djfkchzyq/image/upload/v1705975817/soluciones/paylh6ya3derts6nkwib.avif"}
    ]
  },
  // --------------SECUELA 1-----------------
{
  consecuencias: [
    //CONSECUENCIA 1------------------------------
    {
     buena:"¡El alquimista de la ciudad es tu amigo Ginés! Te da un alga sangreregia que te permite aguantar una hora la respiración. Consigues la esfera facilmente.",
     regular:"El alquimista es Ginés, le quitabas el bocadillo de pequeños, decides fiarte de él y tomas lo que te da. Por poco no lo cuentas sacas la esfera de los últimos. Pasas por los pelos.",
     mala:"El hijo del alquimista también participa y se niega a ayudarte. Casi te ahogas sacando la esfera."
    },
    //CONSECUENCIA 2------------------------------
    {
      buena:"WOOW! Un salto impecable que te hace llegar al fondo antes que nadie. Un destello te llama la atención.Coges la esfera y sales a recibir aplausos",
      regular:"Tropiezas antes de saltar y haces un salto bastante malo. Tardas bastante en encontar la esfera, pero la encuentas.",
      mala:"Planchazo monumental. Cuando quieres empezar a buscar casi todos han terminado ya. Sales con mucho dolor."
     },
    //CONSECUENCIA 3------------------------------
    {
      buena:"La noche de antes consigues ocultarte y observar perfectamente dónde cae. Recogerla al día siguiente es muy sencillo.",
      regular:"Alguien se percata de tu presencia y tienes que irte rápido, has visto dónde cae pero no exactamente. Al día siguiente el cansacio te afecta, pero sacas la esfera bastante rápido.",
      mala:"Te has pasado toda la noche en vela y no has conseguido ver nada. El día siguiente es un desastre, no sabes ni como acabas la prueba"
     },
  ],
  imagenes:[
    { buena:"https://res.cloudinary.com/djfkchzyq/image/upload/v1705975818/soluciones/srrkjd0gyxbcligi0jub.avif",
     regular:"https://res.cloudinary.com/djfkchzyq/image/upload/v1705975818/soluciones/jk7wsxysckcdq1nrfdh2.avif",
     mala:"https://res.cloudinary.com/djfkchzyq/image/upload/v1705975817/soluciones/x1zshkn9evvxfpzafnwy.avif"}
   ]
},
// --------------SECUELA 2-----------------
{
  consecuencias: [
    //CONSECUENCIA 1------------------------------
    {
     buena:"Mantener todo tu equipo te hace meterte en el papel de un buen soldado y ves amanecer casi sin fatiga.",
     regular:"Tus músculos se resienten y tienes calambres pero cuando amanece estás ahí, aguantando.",
     mala:"Intentas mantenerte firme pero te desplomas, solo te salva que otro se había caído antes que tú y le atacan a el. Te vuelves a colocar rápido pero esta noche ha sido muy dura."
    },
    //CONSECUENCIA 2------------------------------
    {
      buena:"Tus conocimientos te permiten crear unas botas que impiden bastante el movimiento pero cómodas para estar de pie, además los estiramientos evitan los calambres.",
      regular:"La verdad es que nada de esto está siendo muy efectivo pero parece que va algo mejor que a la mayoría. Amanece contigo de pie.",
      mala:"Como pica este acolchado! Además de la tensión del momento sumale este pico y da como resultado la peor noche posible. Amanece contigo llorando."
     },
    //CONSECUENCIA 3------------------------------
    {
      buena:"Todas las muecas que te sabes surten efecto. Cada vez que necesitas estirar haces que alguien se ría y aprovechas para mover las piernas.No ha estado mal la noche.",
      regular:"Prácticamente nadie te hace caso, deberías haberte preparado otra cosa. Los pocos momentos que has conseguido para estirar han bastado para pasar.",
      mala:"Tus muecas solo te hacen gracia a tí. A mitad de la prueba decides dejar de intentarlo y resignarte a pasar lo que queda. Noche muy dura, por los pies y la vergüenza."
     },
  ],
  imagenes:[
    { buena:"https://res.cloudinary.com/djfkchzyq/image/upload/v1705978502/soluciones/k6mzwvabfgxihrfk279w.jpg",
     regular:"https://res.cloudinary.com/djfkchzyq/image/upload/v1705978503/soluciones/tuv88xd8vgf2cpg7f5wf.png",
     mala:"https://res.cloudinary.com/djfkchzyq/image/upload/v1705978614/soluciones/uz5t3eonu5qwhvoklysk.jpg"}
   ]
  
},
// --------------SECUELA 3-----------------
{
  consecuencias: [
    //CONSECUENCIA 1------------------------------
    {
     buena:"Lo superas1",
     regular:"medio1",
     mala:"Pierdes1"
    },
    //CONSECUENCIA 2------------------------------
    {
      buena:"Lo superas2",
      regular:"medio2",
      mala:"Pierdes2"
     },
    //CONSECUENCIA 3------------------------------
    {
      buena:"Lo superas3",
      regular:"medio3",
      mala:"Pierdses3"
     },
  ],
},
// --------------SECUELA 4-----------------
{ consecuencias: [
  //CONSECUENCIA 1------------------------------
  {
   buena:"Lo superas1",
   regular:"medio1",
   mala:"Pierdes1"
  },
  //CONSECUENCIA 2------------------------------
  {
    buena:"Lo superas2",
    regular:"medio2",
    mala:"Pierdes2"
   },
  //CONSECUENCIA 3------------------------------
  {
    buena:"Lo superas3",
    regular:"medio3",
    mala:"Pierdsses3"
   },
],
 
}
];

