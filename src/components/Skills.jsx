import styles from "../styles/skills.module.css";
import { languages } from "../utils/data";

export default function Skills() {
	const renderLanguages = languages.map((lang) => {
		return (
			<li key={lang.index} className={styles.langLi}>
				<img
					src={lang.imgUrl}
					alt={lang.name}
					className={styles.langImg}
					height={lang.height}
					width={lang.width}
				/>
			</li>
		);
	});

	return (
		<section className={styles.container}>
			<h4 className={styles.heading}>Experience with</h4>
			<section className={styles.languages}>
				<ul className={styles.wrapper}>{renderLanguages}</ul>
			</section>
		</section>
	);
}
