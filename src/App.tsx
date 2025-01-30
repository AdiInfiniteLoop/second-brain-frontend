import { PlusIcon } from "./assets/icons/PlusIcon"
import { Button } from "./components/Button"

function App() {

  return (
    <div>
     <Button variant="primary" size="md" onClick={()=> console.log('clciked')} text="Click here!"/>
     <Button variant="secondary" size="lg" onClick={()=> console.log('Here ')} text="Share!" startIcon={ <PlusIcon size={`size-5`}/>}  />
      
    </div>
  )
}

export default App
