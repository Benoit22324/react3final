import "./Skeleton.css"
import { SkeletonProps } from "./Skeleton.props"

export const Skeleton = ({width = "50px", height = "50px", borderRadius = "2px"}: SkeletonProps) => {
    return <>
        <div className="skeletonAtom" style={{
            width,
            height,
            borderRadius
        }}></div>
    </>
}