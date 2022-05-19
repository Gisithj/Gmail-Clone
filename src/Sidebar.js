import React from 'react'
import './sidebar.css'
import {Button, IconButton} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { AccessTimeOutlined,ExpandMore, InboxOutlined, LabelImportant, Note, SendOutlined, StarOutlined } from '@material-ui/icons'
import SidebarOption from './SidebarOption'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'

function Sidebar() {
  return (
    <div className='sidebar'>
        <Button startIcon={<AddIcon/>} className='sidebar_compose'>Compose</Button>
        <SidebarOption Icon={InboxOutlined} title="Inbox" number={54} selected={true}/>
        <SidebarOption Icon={StarOutlined} title="Starred" number={54}/>
        <SidebarOption Icon={AccessTimeOutlined} title="Snoozed" number={54}/>
        <SidebarOption Icon={SendOutlined} title="Sent" number={54}/>
        <SidebarOption Icon={Note} title="Draft" number={54}/>
        <SidebarOption Icon={LabelImportant} title="Important" number={54}/>
        <SidebarOption Icon={ExpandMore} title="More" number={54}/>

        <div className="sidebar_footer">
          <div className="sidebar_footerIcons">
          
            <IconButton><PersonIcon/></IconButton>
            <IconButton><DuoIcon/></IconButton>
            <IconButton><PhoneIcon/></IconButton>
          </div>
        </div>


    </div>
  )
}

export default Sidebar