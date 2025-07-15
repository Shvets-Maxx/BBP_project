import React from "react";
import styles from "./Button.module.scss";
import AddIconSrc from "./assets/plus.svg";

interface CreateButtonProps {
	children: string;
	withIcon?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<CreateButtonProps> = ({
	children,
	withIcon = false,
	onClick = (e) => e.preventDefault(),
}) => (
	<button className={styles.core} onClick={onClick}>
		{withIcon && <img src={AddIconSrc} alt="+" />}
		<span>{children}</span>
	</button>
);

export default Button;
