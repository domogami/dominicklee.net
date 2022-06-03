import React from 'react';
import { createReactEditorJS } from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './editorjsPlugins';
const ReactEditorJS = createReactEditorJS();
import { useEffect, useRef, useState } from 'react';

export default function Editor(props) {
  const editorCore = React.useRef(null);
  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  return (
    <>
      <ReactEditorJS
        onInitialize={handleInitialize}
        tools={EDITOR_JS_TOOLS}
        defaultValue={JSON.parse(props.previousData)}
        readOnly={true}
      />
    </>
  );
}
