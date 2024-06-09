export const toggleDone = (doneStatus, setDoneStatus, idx) => {
    setDoneStatus(doneStatus.map((status, index) => idx === index ? !status : status));
};