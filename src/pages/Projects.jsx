import { NavLink } from "react-router-dom";
import styles from "../styles/projects.module.css";
import { projects } from "../utils/data.js";
import { MdArrowOutward } from "react-icons/md";

export default function Projects() {
	const handleClick = () => {
		console.log("clicked!");
	};

	const allProjects = projects.map((p) => {
		return (
			<li key={p.name} className={styles.project}>
				<img
					src={p.image}
					alt={p.name}
					className={styles.image}
					height={30}
					width={30}
				/>
				<section className={styles.details}>
					<h4 className={styles.name}>{p.name}</h4>
					<p className={styles.description}>{p.description}</p>
					<section className={styles.links}>
						<NavLink
							to={p.githubUrl}
							className={styles.btn}
							onClick={handleClick}>
							Github URL
							<span className={styles.githubUrl}>
								{p.githubUrl} <MdArrowOutward />
							</span>
						</NavLink>
						<NavLink
							to={p.liveDemo}
							className={styles.btn}
							onClick={handleClick}>
							Live Demo
							<span className={styles.liveDemo}>
								{p.liveDemo} <MdArrowOutward />
							</span>
						</NavLink>
					</section>
				</section>
			</li>
		);
	});
	return (
		<main className={styles.container}>
			<h3 className={styles.heading}>Projects</h3>
			<ul className={styles.wrapper}>{allProjects}</ul>
		</main>
	);
}

