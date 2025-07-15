import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Tickets from "./features/profile/Tickets/Tickets";
import D_Sale_manager_Dashboard from "@/features/profile/D_Sale_manager_Dashboard/Root/D_Sale_manager_Dashboard.tsx";
import SupportTicketsChat from "@/features/profile/SupportTicketsChat/SupportTicketsChat.tsx";
import SupportCreateTicket from "@/features/profile/SupportCreateTicket/SupportCreateTicket.tsx";
import D_Agent_dashboard from "./features/profile/D-Agent-Dashboard/Root/D-Agent-Dashboard.tsx";
// import D_Admin_Dashboard from "./features/profile/D-Admin-Dashboard/D-Admin-Dashboard.tsx"
import D_Admin_Dashboard from "./features/profile/D-Admin-Dashboard/Root/D-Admin-Dashboard.tsx";
import PopUp_DeletePage from "../src/components/common/popUp/popUp_Delete/popUp_DeletePage.tsx";
import CardPopUp_Page from "./components/common/popUp/popUp_Card/CardPopUp_Page.tsx";
import PasswordPopupsContainer from "./components/common/popUp/popUp_Password/PasswordPopupsContainer.tsx";
import { AddressPage } from "./components/common/popUp/popUp_Address/AddressPage.tsx";
import { PaymentPage } from "./components/common/popUp/popUp_AddPaymentMethod/PaymentPage.tsx";
import D_Client_Profile_settings from "./features/profile/D-Client-Profile-settings/Root/D-Client-Profile-settings.tsx";
import D_Client_Dashboard_Google_reviews from "../src/features/profile/D-Client-Dashboard-Google-reviews/Root/D-Client-Dashboard-Google-reviews.tsx";
import D_Client_Dashboard_Google_business_info from "../src/features/profile/D-Client-Dashboard-Google-business-info/Root/D-Client-Dashboard-Google-business-info.tsx";
import D_Client_Dashboard_Google_performance from "./features/profile/D-Client-Dashboard-Google-performance/Root/D-Client-Dashboard-Google-performance.tsx";
import D_Client_Dashboard_Yelp_overview from "./features/profile/D-Client-Dashboard-Yelp-overview/Root/D-Client-Dashboard-Yelp-overview.tsx";
import D_Client_Dashboard_Yelp_ads from "./features/profile/D-Client-Dashboard-Yelp-ads/Root/D-Client-Dashboard-Yelp-ads.tsx";
import D_Client_Support_Onboarding from "./features/profile/D-Client-Support-Onboarding/Root/D-Client-Support-Onboarding.tsx";
import D_Client_Support_Edit_ticket from "./features/profile/D-Client-Support-Edit-ticket/D-Client-Support-Edit-ticket.tsx";
import D_Client_Support_FAQ from "./features/profile/D-Client-Support-FAQ/Root/D-Client-Support-FAQ.tsx";
import D_Admin_Services_Catalog from "./features/profile/D-Admin-Services-Catalog/Root/D-Admin-Services-Catalog.tsx";
import W_Admin_Services_Catalog from "./features/profile/W-Admin-Services-Catalog/Root/W-Admin-Services-Catalog.tsx";
import Pop_up_Preview_info_admin from "./features/profile/Pop-up-Preview-info-admin/Root/Pop-up-Preview-info-admin.tsx";
import D_Client_Buy_more_items_Catalog_Product_preview from "./features/profile/D-Client-Buy-more-items-Catalog-Product-preview/Root/D-Client-Buy-more-items-Catalog-Product-preview.tsx";
import W_Admin_Services_Order_for_items from "./features/profile/W-Admin-Services-Order-for-items/Root/W-Admin-Services-Order-for-items.tsx";
import D_Admin_Services_Order_for_items from "./features/profile/D-Admin-Services-Order-for-items/Root/D-Admin-Services-Order-for-items.tsx";
import W_Admin_Services_Order_for_items_order_view from "./features/profile/W-Admin-Services-Order-for-items-order-view/Root/W-Admin-Services-Order-for-items-order-view.tsx";
function App() {
	return (
		<Router>
			<Routes>
				<Route index element={<D_Sale_manager_Dashboard />} />

				<Route path="/profile/tickets" element={<Tickets />} />
				<Route path="/profile/Agent-Dashboard" element={<D_Agent_dashboard />} />
				<Route path="/profile/Admin_Dashboard" element={<D_Admin_Dashboard />} />
				<Route
					path="/profile/W_Admin_Services_Order_for_items_order_view"
					element={<W_Admin_Services_Order_for_items_order_view />}
				/>
				<Route
					path="/profile/D_Client_Buy_more_items_Catalog_Product_preview"
					element={<D_Client_Buy_more_items_Catalog_Product_preview />}
				/>
				<Route
					path="/profile/D_Admin_Services_Catalog"
					element={<D_Admin_Services_Catalog />}
				/>
				<Route
					path="/profile/D_Admin_Services_Order_for_items"
					element={<D_Admin_Services_Order_for_items />}
				/>
				<Route
					path="/profile/W_Admin_Services_Order_for_items"
					element={<W_Admin_Services_Order_for_items />}
				/>
				<Route
					path="/profile/Pop_up_Preview_info_admin"
					element={<Pop_up_Preview_info_admin />}
				/>

				<Route path="/profile/tickets/chat" element={<SupportTicketsChat />} />
				<Route
					path="/profile/tickets/Profile_settings"
					element={<D_Client_Profile_settings />}
				/>

				<Route
					path="/profile/tickets/PopUp_Delete"
					element={<PopUp_DeletePage />}
				/>
				<Route
					path="/profile/tickets/CardPopUp_Page"
					element={<CardPopUp_Page />}
				/>
				<Route
					path="/profile/tickets/PasswordPopupsContainer"
					element={<PasswordPopupsContainer />}
				/>
				<Route path="/profile/tickets/AddressPage" element={<AddressPage />} />
				<Route path="/profile/tickets/PaymentPage" element={<PaymentPage />} />
				<Route
					path="/profile/tickets/D_Client_Support_FAQ"
					element={<D_Client_Support_FAQ />}
				/>
				<Route
					path="/profile/tickets/D_Client_Dashboard_Google_reviews"
					element={<D_Client_Dashboard_Google_reviews />}
				/>
				<Route
					path="/profile/tickets/D_Client_Dashboard_Google_business_info"
					element={<D_Client_Dashboard_Google_business_info />}
				/>
				<Route
					path="/profile/tickets/D_Client_Dashboard_Google_performance"
					element={<D_Client_Dashboard_Google_performance />}
				/>
				<Route
					path="/profile/tickets/D_Client_Dashboard_Yelp_overview"
					element={<D_Client_Dashboard_Yelp_overview />}
				/>
				<Route
					path="/profile/tickets/D_Client_Dashboard_Yelp_ads"
					element={<D_Client_Dashboard_Yelp_ads />}
				/>
				<Route
					path="/profile/tickets/D_Client_Support_Onboarding"
					element={<D_Client_Support_Onboarding />}
				/>

				<Route
					path="/profile/tickets/D_Client_Support_Edit_ticket"
					element={<D_Client_Support_Edit_ticket />}
				/>
				<Route path="/profile/tickets/create" element={<SupportCreateTicket />} />
				<Route
					path="/profile/tickets/W_Admin_Services_Catalog"
					element={<W_Admin_Services_Catalog />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
