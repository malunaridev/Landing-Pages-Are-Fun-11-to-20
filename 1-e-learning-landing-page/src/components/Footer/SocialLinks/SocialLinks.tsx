import './SocialLinks.css';
import instagram from "../../../assets/Instagram.png"

export const SocialLinks = () => {
    return (
        <div>
        <a href="https://www.instagram.com" target='blank'><img className="SocialLink" src={instagram}/></a>
        <a href="https://www.facebook.com" target='blank'><img className="SocialLink" src='./src/assets/Facebook.png'/></a>
        <a href="https://www.twitter.com" target='blank'><img className="SocialLink" src='./src/assets/Twitter.png'/></a>
        <a href="https://www.whatsApp.com" target='blank'><img className="SocialLink" src='./src/assets/WhatsApp.png'/></a>
        </div>
    )
}