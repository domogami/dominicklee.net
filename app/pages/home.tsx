import hexagon from '~/images/hexagon.svg';
import logo from '~/images/Logo.svg';

export default function Home() {
  return (
    <div className="home">
      <h1>
        <span className="accent">Dom</span>
        <br />
        Lee
      </h1>
      <div className="vert-rectangle" />
      <img src={logo} />
    </div>
  );
}
