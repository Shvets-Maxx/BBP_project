import userLogo from "./assets/userLogo.svg";
import addFriens from "./assets/user-add.svg";
import dollar from "./assets/dollar-1.svg";
import close from "./assets/close.svg";
import style from "./Statistics.module.sass";

function Statistics() {
	return (
		<div className={style.statistics}>
			<div className={style.statistics__response}>
				<div className={style.statistics__block}>
					<div className={style.statistics__percentageText}>
						<p>+17%</p>
					</div>
					<div className={style["statistics__countPeople-block"]}>
						<div className={style.statistics__wrapperCount}>
							<div className={style["statistics__block-img"]}>
								<img src={userLogo} alt="" />
							</div>
							<p className={style["statistics__countPeople"]}>2717</p>
						</div>
						<div className={style.statistics__bottomText}>
							<p>All customers</p>
						</div>
					</div>
				</div>
				<div className={style.statistics__block}>
					<div className={style.statistics__percentageText}>
						<p>+8%</p>
					</div>
					<div className={style["statistics__countPeople-block"]}>
						<div className={style.statistics__wrapperCount}>
							<div className={style["statistics__block-img"]}>
								<img src={addFriens} alt="" />
							</div>
							<p className={style["statistics__countPeople"]}>512</p>
						</div>
						<div className={style.statistics__bottomText}>
							<p>Conversion rate</p>
						</div>
					</div>
				</div>
			</div>
			<div className={style.statistics__response}>
				<div className={style.statistics__block}>
					<div className={style.statistics__percentageText}>
						<p>+2%</p>
					</div>
					<div className={style["statistics__countPeople-block"]}>
						<div className={style.statistics__wrapperCount}>
							<div className={style["statistics__block-img"]}>
								<img src={dollar} alt="" />
							</div>
							<p className={style["statistics__countPeople"]}>85</p>
						</div>
						<div className={style.statistics__bottomText}>
							<p>Average client check</p>
						</div>
					</div>
				</div>
				<div className={style.statistics__block}>
					<div className={style.statistics__percentageText}>
						<p>-3%</p>
					</div>
					<div className={style["statistics__countPeople-block"]}>
						<div className={style.statistics__wrapperCount}>
							<div className={style["statistics__block-img"]}>
								<img src={close} alt="" />
							</div>
							<p className={style["statistics__countPeople"]}>2k</p>
						</div>
						<div className={style.statistics__bottomText}>
							<p>Canceled subscriptions</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Statistics;
