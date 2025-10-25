import React from "react";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>&copy; {year} Edwin Kiburi. All rights reserved.</p>
        </footer>
    );
}

export default Footer;