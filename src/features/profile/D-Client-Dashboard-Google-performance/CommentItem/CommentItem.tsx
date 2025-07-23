import { FC, useState } from "react";
import styles from "./CommentItem.module.sass";
import undoIconSrc from "@/features/profile/SupportTicketsChat/assets/undo.svg";
import Star from "../assets/Star.svg";

import warning from "../assets/warningNO.svg";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";

type Period = "This month" | "Last month";

interface CommentProps {
	avatar: string;
	author: string;
	role?: string;
	datetime: string;
	content: string;
	rating?: number; // додано
	imgg?: string;
}

export const CommentItem: FC<CommentProps> = ({
	avatar,
	author,
	role,
	datetime,
	content,
	imgg,
}) => {
	const [timeRange, setTimeRange] = useState<Period>("This month");

	const handleChange = (event: SelectChangeEvent<Period>) => {
		setTimeRange(event.target.value as Period);
	};

	return (
		<div className={styles.comments}>
			<div className={styles.comments__el}>
				<div
					className={styles.comments__block}
					style={{ display: "flex", flexDirection: "column" }}
				>
					<div className={styles.comments__header}>
						<div className={styles.comments__headerTitle}>
							<img src={avatar} alt="avatar" />
							<span>
								{author}
								{role ? ` — ${role}` : ""}
							</span>
							<span className={styles.dateTime}>{datetime}</span>
						</div>

						<div>
							<img src={warning} alt="" />
						</div>
					</div>

					<div
						className={styles.comments__star}
						style={{ display: "flex", marginLeft: "38px" }}
					>
						<img src={Star} alt="star" />
						<img src={Star} alt="star" />
						<img src={Star} alt="star" />
						<img src={Star} alt="star" />
						<img src={Star} alt="star" />
					</div>
				</div>
				<div className={styles.comments__content}>{content}</div>
				{imgg && (
					<div className={styles.comments__clothes}>
						<img src={imgg} alt="clothes 1" />
						<img src={imgg} alt="clothes 2" />
					</div>
				)}

				<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
					<button className={styles["comments__el-reply"]}>
						<img src={undoIconSrc} alt="reply" />
						<span>Reply</span>
					</button>

					<Select
						value={timeRange}
						onChange={handleChange}
						variant="standard"
						disableUnderline
						sx={{ fontSize: 14 }}
					>
						<MenuItem value="This month">3 replies</MenuItem>
						<MenuItem value="Last month">2 replies</MenuItem>
						<MenuItem value="Last month">4 replies</MenuItem>
					</Select>
				</div>
			</div>
		</div>
	);
};
