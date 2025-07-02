import styles from "../styles/experience.module.css";
import { experiences } from "../utils/data";

export default function Experience() {
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
			<h3 className={styles.heading}>EXPERIENCE</h3>
			<ul className={styles.ul}>{displayExperiences}</ul>
		</main>
	);
}
