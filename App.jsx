import "./App.css"
import Header from "./src/component/Header"
import List from "./src/component/List"
import Maker from "./src/component/Maker"
function App(){
    return (
     <div className="App">
   <Header/>
   <Maker/>
   <List/>
    </div>
    )
}
export default App;