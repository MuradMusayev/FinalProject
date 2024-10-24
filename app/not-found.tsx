import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            marginBlock:"8rem",
            gap:"50px",
            width: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"column"
          }}
        >
          <Typography variant="h3">
            Oops Sorry, This Page Is Not Available (404)
          </Typography>
          <Button variant="contained" className="btn">
            <Link href="/">Go To Home</Link>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default NotFound;
