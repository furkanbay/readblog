export default function Title({ title }) {
  return (
    <>
      <p className="text-2xl uppercase">{title}</p>
      <span className="block my-2 w-16 h-px bg-black"></span>
    </>
  );
}
