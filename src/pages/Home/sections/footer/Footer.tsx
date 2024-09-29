
import BurjSocial from "../../../../components/BurjSocial/BurjSocial";
import footer from "./footer.module.css"

function Footer() {
    return (  
    <div className={footer.container}>
        <div>
            <hr className={footer.line}></hr>
        </div>
        <div>
            <BurjSocial />
            <h1>BurjFood</h1>
            <p>Copyright 2023 BurjFood</p>
        </div>
        <div>
            <hr className={footer.line}></hr>
        </div>
    </div>
    );
}

export default Footer;