import { FaHeadset, FaAngleDoubleDown, FaEnvelope, FaPhone, FaQuoteRight, FaSchool } from 'react-icons/fa';

import image4 from '../assets/admisiones.jpg';

import image8 from '../assets/filosofia.jpg';
import image9 from '../assets/artes.jpg';
import image10 from '../assets/sociales.jpg';
import image11 from '../assets/edufisica.jpg';
import image12 from '../assets/tecnologia.jpg';
import image13 from '../assets/ciencias.jpg';
import image14 from '../assets/matematicas.jpg';
import image15 from '../assets/ingles.jpg';
import image16 from '../assets/home.jpg';
import image17 from '../assets/integrado_7.jpg';
import image18 from '../assets/lenguaje.jpg';
import image19 from '../assets/etica.jpg';
import image20 from '../assets/sedea.jpg';
import image21 from '../assets/sedeb.jpg';
import image22 from '../assets/sedec.jpg';
import image23 from '../assets/pei.jpg';
import image24 from '../assets/gobiernoescolar.jpg';
import image25 from '../assets/historia.jpg';
import image26 from '../assets/mision.jpg';
import image27 from '../assets/vision.jpg';
import image28 from '../assets/objetivos.jpg';
import image29 from '../assets/prom.jpg';
import image30 from '../assets/reconocimiento.jpg';
import image31 from '../assets/fdanza.jpg';
import image32 from '../assets/faudiovisual.jpg';
import image33 from '../assets/icfes.jpg';
import image34 from '../assets/ma.jpg';
import image35 from '../assets/un.jpg';
import image36 from '../assets/co.jpg';
import image37 from '../assets/pr.jpg';
import image38 from '../assets/ba.jpg';
import image39 from '../assets/edu.jpg';
import image40 from '../assets/coor.jpg';
import image41 from '../assets/padr.jpg';
import image42 from '../assets/sena.jpg';
import image43 from '../assets/exa.jpg';
import image44 from '../assets/secr.jpg';

export const navLinks = [
    {
        id: 'Inicio',
        link: '',
    },
    {
        id: 'Nosotros',
        link: 'about',
        subLinks: [
            { id: 'Horizonte', link: '/about' },
            { id: 'Misión', link: '/about' },
            { id: 'Vision', link: '/about' },
            { id: 'Gobierno Escolar', link: '/about' },
            { id: 'PEI', link: '/about' },
        ],
    },
    {
        id: 'Educación',
        link: 'educacion',
        subLinks: [
            { id: 'Departamentos', link: '/departamentos' },
            { id: 'Programas', link: '/programs' },
        ],
    },
    {
        id: 'Sedes IE',
        link: 'facility',
        subLinks: [
            { id: 'Principal', link: '/servicios/4' },
            { id: 'Sede B', link: '/servicios/2' },
            { id: 'Sede c', link: '/servicios/2' }
        ],
    },
    {
        id: 'Agenda',
        link: 'facility',
        subLinks: [
            { id: 'Cronograma', link: '/servicios/4' },
            { id: 'Circulares', link: '/servicios/2' },
        ],
    },
    {
        id: 'Servicios',
        link: 'servicios',
        subLinks: [
            { id: 'Orientacion', link: '/servicios/1' },
            { id: 'Secretaria', link: '/servicios/2' },
            { id: 'Admisiones', link: '/servicios/4' },
            { id: 'Contabilidad', link: '/servicios/3' },
            { id: 'Boletin Semanal', link: '/servicios/10' },
            { id: 'Plataforma', link: '/servicios/5' },
        ],
    },
    {
        id: 'Contacto',
        link: 'contact',
        subLinks: [
            {
                id: 'WhatsApp',
                link: `https://wa.me/3012491404?text=${encodeURIComponent(
                    'Deseo comunicarme con ustedes'
                )}`,
            },
        ],
    },
    {
        id: 'Admisiones',
        link: 'apply',
        subLinks: [
            { id: 'Información', link: 'servicios/2' },
            { id: 'Pre-Matricula', link: 'servicios/4' },
        ],
    },
    {
        id: 'Plataforma',
        link: 'plataforma',
        subLinks: [
            { id: 'GSLR', link: 'https://gssoftwareysoluciones.com/2024/' },
            { id: 'Edu-Easy', link: 'https://edu-easy.netlify.app/' },
        ],
    },
];
export const eventosCalendario = [
    {
      id: 1,
      fecha: "2024-11-20",
      titulo: "Reunión de Docentes",
      descripcion: "Planificación del próximo periodo académico.",
      horaInicio: "10:00 AM",
      horaFin: "12:00 PM",
      lugar: "Sala de Juntas",
    },
    {
      id: 2,
      fecha: "2024-11-25",
      titulo: "Taller de Matemáticas",
      descripcion: "Refuerzo para estudiantes de grado 10°.",
      horaInicio: "02:00 PM",
      horaFin: "04:00 PM",
      lugar: "Aula 305",
    },
    {
      id: 3,
      fecha: "2024-11-30",
      titulo: "Entrega de Boletines",
      descripcion: "Entrega de informes académicos del segundo periodo.",
      horaInicio: "08:00 AM",
      horaFin: "01:00 PM",
      lugar: "Auditorio Principal",
    },
  ];
  
