import style from "./D-Client-Dashboard-Yelp-overview.module.sass";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
import Header from "../Header/Header.tsx";
import PerformanceSummary from "../PerformanceSummary/PerformanceSummary.tsx";
import LastInfo from "../LastInfo/LastInfo.tsx";
import Viewed from "../Viewed/Viewed.tsx";
import Trending from "../Trending/Trending.tsx";
import HeatMaps from "../HeatMaps/HeatMaps.tsx";
import StackedBarChart from "../StackedBarChart/StackedBarChart.tsx";
// import LinkedAccount from "../LinkedAccount/LinkedAccount.tsx";
// import TimeZone from "../TimeZone/TimeZone.tsx"
// import Adress from "../Adress/Adress.tsx"
// import Payments from "../Payments/Payments.tsx"
function D_Client_Dashboard_Yelp_overview() {
	return (
		<div className={style.profileSettingContainer}>
			<Sidebar />
			<div className={style.profileSettingContainer__container}>
				<div className={style.profileSettingContainer__block}>
					<header className={style.profileSettingContainer__header}>
						<ClientProfileTop>Dashboard - Yepl</ClientProfileTop>
						<Header />
					</header>
					<section className={style.profileSettingContainer__section}>
						<div className={style.profileSettingContainer__performanceSummary}>
							<PerformanceSummary />
							<LastInfo />
						</div>

						<p
							className={style.profileSettingContainer__title}
							style={{ font: "400 24px Open Sans" }}
						>
							Insights
						</p>
						<div className={style.profileSettingContainer__main}>
							<div className={style.profileSettingContainer__viewed}>
								<Viewed />
								<HeatMaps />
							</div>
							<div className={style.profileSettingContainer__trending}>
								<Trending />
								<StackedBarChart />
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default D_Client_Dashboard_Yelp_overview;
