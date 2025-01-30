import { PassiveInfoViewProps } from "./PassiveInfoView.props"

export const PassiveInfoView = ({ passive }: PassiveInfoViewProps) => {
    return <>
        <div>
            <p className="text bold separation">{passive.name}</p>
            <p className="text bold">{passive.unlock}</p>
            <p className="text"><span className="bold">Description:</span> {passive.description}</p>
        </div>
    </>
}