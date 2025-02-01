import React, { useState } from "react";
import Sidebar from '../src/components/Sidebar'
import Modal from '../src/components/Modal'
import { Button } from '../src/components/Button'
import Card  from '../src/components/Card'

import { ShareIcon } from "../src/assets/icons/ShareIcon";
import { PlusIcon } from  '../src/assets/icons/PlusIcon'

function Dashboard() {
  const [open, setOpen] = useState<boolean>(false);
  function closeModal() {
    setOpen(false)     
    // console.log('Clicked modal close btn')
  }

  function openModal() {
    setOpen(true);
    // console.log("clicked modal open btn")
  }
  return (
    <div className="p-4 bg-gray-100">

      <Sidebar/>
      <div className="ml-72 min-h-screen ">
      <Modal open={open} onClose={closeModal}/>
    <div className="flex justify-end gap-4">
      <Button variant="secondary" size="md" onClick={openModal} text="Add Content" startIcon={<PlusIcon size="size-6"/>}/>
      <Button variant="primary" size="md" text={`Share Brain`} startIcon={<ShareIcon />}/>      
    </div>
    <div className="flex gap-6">
      <Card title="Project Ideas" type="twitter" link="https://twitter.com/Alam_Creates/status/1885391613771604106"/>
      <Card title="Project Ideas 2" type="youtube" link="https://www.youtube.com/embed/Ag2fJaNbw3Q?si=8m9BfGSmCms8k5L8"/>
    </div>

    </div>
    </div>
  )
}

export default Dashboard
