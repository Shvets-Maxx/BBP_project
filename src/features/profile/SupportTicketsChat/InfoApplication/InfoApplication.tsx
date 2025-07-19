import styles from "./InfoApplication.module.sass";

import { PriorityBadge, StatusBadge } from "../../imports/components";

export default function InfoApplication() {
	return (
		<div className={styles.top}>
			<div className={styles.top__info}>
				<h3>#51973 - Your application received</h3>
				<div className={styles.top__details}>
					<PriorityBadge level={"medium"} />

					<StatusBadge status={"open"} />
				</div>
			</div>

			<div className={styles.top__date}>
				<span>
					<span className={styles["top__details-grey"]}>Create date: </span>
					03 Dec, 2025
				</span>

				<span>
					<span className={styles["top__details-grey"]}>Due to date: </span>
					08 Dec, 2025
				</span>
			</div>
		</div>
	);
}
