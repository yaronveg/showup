import {
  faDrum,
  faHandsHelping,
  faLink,
  faMusic,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimelineStamp from "../TimelineStamp/TimelineStamp";

export default function TimeLine({ arr }) {
  return (
    <div className="TimeLine">
      {arr.map((yearStamps) => {
        const { year, stamps } = yearStamps;
        return (
          <div className="year-wrap" key={year}>
            <h3 className="yearTitle">{year}</h3>
            {stamps.map((stamp) => {
              let stampIcon = null;
              switch (stamp.type) {
                case "playing":
                  stampIcon = faHandsHelping;
                  //   stampText =
                  //     "Playing " +
                  //     (stamp.detail && stamp.detail + " ") +
                  //     "for " +
                  //     <a href="#">{stamp.text}</a>;
                  break;
                case "played":
                  stampIcon = faHandsHelping;
                  break;
                case "release":
                  stampIcon = faMusic;
                  break;
                case "show":
                  stampIcon = faDrum;
                  break;
                case "skill":
                  stampIcon = faStar;
                  break;
                case "connection":
                  stampIcon = faLink;
                  break;
                default:
                  console.log(stamp.type);
              }

              return (
                <div className="stamp" key={stamp.id}>
                  <h4 className="stampDate">{stamp.date}</h4>
                  <FontAwesomeIcon className="stampIcon" icon={stampIcon} />
                  <TimelineStamp
                    type={stamp.type}
                    text={stamp.text}
                    detail={stamp.detail}
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
