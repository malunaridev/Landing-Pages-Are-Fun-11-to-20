import logoImage from './Logo.png';
import './Logo.css';

export const Logo = () => {
    return (
        <img className="logo" src={logoImage}/>
    )
}