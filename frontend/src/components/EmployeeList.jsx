import React, {useEffect, useState} from "react";
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    withStyles
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import TablePagination from "@material-ui/core/TablePagination";
import {apiServices} from "../service/services";
import ColorButton from "./ColorButton";
import {red} from "@material-ui/core/colors";

const height = 300;
const useStyles = makeStyles((theme) => ({
    container : {
        maxHeight : height,
        minHeight : height,
        height : height,
    },
    pagination : {
        backgroundColor : '#212121',
    },
    button: {
        margin: theme.spacing(),
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

export default function EmployeeList(props) {
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
        getData(0,  parseInt(e.target.value));
    }


    const getData = (p, s) => {
        apiServices.employee.list(p, s).then(res=>{
            setRows(res.data);
        });
    }

    const deleteEmployee = (id) => {
        apiServices.employee.delete(id)
            .then(res=>{
                if (res.data.deleted) {
                    apiServices.employee.count().then(res=>{
                        setCount(res.data);
                        setPage(0);
                        getData(0, size)
                    })
                }
            })
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
            <Button
                variant={"contained"}
                color={"primary"}
                className={classes.button}
                onClick={()=>props.setView("add")}
            >
                Add Employee
            </Button>
            <TableContainer component={"div"} className={classes.container}>
                <Table size={"small"} stickyHeader>
                    <TableHead className={classes.header}>
                        <TableRow>
                            <HeadCell component={"th"}>
                                Id
                            </HeadCell>
                            <HeadCell component={"th"}>
                                First Name
                            </HeadCell>
                            <HeadCell component={"th"}>
                                Last Name
                            </HeadCell>
                            <HeadCell component={"th"}>
                                Email
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
                                    <TableCell component={"th"} scope={"row"}>
                                        {row.id}
                                    </TableCell>
                                    <TableCell>
                                        {row.firstName}
                                    </TableCell>
                                    <TableCell >
                                        {row.lastName}
                                    </TableCell>
                                    <TableCell >
                                        {row.emailId}
                                    </TableCell>
                                    <TableCell align={"right"}>
                                        <Button
                                            variant={"contained"}
                                            size={"small"}
                                            style={{marginRight : '20px'}}
                                            color={"secondary"}
                                            onClick={()=>props.setView("update", row.id)}
                                        >
                                            Edit
                                        </Button>
                                        <ColorButton
                                            color={red}
                                            buttonProps={{
                                                variant : 'contained',
                                                color : 'primary',
                                                size: 'small',
                                                onClick : ()=>{deleteEmployee(row.id)},

                                            }}
                                        >
                                            Delete
                                        </ColorButton>
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




