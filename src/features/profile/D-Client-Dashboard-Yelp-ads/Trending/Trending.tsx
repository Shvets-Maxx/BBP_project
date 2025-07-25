import style from "./Trending.module.sass";

export default function Trending() {
	return (
		<div className={style.Trending}>
			<div className={style.Trending__container}>
				<div className={style.statistics}>
					<div className={style.statistics__block}>
						<div className={style["statistics__title-block"]}>
							<p>Calls to your business</p>
							<p>
								We do not provide the caller`s complete phone numbers in order to
								protect their privacy.
							</p>
						</div>
						<div className={style["statistics__info-block"]}>
							<div className={style["statistics__info"]}>
								<p>Calls received</p>
								<p>288</p>
							</div>
							<div className={style["statistics__info"]}>
								<p>Answered</p>
								<p>93%</p>
							</div>
							<div className={style["statistics__info"]}>
								<p>Avg call duration</p>
								<p>1m 14s</p>
							</div>
						</div>

						<div className={style["statistics__main-block"]}>
							<div className={style["statistics__main-wrraper"]}>
								{Array.from({ length: 20 }).map((_, index) => (
									<div key={index} className={style.statistics__rate}>
										<div className={style["statistics__rate-block"]}>
											<p>Mar 29, 2025, 11:08 AM</p>
											<p>(323) XXX-2827</p>
											<p>0 min 10 sec</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
