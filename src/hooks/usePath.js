import { useCallback, useEffect, useState } from "react";
import { PATH_ALL } from "../constants.js";

export function usePath() {
    const [pathName, setPathName] = useState(PATH_ALL);
    const updatePathName = useCallback((path) => setPathName(path), []);
    useEffect(() => window.history.pushState(null, "", pathName), [pathName]);
    console.log('path');

    return { path : pathName, setPath: updatePathName };
}