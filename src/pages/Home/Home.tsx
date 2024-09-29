import BurjAward from "../../components/BurjAwards/BurjAwards";
import Divider from "../../components/Divider/Divider";
import Slider from "../../components/Slider/Slider";
import { resSlides, slides } from "../../constants/images";
import home from './home.module.css'
import Content from "./sections/content/Content";
import Footer from "./sections/footer/Footer";
function Home() {
    return ( 
        <div>
            <section className={home.portada}>
            <Slider slides={slides} />
            <Divider />
            </section>
            <section className={home.content}>
            <Content />
            </section>
            <section className={home.social}>
            <BurjAward />
            </section>
            <h1 style={{marginLeft:"var(--marginlr)", marginTop:"5vh"}}>Conócenos</h1>
            <section className={home.local}>
            <Slider slides={resSlides}/>
            </section>
            <footer className={home.footer}>
            <Footer />
            </footer>
            
            
        </div>
     );
}

export default Home;