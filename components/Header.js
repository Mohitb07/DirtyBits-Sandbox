import React from "react";

// import { uploadCode } from "../../components/api/apis";

const jsonData = require("./data.json");

import Dropdown2 from "./Dropdown2";
import Image from "next/image";
import refresh from "../public/refresh.svg";
import downloadIcon from "../public/download.svg";
import uploadquestion from "../public/uploadq.svg";
import insert from "../public/insert.svg";
// import { Tooltip } from "@nextui-org/react";

function Header(props) {
  const download = (filename, text) => {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const uploadCloud = async () => {
    // const key = "updatable";
    // message.loading({
    //   content: "Loading...",
    //   key,
    //   style: {
    //     marginTop: "2rem",
    //   },
    // });
    // try {
    //   await uploadCode
    //     .post("/", {
    //       code: props.editorValue,
    //       language: props.currLang.label,
    //       probId: props.id,
    //       email: props.userInfo.email,
    //     })
    //     .then(() => {
    //       message.success({
    //         content: " Code Uploaded Successfully",
    //         key,
    //         duration: 2,
    //         style: {
    //           marginTop: "2rem",
    //         },
    //       });
    //     });
    // } catch (e) {
    //   message.error({ content: "Try Again !", key, duration: 2 });
    // }
  };

  const setLangFunction = (label) => {
    console.log(label);
    for (let i = 0; i < jsonData.language.length; i++) {
      if (jsonData.language[i].label === label) {
        props.setLanguage({
          value: jsonData.language[i].value,
          label: jsonData.language[i].label,
          ext: jsonData.language[i].ext,
          icon: jsonData.language[i].icon,
        });
        return;
      }
    }
  };

  let fileReader;

  const handleFileRead = (e) => {
    const content = fileReader.result;
    props.setEditorValue(content);
  };

  const uploadedfile = (e) => {
    let input_file = e.target.files[0];
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(input_file);
    var [filename, extension] = input_file.name.split(".");
    if (extension === "cpp") {
      setLangFunction("C++");
    } else if (extension === "java") {
      setLangFunction("Java");
    } else if (extension === "py") {
      setLangFunction("Python 3");
    } else {
      setLangFunction("C");
    }
  };

  const resetCode = () => {
    for (let i = 0; i < jsonData.language.length; i++) {
      if (jsonData.language[i].label === props.language.label) {
        props.setEditorValue(jsonData.language[i].pre);
        return;
      }
    }
  };

  return (
    <div className="flex justify-around p-10 bg-black w-screen">
      {/* <FontDropdown fontSize={props.fontSize} setFontSize={changeFont} /> */}
      <Dropdown2
        dropdownType={"theme"}
        currTheme={props.theme}
        currLang={props.language}
        setCurrTheme={props.setTheme}
        setCurrLang={props.setLanguage}
        changeEditorValue={props.setEditorValue}
      />
      <Dropdown2
        dropdownType={"language"}
        currLang={props.language}
        currTheme={props.theme}
        setCurrTheme={props.setTheme}
        setCurrLang={props.setLanguage}
        changeEditorValue={props.setEditorValue}
      />
      {/* TOP RIGHT ICONS */}
      <div className="space-x-4 flex items-center transition-all ease-in-out">
        {/* <Tooltip content="Upload Code to cloud" color="secondary"> */}
        {/* <Image
          onClick={uploadCloud}
          className="cursor-pointer"
          src={uploadquestion}
          width={20}
          height={20}
        /> */}
        {/* </Tooltip> */}

        <div>
          {/* <Tooltip content="Import File" color="secondary"> */}
          <label htmlFor="file-input">
            <Image
              className="cursor-pointer"
              src={insert}
              width={20}
              height={20}
            />
          </label>
          <input
            type="file"
            accept=".cpp, .c, .py, .java"
            id="file-input"
            onChange={(e) => uploadedfile(e)}
            className="hidden "
          />
          {/* </Tooltip> */}
        </div>

        <div>
          {/* <Tooltip content="Download Code" color="secondary"> */}
          <Image
            onClick={() =>
              download("code" + props.language.ext, props.editorValue)
            }
            className="cursor-pointer"
            src={downloadIcon}
            width={20}
            height={20}
          />
          {/* </Tooltip> */}
        </div>
        <div>
          {/* <Tooltip content="Reset Code" color="secondary"> */}
          <Image
            onClick={() => resetCode()}
            className="cursor-pointer"
            src={refresh}
            width={20}
            height={20}
          />
          {/* </Tooltip> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
