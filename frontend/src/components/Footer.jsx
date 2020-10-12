import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#212121',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color : theme.palette.text.primary,
        paddingLeft: theme.spacing(),
        paddingRight: theme.spacing(),
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <Typography>Chris Brighton</Typography>
        </footer>
    )
}




