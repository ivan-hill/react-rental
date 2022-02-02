import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>React Rental</h2>
      <p>
        &copy; <span>{year}</span> Seeking Employment Opportunity{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="/"
        >
          ivan Hill | Front-end Developer
        </a>
      </p>
    </footer>
  );
}
