export default function TimelineStamp({ type, text, detail }) {
  let returner = null;
  switch (type) {
    case "playing":
      returner = (
        <div className="TimelineStamp">
          <span>
            Playing {detail && detail + " "}for <a href="#">{text}</a>
          </span>
        </div>
      );
      break;
    case "played":
      returner = (
        <div className="TimelineStamp">
          <span>
            Played {detail && detail + " "}for <a href="#">{text}</a>
          </span>
        </div>
      );
      break;
    case "release":
      returner = (
        <div className="TimelineStamp">
          <span>
            Released {detail} - {text}
          </span>
        </div>
      );
      break;
    case "show":
      returner = (
        <div className="TimelineStamp">
          <span>
            {detail} show at <a href="#">{text}</a>
          </span>
        </div>
      );
      break;
    case "skill":
      returner = (
        <div className="TimelineStamp">
          <span>Started playing {detail}</span>
        </div>
      );
      break;
    case "connection":
      returner = (
        <div className="TimelineStamp">
          <span>
            Connected with <a href="#">{text}</a>
          </span>
        </div>
      );
      break;
    default:
      returner = type;
      break;
  }
  return returner;
}
