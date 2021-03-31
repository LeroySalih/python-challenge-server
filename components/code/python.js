import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";

const Component = ({code}) => {
    return (<SyntaxHighlighter 
            language="python" 
            showLineNumbers="true" 
            style={tomorrow}
            customStyle={{fontSize: "1.5rem"}}
            >
        {code}
        </SyntaxHighlighter>)
}

export default Component;