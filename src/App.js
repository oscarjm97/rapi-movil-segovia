import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
// import Work from './components/Work/Work';
import WorkProcess from './components/WorkProcess/WorkProcess';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
    return (
        <div className="holder">
            <Header />
            <AboutUs />
            <Services />
            {/* <Work /> */}
            <WorkProcess />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
