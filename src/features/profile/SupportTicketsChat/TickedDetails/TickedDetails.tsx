import styles from "./TickedDetails.module.sass";

import { StatusSelect } from "../../imports/components";

export default function TickedDetails() {
	return (
		<div className={styles.details}>
			<h3>Ticked details</h3>
			<div className={styles.details__inner}>
				<div>
					<span>Ticket:</span> <span>#51973</span>
				</div>

				<div>
					<span>Status:</span> <StatusSelect />
				</div>

				<div>
					<span>Priority:</span>{" "}
					<span style={{ color: "#EDCE54", fontWeight: 700 }}>Medium</span>
				</div>

				<div>
					<span>Create date:</span> <span>12.03.2025 </span>
				</div>

				<div>
					<span>Due to date:</span> <span>12.08.2025 </span>
				</div>
			</div>
		</div>
	);
}
