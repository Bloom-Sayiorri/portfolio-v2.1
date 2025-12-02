import styles from "../styles/navbar.module.css";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";

const linkStyle = ({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link);

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<header className={styles.header}>
			<section className={styles.logo}>
				<img src="/logo.svg" alt="logo" className={styles.image} height={30} width={30} />
				<h4 className={styles.myName}>Bloom Sayiorri</h4>
			</section>

			<nav className={styles.navbar}>
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

			{isOpen && (
				<nav className={styles.mobileNavbar}>
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
			)}
			{isOpen ? (
				<IoClose onClick={handleOpen} className={styles.close} />
			) : (
				<IoMenu onClick={handleOpen} className={styles.menu} />
			)}
		</header>
	);
}

