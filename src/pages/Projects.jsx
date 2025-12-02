import { NavLink } from "react-router-dom";
import styles from "../styles/projects.module.css";
import { projects } from "../utils/data.js";
import { MdArrowOutward } from "react-icons/md";

export default function Projects() {

	return (
		<main className={styles.container}>
			<h3 className={styles.heading}>Projects</h3>
			<ul className={styles.wrapper}>
				{projects.map((p, index) => (
					<li key={index} className={styles.project}>
						<img src={p.image} alt={p.name} className={styles.image} />
						<section className={styles.details}>
							<h4 className={styles.name}>{p.name}</h4>
							<p className={styles.description}>{p.description}</p>
							<section className={styles.links}>
								<NavLink to={p.githubUrl} target="_blank" className={styles.btn}>
									Github URL
									<span className={styles.githubUrl}> <MdArrowOutward />
									</span>
								</NavLink>
								<NavLink to={p.liveDemo} target="_blank" className={styles.btn}>
									Live Demo
									<span className={styles.liveDemo}> <MdArrowOutward />
									</span>
								</NavLink>
							</section>
						</section>
					</li>
				))}
			</ul>
		</main>
	);
}