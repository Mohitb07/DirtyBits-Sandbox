import Head from "next/head";
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(import("react-monaco-editor"), { ssr: false });

export default function Home() {
  return (
    <div style={{ height: "100vh", width: "100vw" }} className="container">
      <h1>Hello world</h1>
      <MonacoEditor
        width={800}
        width={600}
        theme="vs-dark"
        language="javascript"
        // editorDidMount={() => {
        //   // @ts-ignore
        //   window.MonacoEnvironment.getWorkerUrl = (_moduleId, label) => {
        //     if (label === "json") return "_next/static/json.worker.js";
        //     if (label === "css") return "_next/static/css.worker.js";
        //     if (label === "html") return "_next/static/html.worker.js";
        //     if (label === "typescript" || label === "javascript")
        //       return "_next/static/ts.worker.js";
        //     return "_next/static/editor.worker.js";
        //   };
        // }}
        // width="800"
        // height="600"
        // language="markdown"
        // theme="vs-dark"
        // value="fasdfs"
        // options={{
        //   minimap: {
        //     enabled: false,
        //   },
        // }}
        // // onChange={setPostBody}
      />
    </div>
  );
}
