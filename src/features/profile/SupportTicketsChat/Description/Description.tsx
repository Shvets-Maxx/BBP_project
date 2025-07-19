import styles from "./Description.module.sass";
import downloadIconSrc from "../assets/download.svg";
import folderIconSrc from "../assets/folder.svg";

export default function Description() {
	return (
		<div className={styles.description}>
			<h3>Ticked description</h3>
			<div className={styles.description__text}>
				Ticked description Ticked description Ticked description Ticked description
				Ticked description Ticked description Ticked description Ticked description
				Ticked description Ticked description Ticked description Ticked description
				Ticked description Ticked description Ticked description Ticked
			</div>

			<div className={styles.description__files}>
				<div>
					<div>
						<img src={folderIconSrc} alt="folder-icon" />
					</div>

					<div>
						<span>File nam123123e</span> <br />
						<span className={styles.description__files_grey}>1.2 MB</span>
					</div>

					<img src={downloadIconSrc} alt="download-icon" />
				</div>

				<div>
					<div>
						<img src={folderIconSrc} alt="folder-icon" />
					</div>

					<div>
						<span>File nam123123e</span> <br />
						<span className={styles["description__files-grey"]}>1.2 MB</span>
					</div>

					<img src={downloadIconSrc} alt="download-icon" />
				</div>
			</div>
		</div>
	);
}