export const sliderContent = [
    {
        id: 1,
        title: 'IE INTEGRADO DE SOACHA',
        text: 'Conoce el proceso',
        navLink: '/about',
        imageURL: image16,
    },
    {
        id: 2,
        title: 'ADMISIONES Y MATRICULAS',
        text: 'Ceremonia y Certificados',
        navLink: '/apply',
        imageURL: image4,
    },
    {
        id: 3,
        title: 'ARTE Y CULTURA',
        text: 'Reelaborar el sentido estratégico de la Institución acorde a las nuevas realidades institucionales. Desarrollar capacitación con los estamentos para desarrollar el sentido de identidad y apropiación del horizonte estratégico de la Institución. Estructurar y desarrollar en módulos didácticos los ejes temáticos, metodológicos, operativos y evaluativos de las asignaturas de la cultura empresarial.',
        navLink: '/programs/5',
        imageURL: image17,
    },
    
];

export const missionVision = [
    {
        id: 1,
        title: 'Nuestra Misión',
        image: image26,
        text: 'La Institución Educativa Integrado de Soacha garantiza el derecho a la educación formal de niños, niñas, jóvenes y adultos del municipio de Soacha fundamentado en el proceso de enseñanza aprendizaje de muy buena calidad desarrollando competencias básicas y ciudadanas a través de valores éticos, culturales, espirituales con alto sentido de responsabilidad para su formación integral.',
        icon: <FaAngleDoubleDown />,
    },
    {
        id: 2,
        title: 'Nuestra Visión',
        image: image27,
        text: 'Para el año 2025 la Institución Educativa Integrado de Soacha se consolidará como una de las mejores del municipio en adelantar procesos académicos con enfoque constructivista formando seres humanos en un marco pluralista, democrático, incluyente y respetuoso, conocimientos, competencias y habilidades que respondan a las necesidades intelectuales, emocionales e interpersonales y se comprometan con el cambio de la sociedad soachuna.',
        icon: <FaAngleDoubleDown />,
    },
    {
        id: 3,
        title: 'Nuestros Objetivos',
        image: image28,
        text: 'Reelaborar el sentido estratégico de la Institución acorde a las nuevas realidades institucionales. Desarrollar capacitación con los estamentos para desarrollar el sentido de identidad y apropiación del horizonte estratégico de la Institución. Estructurar y desarrollar en módulos didácticos los ejes temáticos, metodológicos, operativos y evaluativos de las asignaturas de la cultura empresarial. ',
        icon: <FaAngleDoubleDown />,
    }
];

