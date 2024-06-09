import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState("All");
    
    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    );
};


export { FilterContext, FilterProvider };
