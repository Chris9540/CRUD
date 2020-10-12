import {ThemeProvider} from "@material-ui/styles";
import {Button, createMuiTheme} from "@material-ui/core";
import React from "react";

export default function ColorButton(props) {
    const theme = createMuiTheme({
        palette : {primary : props.color, type: "dark",},
        shape : {borderRadius : 0},
    })
    return(
        <ThemeProvider theme={theme}>
            <Button {...props.buttonProps} style={{textTransform : 'capitalize', color : '#000'}}>
                {props.children}
            </Button>
        </ThemeProvider>
    )
}