import { Editor } from "../components/Editor";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div style={{ height: "100vh", width: "100vw" }} className="container">
      {/* <Header /> */}
      <Editor />
    </div>
  );
}
