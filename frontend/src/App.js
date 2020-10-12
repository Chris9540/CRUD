import React, {useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmployeeList from "./components/EmployeeList";
import { makeStyles } from '@material-ui/core/styles';
import AddEmployee from "./components/AddEmployee";
import Fade from "@material-ui/core/Fade";
import UpdateEmployee from "./components/UpdateEmployee";



const useStyles = makeStyles((theme) => ({
    container: {
        padding : theme.spacing(4),
    }
}));



const fadeTimeout = 500;

function App() {
    const classes = useStyles();
    const [view, setView] = useState("list");
    const [fade, setFade] = useState(true);
    const [updateId, setUpdateId] = useState(1);

    const toggleView = (v, id=1) => {
        if (v !== view) {
            setUpdateId(id);
            setFade(false);
            setTimeout(function () {
                setView(v);
                setFade(true);
            },fadeTimeout);
        }
    }

      return (
        <div className="App">
            <Header setView={toggleView}/>
            <div className={classes.container}>
                <Fade in={fade} timeout={fadeTimeout}>
                    <div>
                        {(view === "list")?<EmployeeList setView={toggleView}/>:null}
                        {(view === "add")?<AddEmployee setView={toggleView}/>:null}
                        {(view === "update")?<UpdateEmployee setView={toggleView} employeeId={updateId}/>:null}
                    </div>
                </Fade>
            </div>
            <Footer/>
        </div>
      );
}

export default App;
