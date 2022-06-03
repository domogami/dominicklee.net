import Output from 'editorjs-react-renderer';

export default function EditorjsReact(props) {
  return (
    <section className="blog-post-html">
      <Output data={JSON.parse(props.previousData)} />
    </section>
  );
}
