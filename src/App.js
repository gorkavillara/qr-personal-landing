import "./styles.css";
import { social_networks } from "./assets";
import Social from "./components/Social";

export default function App() {
  return (
    <div className="App">
      <div className="profile">
        <div className="picture">
          <picture>
            <img
              src="https://res.cloudinary.com/dyddijwxv/image/upload/v1665861345/GV%20Digital/profile_pe6bhd.png"
              alt="profile"
            />
          </picture>
        </div>
        <div className="description">
          <div className="name">Gorka Villar</div>
          <div className="text">
            <p>
              <span role="img" aria-label="emoji">
                📶
              </span>{" "}
              CTO Foodlus
            </p>
            <p>
              <span role="img" aria-label="emoji">
                📱
              </span>{" "}
              Desarrollo de software
            </p>
            <p>
              <span role="img" aria-label="emoji">
                💻
              </span>{" "}
              Consultor de negocio
            </p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="content">
        {social_networks.map((social) => (
          <Social key={social.name} network={social} />
        ))}
      </div>
    </div>
  );
}
