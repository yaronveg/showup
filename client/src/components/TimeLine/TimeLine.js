import {
  faDrum,
  faExclamationCircle,
  faHandsHelping,
  faLink,
  faMusic,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimelineStamp from "../TimelineStamp/TimelineStamp";

export default function TimeLine({ timestamps }) {
  return (
    <div className="TimeLine">
      {timestamps.map((yearStamps) => {
        const { year, stamps } = yearStamps;
        return (
          <div className="year-wrap" key={year}>
            <h3 className="yearTitle">{year}</h3>
            {stamps.map((stamp) => {
              let stampIcon = null;
              if (stamp.type) {
                switch (stamp.type) {
                  case "Playing":
                    stampIcon = faHandsHelping;
                    break;
                  case "Played":
                    stampIcon = faHandsHelping;
                    break;
                  case "Release":
                    stampIcon = faMusic;
                    break;
                  case "show":
                    stampIcon = faDrum;
                    break;
                  case "Skill":
                    stampIcon = faStar;
                    break;
                  case "Connection":
                    stampIcon = faLink;
                    break;
                  default:
                    stampIcon = faExclamationCircle;
                    console.log(stamp.type);
                    break;
                }
              }

              return (
                <div className="stamp" key={stamp.id}>
                  <h4 className="stampDate">{stamp.date}</h4>
                  <FontAwesomeIcon className="stampIcon" icon={stampIcon} />
                  <TimelineStamp
                    type={stamp.type}
                    text={stamp.text}
                    detail={stamp.detail}
                    subText={stamp.subText}
                    subType={stamp.subType}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
