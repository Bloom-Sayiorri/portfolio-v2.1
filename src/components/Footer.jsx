import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import styles from "../styles/footer.module.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.row1}>
				<p className={styles.text}>
					Bloom Sayiorri &copy; 2025 All rights reserved.
				</p>
			</div>
			<div className={styles.row2}>
				{/* <NavLink to="https://" className="hover:text-blue-400">
					<FaTwitter className={styles.twitterIcon} />
				</NavLink> */}
				<NavLink
					to="https://www.linkedin.com/in/bloom-sayiorri"
					className={styles.linkedinIcon}>
					<FaLinkedin className={styles.linkedinIcon} />
				</NavLink>
				<NavLink
					to="https://github.com/bloom-sayiorri"
					className={styles.githubIcon}>
					<FaGithub className={styles.githubIcon} />
				</NavLink>
			</div>
		</footer>
	);
}

