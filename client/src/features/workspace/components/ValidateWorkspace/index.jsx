import  EDITOR_TEMPLATES  from "../../constants/editorTemplates";

const normalizeCode = (code) => {
    return code.replace(/\s+/g, "").trim();
};

const ValidateWorkspace = ({
    language,
    code,
}) => {

    if (!code.trim()) {
        return "Please write some code.";
    }

    const userCode = normalizeCode(code);
    const templateCode = normalizeCode(
        EDITOR_TEMPLATES[language]
    );

    if (userCode === templateCode) {
        return "Please write your solution before reviewing.";
    }

    return null;
};

export default ValidateWorkspace
