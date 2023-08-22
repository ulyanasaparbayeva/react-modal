import {useState} from "react";



const Lesson = () => {
const [name, setName] = useState("John")
function changeName() {
  if(name == "John") {
    setName("Mike")
  } else {
    setName("John")
  }
}


  return (
    <div>
       <p>{name}</p>
      <button onClick={changeName}>Click</button>
    </div>
  )
}
export default Lesson


