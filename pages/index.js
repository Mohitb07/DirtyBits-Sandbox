import React, { useState } from "react";
import { Editor } from "../components/Editor";
import Header from "../components/Header";

export default function Home() {
  const [editorValue, setEditorValue] = useState(
    "#include<iostream>\nusing namespace std;\n\nint main(){\n\n  return 0;\n}"
  );
  const [language, setLanguage] = useState({
    label: "C++",
    value: "cpp",
    ext: ".cpp",
  });
  const [theme, setTheme] = useState({
    label: "vs-dark",
    value: "vs-dark",
    type: "dark",
  });
  const [fontSize, setFontSize] = useState(16);
  return (
    <div className="container h-screen w-screen">
      <Header
        editorValue={editorValue}
        language={language}
        theme={theme}
        fontSize={fontSize}
        setEditorValue={setEditorValue}
        setLanguage={setLanguage}
        setTheme={setTheme}
        setFontSize={setFontSize}
      />
      <Editor
        editorValue={editorValue}
        language={language}
        theme={theme.value}
        fontSize={fontSize}
        setEditorValue={setEditorValue}
      />
    </div>
  );
}
