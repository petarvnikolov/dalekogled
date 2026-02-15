import { Outlet } from "react-router";

export function Root() {
  return (
    <div className="dark min-h-screen bg-[#0a0a0a] text-white font-['Lora']">
      <div className="max-w-[430px] mx-auto min-h-screen bg-black shadow-2xl">
        <Outlet />
      </div>
    </div>
  );
}
