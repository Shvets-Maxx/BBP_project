import { FC, memo, useState } from "react";
import styles from "./Sidebar.module.scss";
import logoSrc from "../../../../public/logo-1.svg";
import arrowDownIcon from "./assets/Small arrow_Down.svg";
import ProfileIconSrc from "./assets/user-circle.svg";
import DashboardIconSrc from "./assets/home-2.svg";
import SubscriptionIconSrc from "./assets/credit-card-check.svg";
import ShoppingBagSrc from "./assets/shopping-bag.svg";
import ServicesIconSrc from "./assets/help.svg";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import NotificationIconSrc from "./assets/notifications.svg";
import GlobusIconSrc from "./assets/Small globe.svg";
import ArrowDownSrc from "./assets/Small arrow_Down.svg";

interface NavItemConfig {
	key: string;
	label: string;
	icon: string;
	hasDropdown?: boolean;
}

interface NavItemProps {
	icon: string;
	label: string;
	hasDropdown?: boolean;
}

const navItems: NavItemConfig[] = [
	{ key: "profile", label: "Profile settings", icon: ProfileIconSrc },
	{
		key: "dashboard",
		label: "Dashboard",
		icon: DashboardIconSrc,
		hasDropdown: true,
	},
	{ key: "subscriptions", label: "Subscriptions", icon: SubscriptionIconSrc },
	{
		key: "buyMore",
		label: "Buy more items",
		icon: ShoppingBagSrc,
		hasDropdown: true,
	},
	{ key: "support", label: "Support", icon: ServicesIconSrc, hasDropdown: true },
];

const NavItem: FC<NavItemProps> = memo(
	({ icon, label, hasDropdown = false }) => (
		<li className={styles.nav__item}>
			<a href="#" className={styles.nav__link}>
				<div className={styles.nav__icon}>
					<img src={icon} alt={`${label} icon`} />
				</div>
				<span className={styles.nav__label}>{label}</span>
				{hasDropdown && (
					<img
						src={arrowDownIcon}
						alt="Expand menu"
						className={styles.nav__dropdown}
					/>
				)}
			</a>
		</li>
	),
);

const Sidebar: FC = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className={styles.sidebar}>
			<nav className={styles.nav}>
				<div className={styles.nav__logo}>
					<div onClick={(_e) => setOpen(!open)} className={styles.nav__burger}>
						<IconButton>
							<MenuIcon />
						</IconButton>
					</div>
					<div className={styles.nav__mainLogo}>
						<img src={logoSrc} alt="BB Promise logo" />
					</div>
					<div className={styles.nav__actions}>
						<div className={styles.nav__notification}>
							<img src={NotificationIconSrc} alt="notification-icon" />
						</div>
						<div className={styles.nav__language}>
							<img src={GlobusIconSrc} alt="language-icon" />
							<span>EN</span>
							<img src={ArrowDownSrc} alt="dropdown-icon" />
						</div>
					</div>
				</div>
				<ul className={`${styles.nav__list} ${open ? styles.active : ""}`}>
					<div onClick={() => setOpen(false)} className={styles.nav__close}>
						<IconButton>
							<CloseIcon />
						</IconButton>
					</div>

					{navItems.map(({ key: itemKey, icon, label, hasDropdown }) => (
						<NavItem
							key={itemKey}
							icon={icon}
							label={label}
							hasDropdown={hasDropdown}
						/>
					))}
				</ul>
				{open && <div className={styles.overlay} onClick={() => setOpen(false)} />}
			</nav>

			<nav className={styles.nav}>
				<div className={styles.nav__logo}>
					<img src={logoSrc} alt="BB Promise logo" />
				</div>

				<ul className={styles.nav__list}>
					{navItems.map(({ key: itemKey, icon, label, hasDropdown }) => (
						<NavItem
							key={itemKey}
							icon={icon}
							label={label}
							hasDropdown={hasDropdown}
						/>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
