export default function StartpageGridItem(props) {
  return (
    <div className="grid-item-container">
      <h3>{props.title}</h3>
      <ul>
        {props.links.map(function(d, idx){
           return (<li key={idx}><a href={d.link}>{d.name}</a></li>)
        })}
      </ul>
    </div>
  );
}
