import './Footer.scss';

export const Footer: React.FC = () => (
  <footer className="Footer">
    <p>
      This project was coded by{" "}
      <a
        href="https://github.com/kbekher"
        target="_blank"
        rel="noreferrer"
        className="Footer__link"
      >
        Kristina Bekher
      </a>{" "}
      and is
      <a
        href="https://github.com/kbekher/react-weather-app/tree/master"
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