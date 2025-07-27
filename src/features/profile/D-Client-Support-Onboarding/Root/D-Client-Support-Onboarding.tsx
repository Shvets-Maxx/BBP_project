import style from "./D-Client-Support-Onboarding.module.sass";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";

import Adress from "../Adress/Adress.tsx";

function D_Client_Support_Onboarding() {
	return (
		<div className={style.profileSettingContainer}>
			<Sidebar />
			<div className={style.profileSettingContainer__container}>
				<div className={style.profileSettingContainer__block}>
					<ClientProfileTop>Profile settings</ClientProfileTop>
					<section className={style.profileSettingContainer__section}>
						<Adress />
					</section>
				</div>
			</div>
		</div>
	);
}

export default D_Client_Support_Onboarding;
