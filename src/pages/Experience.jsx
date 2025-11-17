import styles from "../styles/experience.module.css";
import { experiences } from "../utils/data";

export default function Experience() {
	const displayExperiences = experiences.map((exp, index) => {
		return (
			<li key={index} className={styles.card}>
				<section className={styles.header}>
					<section className={styles.company}>
						<img
							className={styles.icon}
							src={exp.icon}
							alt={exp.name}
							height={20}
							width={20}
						/>
						<p className={styles.title}>{exp.title}</p>
					</section>
					<p className={styles.date}>{exp.date}</p>
				</section>
				<p className={styles.description}>{exp.description2}</p>
			</li>
		);
	});

	return (
		<main className={styles.main}>
			<h3 className={styles.heading}>Experience</h3>
			<ul className={styles.container}>{displayExperiences}</ul>
		</main>
	);
}
