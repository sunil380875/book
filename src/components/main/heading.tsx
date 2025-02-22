export default function Heading({ text, css }: any) {
  return (
    <div
      className={`px-20 font-bold text-center `}
      style={{ fontSize: `${css + 50}px` }}
    >
      <p>{text}</p>
    </div>
  );
}
