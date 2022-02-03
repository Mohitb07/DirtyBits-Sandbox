import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ClockLoader as Loader } from "react-spinners";
const MonacoEditor = dynamic(import("react-monaco-editor"), {
  ssr: false,
  loading: () => <Loader />,
});

export const Editor = () => {
  const [editorValue, setEditorValue] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [theme, setTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(16);

  return (
    <>
      <MonacoEditor
        editorDidMount={() => {
          window.MonacoEnvironment.getWorkerUrl = (_moduleId, label) => {
            if (label === "cpp") return "_next/static/cpp.worker.js";
            if (label === "javascript")
              return "_next/static/javascript.worker.js";
            if (label === "python") return "_next/static/python.worker.js";
            if (label === "java" || label === "java")
              return "_next/static/ts.worker.js";
            return "_next/static/editor.worker.js";
          };
        }}
        width="100%"
        height="90%"
        language={language}
        theme={theme}
        value={editorValue}
        options={{
          minimap: {
            enabled: false,
          },
          //   glyphMargin: true,
          fontSize: fontSize,
          //   cursorStyle: "block",
          folding: true,
          wordWrap: "on",
          lineNumbersMinChars: 3,
          wrappingIndent: "same",
          mouseWheelZoom: true,
          copyWithSyntaxHighlighting: false,
          acceptSuggestionOnEnter: "smart",
        }}
        onChange={(post) => setEditorValue(post)}
      />
    </>
  );
};
