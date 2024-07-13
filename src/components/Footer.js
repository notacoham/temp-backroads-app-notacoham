import React from 'react';
import { footerLinks } from '../data';
import { footerIcons } from '../data';

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {footerLinks.map((link) => {
          const { id, title, href } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {title}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {footerIcons.map((iconLink) => {
          const { id, href, icon } = iconLink;
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
