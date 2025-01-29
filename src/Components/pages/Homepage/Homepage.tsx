import "./Homepage.css"
import { MainTitle } from "@atoms/MainTitle"
import { Text } from "@atoms/Text"
import { TextLink } from "@molecules/TextLink"

export const Homepage = () => {
    return <>
        <div className="homepage">
            <MainTitle label="Home Page" />
            <Text txt="Welcome to the Final Project of this week of React TS." />
            <Text txt="This project use a Honkai Star Rail fan-made API." />
            <TextLink txt="Link to his repo:" label="HSR API" link="https://github.com/ajcastan0103/HSR-API" />
        </div>
    </>
}