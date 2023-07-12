


// import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react"
import { Button } from "react-bootstrap"
// import Button from 'react-bootstrap/Button';

function App() {

  const [newItems, setNewItem] = useState("") 
  const [todos, settodos] = useState([]) 

  function handel(e){
    settodos([...todos], {id: crypto.randomUUID(), title: newItems, completed : false}
    )
    
  }

  return (
    <div>
      <div className="container">
        <div className="hold">
          <form onSubmit={handel} >
            <div class=" position-relative">
              <label className="position-absolute mb-3 label-inp" htmlFor="item">New Item</label>
              <input className="input-items position-absolute w-100 mt-2" 
              type="text" 
              value={newItems} 
              onChange={(e) => setNewItem(e.target.value)} class="input"/>
            </div>
          <Button onClick={handel} className="button">Add</Button>
          </form>
          <h2 className="header mt-2"> Todo List</h2>
          <ul>
            <li className="d-flex     align-items-center">
              <label className="d-flex ">
                <input type="checkbox" name="" id="" className="checkbox me-2"/>
                item 1
              </label>
              <Button variant="danger" className="ms-2" >Danger</Button>{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
