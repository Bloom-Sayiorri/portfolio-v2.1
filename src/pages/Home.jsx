// import Skills from "../components/Skills";
import styles from "../styles/home.module.css";

export default function Home() {
	const handleContact = () => {};
	const handleDownloadCV = () => {};
	return (
		<main className={styles.main}>
			<img src="" alt="Bloom Sayiorri logo" height={60} width={60} />
			<section className={styles.homeDetails}>
				<p className={styles.headline}>I do code and</p>
				<p className={styles.headline}>
					make content
					<span className={styles.highlitedText}>about it!</span>
				</p>
				<p className={styles.description}>
					I am a Full-stack Software Engineer with over 3 years of
					proffesional experience, specializing in frontend
					developnment. My expertise lies in crafting robust scallable
					SaaS-based architecture on the AWS Amazon platform.
				</p>
			</section>
			<section className={styles.buttons}>
				<button
					type="button"
					className={styles.contactBtn}
					onClick={handleContact}
				>
					Get In Touch
				</button>
				<button
					type="button"
					className={styles.downloadBtn}
					onClick={handleDownloadCV}
				>
					Download
				</button>
			</section>
			{/* <Skills /> */}
		</main>
	);
}
