import { useEffect } from "react";
import { animate, chooseRandomTiming } from "../utils/animate.js";

const getTimeRatio = (length) => (currentTimeRatio) => Math.round(length * currentTimeRatio);

const createSubString = (ref) => {
    const content = ref.current.textContent;
    const length = content.length;
    const convertTimeToIdx = getTimeRatio(length);
    return (currentTime) => {
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