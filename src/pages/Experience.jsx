import styles from "../styles/experience.module.css";
import { experiences } from "../utils/data";

export default function Experiences() {
	const displayExperiences = experiences.map((exp) => {
		return (
			<li key={exp.index} className={styles.experience}>
				<section className={styles.header}>
					<span className={styles.icon}>{exp.icon}</span>
					<p className={styles.title}>{exp.title}</p>
					<span className={styles.date}>{exp.date}</span>
				</section>
				<p className={styles.description}>{exp.description}</p>
			</li>
		);
	});
	return (
		<main className={styles.main}>
			<ul className={styles.ul}>{displayExperiences}</ul>
		</main>
	);
}
