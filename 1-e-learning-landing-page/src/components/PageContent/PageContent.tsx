import { ReactNode } from "react";
import "./PageContent.css"

type Props = {
    children: ReactNode;
}

export const PageContent = ({children}: Props) => {
    return (
        <div className="PageContent">
            {children}   
        </div>
    )
}