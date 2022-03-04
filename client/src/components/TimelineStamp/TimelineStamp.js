export default function TimelineStamp({
  type,
  text,
  detail,
  subText,
  subType,
}) {
  let returner = null;
  switch (type) {
    case "Playing":
      returner = (
        <div className="TimelineStamp">
          <span>
            {type} {detail && detail + " "}for{" "}
            <a href="www.google.com">{text}</a>
          </span>
        </div>
      );
      break;
    case "Played":
      returner = (
        <div className="TimelineStamp">
          <span>
            Played {detail && detail + " "}for{" "}
            <a href="www.google.com">{text}</a>
          </span>
        </div>
      );
      break;
    case "Release":
      returner = (
        <div className="TimelineStamp">
          <span>
            Released {detail} - {text}
          </span>
          {subText && (
            <>
              <br />
              <span className="StampSub">
                {subType} by <a href="www.google.com">{subText}</a>
              </span>
            </>
          )}
        </div>
      );
      break;
    case "show":
      returner = (
        <div className="TimelineStamp">
          <span>
            {detail} {type} at <a href="www.google.com">{text}</a>
          </span>
        </div>
      );
      break;
    case "Skill":
      returner = (
        <div className="TimelineStamp">
          <span>Started playing {detail}</span>
        </div>
      );
      break;
    case "Connection":
      returner = (
        <div className="TimelineStamp">
          <span>
            Connected with <a href="www.google.com">{text}</a>
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
