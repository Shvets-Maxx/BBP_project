import React, { FC, ReactNode } from "react";
import styles from "./ClientProfileTop.module.scss";
import NotificationIconSrc from "./assets/notifications.svg";
import SelectLanguage from "../selectLanguage/selectLanguage";

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
				<SelectLanguage />
			</div>
		</div>
	);
};

export default ClientProfileTop;