export const whySchool = [
    {
        id: 1,
        title: 'Sede A',
        image: image20,
        link: '/servicios/8',
        reason: " Integrado de Soacha Ubicada en la zona central de Soacha, la sede A - Integrado es la principal de la Institución Educativa. Ofrece educación en los niveles de preescolar, básica y media, destacándose por la modalidad de bachillerato académico en articulación con el SENA.",
        icon: <FaSchool />,
    },
    {
        id: 2,
        title: 'Sede B',
        image: image21,
        link: '/servicios/2',
        reason: ' John F. Kennedy Localizada en el barrio Eugenio Díaz Castro, la sede B – John F. Kennedy es un centro educativo que atiende a estudiantes en los niveles de preescolar, básica y media. Enfocada en la formación académica y técnica, facilita la articulación con el SENA, permitiendo a los estudiantes optar por especialidades laborales.',
        icon: <FaSchool />,
    },
    {
        id: 3,
        title: 'Sede C',
        image: image22,
        link: '/servicios/8',
        reason: "Danubio En el barrio El Danubio se encuentra la sede C - Danubio, un espacio que atiende a los estudiantes en sus etapas de preescolar, básica y media. Con una oferta académica que incluye bachillerato en articulación con el SENA, la sede impulsa el desarrollo de competencias técnicas en áreas como multimedia, sistemas eléctricos y turismo.",
        icon: <FaSchool />,
    },
];

