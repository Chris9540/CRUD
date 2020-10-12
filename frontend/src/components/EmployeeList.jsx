import React, {useEffect, useState} from "react";
import {
    Button, createMuiTheme,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography, withStyles
} from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import {makeStyles, ThemeProvider} from "@material-ui/styles";
import TablePagination from "@material-ui/core/TablePagination";
import {apiServices} from "../service/services";

const redButton = createMuiTheme({
    palette : {primary : red, type: "dark",},
    shape : {borderRadius : 0},
})
const height = 300;
const useStyles = makeStyles((theme) => ({
    container : {
        maxHeight : height,
        minHeight : height,
        height : height,
    },
    pagination : {
        backgroundColor : '#212121',
    }
}))

const HeadCell = withStyles((theme)=>({
    head :{
        backgroundColor: '#212121'
    }
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export default function EmployeeList() {
    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [count, setCount] = useState(-1);
    const classes = useStyles();


    const changePage = (e, newPage) => {
        setPage(newPage);
        getData(newPage, size);
    }

    const changeSize = (e) => {
        setSize(parseInt(e.target.value));
        setPage(0);
        console.log("size", parseInt(e.target.value))
        getData(0,  parseInt(e.target.value));
    }

    const getData = (p, s) => {
        apiServices.employee.list(p, s).then(res=>{
            setRows(res.data);
        });
    }

    useEffect(()=>{
        if (count === -1) {
            apiServices.employee.count().then(res=>{
                setCount(res.data);
            })
            getData(page, size);
        }
    }, [])
    return (
        <Paper>
            <TableContainer component={"div"} className={classes.container}>
                <Table size={"small"} stickyHeader>
                    <TableHead className={classes.header}>
                        <TableRow>
                            <HeadCell component={"th"} align={"center"}>
                                Id
                            </HeadCell>
                            <HeadCell component={"th"} align={"center"}>
                                First Name
                            </HeadCell>
                            <HeadCell component={"th"} align={"center"}>
                                Last Name
                            </HeadCell>
                            <HeadCell component={"th"} align={"right"}>
                                Actions
                            </HeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row, key)=> (
                                <StyledTableRow key={key}>
                                    <TableCell align={"center"} component={"th"} scope={"row"}>
                                        {row.id}
                                    </TableCell>
                                    <TableCell align={"center"}>
                                        {row.firstName}
                                    </TableCell>
                                    <TableCell align={"center"}>
                                        {row.lastName}
                                    </TableCell>
                                    <TableCell align={"right"}>
                                        <Button
                                            variant={"contained"}
                                            size={"small"}
                                            style={{marginRight : '20px'}}
                                            color={"secondary"}
                                        >
                                            Edit
                                        </Button>
                                        <ThemeProvider theme={redButton}>
                                            <Button
                                                color={"primary"}
                                                size={"small"}
                                                variant={"contained"}
                                            >
                                                Delete
                                            </Button>
                                        </ThemeProvider>
                                    </TableCell>
                                </StyledTableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                rowsPerPage={size}
                page={page}
                count={count}
                onChangePage={changePage}
                onChangeRowsPerPage={changeSize}
                className={classes.pagination}
            />
        </Paper>
    )
}




