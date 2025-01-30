import { SkillInfoView } from "@atoms/SkillInfoView"
import { SkillViewProps } from "./SkillsView.props"

export const SkillsView = ({ skills }: SkillViewProps) => {
    return <>
        <h2 className="subTitle">Skills</h2>
        {
            skills.map((skill, index) => <SkillInfoView key={index} skill={skill} />)
        }
    </>
}