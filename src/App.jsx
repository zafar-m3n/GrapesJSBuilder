import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import grapesjsBlocksBasic from "grapesjs-blocks-basic";
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

    editor.on("load", () => {
      const blockCategories = editor.BlockManager.getCategories();
      blockCategories.each((category) => category.set("open", false));
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
