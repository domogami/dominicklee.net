import Editor from '~/components/editor.client';
import { ClientOnly } from 'remix-utils';
import '~/types/editor';

import { createReactEditorJS } from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '~/components/editorjsPlugins';
const ReactEditorJS = createReactEditorJS();
import '~/types/editor';
export default function AdminIndex() {
  return (
    <div className="adminNewPostLink">
      <ClientOnly>{() => <Editor />}</ClientOnly>
      <button>Save Article</button>
    </div>
  );
}
