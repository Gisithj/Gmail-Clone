import { Checkbox, IconButton } from '@material-ui/core'
import React from 'react'
import './emailList.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { ChevronLeft, ChevronRight, KeyboardHide, LocalOffer, People, Settings } from '@material-ui/icons';
import Section from './Section'
import InboxIcon from '@material-ui/icons/Inbox'
import EmailRow from './EmailRow'

function EmailList() {
  return (
    <div className='emailList'>
        <div className="emailList_settings">
            <div className="emailList_settingsLeft">
                <Checkbox/>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RedoIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>

            <div className="mailList_settingsRight">
                <IconButton><ChevronLeft/></IconButton>
                <IconButton><ChevronRight/></IconButton>
                <IconButton><KeyboardHide/></IconButton>
                <IconButton><Settings/></IconButton>
            </div>
        </div>     

        <div className="emailList_sections">
            <Section Icon={InboxIcon} title="Primary" selected color={"white"}/>
            <Section Icon={People} title="Social" color={"white"}/>
            <Section Icon={LocalOffer} title="Promotions" color={"white"}/>
            <Section Icon={LocalOffer} title="Updated" color={"white"}/> 

        </div>
        <div className="emailList_list">
            <EmailRow
                title="Twitch"
                subject="Hey whassup"
                description="This is a test email"
                time="10pm"
            />
            <EmailRow
                title="Twitch"
                subject="Hey whassup"
                description="This is a test emailsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssemailssssssssssssssssssssssssssssssssssssssssssssssssssssssggggggggggggggggggggggggggggggggggqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs"
                time="10pm"
            />
        </div>
    </div>
  )
}

export default EmailList