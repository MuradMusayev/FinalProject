"use client";

import { Box, Link, TextField, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";

const random: number = Math.ceil(Math.random() * 10000 + 1);
const Register: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  console.log(random, "sa");
  const [handleCheckBox, setHandleCheckBox] = useState(false);
  function toggleCheckBox() {
    setHandleCheckBox((prev) => !prev);
  }
  const checkCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "80%",
          marginInline: "auto",
          marginBlock: "20px",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "15px",
        }}
      >
          <Box sx={{ width: "70%", display: "grid" }}>
          <Link href="/" sx={{ display: "flex",justifySelf: "flex-end" }}>
            <IoMdClose className="closeBtn" />
          </Link>
        </Box>
        <Typography variant="h4">Qeydiyyat</Typography>
        <Box sx={{ width: "65%" }}>
          <TextField
            type="text"
            placeholder="Ad Soyad"
            label="Ad Soyad"
            variant="outlined"
            required
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ width: "65%" }}>
          <TextField
            type="text"
            placeholder="Email"
            label="Email"
            variant="outlined"
            required
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ width: "65%" }}>
          <TextField
            type="text"
            placeholder="Nömrəni daxil edin"
            label="Nömrə"
            variant="outlined"
            required
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ width: "65%" }}>
          <TextField
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            label="Password"
            variant="outlined"
            required
            InputProps={{
              endAdornment: showPassword ? (
                <Visibility
                  onClick={handleClickShowPassword}
                  sx={{ cursor: "pointer" }}
                />
              ) : (
                <VisibilityOff
                  onClick={handleClickShowPassword}
                  sx={{ cursor: "pointer" }}
                />
              ),
            }}
            sx={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: "65%",
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <TextField
            id="kod"
            label="Şəkildəki kodu daxil edin"
            onChange={checkCode}
            required
          />
          <Box
            sx={{
              border: "1px solid #E9E8EE",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {random}
          </Box>
        </Box>
        <Box
          sx={{
            width: "65%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Checkbox
            checked={handleCheckBox}
            onChange={toggleCheckBox}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          />
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Link href="/">İstifadəçi şərtləri</Link>
            <Typography variant="body2">ilə razıyam</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "65%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {handleCheckBox ? (
            <Button
              variant="contained"
              sx={{ width: "50%", padding: "20px 30px" }}
            >
              Davam edin
            </Button>
          ) : (
            <Button
              disabled
              sx={{
                width: "50%",
                padding: "20px 30px",
                border: "1px solid black",
              }}
            >
              Davam edin
            </Button>
          )}
        </Box>
        <Box>
          <Typography variant="body2">Hesabınız var? o zaman</Typography>
        </Box>
        <Box>
          <Button variant="outlined" sx={{ textTransform: "none" }}>
            <Link
              href="./login"
              sx={{
                fontSize: "21px",
                textDecoration: "none",
                padding: "10px 15px",
              }}
            >
              Daxil olun
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
