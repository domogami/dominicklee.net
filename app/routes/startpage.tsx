import { Outlet } from 'remix';

export default function Startpage() {
  return (
    <div className="startpage-containter">
      {' '}
      <h1>
        {' '}
        Welcome Back <span className="green-text">Dom</span>{' '}
      </h1>
      <Outlet />
    </div>
  );
}
