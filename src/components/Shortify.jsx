import React,{useState, useEffect} from "react"
import Form from "/src/components/Form.jsx"
import Item from "/src/components/Item.jsx"

function Shortify(){
 /* const initialData=[
    {
      id:1, 
      original_link:"https://www.shibin.abraham.me", 
      short_link:"https://Short/WxtRsjd"
    },
    {
      id: 2,
      original_link: "https://www.shibin.abraham.me",
      short_link: "https://Short/WxtRsjd"
    },
    ]*/
    const [urls, setUrls] = useState([])
    
    async function fetchUrl(link){
      let res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      let data = await res.json()
      console.log(data)
      setUrls((prev)=>[data.result, ...prev])
    }
    function deleteItem(code){
      setUrls((state)=>{
        return state.filter(item=>item.code!=code)
      })
    }
    
  
  return (
    <main>
    <section>
     <header>
       <h1>Shortify</h1>
     </header>
     <Form fetchURL={fetchUrl} />
     {urls.map((item)=>{
       return <Item key={item.code} data={item} deleteITEM={deleteItem} />
     })}
    </section>
    </main>
    ) 
}
export default Shortify