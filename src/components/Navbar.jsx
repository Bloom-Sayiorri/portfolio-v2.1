import styles from "../styles/navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<header className={styles.header}>
			<section className={styles.logo}>
				<img
					src="/logo.svg"
					alt="logo"
					className={styles.image}
					height={30}
					width={30}
				/>
				<span className={styles.myName}>Bloom Sayiorri</span>
			</section>

			<nav className={styles.nav}>
				<NavLink to="/" className={styles.link}>
					Home
				</NavLink>
				<NavLink to="/experience" className={styles.link}>
					Experience
				</NavLink>
				<NavLink to="/projects" className={styles.link}>
					Projects
				</NavLink>
				<NavLink to="/contact" className={styles.link}>
					Contact
				</NavLink>
			</nav>
		</header>
	);
}
