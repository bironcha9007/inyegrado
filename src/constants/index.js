import { FaAngleDoubleDown, FaCertificate, FaChalkboardTeacher, FaEnvelope, FaPhone, FaQuoteRight, FaSchool } from 'react-icons/fa';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.webp';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpeg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';
import image13 from '../assets/image13.jpg';
import image14 from '../assets/image14.png';
import image15 from '../assets/image15.jpg';
import image16 from '../assets/image16.jpg';

export const navLinks = [
    {
        id: 'Inicio',
        link: '',
    },
    {
        id: 'Nosotros',
        link: 'about',
    },
    {
        id: 'Agenda',
        link: 'facility',
    },
    {
        id: 'Departamentos',
        link: 'programs',
    },
    {
        id: 'Contacto',
        link: 'contact'
    },
    {
        id: 'Admisiones',
        link: 'apply',
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
        title: 'Proyectos y Retos',
        reason: "We take pride in offering students an exceptional learning environment that is supported by top-notch facilities. We believe that a well-equipped setting is instrumental in enhancing our students' educational experience",
        icon: <FaSchool />,
    },
    {
        id: 2,
        title: 'Certificación y Calidad',
        reason: 'A reason why students should come to our school is the opportunity to earn valuable certificates that can open doors to future success. These certificates are a testament to the diverse skills our students gain during their time with us',
        icon: <FaCertificate />,
    },
    {
        id: 3,
        title: 'Educación del Futuro',
        reason: "At our school, we pride ourselves on creating a learning environment that is truly conducive to unleashing the full potential of each and every student. We invite you to join our vibrant learning community",
        icon: <FaChalkboardTeacher />,
    },
];

export const testimonials = [
    {
        id: 1,
        icon: <FaQuoteRight />,
        image: image3,
        name: 'Michael Chen',
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
        name: 'Andres Fer',
        testimonial: "I can confidently say that my time at school has been the most enriching and fulfilling experience of my life. The school's emphasis on holistic development helped me not only excel academically but also grow as an individual.",
    },
    {
        id: 4,
        icon: <FaQuoteRight />,
        image: image4,
        name: 'Aleja J',
        testimonial: "I've been inspired to pursue my passions and have discovered a love for science that I never knew I had. Moreover, the sense of community at our school is heartwarming. I've made lifelong friends and feel like I'm part of a big family.",
    },
    {
        id: 5,
        icon: <FaQuoteRight />,
        image: image3,
        name: 'Anthony Joshua',
        testimonial: 'I transferred to school during my sophomore year, and it was one of the best decisions I ever made. The transition was seamless, thanks to the warm and supportive environment created by both teachers and fellow students.',
    },
];

// export const footerLinks = [
//     {
//         id: 1,
//         link: "Home",
//     },
//     {
//         id: 2,
//         link: "About",
//     },
//     {
//         id: 3,
//         link: "Facility",
//     },
//     {
//         id: 4,
//         link: "Programs",
//     },
//     {
//         id: 5,
//         link: "Apply",
//     },
// ]

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
        text: "Instituto Educativo",
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
    {
        id: 3,
        icon: <FaEnvelope />,
        text: "https://integradosoacha.netlify.app/",
    }
];

export const AboutPart = [
    {
        id: 1,
        image: image7,
        title: "Departamentos",
        text: "Our programs are designed to ignite the spark of curiosity and innovation in students. Through hands-on experiments, projects, and collaborative activities, students explore the fascinating realms of science, technology, engineering, and others.",
    },
    {
        id: 2,
        image: image8,
        title: "Programas",
        text: "we take pride in providing state-of-the-art facilities that create an ideal environment for holistic learning and growth. Our commitment to excellence extends beyond the classroom, ensuring that every aspect of a student's educational journey is supported.",
    },
    {
        id: 3,
        image: image9,
        title: "Facultades",
        text: "Our faculties play a pivotal role in shaping the future of our students. Their unwavering dedication to academic excellence creates an environment where students can thrive and transform into well-rounded individuals ready to make a positive impact on the world.",
    },
];

export const facilities = [
    {
        id: 1,
        image: image8,
        title: "School Library",
        text: "Our extensive library and resource center serve as a hub of knowledge, providing a diverse collection of books, e-books, journals, and multimedia resources. It is a quiet oasis where students can immerse themselves in reading and research.",
    },
    {
        id: 2,
        image: image10,
        title: "Music Room",
        text: "We recognize the importance of nurturing students' passion for music. Our music facilities provide a vibrant and inspiring space for students to explore, create, and excel in the world of music.",
    },
    {
        id: 3,
        image: image11,
        title: "Sport Facility",
        text: "Our school offers a range of sports facilities, including a well-equipped gymnasium, playgrounds, and courts for various sports, encouraging students to stay active and develop a spirit of sportsmanship.",
    },
    {
        id: 4,
        image: image12,
        title: "Computer Lab",
        text: "We understand the pivotal role technology plays in modern education. Our computer lab facilities are designed to provide students with a cutting-edge learning environment that fosters digital literacy.",
    },
    {
        id: 5,
        image: image13,
        title: "Science Lab",
        text: "We take immense pride in providing our students with top-notch science lab facilities that are designed to ignite curiosity, foster exploration, and enhance scientific learning.",
    },
    {
        id: 6,
        image: image14,
        title: "Art Studio",
        text: "Creativity thrives in our art studios, where students can explore various mediums and unleash their artistic potential. These studios are designed to inspire young artists to express themselves through visual arts.",
    },
    {
        id: 7,
        image: image15,
        title: "Medicare",
        text: "The well-being of our students is of utmost importance. Our school provides a dedicated medical room and trained staff to attend to any health-related needs and emergencies.",
    },
    {
        id: 8,
        image: image16,
        title: "Multipurpose hall",
        text: "Our Multipurpose Hall is a hub of creativity, learning, and community engagement, providing numerous benefits and opportunities for our students, faculty, and the broader school community.",
    },
    {
        id: 9,
        image: image9,
        title: "Modern Classrooms",
        text: "Our school boasts spacious and well-equipped modern classrooms designed to create an optimal learning environment. Each classroom is thoughtfully arranged to enhance student engagement and foster a collaborative atmosphere.",
    },
];

export const MoreInfo = [
    {
        id: 1,
        title: "Housing",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum nemo ad at reiciendis natus consequatur numquam",
    },
    {
        id: 2,
        title: "Financial Aid",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum nemo ad at reiciendis natus consequatur numquam",
    },
    {
        id: 3,
        title: "Tuition",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum nemo ad at reiciendis natus consequatur numquam",
    },
    {
        id: 4,
        title: "Immigration",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum nemo ad at reiciendis natus consequatur numquam",
    },
]