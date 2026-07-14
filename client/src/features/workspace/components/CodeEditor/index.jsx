import Editor from "@monaco-editor/react";


const CodeEditor = (props) => {
    const {language, code, setcode} = props
        return(
            <Editor
                height="500px"
                language={language}
                theme="vs-dark"
                value={code}
                onChange={(value) => setcode(value || "")}
                height="500px"
                width="90%"
                options={{
                 fontSize: 16,
                minimap: {
                enabled: false,
                },
                automaticLayout: true,
                wordWrap: "on",
                scrollBeyondLastLine: false,
                tabSize: 4,
                formatOnPaste: true,
                formatOnType: true,                           
                }}
            />
        )
}

export default CodeEditor