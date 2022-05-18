import { Outlet } from "remix";

export default function Startpage() {
  return (
    <div className="startpage-containter">
      <h1>Welcome Back, Dominick</h1>
      <Outlet />
    </div>
  );
}
