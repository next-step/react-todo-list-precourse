import React, {useState} from "react";
import "./Maker.css"


const Todomaker = ({pushthing}) => {

    const [inputvalue, setinputvalue] = useState('')

    const handlechange = (e) =>  setinputvalue(e.target.value);
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputvalue === "")  alert("할 일을 입력하세요📝");
       else {
        pushthing(inputvalue);
        setinputvalue("");
      }
    };

    return (
        <form className="Todomaker" onSubmit={handleSubmit}>
          <input type="text" value={inputvalue}  onChange={handlechange} placeholder="할 일을 입력하세요" />
        </form>
      );
};

export default Todomaker;