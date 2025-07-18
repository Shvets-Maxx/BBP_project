import style from "./D-Admin-Services-Order-for-items.module.sass";
import PopularProductsTable from "../PopularProductsTable/PopularProductsTable.tsx";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
function D_Admin_Services_Order_for_items() {
	return (
		<div className={style.service}>
			<Sidebar />
			<div className={style.service__container}>
				<div className={style.service__block}>
					<ClientProfileTop classNameTitle={style.responsive__fontSize}>
						Services - Order for items
					</ClientProfileTop>
					<section className={style.service__section}>
						<PopularProductsTable />
					</section>
				</div>
			</div>
		</div>
	);
}

export default D_Admin_Services_Order_for_items;
