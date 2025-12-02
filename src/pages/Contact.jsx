import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "../styles/contact.module.css";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		comments: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();

		emailjs.send("service_tvy9vz8", "template_jqe6iqn", formData, "vpk4TVF0y91SNzixa").then(
			() => {
				alert("Your message has been sent.");
			},
			(error) => {
				console.error("Email error:", error.text);
				alert("Something went wrong.");
			}
		);
	};

	const handleChange = (event) => {
		const { name, value } = event.currentTarget;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.formTitle}>Contact Me</h2>
			<form onSubmit={handleSubmit} className={styles.form}>
				<label htmlFor="name" className={styles}>
					Name
				</label>
				<input type="text" id="name" name="name" placeholder="Enter name..." onChange={handleChange} required />
				<label htmlFor="email" className="">
					Email
				</label>
				<input type="email" id="email" name="email" placeholder="Enter email..." onChange={handleChange} required />
				<label htmlFor="comments" className="">
					Comments
				</label>
				<textarea id="comments" name="comments" placeholder="Comments..." onChange={handleChange} />
				<button type="submit" className={styles.submitBtn}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Contact;