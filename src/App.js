import React from "react";
import marked from "marked";
import "./App.css";
import hljs from "highlight.js";
import { VscChromeMinimize, VscChromeMaximize,VscChromeClose} from "react-icons/vsc";

const initialMarkdown = `
# Headings:

### Headings examples:

# Heading 1
## Heading 2
### Heading 3

# Link:
My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

# Inline Code:

At the command prompt, type \`npm start\`.

# Code block:

    <html>
        <head>
            <title>Code block example<title>
        </head>

# Lists:

1. First item
2. Second item
3. Third item
    - Indented item
    - Indented item
4. Fourth item

# Blockquote:

> Dorothy followed her through many of the beautiful rooms in her castle.

# Image:

![tortoiseshell cat](https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tortoiseshell-cat-1559594191.png?crop=0.669xw:1.00xh;0.107xw,0&resize=640:* 'Cute cat')

# Emphasis:

**bold**   
*italic*  
***bold and italic***
`

marked.setOptions({
    highlight: function(code) {
        return hljs.highlightAuto(code).value;
      },
    breaks: true
})

class App extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            markdown: initialMarkdown
          }
    }

    handleChange= (event)=>{
        this.setState({markdown: event.target.value});
    }
    
    interpretCarriageReturn=(text)=>{
    }

    render(){
        return(
        <div className="markdown-previewer">
            <h1 id="page-title">Markdown previewer</h1>
            <div className="container">
                <div className="up">
                    <div id="header">
                        <span>Markdown editor</span>
                        <div className="icons"><VscChromeMinimize/>
                        <VscChromeMaximize/>
                        <VscChromeClose/></div>
                    </div>
                    <textarea value={this.state.markdown} id="editor" onChange={this.handleChange}></textarea>
                </div>
                <div className="down">
                    <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}/>
                </div>
            </div>
        </div>
        )
    }
}

export default App;