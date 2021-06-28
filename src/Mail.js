import React from 'react'
import './Mail.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import { useHistory } from 'react-router';
import { CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, Print, UnfoldMore, WatchLater } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/MailSlice';

function Mail() {
    const history = useHistory()
    const selectedMail = useSelector(selectOpenMail)
    return (
        <div className="mail">
        <div className="mail_tools">
            <div className="mail_toolsLeft">
                <IconButton onClick={() => history.push("/")}>
                    <ArrowBackIcon/>
                </IconButton>
                <IconButton>
                    <MoveToInboxIcon/>
                </IconButton>
                <IconButton>
                    <Error/>
                </IconButton>
                <IconButton>
                    <Delete/>
                </IconButton>
                <IconButton>
                    <Email/>
                </IconButton>
                <IconButton>
                    <WatchLater/>
                </IconButton>
                <IconButton>
                    <CheckCircle/>
                </IconButton>
                <IconButton>
                    <LabelImportant/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
            <div className="mail_toolsRight">
                <IconButton>
                    <UnfoldMore/>
                </IconButton>
                <IconButton>
                    <Print/>
                </IconButton>
                <IconButton>
                    <ExitToApp/>
                </IconButton>
            </div>
        </div>
            <div className="mail_body">
                <div className="mail_bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportant className="mail_important"/>
                    <p>{selectedMail?.title}</p>
                    <p  className="mail_time">{selectedMail?.time}</p>
                </div>
                <div className="mail_message">
                    <p>{selectedMail?.description}</p> 
                </div>
            </div>
        </div>
    )
}

export default Mail
