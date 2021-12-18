import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserLocation() {
  return (
    <div className="UserLocation">
      <FontAwesomeIcon
        className="locationIcon"
        icon={faMapMarkerAlt}
        size="lg"
      />
      <h4 className="userLocation">Israel, center</h4>
    </div>
  );
}
