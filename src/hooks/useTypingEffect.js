import { useEffect } from "react";
import { animate, chooseRandomTiming } from "../utils/animate.js";
// import { CURSOR_BLINK } from "../constants.js";

const getTimeRatio = (length) => (currentTimeRatio) => Math.round(length * currentTimeRatio);

//0.375
// const getCursor = () => {
//     let show = true;
//     let lastBlinkTime = 0;
//     return (currentTime) => {
//         if ((lastBlinkTime - currentTime >= -CURSOR_BLINK)) {
//             show = !show;
//             lastBlinkTime = currentTime;
//         }
//         return show ? " |" : ""
//     };
// }

const createSubString = (ref) => {
    const content = ref.current.textContent;
    const length = content.length;
    const convertTimeToIdx = getTimeRatio(length);
    // const cursor = getCursor();
    return (currentTime) => {
        console.log(content);
        const currIdx = Math.min(convertTimeToIdx(currentTime), length);
        ref.current.textContent = content.substring(0, currIdx);
    }
};

const startTyping = (ref) => () => {
    const options = {
        timing: chooseRandomTiming(),
        draw: createSubString(ref),
        duration: 2000,
    }
    animate(options);
};

export function useTypingEffect(ref, isDone = true, content = null) {
    useEffect(isDone ? () => {} : startTyping(ref), [content, isDone]);
}