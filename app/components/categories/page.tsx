"use client";
import { Box, Typography, Button, Link, TextField } from "@mui/material";
import { BiCategory } from "react-icons/bi";

import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import { FaHome } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { IoIosFootball } from "react-icons/io";
import { MdOutlineToys } from "react-icons/md";
import { TbDog } from "react-icons/tb";
import { FaShoppingBag } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Categories = () => {
  type Anchor = "Kateqoriyalar";
  const [state, setState] = React.useState({
    Kateqoriyalar: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ bgcolor: "#fff", position: "fixed", left: 0, right: 0, top: 80 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Box
          sx={{
            width: "85%",
            marginInline: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaHome />

            <Link>Ev və bağ</Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaMobileAlt />

            <Link>Elektronika və texnika</Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaBuilding />

            <Link>Daşınmaz əmlak</Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaCar />

            <Link>Nəqliyyat</Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <GiClothes />

            <Link>Şəxsi əşyalar</Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <IoIosFootball />

            <Link>Hobbi,asudə</Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <MdOutlineToys />

            <Link>Uşaq aləmi</Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TbDog />

            <Link>Heyvan</Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaShoppingBag />

            <Link>Vakansiyalar</Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaTools />

            <Link>Digər xidmətlər</Link>
          </Box>
        </Box>
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        width: "85%",
        marginInline: "auto",
        marginBlock: "30px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h3">Logo</Typography>

      <Box sx={{ display: "flex" }}>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            textTransform: "none",
          }}
        >
          <Box sx={{ display: "grid", placeItems: "center" }}>
            <BiCategory />
          </Box>
          <Box>
            {(["Kateqoriyalar"] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                <Drawer
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </Box>
        </Button>
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            width: "60%",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Axtaracağınız məhsul,elan,kateqoriyanı yazın"
            variant="outlined"
            sx={{ height: "100%" }}
          />
          <Button
            variant="contained"
            sx={{ display: "grid", placeItems: "center", height: "40px" }}
          >
            <CiSearch className="searchbtn" />
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <CiHeart className="hearticon" />

        <Typography variant="h5">Seçilənlər</Typography>
      </Box>
      <Link href="../pages/create-ad">
        <Button variant="contained" sx={{ padding: "15px 25px" }}>
          + Yeni elan
        </Button>
      </Link>
    </Box>
  );
};

export default Categories;
