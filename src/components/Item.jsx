import React,{useState} from "react"

function Item(props){
  const [shortLink, setShortlink]=useState("");
  const [copyURL,setCopyURL]=useState(false)
  
  const copy=()=>{
    setShortlink(props.data.full_short_link)
    navigator.clipboard.writeText(shortLink).then(()=>{
      setCopyURL(true)
      setTimeout(()=>{setCopyURL(false)},2000)
    })
    
  }
  return(
    <div className="item">
    <div className="url-controller">
    {
      copyURL? (<p style={{color:"#00FF20"}}>URL Copied </p>):(<p>{props.data.full_short_link}</p>)
    }
    
    <label>{props.data.original_link}</label>
    </div>
    <div className="controller-buttons">
    <button onClick={()=>{copy()}}>
    <img src="/src/assets/clipboard-regular.svg"/>
    </button>
    <button onClick={()=>{
    props.deleteITEM(props.data.code)}}>
    <img src="/src/assets/trash-can-solid.svg"/>
    </button>
    </div>
    </div>
    )
}
export default Item