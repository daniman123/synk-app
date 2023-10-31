export const Button = ({ name }: { name: string }) => {
  return (
    <button className="hover:bg-slate-400 rounded text-center lg:h-10">{name}</button>
  );
};

const ActionButtons = () => {
  return (
    <div
      id="actionButtons"
      className="grid w-full max-sm:h-full p-1"
    >
      <Button name="Home" />
      <Button name="Peeks" />
      <Button name="Pulse" />
    </div>
  );
};

export default ActionButtons;
