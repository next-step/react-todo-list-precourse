import { Fragment, useState } from "react";

export function TodoInput() {
    const [value, setValue] = useState("");
    const handleInputChange = (e) => setValue(e.target.value);

    return (
        <Fragment>
            <label htmlFor={"input_id"}>{value}</label>
            <input id={"input_id"} onChange={handleInputChange}/>
        </Fragment>
    );
}