import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";

export const SuSnackbar = ({
  openCall,
  theme = "success",
  message,
  duration = 3500,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setOpen(openCall);
  }, [openCall]);

  return (
    <div>
      <Snackbar open={open} autoHideDuration={duration} onClose={handleClose}>
        <Alert onClose={handleClose} severity={theme} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
