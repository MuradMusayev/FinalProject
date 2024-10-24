import { Box, Button, Typography, Grid, Container } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          width: "85%",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          alignItems: "center",
          marginInline: "auto",
          height: "60px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "40%",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: "15px" }}>
            <Link href="/">
              <FaFacebookF />
            </Link>
            <Link href="/">
              <AiFillInstagram />
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <FaPhone />
              <Typography variant="body2">(+994) 70 256 24 89</Typography>
            </Box>
          </Box>
          <Box>
            <Link href="/">Yardım və dəstək</Link>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FaRegUserCircle />
          <Link href="/pages/login">Login</Link>
          <Typography variant="body2">|</Typography>
          <Link href="/pages/register">Register</Link>
        </Box>
      </Box>
    </>
  );
};

export default Navbar