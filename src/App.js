import "./index.css";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    fetch('http://127.0.0.1:4000/')
        .then(response => response.json())
        .then(json => console.log(json))
}, []);
  return (
    <div className="App">
      {/* Основний контент сайту */}
      <div className="background-color-zadnica-gitler">
        <h1>Interiorfirm</h1>
      </div>

      {/* Список посилань у хедері */}
      <ul className="header-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Feedback</li>
      </ul>

      {/* Опис компанії */}
      <div className="company-description">
        <h2>Interiorfirm</h2>
        <p>
          Interiorfirm is an acclaimed multidisciplinary studio specializing in interior design, architecture, and 3D design.
        </p>
        <p>
          We offer innovative solutions that turn spaces into art, making every project unique and tailored to the client’s needs.
        </p>
      </div>

      {/* Футер */}
      <footer className="footer">
        <p>&copy; 2024 Interiorfirm. All rights reserved.</p>
        <p>Location: [Your Location]</p>
        <p>Send Email: <a href="mailto:info@interiorfirm.com">info@interiorfirm.com</a></p>
      </footer>
    </div>
  );
}






