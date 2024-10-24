"use client";

import { Box, Link, Tab, Tabs, TextField, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";

const Register: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const random: number = Math.floor(Math.random() * 10000);
  let [handleCheckBox, setHandleCheckBox] = useState(false);
  function toggleCheckBox() {
    setHandleCheckBox(!handleCheckBox);
  }
  const checkCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "80%",
          marginInline: "auto",
          marginBlock: "20px",
          padding: "30px 10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box sx={{ width: "70%", display: "grid" }}>
          <Link href="/" sx={{ display: "flex",justifySelf: "flex-end" }}>
            <IoMdClose className="closeBtn" />
          </Link>
        </Box>
        <Typography variant="h4">“Sat Getsin” ə xoş gəlmişsiniz !</Typography>
        <Typography variant="body2">
          Qeydiyyat zamanı istifadə etdiyiniz e-mail (nömrə) və şifrə vasitəsilə
          daxil olun
        </Typography>

        <Box sx={{ width: "65%", marginBlock: "20px" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab value="one" label="Email" />
            <Tab value="two" label="Mobil nömrə" />
          </Tabs>
        </Box>

        {value === "one" ? (
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
        ) : (
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
        )}

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
            display: "flex",
            justifyContent: "space-between",
            width: "65%",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Checkbox className="noPadding" />
            <Typography variant="body2">Şifrəni xatırla</Typography>
          </Box>
          <Link href="/login" className="noDecoration">
            Şifrəmi unutdum
          </Link>
        </Box>
        <Box
          sx={{
            width: "65%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{ width: "50%", padding: "20px 30px", textTransform: "none" }}
          >
            Daxil ol
          </Button>
        </Box>
        <Box>
          <Typography variant="body2">Saytımızda yenisiz? o zaman</Typography>
        </Box>
        <Box>
          <Button variant="outlined" sx={{ textTransform: "none" }}>
            <Link
              href="./register"
              sx={{
                fontSize: "21px",
                textDecoration: "none",
                padding: "10px 15px",
              }}
            >
              Qeydiyyatdan keçin
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
