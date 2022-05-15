import stylesUrl from "~/styles/app.css";
import Header from "~/components/header";

export const links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function IndexRoute() {
  return (
    <div>
      <Header />
      <h1>
        <span className="accent">
          Dom
        </span>
        Lee
      </h1>
      <h2>This is an h2</h2>
      <p>This is a p</p>
    </div>
  );
}
