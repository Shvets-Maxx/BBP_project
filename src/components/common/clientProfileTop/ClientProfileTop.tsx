// import React, { FC , ReactNode } from "react";
// import styles from "./ClientProfileTop.module.scss";
// import NotificationIconSrc from "./assets/notifications.svg";
// import GlobusIconSrc from "./assets/Small globe.svg";
// import ArrowDownSrc from "./assets/Small arrow_Down.svg";

// interface ClientProfileTopProps {
// 	children: ReactNode;
// 	className?: string;
// }

// const ClientProfileTop: FC<ClientProfileTopProps> = ({
// 	children,
// 	className,
// }) => {
// 	const segments = children.split(" - ");

// 	return (
// 		<div className={styles.core}>
// 			<h1 className={className}>

// 				{segments.map((text, idx) => (
// 					<React.Fragment key={idx}>
// 						<span className={idx < segments.length - 1 ? styles.grey : undefined}>
// 							{text}
// 						</span>
// 						{idx < segments.length - 1 && (
// 							<span
// 								className={`${styles.separator} ${idx < segments.length - 1 ? styles.grey : undefined}`}
// 							>
// 								{" "}
// 								-{" "}
// 							</span>
// 						)}
// 					</React.Fragment>
// 				))}
// 			</h1>

// 			<div className={styles.actions}>
// 				<div className={styles.notification}>
// 					<img src={NotificationIconSrc} alt="notification-icon" />
// 				</div>
// 				<div className={styles.language}>
// 					<img src={GlobusIconSrc} alt="language-icon" />
// 					<span>EN</span>
// 					<img src={ArrowDownSrc} alt="dropdown-icon" />
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default ClientProfileTop;
import React, { FC, ReactNode } from "react";
import styles from "./ClientProfileTop.module.scss";
import NotificationIconSrc from "./assets/notifications.svg";
import GlobusIconSrc from "./assets/Small globe.svg";
import ArrowDownSrc from "./assets/Small arrow_Down.svg";

interface ClientProfileTopProps {
	children?: ReactNode;
	classNameTitle?: string;
	classNameMargin?: string;
}

const ClientProfileTop: FC<ClientProfileTopProps> = ({
	children,
	classNameTitle,
	classNameMargin,
}) => {
	let segments: ReactNode[] = [];

	if (typeof children === "string") {
		segments = children.split(" - ").map((part, idx, arr) => (
			<React.Fragment key={idx}>
				<span className={idx < arr.length - 1 ? styles.grey : undefined}>
					{part}
				</span>
				{idx < arr.length - 1 && (
					<span className={`${styles.separator} ${styles.grey}`}> - </span>
				)}
			</React.Fragment>
		));
	} else {
		segments = [children];
	}

	return (
		<div className={`${styles.core} ${classNameMargin}`}>
			<h1 className={classNameTitle}>{segments}</h1>

			<div className={styles.actions}>
				<div className={styles.notification}>
					<img src={NotificationIconSrc} alt="notification-icon" />
				</div>
				<div className={styles.language}>
					<img src={GlobusIconSrc} alt="language-icon" />
					<span>EN</span>
					<img src={ArrowDownSrc} alt="dropdown-icon" />
				</div>
			</div>
		</div>
	);
};

export default ClientProfileTop;
