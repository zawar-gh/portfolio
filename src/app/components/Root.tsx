import { Outlet } from "react-router";

export function Root() {
  return (
    <div className="min-h-screen bg-[#0D0E11] text-white">
      <Outlet />
    </div>
  );
}
