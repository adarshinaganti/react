import {AiOutlineLike} from "react-icons/ai";
import styles from "./Like.module.css";

interface LikeProps {
	onClick: () => void;
	states?: "liked" | "disliked";
}

function Like({onClick, states}: LikeProps) {
	return (
		<button
			className={[styles.btn, styles["btn-" + states]].join(" ")}
			onClick={onClick}
		>
			<AiOutlineLike />
		</button>
	);
}

export default Like;
