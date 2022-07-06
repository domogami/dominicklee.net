import React from 'react';

// Allow editorjs init
import { createReactEditorJS } from 'react-editor-js';
const ReactEditorJS = createReactEditorJS();

// Imports for editorjs plugins
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import List from '@editorjs/list';
import Warning from '@editorjs/warning';
import Code from '@editorjs/code';
import LinkTool from '@editorjs/link';
import ImageTool from '@editorjs/image';
import Raw from '@editorjs/raw';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import SimpleImage from '@editorjs/simple-image';

const axios = require('axios').default;
import { uploadImage } from '~/post';

export async function loader({ request }) {
  return await uploadImage(request);
}

export default function Editor(props: any) {
  const editorCore = React.useRef(null);
  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  const handleSave = React.useCallback(async () => {
    const savedData = await editorCore.current.save();
    props.save(JSON.stringify(savedData));
  }, []);

  return (
    <>
      <ReactEditorJS
        onChange={handleSave}
        onInitialize={handleInitialize}
        tools={{
          embed: Embed,
          table: Table,
          marker: Marker,
          list: List,
          warning: Warning,
          code: Code,
          linkTool: LinkTool,
          image: {
            class: ImageTool,
            config: {
              uploader: {
                async uploadByFile(file: any) {
                  const responseFromAWS = await axios({
                    method: 'post',
                    url: '/.netlify/functions/uploadImage',
                    data: file.name,
                  });
                  console.log(responseFromAWS.data.url);
                  console.log('ATTEMPTING PUT');
                  const putResponse = await fetch(responseFromAWS.data.url, {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                    body: file,
                  });
                  const imageUrl = putResponse.url.split('?')[0];
                  return {
                    success: 1,
                    file: {
                      url: imageUrl,
                    },
                  };
                },
                uploadByUrl(url: any) {
                  return {
                    success: 1,
                    file: {
                      url: url,
                    },
                  };
                },
              },
            },
          },
          raw: Raw,
          header: Header,
          quote: Quote,
          checklist: CheckList,
          delimiter: Delimiter,
          inlineCode: InlineCode,
          simpleImage: SimpleImage,
        }}
        defaultValue={JSON.parse(props.previousData)}
        // readOnly={true}
      />
      {/* NOTE: Save editor.js content manually*/}
      {/* <button onClick={handleSave} type='button'> */}
      {/*   Save Content */}
      {/* </button> */}
    </>
  );
}
