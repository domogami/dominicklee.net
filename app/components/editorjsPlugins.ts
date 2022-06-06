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
import upload from '~/s3.server';

// function uploadFileToS3(file) {
//   const result = uploadFile(file);
//   console.log(result);
//   return result;
// }

export const EDITOR_JS_TOOLS = {
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
        uploadByFile(file: any) {
          // const result = await uploadFileToS3(file);
          return upload(file).then(() => {
            console.log(file);
            return {
              success: 1,
              file: {
                url: 'https://codex.so/upload/redactor_images/o_80beea670e49f04931ce9e3b2122ac70.jpg',
                // any other image data you want to store, such as width, height, color, extension, etc
              },
            };
          });
        },
        uploadByUrl(url: any) {
          // return uploadFile(url).then(() => {
          return {
            success: 1,
            file: {
              url: 'https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg',
              // any other image data you want to store, such as width, height, color, extension, etc
            },
          };
          // })
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
};
