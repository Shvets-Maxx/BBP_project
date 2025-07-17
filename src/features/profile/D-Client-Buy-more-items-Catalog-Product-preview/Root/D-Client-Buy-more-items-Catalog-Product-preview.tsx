import style from "./D-Client-Buy-more-items-Catalog-Product-preview.module.sass";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
import Catalog from "../Catalog/Catalog.tsx";
import FullDescription from "../FullDescription/FullDescription.tsx";
import TabPanel from "../TabPanel/TabPanel.tsx";

function D_Client_Buy_more_items_Catalog_Product_preview() {
	return (
		<div className={style.profileSettingContainer}>
			<Sidebar />
			<div className={style.profileSettingContainer__container}>
				<div className={style.profileSettingContainer__block}>
					<ClientProfileTop classNameTitle={style.responsive__fontSize}>
						Buy more items - Catalog - Preview{" "}
					</ClientProfileTop>
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

export default D_Client_Buy_more_items_Catalog_Product_preview;
