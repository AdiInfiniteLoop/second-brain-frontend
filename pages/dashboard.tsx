import  { useState } from "react";
import Sidebar from '../src/components/Sidebar'
import Modal from '../src/components/Modal'
import { Button } from '../src/components/Button'
import Card  from '../src/components/Card'
import {useContent} from '../hooks/useContent'
import { ShareIcon } from "../src/assets/icons/ShareIcon";
import { PlusIcon } from  '../src/assets/icons/PlusIcon'



export const youtubeUrlToEmbed = (urlString: string | undefined | null): string | null | undefined => {
    const template = (v: string) => `https://www.youtube.com/embed/${v}`;
    if (urlString && URL.canParse(urlString)) {
        const url = new URL(urlString);
        // short URL
        if (url.hostname === 'www.youtu.be' || url.hostname === 'youtu.be') {
            return template(url.pathname.startsWith('/') ? url.pathname.substring(1) : url.pathname);
        }
        // regular URL
        const v = url.searchParams.get('v');
        if ((url.hostname === 'www.youtube.com' || url.hostname === 'youtube.com') && v) {
            return template(v);
        }
    }
    return urlString;
};

function Dashboard() {
  const [open, setOpen] = useState<boolean>(false);
  const contents = useContent();

  console.log("Content is", contents);

  function closeModal() {
    setOpen(false);
    // console.log('Clicked modal close btn')
  }

  function openModal() {
    setOpen(true);
    // console.log("clicked modal open btn")
  }

  return (
    <div className="p-4 bg-gray-100">
      <Sidebar />
      <div className="ml-72 min-h-screen">
        <Modal open={open} onClose={closeModal} />
        <div className="flex justify-end gap-4">
          <Button variant="secondary" size="md" onClick={openModal} text="Add Content" startIcon={<PlusIcon size="size-6" />} />
          <Button variant="primary" size="md" text={`Share Brain`} startIcon={<ShareIcon />} />
        </div>
        <div className="flex gap-6">
          {contents.map(({ type, link, title }, index) => {
            const newlink = youtubeUrlToEmbed(link);
            return (
              <Card key={index} type={type} title={title} link={newlink} />
            );
          })}
        </div>
      </div>
    </div>
  );
}


export default Dashboard