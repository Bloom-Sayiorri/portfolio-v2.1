import styles from "../styles/projects.module.css";
import { projects } from "../utils/data.js";
import { MdArrowOutward } from "react-icons/md";

export default function Projects() {
	const allProjects = projects.map((p) => {
		return (
			<li key={p.name} className={styles.project}>
				<img
					src={p.image}
					alt={p.name}
					className={styles.image}
					height={120}
					width={120}
				/>
				<section className={styles.details}>
					<h4 className={styles.name}>{p.name}</h4>
					<section className={styles.links}>
						<p className={styles.githubUrl}>
							{p.githubUrl} <MdArrowOutward />
						</p>
						<p className={styles.liveDemo}>
							{p.liveDemo} <MdArrowOutward />
						</p>
					</section>
				</section>
			</li>
		);
	});
	return (
		<main className={styles.container}>
			<ul className={styles.wrapper}>{allProjects}</ul>
		</main>
	);
}
