import React,{useState} from "react"

function Form(props){
  const [link, setLink] = useState("")
  function handler(){
    props.fetchURL(link)
    setLink("")
  }
  return(
    <div className="form-handler">
    <input value={link} type="text" placeholder="Enter URL to Shorten" onChange={
      (e)=>setLink(e.target.value)
    }/>
    <button onClick={()=>handler()}>create</button>
    </div>
    )
}
export default Form