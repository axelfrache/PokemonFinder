import React from 'react';
import Alert from '@mui/material/Alert';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Stack from '@mui/material/Stack';

const ErrorMessage = ({ message }) => {
    return (
        <Stack sx={{ width: '100%', marginTop: 2 }} spacing={2}>
            <Alert
                severity="error"
                iconMapping={{
                    error: <ErrorOutlineIcon fontSize="inherit" />,
                }}
            >
                {message}
            </Alert>
        </Stack>
    );
};

export default ErrorMessage;
