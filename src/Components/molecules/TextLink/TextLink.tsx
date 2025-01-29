import "./TextLink.css"
import { Text } from "@atoms/Text"
import { WebLink } from "@atoms/WebLink"
import { TextLinkProps } from "./TextLink.props"

export const TextLink = ({ txt, label, link }: TextLinkProps) => {
    return <>
        <div className="textlink">
            <Text txt={txt} />
            <WebLink label={label} link={link} />
        </div>
    </>
}