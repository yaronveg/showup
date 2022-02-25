import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ConnectionCount({ value }) {
  return (
    <div className="ConnectionCount">
      <div className="infoMinimal">
        <FontAwesomeIcon className="infoIcon" icon={faLink} size="lg" />
        <h4 className="connectionCount">{value}</h4>
      </div>
    </div>
  );
}
