import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import grapesjsBlocksBasic from "grapesjs-blocks-basic";
import grapesjsTabs from "grapesjs-tabs";
import grapesjsPluginForms from "grapesjs-plugin-forms";
import grapesjsCustomCode from "grapesjs-custom-code";
import "grapesjs/dist/css/grapes.min.css";
import "@/styles/main.scss";

function App() {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [gjsPresetWebpage, grapesjsBlocksBasic, grapesjsCustomCode],
      pluginsOpts: {
        gjsPresetWebpage: {
          blocks: true,
          blocksBasicOpts: true,
        },
      },
    });

    setEditor(editor);
  }, []);

  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
}

export default App;
