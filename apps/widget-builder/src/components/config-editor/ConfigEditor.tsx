import { useRef, FC } from "react";
import { Editor, Monaco } from "@monaco-editor/react";
import { WidgetProps } from "../widget-preview/WidgetPreview";
import { UseFormSetValue } from "react-hook-form";

type ConfigEditorProps = {
  value: WidgetProps;
  setValue: UseFormSetValue<WidgetProps>;
};

const ConfigEditor: FC<ConfigEditorProps> = ({ value, setValue }) => {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor: any, monaco: Monaco) {
    editorRef.current = editor;
  }

  function updateValue(value?: string) {
    if (!value) return;

    try {
      const updatedValue = JSON.parse(value) as WidgetProps;
      setValue("productDetails", updatedValue.productDetails);
      setValue("displaySettings", updatedValue.displaySettings);
      setValue("layout", updatedValue.layout);
      setValue("paymentDetails", updatedValue.paymentDetails);
    } catch (e) {
      console.error(e, "Invalid JSON");
    }
  }

  return (
    <>
      <Editor
        onChange={updateValue}
        height="100vh"
        defaultLanguage="json"
        value={JSON.stringify(value, null, 2)}
        onMount={handleEditorDidMount}
      />
    </>
  );
};

export default ConfigEditor;
