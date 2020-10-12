import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import ColorButton from "./ColorButton";
import {green, red} from "@material-ui/core/colors";
import {apiServices} from "../service/services";

const useStyles = makeStyles((theme) => ({
    root: {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        width : 450,
        margin : 'auto',
        padding : theme.spacing(),
    },
    form : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        padding: theme.spacing(),
        width : '-webkit-fill-available',
    },
    space : {
        marginBottom: theme.spacing(),
    },
    buttonWrap : {
        width : '-webkit-fill-available',
        display: 'flex',
        justifyContent: 'space-evenly',
    }
}));

export default function AddEmployee(props) {
    const classes = useStyles();

    const inputProps = {
        className : classes.space,
        fullWidth : true,
        required : true,
    }


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');

    const saveEmployee = (e) => {
        e.preventDefault();
        if (firstName !== '' && lastName !== '' && emailId !== '') {
            apiServices.employee.add({
                firstName:firstName,
                lastName:lastName,
                emailId:emailId})
                .then(res => {
                    props.setView('list');
                }
            );
        }
    }

    const cancel = (e) => {
        e.preventDefault();
        setFirstName('');
        setLastName('');
        setEmailId('');
        props.setView('list');
    }

    return (
        <Paper className={classes.root}>
            <Typography variant={"h4"} className={classes.space}>Create Employee</Typography>
            <form noValidate autoComplete={"off"} className={classes.form}>
                <TextField {...inputProps} value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} id={"firstName"} label={"First Name"}/>
                <TextField {...inputProps} value={lastName}  onChange={(e)=>{setLastName(e.target.value)}} id={"lastName"} label={"Last Name"}/>
                <TextField {...inputProps} value={emailId}   onChange={(e)=>{setEmailId(e.target.value)}} id={"emailId"} label={"Email Address"}/>
                <div className={classes.buttonWrap}>
                    <ColorButton
                        color={green}
                        buttonProps={{
                            variant : 'contained',
                            color : 'primary',
                            className: classes.space,
                            onClick: saveEmployee,
                            size: 'small'
                        }}
                    >
                        Create
                    </ColorButton>
                    <ColorButton
                        color={red}
                        buttonProps={{
                            variant : 'contained',
                            color : 'primary',
                            className: classes.space,
                            onClick: cancel,
                            size: 'small'
                        }}
                    >
                        Cancel
                    </ColorButton>
                </div>
            </form>
        </Paper>
    )
}




