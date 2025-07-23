import style from "./D-Client-Support-FAQ.module.sass";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";

import Adress from "../Adress/Adress.tsx";

function D_Client_Support_FAQ() {
	return (
		<div className={style.profileSettingContainer}>
			<Sidebar />
			<div className={style.profileSettingContainer__container}>
				<div className={style.profileSettingContainer__block}>
					<ClientProfileTop>Support - FAQ</ClientProfileTop>
					<section className={style.profileSettingContainer__section}>
						<Adress />
					</section>
				</div>
			</div>
		</div>
	);
}

export default D_Client_Support_FAQ;
