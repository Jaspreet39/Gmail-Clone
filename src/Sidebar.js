import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/MailSlice';


function Sidebar() {
    const dispatch = useDispatch()
    return (
        <div className="sidebar">
           <Button
           onClick={() => dispatch(openSendMessage())}
            className="sidebar_compose"
             startIcon={<AddIcon fontSize="large" />}>
               Compose
           </Button>
        <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
        <SidebarOption Icon={StarIcon} title="Starred" number={30}/>
        <SidebarOption Icon={ScheduleIcon} title="Snoozed" number={10}/>
        <SidebarOption Icon={LabelImportantIcon} title="Important" number={34}/>
        <SidebarOption Icon={SendIcon} title="Sent" />
        <SidebarOption Icon={InsertDriveFileIcon} title="Drafts" number={18}/>
        <SidebarOption Icon={ExpandMoreIcon} title="More"/>
        <div className="sidebar_footer">
            <div className="sidebar_footerIcons">
                <IconButton>
                    <PersonIcon/>
                </IconButton>
                <IconButton>
                    <DuoIcon/>
                </IconButton>
                <IconButton>
                    <PhoneIcon/>
                </IconButton>
            </div>
        </div>
        </div>
    )
}

export default Sidebar
