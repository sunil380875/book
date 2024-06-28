export default function Paragraph({ text, css }: any) {
  return (
    <div
      className={`px-20 font-bold text-center `}
      style={{ fontSize: `${css + 30}px` }}
    >
      <p>{text}</p>
    </div>
  );
}
