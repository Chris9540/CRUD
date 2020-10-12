import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ListIcon from '@material-ui/icons/List';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default function Header(props) {
    return (
        <div>
            <AppBar color={"default"}>
                <Toolbar variant={"dense"}>
                    <Typography variant={"h6"} style={{flex:1}} color={"primary"}>
                        Employees CRUD
                    </Typography>
                    <Button
                        onClick={()=>props.setView("list")}
                        startIcon={<ListIcon/>}
                    >List Employees</Button>
                    <Button
                        onClick={()=>props.setView("add")}
                        startIcon={<PersonAddIcon/>}
                    >Add Employee</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}




