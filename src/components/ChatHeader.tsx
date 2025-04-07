import backButton from "../assets/back.svg";
import closeButton from "../assets/close.svg";

const ChatHeader = ({ title, subtitle, onBack, group }: any) => (
  <div className="flex justify-between border-b pb-2 mb-4">
    <div className="flex gap-2 items-start">
      <button onClick={onBack}>
        <img src={backButton} alt="back button" className="w-6 h-6" />
      </button>

      <div className="flex flex-col">
        <div className="text-md font-semibold text-[#2F80ED] truncate">
          {title} {group ? `[${group}]` : ``}
        </div>
        <div className="text-sm text-[#4F4F4F] truncate">
          {group ? `${subtitle} Participants` : ``}
        </div>
      </div>
    </div>

    <div>
      <button onClick={onBack}>
        <img src={closeButton} alt="close button" className="w-3 h-3" />
      </button>
    </div>
  </div>
);

export default ChatHeader;
