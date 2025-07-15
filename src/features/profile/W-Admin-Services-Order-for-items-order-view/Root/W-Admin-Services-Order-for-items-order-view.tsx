import style from "./W-Admin-Services-Order-for-items-order-view.module.sass";
// import PopularProductsTable from "../../../../components/common/charts/PopularProductsTable.tsx";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
import PopularProductsTable from "../PopularProductsTable/PopularProductsTable.tsx";
import OrderSummary from "../OrderSummary/OrderSummary.tsx";
import DeliveryStepper from "../DeliveryStepper/DeliveryStepper.tsx";
import OrderInformation from "../OrderInformation/OrderInformation.tsx";

function W_Admin_Services_Order_for_items_order_view() {
	return (
		<div className={style.container}>
			<Sidebar />
			<div className={style.container__block}>
				<div className={style.container__main}>
					<ClientProfileTop>Dashboard</ClientProfileTop>

					<section className={style["container__section-block"]}>
						<div className={style.container__section1}>
							<PopularProductsTable />
							<DeliveryStepper />
						</div>
						<div className={style.container__section2}>
							<OrderSummary />
							<OrderInformation />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default W_Admin_Services_Order_for_items_order_view;
