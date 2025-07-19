import { FC } from "react";
import styles from "../CommentItem/Comments.module.sass";
import undoIconSrc from "@/features/profile/SupportTicketsChat/assets/undo.svg";

interface CommentProps {
	avatar: string;
	author: string;
	role?: string;
	datetime: string;
	content: string;
}

export const CommentItem: FC<CommentProps> = ({
	avatar,
	author,
	role,
	datetime,
	content,
}) => (
	<div className={styles.comments__el}>
		<div>
			<img src={avatar} alt="avatar" />
			<span>
				{author}
				{role ? ` — ${role}` : ""}
			</span>
			<span>{datetime}</span>
		</div>
		<div>{content}</div>
		<button className={styles["comments__el-reply"]}>
			<img src={undoIconSrc} alt="reply" />
			<span>Reply</span>
		</button>
	</div>
);
