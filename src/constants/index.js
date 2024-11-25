import { FaAngleDoubleDown, FaEnvelope, FaPhone, FaQuoteRight, FaSchool } from 'react-icons/fa';
import image3 from '../assets/agenda.jpg';
import image4 from '../assets/admisiones.jpg';
import image7 from '../assets/servicios.jpg';
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
        text: 'La Institución Educativa Integrado de Soacha garantiza el derecho a la educación formal de niños, niñas, jóvenes y adultos del municipio de Soacha fundamentado en el proceso de enseñanza aprendizaje de muy buena calidad desarrollando competencias básicas y ciudadanas a través de valores éticos, culturales, espirituales con alto sentido de responsabilidad para su formación integral.',
        icon: <FaAngleDoubleDown />,
    },
    {
        id: 2,
        title: 'Nuestra Visión',
        text: 'Para el año 2025 la Institución Educativa Integrado de Soacha se consolidará como una de las mejores del municipio en adelantar procesos académicos con enfoque constructivista formando seres humanos en un marco pluralista, democrático, incluyente y respetuoso, conocimientos, competencias y habilidades que respondan a las necesidades intelectuales, emocionales e interpersonales y se comprometan con el cambio de la sociedad soachuna.',
        icon: <FaAngleDoubleDown />,
    },
    {
        id: 3,
        title: 'Nuestros Objetivos',
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
        image: image3,
        name: 'Rafael Fonseca',
        testimonial: "I cannot express enough gratitude for the exceptional education I have received at school. The school's nurturing and supportive environment allowed me to flourish both academically and personally. The dedicated teachers and their innovative teaching methods sparked my curiosity and passion for learning",
    },
    {
        id: 2,
        icon: <FaQuoteRight />,
        image: image4,
        name: 'Diego Peña',
        testimonial: 'My time at school has been nothing short of transformative. From the first day I stepped foot on campus, I felt welcomed and supported by the caring staffs and fellow students. I am grateful for the incredible opportunities I had at school, which have prepared me for a bright future in higher education and beyond.',
    },
    {
        id: 3,
        icon: <FaQuoteRight />,
        image: image3,
        name: 'Rafael Fonseca',
        testimonial: "I can confidently say that my time at school has been the most enriching and fulfilling experience of my life. The school's emphasis on holistic development helped me not only excel academically but also grow as an individual.",
    },
    {
        id: 4,
        icon: <FaQuoteRight />,
        image: image4,
        name: 'Pedro Mora',
        testimonial: "I've been inspired to pursue my passions and have discovered a love for science that I never knew I had. Moreover, the sense of community at our school is heartwarming. I've made lifelong friends and feel like I'm part of a big family.",
    },
    {
        id: 5,
        icon: <FaQuoteRight />,
        image: image3,
        name: 'Alex Baquero',
        testimonial: 'I transferred to school during my sophomore year, and it was one of the best decisions I ever made. The transition was seamless, thanks to the warm and supportive environment created by both teachers and fellow students.',
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
        image: image7,
        link: '/servicios/9',
        title: "PEI",
        text: "Our programs are designed to ignite the spark of curiosity and innovation in students. Through hands-on experiments, projects, and collaborative activities, students explore the fascinating realms of science, technology, engineering, and others.",
    },
    {
        id: 2,
        image: image8,
        title: "GOBIERNO ESCOLAR",
        link: '/servicios/9',
        text: "we take pride in providing state-of-the-art facilities that create an ideal environment for holistic learning and growth. Our commitment to excellence extends beyond the classroom, ensuring that every aspect of a student's educational journey is supported.",
    },
    {
        id: 3,
        image: image9,
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
        text: "Our extensive library and resource center serve as a hub of knowledge, providing a diverse collection of books, e-books, journals, and multimedia resources. It is a quiet oasis where students can immerse themselves in reading and research.",
    },
    {
        id: 2,
        image: image10,
        title: "COORDINACIÓN",
        text: "We recognize the importance of nurturing students' passion for music. Our music facilities provide a vibrant and inspiring space for students to explore, create, and excel in the world of music.",
    },
    {
        id: 3,
        image: image11,
        title: "ASO PADRES",
        text: "Our school offers a range of sports facilities, including a well-equipped gymnasium, playgrounds, and courts for various sports, encouraging students to stay active and develop a spirit of sportsmanship.",
    },
    {
        id: 4,
        image: image12,
        title: "SENA",
        text: "We understand the pivotal role technology plays in modern education. Our computer lab facilities are designed to provide students with a cutting-edge learning environment that fosters digital literacy.",
    },
    {
        id: 5,
        image: image13,
        title: "EX-ALUMNOS",
        text: "We take immense pride in providing our students with top-notch science lab facilities that are designed to ignite curiosity, foster exploration, and enhance scientific learning.",
    },
    {
        id: 6,
        image: image14,
        title: "SECRETARIA",
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