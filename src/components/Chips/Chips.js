export default function Chips({ arr }) {
  return arr.map((item) => (
    <span className="chip" key={item}>
      {item}
    </span>
  ));
}
