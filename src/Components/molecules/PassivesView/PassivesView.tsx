import { PassiveInfoView } from "@atoms/PassiveInfoView"
import { PassivesViewProps } from "./PassivesView.props"

export const PassivesView = ({ passives }: PassivesViewProps) => {
    return <>
        <h2 className="subTitle">Passives</h2>
        {
            passives.map((passive, index) => <PassiveInfoView key={index} passive={passive} />)
        }
    </>
}