import styles from "../styles/projects.module.css";
import projectData from "../utils/data.js";

export default function Projects() {
	const projects = projectData.map((p) => {
		return (
			<main className={styles.container}>
				<img src={p.image} alt={p.name} height={30} width={30} />
				<section className={styles.wrapper}>
					<h4>{p.name}</h4>
					<h5>{p.githubUrl}</h5>
					<p>{p.description}</p>
				</section>
			</main>
		);
	});
	return <>{projects}</>;
}
