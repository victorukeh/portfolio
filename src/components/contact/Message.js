import React from "react";

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";

function Message({ message, value, open, setOpen }) {
  return (
    <Collapse in={open}>
      <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity={value}
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Stack>
    </Collapse>
  );
}

export default Message;
