import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import { yariga, bg } from "../../assets";

import { useEffect, useRef } from "react";
import { useLogin } from "@refinedev/core";
import { CredentialResponse } from "../../interfaces/google";

import Link from '@mui/material/Link';

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const { mutate: login } = useLogin<CredentialResponse>({
    v3LegacyAuthProviderCompatible: true,
});

const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (
            typeof window === "undefined" ||
            !window.google ||
            !divRef.current
        ) {
            return;
        }

        try {
            window.google.accounts.id.initialize({
                ux_mode: "popup",
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                callback: async (res: CredentialResponse) => {
                    if (res.credential) {
                        login(res);
                    }
                },
            });
            window.google.accounts.id.renderButton(divRef.current, {
                theme: "filled_blue",
                size: "medium",
                type: "standard",
            });
        } catch (error) {
            console.log(error);
        }
    }, []); // you can also add your client id as dependency here

    return <div ref={divRef} />;
};

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970", borderRadius: "10px", width: "100%"}}>
        <Toolbar>
          <Link href="/" sx={{color: "white"}}><img src={yariga} alt="Yariga Logo" /></Link>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Link href="/" sx={{color: "white"}}><Tab label="Home" /></Link>
                <Link href="/" sx={{color: "white"}}><Tab label="Drivers" /></Link>
                <Link href="/" sx={{color: "white"}}><Tab label="About" /></Link>
                <Link href="/" sx={{color: "white"}}><Tab label="Contact" /></Link>
              </Tabs>
              <GoogleButton />
              <DrawerComp />
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;