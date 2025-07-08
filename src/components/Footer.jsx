import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import styles from "../styles/footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.row1}>
				<p className={styles.text}>
					Bloom Sayiorri &copy; 2025 All rights reserved.
				</p>
			</div>
			<div className={styles.row2}>
				<a href="#" className="hover:text-blue-400">
					<FaTwitter className={styles.twitterIcon} />
				</a>
				<a href="#" className={styles.linkedinIcon}>
					<FaLinkedin className={styles.linkedinIcon} />
				</a>
				<a href="#" className={styles.githubIcon}>
					<FaGithub className={styles.githubIcon} />
				</a>
			</div>
		</footer>
	);
}
