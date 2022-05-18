import stylesUrl from "~/styles/app.css";
import startpageImage from "~/images/hexagon.svg"
import StartpageGridItem from "~/components/startpageGridItem";

export const links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  const sectionOne = [{ "name": "test", "link": "https://google.com" }, { "name": "test", "link": "https://google.com" }]
  return (
    <div className="startpage-hero-container">
      <div className="startpage-hero">
        <img src={startpageImage} />
        <div>
          <StartpageGridItem
            title="~/general"
            links={sectionOne}
          />
        </div>
      </div>
    </div>
  );
}
