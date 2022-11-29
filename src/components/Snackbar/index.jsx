import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarMui(props) {
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    React.useEffect(() => {
        setOpen(props?.snackBarShow)
        setTimeout(() => {
            setOpen(false)
        }, 4000)
    })


    return (
        <Stack>
            <Snackbar open={open} onClose={handleClose}>
                <Alert onClose={handleClose} severity={props.variant}>
                    {props.message}
                </Alert>
            </Snackbar>
        </Stack>
    );
}
