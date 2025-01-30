import { ConstellationInfoView } from "@atoms/ConstellationInfoView"
import { ConstellationsViewProps } from "./ConstellationsView.props"

export const ConstellationsView = ({ constellations }: ConstellationsViewProps) => {
    return <>
        <h2 className="subTitle">Constellations</h2>
        {
            constellations.map((constellation, index) => <ConstellationInfoView key={index} constellation={constellation} />)
        }
    </>
}