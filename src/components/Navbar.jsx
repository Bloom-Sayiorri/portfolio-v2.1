import styles from "../styles/navbar.module.css";
import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) =>
	isActive ? `${styles.link} ${styles.active}` : styles.link;

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
				<h4 className={styles.myName}>Bloom Sayiorri</h4>
			</section>

			<nav className={styles.navbar}>
				{/* {`${styles.link}, active`} */}
				<NavLink to="/" className={linkStyle}>
					Home
				</NavLink>
				<NavLink to="/experience" className={linkStyle}>
					Experience
				</NavLink>
				<NavLink to="/projects" className={linkStyle}>
					Projects
				</NavLink>
				<NavLink to="/contact" className={linkStyle}>
					Contact
				</NavLink>
			</nav>
			<div className={styles.menu}>
				<div className={styles.burger1}></div>
				<div className={styles.burger2}></div>
				<div className={styles.burger3}></div>
			</div>
		</header>
	);
}
