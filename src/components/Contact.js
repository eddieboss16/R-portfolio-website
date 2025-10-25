import React from "react";

function Contact() {
    // Event handler function
    function handleClick() {
        alert('Thank you for your interest! Email: edwinnjoroge001@gmail.com');
    }

    return (
        <section id="contact" className="section">
            <h2>Contact Me</h2>
            <p>Email: edwinnjoroge001@gmail.com</p>
            <p>LinkedIn: linkedin.com/in/edwinnjoroge</p>
            <p>GitHub: github.com/eddieboss16</p>
            <button onClick={handleClick} className="contact-btn">
                Get In Touch
            </button>
        </section>
    );
}

export default Contact;