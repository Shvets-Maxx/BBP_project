import style from "./D-Admin-Dashboard.module.sass";
import BalanceOverviewChart from "../../../../components/common/charts/LineDiagram/LineDiagram.tsx";
import PopularProductsTable from "../../../../components/common/charts/PopularProductsTable/PopularProductsTable.tsx";
import DonutChart from "../../../../components/common/charts/DonutChart/DonutChart.tsx";
import DonutChartOrder from "../../../../components/common/charts/DonutChartOrder/DonutChartOrder.tsx";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
import Statistics from "@/components/common/StatisticsComponent/Statistics.tsx";
function D_Admin_Dashboard() {
	return (
		<div className={style.dashboard}>
			<Sidebar />
			<div className={style.dashboard__container}>
				<div className={style.dashboard__block}>
					<ClientProfileTop>Dashboard</ClientProfileTop>
					<Statistics />

					<section className={style.dashboard__lineDiagram}>
						<div className={style.dashboard__currentRevenueCard}>
							<DonutChart />
						</div>
						<div className={style.dashboard__balanceOverviewChart}>
							<BalanceOverviewChart />
						</div>
					</section>
					<section className={style.dashboard__popularProducts}>
						<div className={style.dashboard__popularProductsTable}>
							<PopularProductsTable />
						</div>
						<div className={style.dashboard__donutChart}>
							<DonutChartOrder />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default D_Admin_Dashboard;
