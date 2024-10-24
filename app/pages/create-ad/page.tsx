"use client";
import Categories from "@/app/components/categories/page";
import Footer from "@/app/components/footer/page";
import Navbar from "@/app/components/navbar/page";
import { FormHelperText } from "@mui/material";

import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextareaAutosize,
  Button,
} from "@mui/material";
import { useState } from "react";

const CreateAdvertisement = () => {
  const [startNumber1, setStartNumber1] = useState("1");
  const [startNumber2, setStartNumber2] = useState("6");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const [category, setCategory] = useState("0");
  const [subcategory, setSubCategory] = useState("0");
  const [city, setCity] = useState("0");
  const [situation, setSituation] = useState("0");

  const handleSituation = (event: SelectChangeEvent<string>) => {
    setSituation(event.target.value);
  };

  const handleSubCategory = (event: SelectChangeEvent<string>) => {
    setSubCategory(event.target.value);
  };

  const handleCity = (event: SelectChangeEvent<string>) => {
    setCity(event.target.value);
  };

  const handleCategory = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
  };

  const handleStartNumber1 = (event: SelectChangeEvent<string>) => {
    setStartNumber1(event.target.value);
  };

  const handleStartNumber2 = (event: SelectChangeEvent<string>) => {
    setStartNumber2(event.target.value);
  };

  return (
    <>
      <Box>
        <Navbar />
        <Box sx={{background:"#F6F8FE",paddingBlock:"50px"}}>
          <Categories />
          <Box
            sx={{
              width: "85%",
              marginInline: "auto",
              marginBlock: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Typography variant="h4">Yeni elan yarat</Typography>
            <Box>
              <Typography variant="h5" sx={{ marginBottom: "10px" }}>
                Qaydalarımız
              </Typography>
              <Box sx={{ background: "#F0F1FAD9", padding: "15px" }}>
                <Typography variant="body1">
                  1. Eyni elanı bir neçə dəfə təqdim etməyin
                </Typography>
                <Typography variant="body1">
                  2. “Şəkil” lərinizdə telefon nömrələri, e-mail və ya sayt
                  ünvanları qeyd etməyin. Onları “şəxsi məlumatlar” bölməsində
                  qeyd edə bilərsiniz
                </Typography>
                <Typography variant="body1">
                  3. “Elanın adı” bölməsində qiyməti daxil etməyin. Qiymət üçün
                  sizə ayırdığımız bölməmiz var
                </Typography>
                <Typography variant="body1">
                  4. Qadağan olunmuş məhsulların siyahısı
                </Typography>
                <Typography variant="body1">5. Saytın tam qaydaları</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "85%", marginInline: "auto", marginBlock: "40px" }}>
            <Typography variant="h4">Şəxsi məlumatlar</Typography>
            <Box sx={{ display: "flex", gap: "30%", marginBlock: "40px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "40px" }}
              >
                <TextField label="Ad Soyad" className="bgwhite" />
                <TextField label="Email" className="bgwhite" />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "40px" }}
              >
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Select
                    value={startNumber1}
                    onChange={handleStartNumber1}
                    sx={{ width: 100 }}
                    className="bgwhite"
                  >
                    <MenuItem value="1">050</MenuItem>
                    <MenuItem value="2">051</MenuItem>
                    <MenuItem value="3">070</MenuItem>
                    <MenuItem value="4">077</MenuItem>
                    <MenuItem value="5">055</MenuItem>
                  </Select>
                  <TextField
                    variant="outlined"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    sx={{ border: "none" }}
                    placeholder="Telefon nömrəniz"
                    className="bgwhite"
                  />
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Select
                    value={startNumber2}
                    onChange={handleStartNumber2}
                    sx={{ width: 100 }}
                    className="bgwhite"
                  >
                    <MenuItem value="6">050</MenuItem>
                    <MenuItem value="7">051</MenuItem>
                    <MenuItem value="8">070</MenuItem>
                    <MenuItem value="9">077</MenuItem>
                    <MenuItem value="10">055</MenuItem>
                  </Select>
                  <TextField
                    variant="outlined"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    sx={{ border: "none" }}
                    placeholder="Whatsapp nömrəniz"
                    className="bgwhite"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "85%",
              marginInline: "auto",
              marginBlock: "40px",
            }}
          >
            <Typography variant="h4" sx={{ marginBlock: "20px" }}>
              Məhsul haqqında məlumatlar
            </Typography>
            <TextField label="Elanın adı" sx={{ width: "70%" }} className="bgwhite" />
            <Box sx={{ display: "flex", gap: "10%", marginBlock: "40px" }}>
              <Select
                value={category}
                onChange={handleCategory}
                sx={{ width: "30%" }}
                className="bgwhite"
              >
                <MenuItem value="0" disabled>
                  -- Kateqoriya seçin --
                </MenuItem>
                <MenuItem value="1">Ev və bağ</MenuItem>
                <MenuItem value="2">Elektronika və texnika</MenuItem>
                <MenuItem value="3">Daşınmaz əmlak</MenuItem>
                <MenuItem value="4">Nəqliyyat</MenuItem>
                <MenuItem value="6">Şəxsi əşyalar</MenuItem>
                <MenuItem value="7">Hobbi,asudə</MenuItem>
                <MenuItem value="8">Uşaq aləmi</MenuItem>
                <MenuItem value="9">Heyvan</MenuItem>
                <MenuItem value="9">Vakansiyalar</MenuItem>
              </Select>
              <Select
                value={subcategory}
                onChange={handleSubCategory}
                sx={{ width: "30%" }}
                className="bgwhite"
              >
                <MenuItem value="0" disabled>
                  -- Alt kateqoriya seçin --
                </MenuItem>
                <MenuItem value="1">Ev və bağ</MenuItem>
                <MenuItem value="2">Elektronika və texnika</MenuItem>
                <MenuItem value="3">Daşınmaz əmlak</MenuItem>
                <MenuItem value="4">Nəqliyyat</MenuItem>
                <MenuItem value="6">Şəxsi əşyalar</MenuItem>
                <MenuItem value="7">Hobbi,asudə</MenuItem>
                <MenuItem value="8">Uşaq aləmi</MenuItem>
                <MenuItem value="9">Heyvan</MenuItem>
                <MenuItem value="9">Vakansiyalar</MenuItem>
              </Select>
            </Box>
            <Box sx={{ display: "flex", gap: "10%", marginBlock: "40px" }}>
              <Select value={city} onChange={handleCity} sx={{ width: "30%" }} className="bgwhite" >
                <MenuItem value="0" disabled>
                  -- Şəhər seçin --
                </MenuItem>
                <MenuItem value="1">Bakı</MenuItem>
                <MenuItem value="2">Qəbələ</MenuItem>
                <MenuItem value="3">Masallı</MenuItem>
                <MenuItem value="4">Şəki</MenuItem>
                <MenuItem value="6">Şamaxı</MenuItem>
                <MenuItem value="7">Quba</MenuItem>
                <MenuItem value="8">Səlyan</MenuItem>
                <MenuItem value="9">Naxçıvan</MenuItem>
                <MenuItem value="9">Saatlı</MenuItem>
              </Select>
              <Select
                value={situation}
                onChange={handleSituation}
                sx={{ width: "30%" }}
                className="bgwhite"
              >
                <MenuItem value="0" disabled>
                  -- Vəziyyəti --
                </MenuItem>
                <MenuItem value="1">Yeni</MenuItem>
                <MenuItem value="2">Az işlənmiş</MenuItem>
                <MenuItem value="3">İşlənmiş</MenuItem>
              </Select>
            </Box>
            <Box sx={{ display: "flex", gap: "10%", marginBlock: "40px" }}>
              <TextField label="Qiymət (AZN)" required className="priceInput bgwhite"  />
              <TextareaAutosize
                placeholder="Ətraflı məlumat"
                className="textArea"
              />
            </Box>
          </Box>
          <Box sx={{ width: "85%", marginInline: "auto", marginTop: "50px" }}>
            <Button variant="contained" sx={{ padding: "20px 50px" }}>
              Elanı yerləşdir
            </Button>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default CreateAdvertisement;
