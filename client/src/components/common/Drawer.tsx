import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useEffect, useRef } from "react";
import { useLogin } from "@refinedev/core";
import { CredentialResponse } from "../../interfaces/google";

import Link from '@mui/material/Link';


const pages = ["Home", "Drivers", "About", "Contact Us"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);


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
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <Link href="/" sx={{color: "black"}}><ListItemText>{page}</ListItemText></Link>
              </ListItemIcon>
            </ListItemButton>
          ))}
          <GoogleButton />
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;