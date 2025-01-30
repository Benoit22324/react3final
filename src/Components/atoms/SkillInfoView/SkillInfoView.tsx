import { SkillInfoViewProps } from "./SkillInfoView.props"

export const SkillInfoView = ({ skill }: SkillInfoViewProps) => {
    return <>
        <div>
            <p className="text bold separation">{skill.name} ({skill.unlock})</p>
            <p className="text"><span className="bold">Description:</span> {skill.description}</p>
        </div>
    </>
}