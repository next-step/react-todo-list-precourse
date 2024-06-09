import React, {useState} from "react";
import "./Todomaker.css"


const Todomaker = ({addNewTodo}) => {

    const [inputvalue, setinputvalue] = useState('')

    const handleChange = (e) =>  setinputvalue(e.target.value);
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputvalue === "")  alert("할 일을 입력하세요📝");
       else {
        addNewTodo(inputvalue);
        setinputvalue("");
      }
    };

    return (
        <form className="Todomaker" onSubmit={handleSubmit}>
          <input type="text" value={inputvalue}  onChange={handleChange} placeholder="할 일을 입력하세요" />
        </form>
      );
};

export default Todomaker;