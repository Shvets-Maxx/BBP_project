import style from "./LastInfo.module.sass";
import pin from "./assets/pin.svg";
import people from "./assets/people.svg";
import call from "./assets/call.svg";
import eyes from "./assets/eyes.svg";
import addPeople from "./assets/addPeople.svg";
import click from "./assets/click.svg";
import location from "./assets/location.svg";

export default function LastInfo() {
	return (
		<div className={style.LastInfo}>
			<div className={style.LastInfo__container}>
				<p className={style.LastInfo__title}>Last 30 days</p>
				<div className={style.statistics}>
					<div className={style.statistics__flex}>
						<div className={style.statistics__block}>
							<div className={style["statistics__title-block"]}>
								<img src={eyes} alt="" />
								<p>Impressions</p>
							</div>
							<div className={style["statistics__main-block"]}>
								<p>17.4k</p>
								<p>
									16.1k from Ads <span>(92%)</span>
								</p>
							</div>
						</div>
						<div className={style.statistics__block}>
							<div className={style["statistics__title-block"]}>
								<img src={people} alt="" />
								<p>Page visits</p>
							</div>
							<div className={style["statistics__main-block"]}>
								<p>17.4k</p>
								<p>
									16.1k from Ads <span>(92%)</span>
								</p>
							</div>
						</div>
					</div>
					<div className={style.statistics__flex}>
						<div className={style.statistics__block}>
							<div className={style["statistics__title-block"]}>
								<img src={addPeople} alt="" />
								<p>Leads</p>
							</div>
							<div className={style["statistics__main-block"]}>
								<p>17.4k</p>
								<p>
									16.1k from Ads <span>(92%)</span>
								</p>
							</div>
						</div>
						<div className={style.statistics__block}>
							<div className={style["statistics__title-block"]}>
								<p>Your leads breakdown</p>
							</div>
							<div className={style["statistics__icon-block"]}>
								<div className={style["statistics__icon-content"]}>
									<div>
										<img src={click} alt="" />
										<p>Website visits</p>
									</div>

									<p>83</p>
								</div>
								<div className={style["statistics__icon-content"]}>
									<div>
										<img src={location} alt="" />
										<p>Directions & map </p>
									</div>

									<p>63</p>
								</div>
								<div className={style["statistics__icon-content"]}>
									<div>
										<img src={call} alt="" />
										<p>Calls </p>
									</div>

									<p>40</p>
								</div>
								<div className={style["statistics__icon-content"]}>
									<div>
										<img src={pin} alt="" />
										<p>Other leads</p>
									</div>

									<p>24</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
