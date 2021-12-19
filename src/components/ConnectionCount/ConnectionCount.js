import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ConnectionCount() {
  return (
    <div className="ConnectionCount">
      <div className="infoMinimal">
        <FontAwesomeIcon className="infoIcon" icon={faLink} size="lg" />
        <h4 className="connectionCount">1,238</h4>
      </div>
    </div>
  );
}
