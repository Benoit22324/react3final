import { SkillInfoView } from "@atoms/SkillInfoView"
import { SkillViewProps } from "./SkillsView.props"

export const SkillsView = ({ skills }: SkillViewProps) => {
    return <>
        {
            skills.map((skill, index) => <SkillInfoView key={index} skill={skill} />)
        }
    </>
}