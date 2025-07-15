import "./D-Admin-Dashboard.css";
import userLogo from "../assets/userLogo.svg";
import addFriens from "../assets/user-add.svg";
import dollar from "../assets/dollar-1.svg";
import close from "../assets/close.svg";
import BalanceOverviewChart from "../../../../components/common/charts/LineDiagram/LineDiagram.tsx";
import PopularProductsTable from "../../../../components/common/charts/PopularProductsTable/PopularProductsTable.tsx";
// import CurrentRevenueCard from '../components/CurrentRevenueCard.tsx';
import DonutChart from "../../../../components/common/charts/DonutChart/DonutChart.tsx";
import DonutChartOrder from "../../../../components/common/charts/DonutChartOrder.tsx";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
// import ReferralsBarChart from "../components/ReferralsBarChart.tsx"

function D_Admin_Dashboard() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
			}}
			className="body-container"
		>
			<Sidebar />
			<div
				style={{
					maxWidth: "1234px",
					padding: "24px 40px 24px",
				}}
			>
				<div
					style={{
						padding: "32px 24px 24px 24px",
						background: "#E6EFF3",
						borderRadius: "8px",
						display: "flex",
						flexDirection: "column",
						gap: "16px",
					}}
				>
					<ClientProfileTop>Dashboard</ClientProfileTop>

					<section className="section_statistics">
						<div className="statistics_block">
							<div className="statistics_percentageText-block">
								<p>+17%</p>
							</div>
							<div className="statistics_countPeople-block">
								<div className="statistics_wrapperCount">
									<div className="statistics_block-img">
										<img src={userLogo} alt="" />
									</div>
									<p className="statistics_countPeople">2717</p>
								</div>
								<div className="statistics_bottomText-block">
									<p>All customers</p>
								</div>
							</div>
						</div>
						<div className="statistics_block">
							<div className="statistics_percentageText-block">
								<p>+8%</p>
							</div>
							<div className="statistics_countPeople-block">
								<div className="statistics_wrapperCount">
									<div className="statistics_block-img">
										<img src={addFriens} alt="" />
									</div>
									<p className="statistics_countPeople">512</p>
								</div>
								<div className="statistics_bottomText-block">
									<p>Conversion rate</p>
								</div>
							</div>
						</div>
						<div className="statistics_block">
							<div className="statistics_percentageText-block">
								<p>+2%</p>
							</div>
							<div className="statistics_countPeople-block">
								<div className="statistics_wrapperCount">
									<div className="statistics_block-img">
										<img src={dollar} alt="" />
									</div>
									<p className="statistics_countPeople">85</p>
								</div>
								<div className="statistics_bottomText-block">
									<p>Average client check</p>
								</div>
							</div>
						</div>
						<div className="statistics_block">
							<div className="statistics_percentageText-block">
								<p>-3%</p>
							</div>
							<div className="statistics_countPeople-block">
								<div className="statistics_wrapperCount">
									<div className="statistics_block-img">
										<img src={close} alt="" />
									</div>
									<p className="statistics_countPeople">2k</p>
								</div>
								<div className="statistics_bottomText-block">
									<p>Canceled subscriptions</p>
								</div>
							</div>
						</div>
					</section>
					<section className="section_lineDiagram">
						<div className="section_CurrentRevenueCard">
							{/* <ReferralsBarChart/> */}
							<DonutChart />
						</div>
						<div className="section_BalanceOverviewChart">
							<BalanceOverviewChart />
						</div>
					</section>
					<section className="section_PopularProducts">
						<div className="section_PopularProductsTable">
							<PopularProductsTable />
						</div>
						<div className="section_DonutChart">
							<DonutChartOrder />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default D_Admin_Dashboard;
