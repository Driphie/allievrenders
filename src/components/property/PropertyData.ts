export interface Property {
  title: string;
  location: string;
  price: string;
  propertyType?: string;
  year?: string;
  description?: string;
  images: string[];
  features: string[];
  videoId?: string;
  trailerId?: string;
  view360Url?: string;
    statusImages?: string[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
    image?: string;
  };
  whatsappLink?: string;
}

export const propertiesData: Record<string, Property> = {
  "1": {
    title: "| LUXURY PENTHOUSE |",
    location: "Argentina, Buenos Aires",
    price: "ALLIEV | DESING",
    propertyType: "Vivienda unifamiliar de lujo",
    year: "2022",
    description: "Luxury House fue uno de los primeros proyectos que realizamos en el área de visualización arquitectónica, marcando un hito en nuestra carrera. Este render de una vivienda unifamiliar de lujo fue realizado en 2022 y se destacó por su nivel de detalle, iluminación realista y la representación de un diseño de alto nivel. Aunque al ser uno de nuestros primeros trabajos, nos permitió aprender y evolucionar rápidamente, también refleja el nivel de compromiso y pasión con el que abordamos cada proyecto, sin importar su tamaño o complejidad",
    images: [
      "/images/properties/property1-1.png",
      "/images/properties/property1-2.png",
      "/images/properties/property1-3.png"
    ],
    features: [
      "El objetivo de Luxury House era crear una visualización fotorrealista que mostrara las posibilidades estéticas y funcionales de un diseño residencial de lujo. El proyecto tenía como fin ayudar al cliente a visualizar la casa en su máximo potencial, destacando materiales, acabados y la interacción de la luz con los espacios. ",
      "Luxury House fue un proyecto fundamental para nuestro crecimiento como estudio de visualización arquitectónica. A pesar de ser uno de nuestros primeros renders, el resultado final superó las expectativas."
    ],
    videoId: "BI-90RPlYz0?",
    trailerId: "0XrL1JAT0YA?",
    statusImages: [
      "/images/n1.png",
      "/images/n1.png",
      "/images/n1.png"
    ],
    whatsappLink: "https://wa.me/1123482822?text=Hola,%20queria%20un%20presupuesto%20mi nombre es %20",
    view360Url: "https://kuula.co/share/collection/7ZBkB?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
  },


  "2": {
    title: "| LUMINIS CASA & OFICINA |",
    location: "Argentina, Buenos Aire",
    price: "ALLIEV | DESING",
    propertyType: "Vivienda unifamiliar con espacio de oficina integrado",
    year: "2025",
    description: "Luminis es un concepto innovador de vivienda unifamiliar con un espacio de oficina integrado, pensado para quienes buscan un equilibrio entre el hogar y el trabajo. Este proyecto es un diseño propio que no existe en la realidad, pero que explora las posibilidades de un espacio multifuncional, elegante y adaptado a las necesidades de la vida moderna.",    
    images: [
      "/images/properties/luminis/1.png",
      "/images/properties/luminis/2.png",
      "/images/properties/luminis/3.png",
      "/images/properties/luminis/4.png"
    ],
    features: [
      "El objetivo principal de Luminis fue crear una propuesta arquitectónica que fusionara el confort de una casa con la funcionalidad de una oficina en el mismo espacio. La casa cuenta con áreas abiertas y luminosas, mientras que la oficina está integrada de manera estratégica para garantizar privacidad y productividad, sin perder la armonía del diseño general",
      "Luminis se presenta como una propuesta conceptual que explora el futuro de las viviendas modernas y las oficinas domésticas. Gracias al uso de tecnologías avanzadas de visualización, el proyecto demuestra el potencial de los nuevos software y técnicas para crear representaciones de alto nivel. Este diseño, aunque no real, ofrece una visión futurista de lo que podrían ser las casas y oficinas del mañana."
    ],
    videoId: "tu-id-de-video-2",
    trailerId: "xS0xsjwEkSw",
    statusImages: [
      "/images/n1.png",
      "/images/n1.png",
      "/images/n1.png"
    ],
    whatsappLink: "https://wa.me/1123482822?text=Hola,%20queria%20un%20presupuesto%20mi nombre es %20",
    view360Url: "https://kuula.co/share/collection/711Ht?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1" 
  },


  "3": {
    title: "| IRLANDA GREEN |",
    location: "Plaza Irlanda, Caballito, Buenos Aires",
    price: "FTF DESARROLLOS",
    propertyType: "Edificio",
    year: "2024",
    description: "Irlanda Green es un desarrollo inmobiliario contemporáneo, ubicado en el corazón de Plaza Irlanda, Caballito. El proyecto busca combinar diseño moderno con una integración armónica al entorno urbano, aportando valor arquitectónico y funcional a la zona.",    
    images: [
      "/images/properties/irlanda/1.png",
      "/images/properties/irlanda/2.png",
      "/images/properties/irlanda/3.png",
      "/images/properties/irlanda/4.png"
    ],
    features: [
      "La finalidad de los renders fue explorar y comunicar distintas propuestas de texturas y terminaciones para el frente del edificio. Además, se realizaron videos cinematográficos para transmitir la atmósfera del proyecto, tanto en su estética como en su experiencia espacial",
      "Los renders y videos cumplieron con el objetivo de transmitir la calidad del proyecto y facilitar la toma de decisiones en cuanto a materiales y presentación comercial. El desarrollador recibió el material como parte de la etapa de validación estética y marketing previo al lanzamiento."
    ],
    videoId: "empty",
    trailerId: "K9KpS2G--yg",
    statusImages: [
      "/images/properties/irlanda/obra2.jpg",
      "/images/properties/irlanda/obra1.jpg",
      "/images/n1.png"
    ],
    testimonial: {
      quote: "Gracias al render 3D de Irlanda Green, pudimos visualizar el proyecto en detalle y definir mejor cada aspecto.",
      name: "FTF Desarrollos",
      role: "Desarrolladora",
      image: "/images/n1.png"
    },    
    whatsappLink: "https://wa.me/1123482822?text=Hola,%20queria%20un%20presupuesto%20mi nombre es %20",
    view360Url: "" 
  },


  "4": {
    title: "| ALBERDI |",
    location: "Av. Alberdi, barrio de Flores, CABA",
    price: "AGZ URBANA",
    propertyType: "Edificio",
    year: "2024",
    description: "Alberdi es un desarrollo de vivienda multifamiliar ubicado en una de las arterias más importantes del barrio de Flores. Con un frente de 8.66 metros, el proyecto busca optimizar el diseño urbano moderno en un lote tradicional de la ciudad.",    
    images: [
      "/images/properties/alberdi/12.png",
      "/images/properties/alberdi/1.png",
      "/images/properties/alberdi/3.png",
      "/images/properties/alberdi/4.jpg",
      "/images/properties/alberdi/5.jpg",
      "/images/properties/alberdi/6.jpg",
      "/images/properties/alberdi/7.png",
      "/images/properties/alberdi/8.png",
      "/images/properties/alberdi/9.png",
    ],
    features: [
      "Nuestro objetivo fue entregar material visual de alta calidad (imágenes y videos renderizados) que sirviera tanto para la elección de diseño final por parte del desarrollador como para su uso comercial en la etapa de preventa.+",
      "El material entregado permitió al desarrollador avanzar con la validación estética del frente y facilitó al equipo comercial una herramienta efectiva para captar potenciales compradores desde etapas tempranas del proyecto."
    ],
    videoId: "",
    trailerId: "Z4ggdXDsXBQ",
    statusImages: [
      "/images/properties/alberdi/11.jpg",
      "/images/n1.png",
      "/images/n1.png"
    ],
        testimonial: {
      quote: "El equipo de Alliev me brindó distintas alternativas según lo que tenía en mente, lo que me permitió aclarar mis dudas y definir el diseño exterior. El render 3D permitió trabajar sobre ideas concretas.",
      name: "AGZ Urbana",
      role: "Arquitecto",
      image: "/images/n1.png"
    },
    whatsappLink: "https://wa.me/1123482822?text=Hola,%20queria%20un%20presupuesto%20mi nombre es %20",
    view360Url: ""
  },


  "5": {
    title: "| MANTRA CAFÉ |",
    location: "Ciudad Jardín, Buenos Aires",
    price: "CAFETERIA MANTRA",
    propertyType: "Local comercial / gastronómico",
    year: "2024",
    description: "Mantra Café es una propuesta de espacio gastronómico con identidad propia, ubicado en Ciudad Jardín. Se trabajó en la visualización integral del local comercial, enfocándonos en transmitir su estilo, funcionalidad y ambientación interior y exterior.",    
    images: [
      "/images/properties/mantra/1.jpg",
      "/images/properties/mantra/2.jpg",
      "/images/properties/mantra/3.jpg"
    ],
    features: [
      "El objetivo fue desarrollar imágenes renderizadas que capturen la esencia del concepto de marca y diseño interior del café. Los renders se utilizaron para validar decisiones estéticas.",
      "Los renders permitieron al cliente visualizar el carácter del proyecto antes de su ejecución, logrando una representación fiel al concepto original. "
    ],
    videoId: "fQkfHB10ydE",
    trailerId: "",
    statusImages: [
      "/images/n1.png",
      "/images/n1.png",
      "/images/n1.png"
    ],
        testimonial: {
      quote: "Yo queria empezar pero no sabia por donde, el equipo me dio una mano increíble, me fueron orientando, me tiraron ideas y me hicieron sentir súper acompañado. Gracias a ellos, pude aclarar lo que buscaba y el resultado final quedó genial.",
      name: "Rodrigo Allievi",
      role: "Propietario",
      image: "/images/n1.png"
    },
    whatsappLink: "https://wa.me/1123482822?text=Hola,%20queria%20un%20presupuesto%20mi nombre es %20",
    view360Url: ""
  },


  "6": {
    title: "| NICO REFORMAS |",
    location: "Teodelina, Santa Fe",
    price: "REFORMANDO CASAS",
    propertyType: "Reforma de vivienda unifamiliar",
    year: "2024",
    description: "es una vivienda ubicada en Teodelina, Santa Fe, que se encuentra en proceso de remodelación. A partir de un pedido concreto del cliente, se desarrollaron propuestas visuales en 3D para ayudar a definir el diseño final de la reforma.",    
    images: [
      "/images/properties/nicoreformas/1.jpg",
      "/images/properties/nicoreformas/2.jpg",
      "/images/properties/nicoreformas/3.jpg",
      "/images/properties/nicoreformas/4.jpg",
      "/images/properties/nicoreformas/5.png",
      "/images/properties/nicoreformas/6.png",
      "/images/properties/nicoreformas/7.png",
      "/images/properties/nicoreformas/8.png",
      "/images/properties/nicoreformas/9.png",                        
    ],
    features: [
      "El objetivo principal fue presentar diferentes alternativas de diseño para guiar el proceso de toma de decisiones. Mediante renders realistas, se exploraron variaciones en materiales, distribución espacial y estilo general, permitiendo al cliente visualizar cómo luciría su casa luego de la obra.",
      "Gracias al material entregado, el cliente pudo comparar y elegir entre distintas alternativas con mayor seguridad. Los renders funcionaron como una guía efectiva para definir el rumbo de la obra y alinear expectativas entre cliente, diseñador y constructor. "
    ],
    videoId: "",
    trailerId: "",
    statusImages: [
      "/images/properties/nicoreformas/10.jpg",
      "/images/properties/nicoreformas/11.jpg",
      "/images/n1.png"
    ],
        testimonial: {
      quote: "Al inicio del proyecto, no sabia como iba a quedar mi casa. El equipo siempre estuvo disponible para responder a mis preguntas, aclarar mis inquietudes y darme recomendaciones. Gracias a su apoyo constante, pude confiar en el proceso y me sentí seguro con cada decisión tomada.",
      name: "Nicolas Gaitán",
      role: "Propietario",
      image: "/images/n1.png"
    },
    whatsappLink: "https://wa.me/1123482822?text=Hola,%20queria%20un%20presupuesto%20mi nombre es %20",
    view360Url: ""
  },


  "7": {
    title: "| REFORMA OFICINA |",
    location: "Zona Centro, Buenos Aires",
    price: "-",
    propertyType: "Oficina corporativa",
    year: "2024",
    description: "Este proyecto consistió en la visualización 3D de una oficina ubicada en el centro de la Ciudad de Buenos Aires. El cliente solicitó el desarrollo de dos estilos visuales contrastantes para evaluar distintas posibilidades estéticas, utilizando una base de elementos prediseñados que formaban parte del branding corporativo.",    
    images: [
      "/images/properties/oficina/1.jpg",
      "/images/properties/oficina/2.jpg",
      "/images/properties/oficina/3.jpg",
      "/images/properties/oficina/4.jpg",
      "/images/properties/oficina/5.jpg",                     
    ],
    features: [
      "El objetivo principal fue brindar herramientas visuales claras para facilitar la elección del diseño final de la oficina. Se entregaron imágenes renderizadas y videos cinematográficos que mostraban cómo se vería el espacio bajo dos enfoques estéticos distintos, respetando las directrices de marca y funcionalidad.",
      "Los renders y videos ayudaron al cliente a visualizar el impacto real de cada estilo en el espacio, logrando una definición de diseño más segura y alineada con su visión de marca. La propuesta visual fue una herramienta clave para avanzar con la implementación final. "
    ],
    videoId: "HRCAkkkAhOQ",
    trailerId: "7DNyd3K7wN0",
    statusImages: [
      "/images/n1.png",
      "/images/n1.png",
      "/images/n1.png"
    ],
        testimonial: {
      quote: "Para este proyecto, necesitábamos que elementos claves como la alfombra, el cuadro y el mueble principal estuvieran representados con precisión. El renderizado captó perfectamente estos detalles y nos permitió visualizar cómo encajaban en el espacio antes de comenzar la reforma. Gracias a esto, pudimos tomar decisiones más rápidas y seguras sobre la distribución y los acabados.",
      name: "Priscila Larraya",
      role: "Arquitecta",
      image: "/images/n1.png"
    },
    whatsappLink: "https://wa.me/1123482822?text=Hola,%20queria%20un%20presupuesto%20mi nombre es %20",
    view360Url: ""
  },


  "8": {
    title: "| Concurso DeParc Polo |",
    location: "Hurlingham, Buenos Aires",
    price: "DEPARC",
    propertyType: "Concurso de diseño para una unidad funcional (UF)",
    year: "2023",
    description: "Alliev participó y ganó el concurso de diseño para De Parc Polo, ubicado en Hurlingham, fue una oportunidad para desarrollar una de las unidades funcionales (UF) del complejo. Este proyecto fue desarrollado para la desarrolladora DEPARC con el objetivo de presentar una propuesta innovadora y atractiva para el concurso. El diseño presentado se centró en una unidad funcional moderna, funcional y adaptable, con un enfoque en la optimización del espacio y la calidad estética. Se entregaron renders de alta calidad y videos cinematográficos para comunicar de manera efectiva el concepto de diseño",    
    images: [
      "/images/properties/deparcpolo/1.png",                  
    ],
    features: [
      "El objetivo principal fue diseñar una unidad funcional (UF) que se destacara por su propuesta estética y funcional dentro del complejo Polo. El trabajo incluyó la representación 3D de la distribución de espacios, la integración de materiales y acabados, así como la visualización realista de la atmósfera que ofrecería la unidad a los futuros habitantes.",
      "La entrega de renders y videos fue fundamental para presentar la propuesta de diseño de la unidad funcional en el concurso, permitiendo a los evaluadores y potenciales inversores visualizar la propuesta con claridad. La calidad visual y la atención al detalle en la representación ayudaron a que el proyecto se destacara dentro del concurso. "
    ],
    videoId: "GeOO9GmTrd8",
    trailerId: "",
    statusImages: [
      "/images/n1.png",
      "/images/n1.png",
      "/images/n1.png"
    ],
    whatsappLink: "https://wa.me/1123482822?text=Hola,%20queria%20un%20presupuesto%20mi nombre es %20",
    view360Url: ""
  }
};
