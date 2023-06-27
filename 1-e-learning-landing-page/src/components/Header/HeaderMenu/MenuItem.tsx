import './MenuItem.css';

type Props = {
    title: string;
    link: string
}

export const MenuItem = ({ title, link }: Props) => {
    return (
        <a href={link} target='blank'><div className="menuItem">{title}</div></a>
    )
}