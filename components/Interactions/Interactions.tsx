import {
    FaGhost as BooIcon,
    FaCommentAlt as CommentIcon
} from 'react-icons/fa'

export const Interactions = () => {
    return (
        <div>
            <div>
                <BooIcon />
                <span>15</span>
            </div>
            <div>
                <CommentIcon />
                <span>6</span>
            </div>
        </div>
    )
}