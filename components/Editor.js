import dynamic from "next/dynamic";
import { ClockLoader as Loader } from "react-spinners";
const MonacoEditor = dynamic(import("react-monaco-editor"), {
  ssr: false,
  loading: () => <Loader />,
});

export const Editor = (props) => {
  return (
    <div className="h-full w-screen">
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
        height="85%"
        language={props.language.value}
        theme={props.theme}
        value={props.editorValue}
        options={{
          minimap: {
            enabled: false,
          },
          glyphMargin: true,
          fontSize: props.fontSize,
          //   cursorStyle: "block",
          folding: true,
          wordWrap: "on",
          lineNumbersMinChars: 3,
          wrappingIndent: "same",
          mouseWheelZoom: true,
          copyWithSyntaxHighlighting: false,
          acceptSuggestionOnEnter: "smart",
        }}
        onChange={(data) => props.setEditorValue(data)}
      />
    </div>
  );
};
