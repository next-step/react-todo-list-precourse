import TodoThing from "./TodoThing";
import "./List.css"
const List = () => {
    return <div className="List">
        <h3>List</h3>
        <div className="TodoThingsList">
            <TodoThing/>
            <TodoThing/>
            <TodoThing/>
        </div>


    </div>
};

export default List;