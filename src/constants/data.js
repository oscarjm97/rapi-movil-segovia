import { FaClock , FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import images from './images';

const gradient = 'url(#blue-gradient)';

// Works
const works = [
    {
        img: `${images.work_1}`,
    },
    {
        img: `${images.work_2}`,
    },
    {
        img: `${images.work_3}`,
    },
    {
        img: `${images.work_4}`,
    },
    {
        img: `${images.work_5}`,
    },
    {
        img: `${images.work_6}`,
    },
    {
        img: `${images.work_7}`,
    },
    {
        img: `${images.work_8}`,
    },
];

// Services
const services = [
    {
        img: `${images.icon_laptop}`,
        title: 'ORDENADORES',
        text: 'Reparación de componentes, discos duros. Eliminación de virus y malware. Instalación y actualización de software.',
    },
    {
        img: `${images.icon_phone}`,
        title: 'MÓVILES / TABLETS',
        text: 'Arreglo de pantallas, puertos de carga y conectores. Reparación de cámaras y altavoces. Reemplazo de baterías.',
    },
    {
        img: `${images.icon_console}`,
        title: 'CONSOLAS',
        text: 'Reparación de placas base, problemas de software y solución de fallos de conectividad.',
    },
    {
        img: `${images.icon_plane}`,
        title: 'RÁPIDOS Y EFICIENTES',
        text: 'Nos comprometemos a ofrecer un servicio rápido y de calidad, con tiempos de reparación reducidos sin sacrificar la excelencia.',
    },
    {
        img: `${images.icon_diamond}`,
        title: 'GARANTÍA DE REPARACIÓN',
        text: 'Ofrecemos garantía de satisfacción en las reparaciones. Si tu dispositivo vuelve a presentar el mismo problema, lo solucionamos sin costo adicional.',
    },
    {
        img: `${images.icon_star}`,
        title: 'EXPERTOS EN TECNOLOGÍA',
        text: 'Nuestro equipo de técnicos altamente capacitados tiene años de experiencia en la reparación de dispositivos móviles, computadoras y otros gadgets.',
    },
];

// Testimonials
const testimonials = [
    {
        name: 'Adrián Molina',
        text: 'Tuve un problema con mi ordenador y Rapi Móvil me salvó. Su equipo identificó y solucionó el problema en tiempo récord. Me encantó la atención personalizada y la transparencia al explicarme los pasos a seguir. Sin duda, recomiendo sus servicios a cualquiera que necesite reparaciones rápidas y confiables.',
    },
    {
        name: 'Cristina López',
        text: 'Dejé mi celular en Rapi Móvil pensando que tardaría días en arreglarse, pero me lo entregaron funcionando como nuevo en pocas horas. Además, ofrecen precios muy competitivos y un trato excelente. Es mi lugar de confianza para cualquier reparación electrónica. ¡Un servicio de 10!.',
    },
    {
        name: 'Laura Rodríguez',
        text: 'Excelente servicio. Mi teléfono se cayó y la pantalla se rompió. Los chicos de Rapi Móvil lo repararon en un par de horas, ¡y quedó como nuevo!.',
    },
    {
        name: 'Carlos Martín',
        text: 'Muy buenos precios y atención. Necesitaba recuperar datos de mi laptop y no solo lo lograron, sino que también me asesoraron sobre cómo prevenir futuros problemas. ¡Recomendados!.',
    },
];

// Contact
const contacts = [
    {
        id: 25,
        icon: <FaPhoneAlt style={{ fill: gradient }} />,
        info: '+34 622 58 57 17',
        text: 'Puede llamarnos en cualquier momento dentro de nuestro horario.',
    },
    {
        id: 26,
        icon: <FaClock style={{ fill: gradient }} />,
        info: 'Nuestro Horario',
        text: 'Lunes - Viernes: 10:00 a 15:00 y 17:00 a 21:00. Sábados: 10:00 a 17:00.',
    },
    {
        id: 27,
        icon: <FaMapMarkerAlt style={{ fill: gradient }} />,
        info: 'Calle Ortiz de Paz, 10, 40005 Segovia.',
        text: 'Visítenos en nuestra tienda.',
    },
];

const data = {
    works,
    services,
    testimonials,
    contacts,
};

export default data;