export const testimonials = [
    {
        id: 1,
        icon: <FaQuoteRight />,
        image: image29,
        name: 'PROM 2024',
        testimonial: "¡Con orgullo presentamos al PROM 2024! Este año marca el cierre de una etapa memorable para nuestros estudiantes de grado 11, quienes culminarán su formación en la ceremonia de graduación el 15 de diciembre. Además, los grados de transición se celebrarán el 8 de diciembre, destacando el inicio de su emocionante viaje académico. ¡Felicidades a todos!",
    },
    {
        id: 2,
        icon: <FaQuoteRight />,
        image: image31,
        name: 'FESTIVAL DE DANZA',
        testimonial: 'Revive la magia del Festival de Danza 2024, celebrado en octubre en el icónico Teatro Sua de Soacha. Una jornada llena de talento, arte y cultura, donde nuestros estudiantes deslumbraron al público con presentaciones que fusionaron tradición y modernidad. Gracias a todos los participantes y espectadores por hacer de este evento un verdadero espectáculo inolvidable.',
    },
    {
        id: 3,
        icon: <FaQuoteRight />,
        image: image32,
        name: 'FESTIVAL AUDIOVISUAL',
        testimonial: "En octubre, el arte cobró vida en el Primer Festival Audiovisual 2024. Sombras y luces danzaron en mágicos cortometrajes de animación y stop motion, tejidos por manos jóvenes y soñadoras. Bachillerato fue el lienzo donde la creatividad floreció, regalándonos historias vibrantes y memorables.",
    },
    {
        id: 4,
        icon: <FaQuoteRight />,
        image: image30,
        name: 'RECONOCIMIENTO',
        testimonial: "Este año nuestro profesor Diego Foronda, fue reconocido como el Mejor Profesor del País en el concurso del BBVA. Su innovador proyecto de implementación de soluciones TIC ha transformado la enseñanza, inspirando a estudiantes y colegas. Este logro no solo honra su dedicación, sino que también reafirma nuestro compromiso con la educación de calidad y el cambio positivo.",
    },
    {
        id: 5,
        icon: <FaQuoteRight />,
        image: image33,
        name: 'RESULTADOS ICFES',
        testimonial: 'Conoce los resultados de nuestros estudiantes en los exámenes ICFES 2024. Gracias a su esfuerzo y a la dedicación de nuestros docentes, obtuvimos un desempeño sobresaliente que refleja el compromiso académico de nuestra institución. Este logro nos motiva a seguir formando líderes con excelencia y preparación para enfrentar los desafíos del futuro.',
    },
];
export const slide = [
    {
        id: 1,
        icon: <FaHeadset />,
        image: image37,
        name: 'PRIMARIA',
        testimonial: "Nuestras sedes están diseñadas para cada etapa educativa. La sede de primaria es un espacio acogedor, perfecto para que los más pequeños descubran el mundo mientras desarrollan valores. La sede de bachillerato, equipada con herramientas modernas, impulsa el crecimiento académico y personal de nuestros jóvenes.",
    },
    {
        id: 1,
        icon: <FaHeadset />,
        image: image38,
        name: 'BACHILLERATO',
        testimonial: "Nuestras sedes están diseñadas para cada etapa educativa. La sede de primaria es un espacio acogedor, perfecto para que los más pequeños descubran el mundo mientras desarrollan valores. La sede de bachillerato, equipada con herramientas modernas, impulsa el crecimiento académico y personal de nuestros jóvenes.",
    },
    {
        id: 2,
        icon: <FaHeadset />,
        image: image34,
        name: 'CUPOS 2025',
        testimonial: 'Comienza un nuevo ciclo académico con nuestro sistema de matrículas y admisiones en línea. Desde nuestra plataforma, realiza el proceso de forma ágil y sencilla, sin filas ni complicaciones. Solo necesitas ingresar, registrar los datos y seguir las indicaciones. ¡Un año lleno de aprendizaje comienza aquí!',
    },
    {
        id: 3,
        icon: <FaHeadset />,
        image: image36,
        name: 'COSTOS 2025',
        testimonial: "Te invitamos a informarte sobre los costos educativos: matrícula, derechos de grado, certificados y papelería. Nuestros valores son transparentes y accesibles. Para más detalles, puedes acercarte a la oficina administrativa o comunicarte a los canales oficiales. ¡Juntos construimos un año escolar exitoso!",
    },
    {
        id: 4,
        icon: <FaHeadset/>,
        image: image35,
        name: 'UNIFORMES',
        testimonial: "Encuentra los uniformes de la institución, creados para brindar comodidad y estilo a nuestros estudiantes. Contamos con modelos para actividades académicas y deportivas, disponibles en todas las tallas. Adquiere los tuyos fácilmente en la Tienda Escolar o en la Distribuidora Soacha Uniformes.",
    },
   
];
 export const footerLinks = [
    {
        id: 'Inicio',
        link: '',
    },
    {
        id: 'Nosotros',
        link: 'about',
        subLinks: [
            { id: 'Horizonte', link: '/about' },
            { id: 'Misión', link: '/about' },
            { id: 'Vision', link: '/about' },
            { id: 'Gobierno Escolar', link: '/about' },
            { id: 'PEI', link: '/about' },
        ],
    },
    {
        id: 'Educación',
        link: 'educacion',
        subLinks: [
            { id: 'Departamentos', link: '/departamentos' },
            { id: 'Programas', link: '/programs' },
        ],
    },
    {
        id: 'Sedes IE',
        link: 'facility',
        subLinks: [
            { id: 'Principal', link: '/servicios/4' },
            { id: 'Sede B', link: '/servicios/2' },
            { id: 'Sede c', link: '/servicios/2' }
        ],
    },
    {
        id: 'Agenda',
        link: 'facility',
        subLinks: [
            { id: 'Cronograma', link: '/servicios/4' },
            { id: 'Circulares', link: '/servicios/2' },
        ],
    },
    {
        id: 'Servicios',
        link: 'servicios',
        subLinks: [
            { id: 'Orientacion', link: '/servicios/1' },
            { id: 'Secretaria', link: '/servicios/2' },
            { id: 'Admisiones', link: '/servicios/4' },
            { id: 'Contabilidad', link: '/servicios/3' },
            { id: 'Boletin Semanal', link: '/servicios/10' },
            { id: 'Plataforma', link: '/servicios/5' },
        ],
    },
    {
        id: 'Contacto',
        link: 'contact',
        subLinks: [
            {
                id: 'WhatsApp',
                link: `https://wa.me/3012491404?text=${encodeURIComponent(
                    'Deseo comunicarme con ustedes'
                )}`,
            },
        ],
    },
    {
        id: 'Admisiones',
        link: 'apply',
        subLinks: [
            { id: 'Información', link: 'servicios/2' },
            { id: 'Pre-Matricula', link: 'servicios/4' },
        ],
    },
    {
        id: 'Plataforma',
        link: 'plataforma',
        subLinks: [
            { id: 'GSLR', link: 'https://gssoftwareysoluciones.com/2024/' },
            { id: 'Edu-Easy', link: 'https://edu-easy.netlify.app/' },
        ],
    },
 ]

