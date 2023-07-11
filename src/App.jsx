


// import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from "react-bootstrap"

function App() {


  return (
    <div>
      <div className="container">
        <div className="hold">
          <div class=" position-relative">
            <label className="position-absolute " htmlFor="item">New Item</label>
            <input className="position-absolute w-100" type="text"  class="input"/>
          </div>
          <Button className="button">Add</Button>
        </div>
      </div>
    </div>
  )
}

export default App
