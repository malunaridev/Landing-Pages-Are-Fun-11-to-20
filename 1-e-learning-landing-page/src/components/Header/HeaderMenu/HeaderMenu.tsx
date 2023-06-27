import './HeaderMenu.css';
import { MenuItem } from "./MenuItem"
import { SearchBar } from '../SearchBar/SearchBar';
import { MenuAnimation } from './MenuAnimation';

export const HeaderMenu = () => {
    return (    
      <div className="headerMenu">
        <MenuAnimation/>
        <MenuItem title="Home" link="https://www.google.com.br"/>
        <MenuItem title="About" link="#"/>
        <MenuItem title="Timing" link="#"/>
        <MenuItem title="Courses" link="#"/>
        <SearchBar/>
      </div>  
    )
}