import { DeleteIcon } from "../assets/icons/DeleteIcon";
import { TwitterIcon } from "../assets/icons/TwitterIcon";
import { VideoIcon } from "../assets/icons/VideoIcon";
import { BrainIcon } from "../assets/icons/BrainIcon";
import SidebarItem from "./SidebarItem";

const sidebaritems = [
  {
    icon: <TwitterIcon />,
    text: "Tweets",
  },
  {
    icon: <VideoIcon />,
    text: "Videos",
  },
  {
    icon: <DeleteIcon />,
    text: "Delete Brain",
  },
  {
    icon: <TwitterIcon />,
    text: "Tweets",
  },
];
const Sidebar = () => {
  return (
    <div className="h-screen border-r-2 fixed top-0 left-0 w-72 py-4  bg-white">
        <div className="mb-10 gap-2 flex justify-start items-center border-b-1 pb-4 border-gray-300">
            <BrainIcon/>
            <span className="text-lg">Second Brain</span>
        </div>
      <ul>
        {sidebaritems.map((item) => (
          <SidebarItem icon={item.icon} text={item.text} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
