import React, { useState, createContext } from "react";

import IconButton from '@mui/material/IconButton';
import { Close as CloseIcon } from '@mui/icons-material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");
    const [notificationSeverity, setNotificationSeverity] = useState("success")

    function handleNotificationClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }

        setNotificationOpen(false);
    }

    function setSuccess(message) {
        setNotificationSeverity("success");
        setNotificationMessage(message);
        setNotificationOpen(true);
    }

    function setError(message) {
        setNotificationSeverity("error");
        setNotificationMessage(message);
        setNotificationOpen(true);
    }

    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleNotificationClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    );

  return (
    <NotificationContext.Provider value={{ setSuccess, setError }}>
        <Snackbar
            open={notificationOpen}
            autoHideDuration={3000}
            onClose={handleNotificationClose}
            action={action}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
        >
            <Alert onClose={handleNotificationClose} severity={notificationSeverity} sx={{ width: '100%' }}>
                {notificationMessage}
            </Alert>
        </Snackbar>
        {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext };

export default NotificationProvider;
