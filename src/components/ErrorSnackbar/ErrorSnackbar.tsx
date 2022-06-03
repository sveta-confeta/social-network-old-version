import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {errorApiAC} from "../../redux/appReducer";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function ErrorSnackbar() {
    //const [open, setOpen] = useState(true);
    let errorMessage=useSelector<AppRootStateType,string| null>(state=>state.app.error);
    const dispatch=useDispatch();

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch( errorApiAC(null));
    };

    return (

        <Snackbar
             open={errorMessage!==null} //если не null то показывайся
             autoHideDuration={6000}//через 6 сек закрытие
            //кнопка закрытия:
                  onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                {errorMessage}😠
            </Alert>
        </Snackbar>
    );
}


