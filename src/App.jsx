import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import grapesjsBlocksBasic from "grapesjs-blocks-basic";
import grapesjsCustomCode from "grapesjs-custom-code";
import { addAllBlogs } from "@/categories/blogs";
import { addAllContacts } from "@/categories/contacts";
import { addAllTestimonials } from "@/categories/testimonials";
import { addAllTeams } from "@/categories/teams";
import { addAllStatistics } from "@/categories/statistics";
import { addAllPricing } from "@/categories/pricing";
import { addAllHeroSections } from "@/categories/hero";
import { addAllHeaders } from "@/categories/header";
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
      const iframe = editor.Canvas.getFrameEl();
      const head = iframe.contentDocument.head;

      // Inject Tailwind CSS into GrapesJS iframe
      const tailwindStyles = document.createElement("link");
      tailwindStyles.rel = "stylesheet";
      tailwindStyles.href =
        "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
      head.appendChild(tailwindStyles);
    });

    addAllHeaders(editor);
    addAllHeroSections(editor);
    addAllStatistics(editor);
    addAllBlogs(editor);
    addAllPricing(editor);
    addAllTeams(editor);
    addAllContacts(editor);
    addAllTestimonials(editor);

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
