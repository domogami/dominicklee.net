import Output from 'editorjs-react-renderer';
import CodeBoxOutput from 'editorjs-react-renderer';

const config = {
  // codeBox: {
  //   disableDefaultStyle: true,
  // },
};

// Define your custom renderer
// It should expect to receive data, style, classNames and config props. It's up to you to handle those props.
const CustomCodeRenderer = ({ data, style, classNames, config }) => {
  // validate props here...or not :)

  let content = null;

  if (typeof data === 'string') content = data;
  else if (
    typeof data === 'object' &&
    data.text &&
    typeof data.text === 'string'
  )
    content = data.text;

  return content ? (
    <p style={style} className={classNames}>
      {content}
    </p>
  ) : (
    ''
  );
};

const renderers = {
  codeBox: CustomCodeRenderer,
};

const style = {
  codeBox: {
    container: {},
    code: { borderRadius: '10px', padding: '20px' },
  },
};
// renderers={ renderers }
export default function EditorjsReact(props: any) {
  return (
    <section className='blog-post-html'>
      <Output
        data={JSON.parse(props.previousData)}
        style={style}
        config={config}
      />
    </section>
  );
}
