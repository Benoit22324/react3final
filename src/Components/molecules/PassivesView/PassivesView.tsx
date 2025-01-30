import { PassiveInfoView } from "@atoms/PassiveInfoView"
import { PassivesViewProps } from "./PassivesView.props"

export const PassivesView = ({ passives }: PassivesViewProps) => {
    return <>
        {
            passives.map((passive, index) => <PassiveInfoView key={index} passive={passive} />)
        }
    </>
}