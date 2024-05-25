import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Card/Card.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import ShareIcon from "@mui/icons-material/Share";
import { MainContext } from "../../../Context/Context";

const Card = () => {
  const [data, setData] = useState([]);

  const { wishtlistItem, setWishlistItem } = useState(MainContext);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products").then((res) => {
      setData(res.data);
    });
  });
  return (
    <>
      <h1>Products</h1>

      <div className="common">
        {data &&
          data.map((item, index) => {
            const actions = [
              { icon: <VisibilityIcon />, name: "View more" },
              { icon: <ShoppingCartIcon />, name: "Basket" },
              {
                icon: (
                  <FavoriteBorderIcon
                    onClick={() => {
                      setWishlistItem([...wishtlistItem, item]);
                    }}
                  />
                ),
                name: "Like",
              },
              { icon: <ShareIcon />, name: "Share" },
            ];
            return (
              <div key={index} className="common__cardss">
                <div className="cardss__img">
                  <img src={`${item.images}`} alt="img" />
                </div>

                <div className="cardss__text"></div>
                <h2>
                  <span>Title:</span>
                  {item.title}
                </h2>
                <h2>
                  {" "}
                  <span>Price:</span> {item.price}
                </h2>
                {/* <h2> <span> Description:</span>{item.description}</h2> */}
                <div className="common__cardss__box">
                  <Box
                    sx={{
                      position: "relative",
                      top: "25px",
                      transform: "translateZ(0px)",
                      flexGrow: 1,
                    }}
                  >
                    <SpeedDial
                      ariaLabel="SpeedDial basic example"
                      sx={{ position: "absolute", bottom: 16, right: 16 }}
                      icon={<SpeedDialIcon />}
                    >
                      {actions.map((action) => (
                        <SpeedDialAction
                          key={action.name}
                          icon={action.icon}
                          tooltipTitle={action.name}
                        />
                      ))}
                    </SpeedDial>
                  </Box>

                  {/* <div><button><ShoppingCartIcon/></button></div>
    <div><button><VisibilityIcon/></button></div>
    <div><button><FavoriteBorderIcon/></button></div>
    <div><button></button></div> */}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Card;
