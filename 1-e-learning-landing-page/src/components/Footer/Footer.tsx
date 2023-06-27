import { ReactNode } from "react";
import "./Footer.css";

type Props = {
    children: ReactNode;
}

export const Footer = ({children}: Props) => {
    return (
        <div className="footer">{children}</div>
        // <div>
        //     <SocialLinks icon="./src/assets/Instagram.png" link="https://www.instagram.com" target="blank"/>
        // </div>
    )
}
