import { config } from "../config";
import "./styles/CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <a 
          href={`mailto:${config.contact.email}`}
          className="cta-btn cta-btn-hire"
          data-cursor="disable"
        >
          Get In Touch →
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