export const footerContact = [
    {
        id: 1,
        text: "Cra. 20A #12-61,",
    },
    {
        id: 2,
        text: "Soacha,Cundinamarca,",
    },
    {
        id: 3,
        text: "Colombia",
    },
    {
        id: 4,
        text: "IE Integrado de Soacha",
    },
];

export const footerContactNum = [
    {
        id: 1,
        icon: <FaPhone />,
        text: "7814243-5773202",
    },
    {
        id: 2,
        icon: <FaEnvelope />,
        text: "I.E.integrado@hotmail.com",
    },
   
];

export const AboutPart = [
    {
        id: 1,
        image: image23,
        link: '/servicios/9',
        title: "PEI",
        text: "Our programs are designed to ignite the spark of curiosity and innovation in students. Through hands-on experiments, projects, and collaborative activities, students explore the fascinating realms of science, technology, engineering, and others.",
    },
    {
        id: 2,
        image: image24,
        title: "GOBIERNO ESCOLAR",
        link: '/servicios/9',
        text: "we take pride in providing state-of-the-art facilities that create an ideal environment for holistic learning and growth. Our commitment to excellence extends beyond the classroom, ensuring that every aspect of a student's educational journey is supported.",
    },
    {
        id: 3,
        image: image25,
        title: "56 AÑOS DE HISTORIA",
        link: '/servicios/8',
        text: "Our faculties play a pivotal role in shaping the future of our students. Their unwavering dedication to academic excellence creates an environment where students can thrive and transform into well-rounded individuals ready to make a positive impact on the world.",
    },
];

export const facilities = [
    {
        id: 1,
        image: image8,
        title: "Filosofía",
        link: '/programs/7',
        text: "La Filosofía impulsa el pensamiento crítico y ético, guiando a los estudiantes a reflexionar sobre la vida, la sociedad y el conocimiento. Es la base para formar ciudadanos conscientes, responsables y capaces de cuestionar y construir ideas con propósito.",
    },
    {
        id: 2,
        image: image14,
        title: "Matemáticas",
        link: '/programs/1',
        text: "Matemáticas desarrolla habilidades analíticas y de resolución de problemas, fundamentales para la vida diaria y profesional. Los estudiantes exploran conceptos desde lo básico hasta lo avanzado, descubriendo la belleza de los números y su utilidad en diversas disciplinas.",
    },
    {
        id: 3,
        image: image11,
        title: "Educación Física",
        link: '/programs/9',
        text: "Educación Física fomenta el bienestar físico y mental a través del movimiento, el deporte y el trabajo en equipo. Los estudiantes desarrollan habilidades motrices, disciplina y una actitud saludable que fortalece cuerpo y mente.",
    },
    {
        id: 4,
        image: image12,
        title: "Tecnología",
        link: '/programs/10',
        text: "Tecnología prepara a los estudiantes para un mundo digital, enseñándoles a utilizar herramientas modernas, desarrollar proyectos innovadores y comprender los fundamentos que impulsan los avances tecnológicos en la sociedad actual.",
    },
    {
        id: 5,
        image: image13,
        title: "Ciencias y Biología",
        link: '/programs/6',
        text: "Ciencias y Biología inspiran curiosidad por el mundo natural, ofreciendo experimentos prácticos y exploraciones que despiertan el amor por la investigación. Los estudiantes descubren los misterios de la vida y la importancia de cuidar el medio ambiente.",
    },
    {
        id: 6,
        image: image9,
        title: "Artes",
        link: '/programs/5',
        text: "Artes permite a los estudiantes expresarse a través de la creatividad, explorando diversas técnicas y estilos. Este programa desarrolla habilidades visuales, sensibilidad estética y confianza para comunicar ideas de manera innovadora y personal.",
    },
    {
        id: 7,
        image: image15,
        title: "Inglés",
        link: '/programs/3',
        text: "Inglés abre puertas al mundo, potenciando la comunicación y el acceso a conocimientos globales. Los estudiantes adquieren competencias lingüísticas que les preparan para estudiar, trabajar y participar activamente en una sociedad internacional.",
    },
    {
        id: 8,
        image: image18,
        title: "Lenguaje",
        link: '/programs/4',
        text: "Lenguaje fortalece las habilidades de lectura, escritura y expresión oral, permitiendo a los estudiantes comunicarse con claridad y profundidad. Es la base para comprender textos complejos y expresar ideas de manera efectiva.",
    },
    {
        id: 9,
        image: image19,
        title: "Ética y Religión",
        link: '/programs/8',
        text: "Ética y Religión guía a los estudiantes en la reflexión sobre valores, moral y espiritualidad, ayudándoles a construir una visión equilibrada de la vida y su relación con la comunidad y el entorno.",
    },
    
    {
        id: 10,
        image: image10,
        title: "Sociales",
        link: '/programs/8',
        text: "Ética y Religión guía a los estudiantes en la reflexión sobre valores, moral y espiritualidad, ayudándoles a construir una visión equilibrada de la vida y su relación con la comunidad y el entorno.",
    },
];

