import { FaHeadset, FaAngleDoubleDown, FaEnvelope, FaPhone, FaQuoteRight, FaSchool } from 'react-icons/fa';
import image3 from '../assets/agenda.jpg';
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
        testimonial: "En octubre, el arte cobró vida en el Primer Festival Audiovisual 2024. Sombras y luces danzaron en mágicos cortometrajes de animación y stop motion, tejidos por manos jóvenes y soñadoras. Bachillerato fue el lienzo donde la creatividad floreció, regalándonos historias vibrantes y memorables. Una noche donde el cine escolar dejó huella en el corazón de nuestra comunidad.",
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
        image: image3,
        name: 'Primaria',
        testimonial: "Nuestras sedes están diseñadas para cada etapa educativa. La sede de primaria es un espacio acogedor, perfecto para que los más pequeños descubran el mundo mientras desarrollan valores. La sede de bachillerato, equipada con herramientas modernas, impulsa el crecimiento académico y personal de nuestros jóvenes.",
    },
    {
        id: 1,
        icon: <FaHeadset />,
        image: image3,
        name: 'Bachillerato',
        testimonial: "Nuestras sedes están diseñadas para cada etapa educativa. La sede de primaria es un espacio acogedor, perfecto para que los más pequeños descubran el mundo mientras desarrollan valores. La sede de bachillerato, equipada con herramientas modernas, impulsa el crecimiento académico y personal de nuestros jóvenes.",
    },
    {
        id: 2,
        icon: <FaHeadset />,
        image: image4,
        name: 'Cupos 2025',
        testimonial: 'Comienza un nuevo ciclo académico con nuestro sistema de matrículas y admisiones en línea. Desde nuestra plataforma, realiza el proceso de forma ágil y sencilla, sin filas ni complicaciones. Solo necesitas ingresar, registrar los datos y seguir las indicaciones. ¡Un año lleno de aprendizaje comienza aquí!',
    },
    {
        id: 3,
        icon: <FaHeadset />,
        image: image3,
        name: 'Costos',
        testimonial: "Te invitamos a informarte sobre los costos educativos: matrícula, derechos de grado, certificados y papelería. Nuestros valores son transparentes y accesibles. Para más detalles, puedes acercarte a la oficina administrativa o comunicarte a los canales oficiales. ¡Juntos construimos un año escolar exitoso!",
    },
    {
        id: 4,
        icon: <FaHeadset/>,
        image: image4,
        name: 'Uniformes',
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
    }
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
        text: "Our extensive library and resource center serve as a hub of knowledge, providing a diverse collection of books, e-books, journals, and multimedia resources. It is a quiet oasis where students can immerse themselves in reading and research.",
    },
    {
        id: 2,
        image: image14,
        title: "Matematicas",
        link: '/programs/1',
        text: "We recognize the importance of nurturing students' passion for music. Our music facilities provide a vibrant and inspiring space for students to explore, create, and excel in the world of music.",
    },
    {
        id: 3,
        image: image11,
        title: "Educación Fisica",
        link: '/programs/9',
        text: "Our school offers a range of sports facilities, including a well-equipped gymnasium, playgrounds, and courts for various sports, encouraging students to stay active and develop a spirit of sportsmanship.",
    },
    {
        id: 4,
        image: image12,
        title: "Tecnología",
        link: '/programs/10',
        text: "We understand the pivotal role technology plays in modern education. Our computer lab facilities are designed to provide students with a cutting-edge learning environment that fosters digital literacy.",
    },
    {
        id: 5,
        image: image13,
        title: "Ciencias y Biología",
        link: '/programs/6',
        text: "We take immense pride in providing our students with top-notch science lab facilities that are designed to ignite curiosity, foster exploration, and enhance scientific learning.",
    },
    {
        id: 6,
        image: image9,
        title: "Artes",
        link: '/programs/5',
        text: "Creativity thrives in our art studios, where students can explore various mediums and unleash their artistic potential. These studios are designed to inspire young artists to express themselves through visual arts.",
    },
    {
        id: 7,
        image: image15,
        title: "Ingles",
        link: '/programs/3',
        text: "The well-being of our students is of utmost importance. Our school provides a dedicated medical room and trained staff to attend to any health-related needs and emergencies.",
    },
    {
        id: 8,
        image: image18,
        title: "Lenguaje",
        link: '/programs/4',
        text: "Our Multipurpose Hall is a hub of creativity, learning, and community engagement, providing numerous benefits and opportunities for our students, faculty, and the broader school community.",
    },
    {
        id: 9,
        image: image19,
        title: "Etica y Religuión",
        link: '/programs/8',
        text: "Our school boasts spacious and well-equipped modern classrooms designed to create an optimal learning environment. Each classroom is thoughtfully arranged to enhance student engagement and foster a collaborative atmosphere.",
    },
];
export const departamentosin = [
    {
        id: 1,
        image: image8,
        title: "RECTORIA",
        link: '/servicios/7',
        text: "Our extensive library and resource center serve as a hub of knowledge, providing a diverse collection of books, e-books, journals, and multimedia resources. It is a quiet oasis where students can immerse themselves in reading and research.",
    },
    {
        id: 2,
        image: image10,
        title: "COORDINACIÓN",
        link: '/servicios/8',
        text: "We recognize the importance of nurturing students' passion for music. Our music facilities provide a vibrant and inspiring space for students to explore, create, and excel in the world of music.",
    },
    {
        id: 3,
        image: image11,
        title: "ASO PADRES",
        link: '/servicios/8',
        text: "Our school offers a range of sports facilities, including a well-equipped gymnasium, playgrounds, and courts for various sports, encouraging students to stay active and develop a spirit of sportsmanship.",
    },
    {
        id: 4,
        image: image12,
        title: "SENA",
        link: '/servicios/8',
        text: "We understand the pivotal role technology plays in modern education. Our computer lab facilities are designed to provide students with a cutting-edge learning environment that fosters digital literacy.",
    },
    {
        id: 5,
        image: image13,
        title: "EX-ALUMNOS",
        link: '/servicios/6',
        text: "We take immense pride in providing our students with top-notch science lab facilities that are designed to ignite curiosity, foster exploration, and enhance scientific learning.",
    },
    {
        id: 6,
        image: image14,
        title: "SECRETARIA",
        link: '/servicios/2',
        text: "Creativity thrives in our art studios, where students can explore various mediums and unleash their artistic potential. These studios are designed to inspire young artists to express themselves through visual arts.",
    }
   
];
export const MoreInfo = [
    {
        id: 1,
        title: "Primaria y Bachillerato",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum nemo ad at reiciendis natus consequatur numquam",
    },
    {
        id: 2,
        title: "Inscripción en línea",
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