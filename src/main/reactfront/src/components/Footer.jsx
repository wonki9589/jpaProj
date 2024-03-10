import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-links">
        <a
          href="https://github.com/wonki95891/Curly"
          target="_blank"
        >
          View Source on Github
        </a>
        <span> / </span>
        <a href="mailto:wonki95891@gmail.com" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a href="https://blog.naver.com/wonki9589" target="_blank">
          Read My Blog
        </a>
      </p>
      <p>
        &copy; {currentYear} <strong>Curly</strong> - Online Grocery Store
      </p>
    </footer>
  );
};

export default Footer;
