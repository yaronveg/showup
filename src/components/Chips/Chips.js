export default function Chips({ chips }) {
  return chips.map((item) => (
    <span className="chip" key={item}>
      {item}
    </span>
  ));
}
