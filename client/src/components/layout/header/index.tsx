import React from "react";
import { useGetIdentity } from "@refinedev/core";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { yariga, yarigatwo } from "assets";
import Link from '@mui/material/Link';

export const Header: React.FC = () => {
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });
    const showUserInfo = user && (user.name || user.avatar);

    return (
        <AppBar
            color="default"
            position="absolute"
            elevation={0}
            sx={{ background: "#384b5c", borderRadius: "10px", width: "100%"}}
        >
            <Toolbar>
            <Link href="/" sx={{color: "white"}}><img src={yarigatwo} alt="Yariga Logo" /></Link>
                <Stack
                    direction="row"
                    width="100%"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    {showUserInfo && (
                        <Stack direction="row" gap="16px" alignItems="center">
                            {user.avatar && (
                                <Avatar src={user?.avatar} alt={user?.name} />
                            )}
                            {user.name && (
                                <Typography variant="subtitle2" sx={{color: "#fcfcfc"}}>
                                    {user?.name}
                                </Typography>
                            )}
                        </Stack>
                    )}
                </Stack>
            </Toolbar>
        </AppBar>
    );
};