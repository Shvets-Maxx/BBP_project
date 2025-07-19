import styles from "./SupportTicketsChat.module.scss";
import { Sidebar, ClientProfileTop } from "../../imports/components";
import InfoApplication from "../InfoApplication/InfoApplication";
import Description from "../Description/Description";
import TickedDetails from "../TickedDetails/TickedDetails";
import Comments from "../CommentItem/Comments.tsx";

export default function SupportTicketsChat() {
	return (
		<div className={styles.chat}>
			<Sidebar />
			<div className={styles.chat__container}>
				<div className={styles.chat__block}>
					<ClientProfileTop classNameTitle={styles.responsive__fontSize}>
						Support - Tickets - Chat
					</ClientProfileTop>
					<InfoApplication />
					<section className={styles.chat__section}>
						<div className={styles.chat__components}>
							<Description />
							<TickedDetails />
						</div>
						<Comments />
					</section>
				</div>
			</div>
		</div>
	);
}
