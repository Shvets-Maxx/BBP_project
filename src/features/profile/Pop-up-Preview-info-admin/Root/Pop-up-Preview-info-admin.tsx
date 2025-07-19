import style from "./Pop-up-Preview-info-admin.module.sass";
// import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
// import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
import Catalog from "../Catalog/Catalog.tsx";
import FullDescription from "../FullDescription/FullDescription.tsx";
import TabPanel from "../TabPanel/TabPanel.tsx";

function Pop_up_Preview_info_admin() {
	return (
		<div className={style.profileSettingContainer}>
			<div className={style.profileSettingContainer__container}>
				<div className={style.profileSettingContainer__block}>
					<section className={style.profileSettingContainer__section}>
						<div className={style.profileSettingContainer__components}>
							<Catalog />
							<FullDescription />
							<TabPanel />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default Pop_up_Preview_info_admin;
