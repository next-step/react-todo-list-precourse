import Status from "../types/Status";

type StatusCircleProps = {
  status: Status;
  onClick: () => void;
};

const StatusIconMap = {
  Todo: "radio_button_unchecked",
  Done: "check_circle",
};

function StatusCircle({ status, onClick }: StatusCircleProps) {
  return (
    <button type="button" onClick={onClick} className="material-icons statuscircle">
      {StatusIconMap[status]}
    </button>
  );
}

export default StatusCircle;
