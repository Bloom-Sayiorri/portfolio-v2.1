import styles from "../styles/contact.module.css";

export default function Contact() {
	return (
		<section className={styles.container}>
			<h2 className={styles.heading}>Get in Touch</h2>
			<form className={styles.form}>
				<input
					// className={styles.input}
					type="text"
					placeholder="Your Name"
					required
				/>
				<input
					// className={styles.input}
					type="email"
					placeholder="Your Email"
					required
				/>
				<textarea
					// className={styles.input}
					rows="5"
					placeholder="Your Message"
					required
				/>
				<button className={styles.button} type="submit">
					Send Message
				</button>
			</form>
		</section>
	);
}
