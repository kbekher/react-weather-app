import './Footer.scss';

export const Footer = () => (
  <footer className="Footer">
    <p>
      This project was coded by{" "}
      <a
        href="https://leafy-basbousa-36ee27.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="Footer__link"
      >
        Kristina Bekher
      </a>{" "}
      and is
      <a
        href="https://github.com/NinjaGexly/midnight-react-weather-app"
        target="_blank"
        rel="noreferrer"
        className="Footer__link"
      >
        {" "}
        open-sourced on GitHub
      </a>{" "}
    </p>
  </footer>
)