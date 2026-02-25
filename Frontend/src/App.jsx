import { useState,useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs";
import './App.css'
import Markdown from 'react-markdown'
import axios from "axios"

function App() {
  const [count, setCount] = useState(0)

  const[code,setCode]=useState(`function sum(){
    return 1+1
    
  }`)

const [review,setReview]=useState(``)

  useEffect(()=>{

    prism.highlightAll()

},[])



async function reviewCode(){
//backend pe request bhejenge iss fucntion se
const response=await axios.post('http://localhost:3000/ai/get-review',{code})
setReview(response.data)
}



  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor value={code}
            onValueChange={code=>setCode(code)}
            highlight={code=>Prism.highlight(code,prism.languages.javascript,"javascript")}
            padding={10}
            style={{
              fontFamily:'"Fira code","Fira Mono", nonospace',
              fontSize:16,
         border:"1px solid #ddd",
              borderRadius:"5px",
              height:"100%",
              widows:"100%"
            }}
            />

          
          </div>
          <div 
          onClick={reviewCode} className="review">Review</div>
        </div>
        <div className="right">
        <Markdown>{review}</Markdown></div>
      </main>
    </>
  );
}


export default App
