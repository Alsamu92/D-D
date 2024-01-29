export const acciones = [
  // --------------ACCION 0-----------------
  {
    accion:
      "La primera prueba es una carrera nocturna por el bosque.Es necesario tener una vista aguda en malas condiciones si quieres entrar en la guarida de un dragón y salir con vida.",
  habilidad:["sigilo","fuerza","sabiduria"],
  numero:0,
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
      numero:1,
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
    numero:2,
    opcion: [
      "Mantenerte firme con todo tu equipamiento.",
      "Hacer estiramientos y acolchar las botas",
      "Forzar a los demás a moverse para descansar mientas les atacan."
    ]
  },
  // --------------ACCION 3-----------------
  {
    accion: "Es importante que la persona a la que se le prestará la capa sea de fiar. Van a pedir reportes a los reinos cercanos de los participantes que siguen en pie. Hay cosas que no deberían saber.",
    habilidad:["destreza","sigilo","fuerza"],
    numero:3,
    opcion: [
      "Dar el cambiazo cuando lleguen los informes.",
      "Asaltar a los mensajeros por los caminos.",
      "Amenazar al que gestiona el pase de ronda."
    ]
  },
  // --------------ACCION 4-----------------
  {
    accion: "Todos los que quedaís ya habeís demostrado ser muy dignos pero quedan las pruebas mas duras. Una justa a caballo será una prueba de resistencia, valor y temple.",
    habilidad:["sabiduria","carisma","destreza"],
    numero:4,
    opcion: [
      "Reconoces un caballo que ganó en tu ciudad.Elegirlo.",
      "Presumir mucho de tus habilidades para intimidar.",
      "Usar una técnica compleja pero muy eficaz."
    ]
  },
  // --------------ACCION 5-----------------
  {
    accion: "Parece que teneís lo que hay que tener para la siguiente prueba. Una manada de jabalíes tremendamente grandes está destrozando las cosechas de calabazas. Cazad uno, si podeís.",
    habilidad:["sigilo","fuerza","sabiduria"],
    numero:5,
    opcion: [
      "Emboscarlos en una plantación de calabazas.",
      "Echarte al monte a por ellos.",
      "Elaborar un brebaje rastreador y matarlos después."
    ]
  },
  // --------------ACCION 6-----------------
  {
    accion: "Quedaís muy pocos participantes. El dragon vive en una montaña congelada. Sobrevivid una noche en ella y quizá esteís preparados para escalarla cuando llegue el momento.",
    habilidad:["carisma","destreza","sigilo"],
    numero:6,
    opcion: [
      "Conseguir información de los posibles refugios de la zona.",
      "Construir un refugio con materiales de por allí.",
      "Robar el refugio al primero que veas."
    ]
  },
  // --------------ACCION 7-----------------
  {
    accion: "Los aletadracos no son tan fieros como los dragones pero comparten una cosa, se puede hablar con ellos. Si consigues hablar con uno seguramente puedas comunicarte bien con un dragón. Prueba, no hablan casi con nadie.",
    habilidad:["fuerza","sabiduria","carisma"],
    numero:7,
    opcion: [
      "Agarrar al pez por las aletas hasta que diga algo.",
      "Presionar ligeramente las agallas y tirar de la cola.",
      "Darle conversación hasta que conteste algo."
    ]
  },
  // --------------ACCION 8-----------------
  {
    accion: "La prueba final es un duelo a muerte contra otro participante. Mala suerte, te ha tocado 'El Hachas', no es conocido por su delicadeza.",
    habilidad:["destreza","sigilo","fuerza"],
    numero:8,
    opcion: [
      "Parece pesado, intentas cansarlo corriendo sin que te toque.",
      "Despistarlo y ocultarte para darle un golpe maestro.",
      "Luchar sin miedo."
    ]
  },
  // --------------ACCION 9-----------------
  {
    accion: "Ya os van a hacer entregas de vuestras capas anti-dragones, pero una muchedumbre furiosa, compuesta por los descartados, asalta el palacio. Detenlos, rápido.",
    habilidad:["sabiduria","carisma","destreza"],
    numero:9,
    opcion: [
      "Has calculado que la lámpara podría caerles encima, con un poco de ayuda",
      "Los persuades y los intentas convencer de que paren.",
      "Tiras de la alfombra para que tropiecen."
    ]
  },

];

