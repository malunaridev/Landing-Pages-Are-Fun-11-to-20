import { Logo } from './Logo/Logo';
import { HeaderMenu } from './HeaderMenu/HeaderMenu';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <Logo/><HeaderMenu/>
        </header>
    )
}
