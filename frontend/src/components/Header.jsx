import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
export default function Header() {
    return (
        <div>
            <AppBar color={"default"}>
                <Toolbar variant={"dense"}>
                    <Typography variant={"h6"}>
                        Employees CRUD
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}




