import style from "./D-Agent-Dashboard.module.sass";

import BalanceOverviewChart from "../../../../components/common/charts/LineDiagram/LineDiagram.tsx";
import PopularProductsTable from "../../../../components/common/charts/PopularProductsTable/PopularProductsTable.tsx";
// import CurrentRevenueCard from '../components/CurrentRevenueCard.tsx';
import DonutChart from "../../../../components/common/charts/DonutChart/DonutChart.tsx";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
import ReferralsBarChart from "../../../../components/common/charts/ReferralsBarChart.tsx";
import Statistics from "@/components/common/StatisticsComponent/Statistics.tsx";
function D_Agent_dashboard() {
	return (
		<div className={style.dashboard}>
			<Sidebar />
			<div className={style.dashboard__container}>
				<div className={style.dashboard__block}>
					<ClientProfileTop>Dashboard</ClientProfileTop>
					<Statistics />

					<section className={style.dashboard__lineDiagram}>
						<div className={style.dashboard__currentRevenueCard}>
							<ReferralsBarChart />
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

export default D_Agent_dashboard;
