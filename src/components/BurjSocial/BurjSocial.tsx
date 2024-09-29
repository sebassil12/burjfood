
import { IMAGE_PATH } from "../../constants/images"
import social from "./styles/BurjSocial.module.css"
export default function BurjSocial() {
  return (
    <div className={social.icon_container}>
        <a href="https://www.facebook.com" target="blank"><img src={IMAGE_PATH.facebook} alt="Facebook" className={social.image}/></a>
        <a href="https://www.instagram.com" target="blank"> <img src={IMAGE_PATH.instagram} alt="Instagram" className={social.image}/></a>
        <a href="https://www.tiktok.com" target="blank"><img src={IMAGE_PATH.tiktok} alt="Tiktok" className={social.image}/></a>
    </div>
  )
}
