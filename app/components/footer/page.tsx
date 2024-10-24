import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          padding: "20px",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Box
          sx={{
            width: "85%",
            marginInline: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBlock: "30px",
          }}
        >
          <Typography variant="h6">Logo</Typography>

          <Button
            variant="contained"
            sx={{ color: "#fff", padding: "20px 40px" }}
          >
            + Elan yerləşdirin
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            marginBottom: "20px",
            justifyContent: "space-between",
            width: "85%",
            marginInline: "auto",
            marginBlock: "30px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography variant="body1">(+994)70 256 24 89</Typography>
            <Typography variant="body1">example@az</Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Link href="/">
                <InstagramIcon />
              </Link>
              <Link href="/">
                <FacebookIcon />
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Kateqoriyalar
            </Typography>
            <Typography>Daşınmaz əmlak</Typography>
            <Typography>Naqiliyyat</Typography>
            <Typography>Ev və bağ üçün</Typography>
            <Typography>Xidmətlər</Typography>
            <Typography>Şəxsi əşyalar</Typography>
            <Typography>Uşaq aləmi</Typography>
            <Typography>Elektronika və texnika</Typography>
            <Typography>Heyvanlar</Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Kömək
            </Typography>
            <Typography>Elanlar</Typography>
            <Typography>Yardım və dəstək</Typography>
            <Typography>Qaydalar</Typography>
            <Typography>İstifadəçi razılaşması</Typography>
            <Typography>Məxfilik siyasəti</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "85%",
            marginInline: "auto",
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2">Bütün hüquqlar qorunur 2022</Typography>
          <Typography variant="body2">Site by Jedai</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