export const secuelas = [
  // --------------SECUELA 0-----------------
  {
    consecuencias: [
      //CONSECUENCIA 1------------------------------
      {
       buena:"La carrera ha sido un paseo, ese guerrero conoce el bosque como la palma de su mano.En los últimos metros, sin que nadie te vea, le haces la zancadilla y le adelantas ganando la prueba y unos puntos.",
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
    ],
    numero:0
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
   ],
   numero:1
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
    { buena:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706012544/soluciones/aehttlnqesab4jisfdyz.avif",
     regular:"https://res.cloudinary.com/djfkchzyq/image/upload/v1705978503/soluciones/tuv88xd8vgf2cpg7f5wf.png",
     mala:"https://res.cloudinary.com/djfkchzyq/image/upload/v1705978614/soluciones/uz5t3eonu5qwhvoklysk.jpg"}
    ],
    numero:2
},
// --------------SECUELA 3-----------------
{
  consecuencias: [
    //CONSECUENCIA 1------------------------------
    {
     buena:"Ha requerido de toda tu destreza pero, en una visita la sala de expedientes, consigues cambiar los papeles rápidamente con un juego de manos. Aprovechas y que descalifiquen al que te cae mal.",
     regular:"Creías que iba a ser más fácil. Por los pelos consigues quitar tu expediente, aunque no consigues colocar el del mejor oponente.",
     mala:"Te sudan las manos y todo el mundo se da cuenta de lo que intentabas hacer. Parece que has dañado con el sudor muchos expedientes. Rezemos porque no supieran quién eres. "
    },
    //CONSECUENCIA 2------------------------------
    {
      buena:"Coser y cantar! Destruyes el tuyo y el de algunos adversarios menores para no incriminarte, pero dejas el de los grandes rivales (un poco modificados)",
      regular:"Estaba bastante protegido. Consigues quitar el tuyo y un puñado más. Esperemos que nadie te haya visto.",
      mala:"Te sorprenden haciendo los cambios!. No recuerdas bien si has completado la tarea, esperemos que si."
     },
    //CONSECUENCIA 3------------------------------
    {
      buena:"Una vez superados sus guardias el hombre que va a dar el reporte sobre ti cambia de opinión y destruye el informe. Puedes jurar que estará callado.",
      regular:"No ha sido tu mejor pelea pero superas a los guardias. Te cuesta trabajo forzar al hombre a destruir el informe pero al final cede.Esperemos que no hable.",
      mala:"Los guardias del hombre te dan una paliza. Habrá que esperar que no sepan quién eres o el informe crecerá. Ahora que lo piensas tampoco era tan grave lo que ponía."
     },
  ],
  imagenes:[
    { buena:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706012861/soluciones/n2y1qjbdqa5tih26znro.jpg",
     regular:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706012863/soluciones/i38wgxmtuqjpaxgbu4ws.png",
     mala:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706012863/soluciones/i38wgxmtuqjpaxgbu4ws.png"}
    ],
    numero:3
},
// --------------SECUELA 4-----------------
{ consecuencias: [
  //CONSECUENCIA 1------------------------------
  {
   buena:"No hay duda de que es Rayo! Te hace casi todo el trabajo. Pasas con facilidad.",
   regular:"Trueno ha vivido días mejores pero sigue siendo buen caballo. Te ayuda bastante en la justa.",
   mala:"Claramente es Relámpago pero está mas cascado de los que esperabas. Pasas de milagro, con muchas heridas."
  },
  //CONSECUENCIA 2------------------------------
  {
    buena:"Nadie quiere enfrentarse a ti, al que al final le toca se le cae la lanza al suelo y lo derribas rápidamente.",
    regular:"Tu rival no sale muy confiado. Aprovechas la duda para derribarlo. No ha sido fácil.",
    mala:"Haces bastante el ridículo. Aún tocándote contra el oponente más débil te llevas varios golpes fuertes."
   },
  //CONSECUENCIA 3------------------------------
  {
    buena:"Lo que aprendiste hace tanto tiempo sigue en tu cabeza. La posición del cuerpo, el arma y dominio del caballo es impecable. Ganas fácil.",
    regular:"Las primeras rondas no van muy bien porque no recuerdas exactamente pero al final con un poco de suerte derribas al oponente.",
    mala:"Te centras tanto en recordar las posturas y técnicas que pierdes todas las rondas. El oponente se desmaya por el calor."
   },
],
imagenes:[
  { buena:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706012546/soluciones/mp7empojsnlffwmoofzb.jpg",
   regular:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706012545/soluciones/u9n9tytzlqye7wp8g7xn.jpg",
   mala:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706012545/soluciones/u9n9tytzlqye7wp8g7xn.jpg"}
  ],
  numero:4
},
// --------------SECUELA 5-----------------
{ consecuencias: [
  //CONSECUENCIA 1------------------------------
  {
   buena:"Están tan concentrados comiendo que no te ven. Distingues a Orlok, su lider. Será suficiente para alimentar a medio reino.",
   regular:"Solo han bajado algunos de los más pequeños pero te sirve para pasar la prueba, y defender las calabazas.",
   mala:"Un jabalí tan pequeño que casi parece uno normal te embiste duro. Al menos consigues su cabeza."
  },
  //CONSECUENCIA 2------------------------------
  {
    buena:"Tu gran fortaleza y dotes de rastreador hacen que llegues a su guarida. Allí está Orlok, su lider. Buena pieza te llevas.",
    regular:"Cuando después de mucho esfuerzo llegas a la guarida solo hay algunos de los más pequeños. Al menos te sirve.",
    mala:"Pensabas que sería fácil pero no logras encontrar la guarida. Te encuentras uno muy pequeño de casualidad. Te lo llevas, no sin daños."
   },
  //CONSECUENCIA 3------------------------------
  {
    buena:"Cuando alguien ingiere este brebaje ves un hilo azul que te lleva hasta donde esté. En su guarida consigues matar a su líder, Orlok.",
    regular:"Deberías ver un hilo azul que te lleve hasta ellos, pero no funciona del todo bien. Consigues llegar a duras penas y matar uno normalito.",
    mala:"No ha funcionado en absoluto. Por suerte a uno le ha sentado mal y deja un rastro de excrementos que puedes seguir. Te le encuentras muerto a medio camino. Cuenta poco pero algo es algo."
   },
],
imagenes:[
  { buena:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706037873/si1a7wa8ha3o1ywd8mda.avif",
  regular:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706037873/k0anzb5lktcm0sty2oar.jpg",
  mala:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706037873/r5ksmztl85din6qaizit.jpg"}
],
numero:5
}
,
// --------------SECUELA 6-----------------
{ consecuencias: [
  //CONSECUENCIA 1------------------------------
  {
   buena:"El dueño de la granja de calabazas está encantado de ayudarte y te da las indicaciones del mejor refugio posible. Pasas muy buena noche.",
   regular:"Un granjero te dice que si le ayudas en la granja te lo dirá. Después de todo el día trabajando te da las indicaciones. Pasas una noche regular pero vives.",
   mala:"Nadie te quiere ayudar porque serían trampas. Casi sin tiempo ya te metes en una cueva, consigues matar al oso de dentro pero sales con daños."
  },
  //CONSECUENCIA 2------------------------------
  {
    buena:"Eres muy hábil y te cuesta poco contruir un refugio muy competente. Duermes del tirón.",
    regular:"Para el tiempo que has tenido no está mal, pero se mete mucho frío. Sobrevives pero ha sido duro.",
    mala:"Has olvidado todas las lecciones de 'BricoCastillo' pasas una noche muy muy dura. "
   },
  //CONSECUENCIA 3------------------------------
  {
    buena:"Tienes localizado a uno que destaca en todas las pruebas, esta no es la excepción. Le das un porrazo y te quedas con su refugio. Ley del más fuerte.",
    regular:"Cuando vas a asaltarle se da la vuelta y te dice que ya sabía que estabas allí. Después de una pelea te quedas el refugio pero estás herido.",
    mala:"El hombre al que se lo ibas a robar te descubre y tienes que huir. Duermes bajo roble cercano, casi te congelas. penoso."
   },
],
imagenes:[
  { buena:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706119040/soluciones/ey7sacbsaa396tkdeh0m.jpg",
   regular:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706119041/soluciones/gzv9smccjf1rpmd7n1hu.jpg",
   mala:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706119040/soluciones/xto0myfetomv5qelu3gk.jpg"}
  ],
  numero:6
},
// --------------SECUELA 7-----------------
{ consecuencias: [
  //CONSECUENCIA 1------------------------------
  {
   buena:"Eres muy intimidante a los ojos del pez parlante! Asombras a todos, no lo habían oido hablar asi en años.",
   regular:"No sabes si quería decir algo o era una queja, pero parece que cuenta. Te haces daño en las manos.",
   mala:"Claramente no ha hablado pero el que lo iba a juzgar tenía tantas ganas de oirle que cree que sí. Lamentable."
  },
  //CONSECUENCIA 2------------------------------
  {
    buena:"Recordabas haberlo leído en un viejo libro. Al pez le agrada y habla contigo. Asombroso.",
    regular:"Sabes que esa era la técnica correcta pero hay algo que falta, alguna palabra dice pero poca cosa.",
    mala:"El pez te mira con cara de ¿Qué estás haciendo?. El organizador lo da por bueno porque cree haber oido algo."
   },
  //CONSECUENCIA 3------------------------------
  {
    buena:"El pez está muy contento de poder hablar con alguien interesante. Hasta puede que hayas hecho un amigo.",
    regular:"Te habla solo para que te calles, que pesadez. Aún así cuenta. ¿Cómo imaginar que esto te serviría alguna vez?",
    mala:"No quiere decir nada de nada. Hablas tú muy bajito, ojalá cuele. Te duele pasar tanta vergüenza."
   },
],
imagenes:[
  { buena:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706113178/soluciones/w5jw7lluiro2cs6ldqxc.jpg",
   regular:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706113178/soluciones/w5jw7lluiro2cs6ldqxc.jpg",
   mala:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706113178/soluciones/w5jw7lluiro2cs6ldqxc.jpg"}
  ],
  numero:7
 
},
// --------------SECUELA 8-----------------
{ consecuencias: [
  //CONSECUENCIA 1------------------------------
  {
   buena:"Un par de saltos un lado al otro y tarda poco en agotarse de tanto blandir ese hacha gigante. Lo rematas con facilidad.",
   regular:"Después de un largo combate y varios cortes, consigues eliminarlo con bastantes dificultades. Bastante digno el combate.",
   mala:"Ya no puedes más, parece que te has agotado antes que él, pero cuando te va a dar el hachazo final tropieza y puedes finalizar tú el combate. Penoso"
  },
  //CONSECUENCIA 2------------------------------
  {
    buena:"El viento te favorece, levanta mucho polvo y dificulta que te vea. Cuando se asienta el polvo El Hachas está con un puñal en el pecho.",
    regular:"Hay poco margen para esconderse pero es suficiente para ganar el combate, auque te has llevado un hachazo bastante feo.",
    mala:"¿Dónde pretendes escondete a plena luz del día y en una superficie plana sin objetos? Menos mal que le da un golpe de calor."
   },
  //CONSECUENCIA 3------------------------------
  {
    buena:"Una pelea como las de antes. Todos te aclaman cuando después de un duro combate te haces con la victoria con un golpe majestuoso.",
    regular:"Te has sobrestimado, el combate es muy ajustado y por poco no lo cuentas. Ganas pero la gente duda de tí.",
    mala:"Tu peor combate en años, por suerte su mujer lo saluda y se distrae. Tu aprovechas pero todos te abuchean. Nada merecida la victoria."
   },
],
imagenes:[
  { buena:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706113177/soluciones/hs1dt7grfchki3xlzpqp.jpg",
   regular:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706113148/soluciones/o9mttohcjlmwjxxbehrw.png",
   mala:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706113177/soluciones/equc9ukdtm0ivl2fa8ir.jpg"}
  ],
  numero:8
},
// --------------SECUELA 9-----------------
{ consecuencias: [
  //CONSECUENCIA 1------------------------------
  {
   buena:"El cáculo está hecho a la perfección, la lámpara no deja ni uno vivo. Tienes la capa y su respeto.",
   regular:"No cae exactamente dónde querías pero elimina a la gran mayoría. Los guardias de palacio hacen el resto. Te has cortado con los cristales.",
   mala:"Te cae a ti encima. La gente piensa si deberían darte la capa. ¿Cambiarán de opninión?"
  },
  //CONSECUENCIA 2------------------------------
  {
    buena:"Tus argumentos y tu sonrisa son más que suficientes para que se calmen y se vayan, también haces que no los castiguen.",
    regular:"Uno te da un puñetazo pero acaban marchándose. Podría haber sido peor.",
    mala:"Pasan todos por encima de ti y tienen que ser detenidos por los otros cuatro campeones. Parece que te va a costar qeu tus nuevos compañeros confíen en tí."
   },
  //CONSECUENCIA 3------------------------------
  {
    buena:"Es un truco que aprendiste con un mantel, pero funciona igual. En un hábil tirón todos caen y son reducidos por la guardia.",
    regular:"No se caen todos pero al menos es una buena distracción para que los pueda reducir la guardia. Te duele la muñeca, deberías haber calentado antes.",
    mala:"La alfombra se rompe y el Rey te mira muy mal. Nadie se ha caido y tus compañeros se han encargado de la tarea mientas hacías el ridículo."
   },
],
imagenes:[
  { buena:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706113177/soluciones/hs1dt7grfchki3xlzpqp.jpg",
   regular:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706113148/soluciones/o9mttohcjlmwjxxbehrw.png",
   mala:"https://res.cloudinary.com/djfkchzyq/image/upload/v1706113177/soluciones/equc9ukdtm0ivl2fa8ir.jpg"}
  ],
  numero:9
 
}
];

