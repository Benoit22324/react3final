import { ConstellationInfoViewProps } from "./ConstellationInfoView.props"

export const ConstellationInfoView = ({ constellation }: ConstellationInfoViewProps) => {
    return <>
        <div>
            <p className="text bold separation">{constellation.name} <span className="italic">({constellation.unlock})</span></p>
            <p className="text"><span className="bold">Description:</span> {constellation.description}</p>
        </div>
    </>
}