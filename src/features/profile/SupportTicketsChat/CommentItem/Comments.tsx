import styles from "./Comments.module.sass";
import { Button } from "../../imports/components";

import { ChangeEvent, useState } from "react";
import FolderPlusIconSrc from "../assets/Folder_plus.svg";
import { CommentItem } from "@/features/profile/SupportTicketsChat/CommentItem/CommentItem.tsx";
import { comments } from "@/features/profile/constants.ts";

export default function SupportTicketsChat() {
	const [commentText, setCommentText] = useState("");

	const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setCommentText(e.target.value);
	};

	return (
		<div className={styles.comments}>
			<h3>Comments</h3>

			<div>
				{comments.map((c) => (
					<CommentItem key={c.datetime + c.author} {...c} />
				))}

				<div style={{ marginLeft: 12 }}>Leave comments</div>

				<div className={styles.comments__leave}>
					<textarea
						className={styles.comments__input}
						placeholder="Type here..."
						value={commentText}
						onChange={handleCommentChange}
					/>
				</div>
			</div>

			<div className={styles.comments__bottom}>
				<div>
					<img src={FolderPlusIconSrc} alt="Folder-icon" />
				</div>

				<Button>Post comment</Button>
			</div>
		</div>
	);
}
