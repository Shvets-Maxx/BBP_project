import style from "./D_Sale_manager_Dashboard.module.sass";
import BalanceOverviewChart from "../../../../components/common/charts/LineDiagram/LineDiagram.tsx";
import PopularProductsTable from "../../../../components/common/charts/PopularProductsTable/PopularProductsTable.tsx";
import DonutChart from "../../../../components/common/charts/DonutChart/DonutChart.tsx";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
import CurrentRevenueCard from "../../../../components/common/charts/CurrentRevenueCard/CurrentRevenueCard.tsx";
import Statistics from "../StatisticsComponent/Statistics.tsx";
function D_Sale_manager_Dashboard() {
	return (
		<div className={style.dashboard}>
			<Sidebar />
			<div className={style.dashboard__container}>
				<div className={style.dashboard__block}>
					<ClientProfileTop>Dashboard</ClientProfileTop>
					<Statistics />

					<section className={style.dashboard__lineDiagram}>
						<div className={style.dashboard__currentRevenueCard}>
							<CurrentRevenueCard />
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
							<DonutChart />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default D_Sale_manager_Dashboard;
