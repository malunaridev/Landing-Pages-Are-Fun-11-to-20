import './SocialLinks.css';
import instagram from "../../../assets/Instagram.png"
import facebook from "../../../assets/Facebook.png"
import facebook2 from "@/assets/Facebook.png"

export const SocialLinks = () => {
    console.log(facebook2)
    return (
        <div>
        <a href="https://www.instagram.com" target='blank'><img className="SocialLink" src={instagram}/></a>
        <a href="https://www.facebook.com" target='blank'><img className="SocialLink" src={facebook2}/></a>
        <a href="https://www.twitter.com" target='blank'><img className="SocialLink" src='./src/assets/Twitter.png'/></a>
        <a href="https://www.whatsApp.com" target='blank'><img className="SocialLink" src='./src/assets/WhatsApp.png'/></a>
        </div>
    )
}