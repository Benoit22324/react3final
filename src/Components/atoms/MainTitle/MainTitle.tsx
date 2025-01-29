import "./MainTitle.css"
import { MainTitleProps } from "./MainTitle.props"

export const MainTitle = ({ label }: MainTitleProps) => {
    return <h1 className="mainTitle">{ label }</h1>
}