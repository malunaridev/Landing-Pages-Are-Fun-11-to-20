import './SocialLinks.css';
import instagram from "../../../assets/Instagram.png"
import facebook from "../../../assets/Facebook.png"
import twitter from "../../../assets/Twitter.png"
import whatsapp from "../../../assets/WhatsApp.png"

export const SocialLinks = () => {
    return (
        <div>
        <a href="https://www.instagram.com" target='blank'><img className="SocialLink" src={instagram}/></a>
        <a href="https://www.facebook.com" target='blank'><img className="SocialLink" src={facebook}/></a>
        <a href="https://www.twitter.com" target='blank'><img className="SocialLink" src={twitter}/></a>
        <a href="https://www.whatsApp.com" target='blank'><img className="SocialLink" src={whatsapp}/></a>
        </div>
    )
}