export const departamentosin = [
    {
        id: 1,
        image: image39,
        title: "RECTORÍA",
        link: '/servicios/7',
        text: "La Rectoría lidera y supervisa todas las áreas del colegio, asegurando que se cumpla la misión educativa y promoviendo un ambiente de excelencia académica y valores institucionales.",
    },
    {
        id: 2,
        image: image40,
        title: "COORDINACIÓN",
        link: '/servicios/8',
        text: "La Coordinación organiza actividades escolares, gestiona el currículo y trabaja en conjunto con docentes y estudiantes para mantener la disciplina y el desarrollo integral.",
    },
    {
        id: 3,
        image: image41,
        title: "ASO PADRES",
        link: '/servicios/8',
        text: "La Asociación de Padres fomenta la comunicación entre familias y colegio, apoyando actividades y proyectos que beneficien el bienestar y formación de los estudiantes.",
    },
    {
        id: 4,
        image: image42,
        title: "SENA",
        link: '/servicios/8',
        text: "El SENA brinda formación técnica y profesional, preparando a los estudiantes para ingresar al mundo laboral con competencias prácticas y actualizadas.",
    },
    {
        id: 5,
        image: image43,
        title: "EX-ALUMNOS",
        link: '/servicios/6',
        text: "El departamento de Ex-Alumnos mantiene el vínculo con egresados, promoviendo redes de contacto, eventos y actividades que enriquezcan la comunidad educativa.",
    },
    {
        id: 6,
        image: image44,
        title: "SECRETARÍA",
        link: '/servicios/2',
        text: "La Secretaría administra los procesos académicos y administrativos, brindando atención a estudiantes, padres y docentes para garantizar un servicio eficiente y organizado.",
    }
];

export const MoreInfo = [
    {
        id: 1,
        title: "Primaria",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum nemo ad at reiciendis natus consequatur numquam",
    },
    {
        id: 2,
        title: "Bachillerato",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum nemo ad at reiciendis natus consequatur numquam",
    },
    {
        id: 2,
        title: "Cupos 2025",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum nemo ad at reiciendis natus consequatur numquam",
    },
    {
        id: 3,
        title: "Costos Educativos",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum nemo ad at reiciendis natus consequatur numquam",
    },
    {
        id: 4,
        title: "Uniformes",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum nemo ad at reiciendis natus consequatur numquam",
    },
]