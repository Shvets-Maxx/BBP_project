import style from "./D-Client-Profile-settings.module.sass";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
import TabPanel from "../TabPanel/TabPanel.tsx";
import LinkedAccount from "../LinkedAccount/LinkedAccount.tsx";
import TimeZone from "../TimeZone/TimeZone.tsx";
import Adress from "../Adress/Adress.tsx";
import Payments from "../Payments/Payments.tsx";
function D_Client_Profile_settings() {
	return (
		<div className={style.profileSettingContainer}>
			<Sidebar />
			<div className={style.profileSettingContainer__container}>
				<div className={style.profileSettingContainer__block}>
					<ClientProfileTop>Profile settings</ClientProfileTop>
					<section className={style.profileSettingContainer__section}>
						<div className={style["profileSettingContainer__left-block"]}>
							<TabPanel />
							<LinkedAccount />
						</div>
						<div className={style["profileSettingContainer__right-block"]}>
							<TimeZone />
							<Adress />
							<Payments />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default D_Client_Profile_settings;
