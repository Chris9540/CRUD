import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmployeeList from "./components/EmployeeList";
import { makeStyles, } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        padding : theme.spacing(4),
    }
}));

function App() {
    const classes = useStyles();
      return (
        <div className="App">
            <Header/>
            <div className={classes.container}>
                <EmployeeList/>
            </div>
            <Footer/>
        </div>
      );
}

export default App;
