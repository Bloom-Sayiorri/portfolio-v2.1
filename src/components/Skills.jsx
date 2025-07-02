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
					height={50}
					width={50}
				/>
			</li>
		);
	});

	return (
		<section className={styles.container}>
			<h4 className={styles.heading}>Experience with</h4>
			<ul className={styles.languages}>{renderLanguages}</ul>
		</section>
	);
}
