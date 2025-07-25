import style from "./D-Client-Dashboard-Yelp-ads.module.sass";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
import Header from "../Header/Header.tsx";
import LastInfo from "../LastInfo/LastInfo.tsx";
import Trending from "../Trending/Trending.tsx";
import HeatMaps from "../HeatMaps/HeatMaps.tsx";
import TabContribution from "../TabContribution/TabContribution.tsx";
import TabPerfomance from "../TabPerformance/TabPerformance.tsx";
import BillingPeriod from "../BillingPeriod/BillingPeriod.tsx";
import TabBreakdown from "../TabBreakdown/TabBreakdown.tsx";

function D_Client_Dashboard_Yelp_ads() {
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
						<div className={style.profileSettingContainer__first}>
							<LastInfo />
							<TabContribution />
							<TabPerfomance />
							<BillingPeriod />
							<TabBreakdown />
						</div>

						<div className={style.profileSettingContainer__last}>
							<HeatMaps />
							<Trending />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default D_Client_Dashboard_Yelp_ads;
