import React from 'react';
import styles from '../styles/ContactPage.module.css';

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('The form has been submitted!');
};

const ContactPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactPage;