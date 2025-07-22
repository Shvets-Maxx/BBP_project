import style from "./LinkedAccount.module.sass";
import instagramLogo from "./assets/instagramLogo.svg";
import facebookLogo from "./assets/facebookLogo.svg";
import WhatsAppLogo from "./assets/WhatsAppLogo.svg";
import LinkedInLog from "./assets/LinkedInLogo.svg";
import linkLogo from "./assets/linkLogo.svg";
function LinkedAccount() {
	return (
		<div className={style.container}>
			<div className={style.container__block}>
				<div className={style["container__title"]}>
					<p>Linked accounts</p>
				</div>
				<div className={style["links"]}>
					<div
						className={`${style["links__block"]} ${style["links__block--active"]}`}
					>
						<img className={style["links__img-logo"]} src={instagramLogo} alt="" />
						<p>Instagram</p>
						<img className={style["links__link-logo"]} src={linkLogo} alt="" />
					</div>
					<div
						className={`${style["links__block"]} ${style["links__block--disabled"]}`}
					>
						<img className={style["links__img-logo"]} src={facebookLogo} alt="" />
						<p>Facebook</p>
					</div>
					<div
						className={`${style["links__block"]} ${style["links__block--disabled"]}`}
					>
						<img className={style["links__img-logo"]} src={LinkedInLog} alt="" />
						<p>LinkedIn</p>
					</div>
					<div
						className={`${style["links__block"]} ${style["links__block--disabled"]}`}
					>
						<img className={style["links__img-logo"]} src={WhatsAppLogo} alt="" />
						<p>WhatsApp</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LinkedAccount;
