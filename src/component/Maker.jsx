import React, {useState} from "react";
import "./Maker.css"


const Maker = ({pushthing}) => {

    const [inputvalue, setinputvalue] = useState('')

    const handlechange = (e) => {
        setinputvalue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        pushthing(inputvalue);
        setinputvalue("")
    }

    return (
        <form className="Maker" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputvalue}
            onChange={handlechange}
            placeholder="할 일을 입력하세요"
          />
          <button type="submit">추가</button>
        </form>
      );
};

export default Maker;