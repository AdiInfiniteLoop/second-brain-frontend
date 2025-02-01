import { ReactElement } from "react";

interface SidebarItemInterface {
  icon: ReactElement;
  text: string;
}
const SidebarItem: React.FC<SidebarItemInterface> = (props) => {
  return (
    <div>
      <div className="flex justify-start items-center text-gray-700  gap-2 p-5 cursor-pointer hover:bg-gray-200 rounded-md">
        {props.icon}
        {props.text}
      </div>
    </div>
  );
};

export default SidebarItem;
