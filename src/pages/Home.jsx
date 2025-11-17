import Skills from "../components/Skills";
import styles from "../styles/home.module.css";
import newProfile from "../assets/newprofile.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	const handleContact = () => {
		navigate("/contact");
	};

	const handleDownloadCV = () => {};
	return (
		<main className={styles.main}>
			<img src={newProfile} alt="avatar" className={styles.avatar} height={200} width={200} />
			{/* <div className={styles.right}> */}
			<section className={styles.homeDetails}>
				<p className={styles.headline}>
					<span className={styles.headlineText}>Hello There!</span> 👋
				</p>
				<p className={styles.description}>
					I am a Full-stack Software Engineer with over 3 years of proffesional experience, specializing in frontend
					development. My expertise lies in crafting robust scallable SaaS-based architecture on the AWS Amazon
					platform.
				</p>
			</section>
			<section className={styles.buttons}>
				<button type="button" className={styles.contactBtn} onClick={handleContact}>
					Get In Touch
				</button>
				<button type="button" className={styles.downloadBtn} onClick={handleDownloadCV}>
					Download CV
				</button>
			</section>
			<Skills />
		</main>
	);
}