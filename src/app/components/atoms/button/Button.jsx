export default function Button({title, onClick}) {
  return (
    <button onClick={onClick} className="h-[100px] w-[14%] border-2 border-ip-white text-ip-white rounded-xl font-texto-avenir-regular hover:bg-ip-black hover:border-ip-black">
     {title}
    </button>
  );
}
