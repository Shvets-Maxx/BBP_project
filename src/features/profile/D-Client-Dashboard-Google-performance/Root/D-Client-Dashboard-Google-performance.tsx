import style from "./D-Client-Dashboard-Google-performance.module.sass";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
import TabPanel from "../TabPanel/TabPanel.tsx";
import Header from "../Header/Header.tsx";

function D_Client_Dashboard_Google_performance() {
	return (
		<div className={style.profileSettingContainer}>
			<Sidebar />
			<div className={style.profileSettingContainer__container}>
				<div className={style.profileSettingContainer__block}>
					<ClientProfileTop classNameTitle={style.responsive__fontSize}>
						Dashboard - Google business
					</ClientProfileTop>
					<section className={style.profileSettingContainer__section}>
						<div className={style.profileSettingContainer__content}>
							<Header />
							<TabPanel />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default D_Client_Dashboard_Google_performance;
