import { useEffect, useRef } from "react";
import { useLogin } from "@refinedev/core";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";
import useMeasure from "react-use-measure";
import "../index.css"
import "./login.css"
import { yariga, bg, car } from "../assets";
import { useList } from "@refinedev/core";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import SearchIcon from '@mui/icons-material/Search';
import { CustomButton } from "components";

import { CredentialResponse } from "../interfaces/google";

import Dummy from "../components/common/Dummy";
import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";

import { useNavigate } from "react-router-dom";
import { useTable } from "@refinedev/core";

import React from "react";

import { notificationProvider } from "@refinedev/mui";

import {
    PieChart,
    PropertyReferrals,
    TotalRevenue,
    PropertyCard,
} from "components";

import { useMemo } from "react";

import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export const Login: React.FC = () => {

    const [ref, { height }] = useMeasure();

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    window.onload = handleClick
    
    const navigate = useNavigate();

    const {
        tableQueryResult: { data, isLoading, isError },
        current,
        setCurrent,
        setPageSize,
        pageCount,
        sorter,
        setSorter,
        filters,
        setFilters,
    } = useTable({
        resource: "properties",
    });

    // const { data, isLoading, isError } = useList({
    //     resource: "properties",
    //     config: {
    //         pagination: {
    //             pageSize: 4,
    //         },
    //     },
    // });

    const latestProperties = data?.data ?? [];

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

    const isSmallScreen = useMediaQuery(useTheme().breakpoints.down("md"));

    const currentFilterValues = useMemo(() => {
        const logicalFilters = filters.flatMap((item) =>
            "field" in item ? item : [],
        );
        return {
            title:
                logicalFilters.find((item) => item.field === "title")?.value ||
                "",
            propertyType:
                logicalFilters.find((item) => item.field === "propertyType")
                    ?.value || "",
            dropLocation:
                logicalFilters.find((item) => item.field === "dropLocation")?.value || "",
            location:
                logicalFilters.find((item) => item.field === "location")?.value || "",
            date:
                logicalFilters.find((item) => item.field === "date")?.value || "",
        };
    }, [filters]);



    return (
    <Box sx={{width: "100%", mb: "2rem"}}>
        <Box mt={1}>
            <Navbar />
            <Hero />
        </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Please Log In to Continue!
        </Alert>
      </Snackbar>
        <Box  component="div">
            <Box style={{display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignContent: "center"}}>
            <Box sx={{display: "flex", justifyContent: "center", border: "1px solid #a8a8a8", padding: "4px", marginBottom: "6px", borderRadius: "20px", backgroundColor: "#586ae9", color: "white"}}>
                Please Log In to Continue!
            </Box>
            <Box sx={{display: "flex", justifyContent: "center",}}>
                <GoogleButton />
            </Box>
                {/* <TextField
                    className="glass" 
                    variant="outlined"
                    color="info"
                    placeholder="Pickup Location"
                    sx={{ width: "300px", border: "1px solid #a8a8a8", borderRadius: "6px", marginBottom: "1rem", marginTop: "1rem" }}
                    value={currentFilterValues.location}
                    onChange={(e) => {
                        setFilters([
                            {
                                field: "location",
                                operator: "contains",
                                value: e.currentTarget.value
                                    ? e.currentTarget.value
                                    : undefined,
                            }
                        ]);
                    }}
                />
                <TextField
                    className="glass" 
                    variant="outlined"
                    color="info"
                    placeholder="Drop Location"
                    sx={{ width: "300px", border: "1px solid #a8a8a8", borderRadius: "6px", marginBottom: "1rem" }}
                    value={currentFilterValues.dropLocation}
                    onChange={(e) => {
                        setFilters([
                            {
                                field: "dropLocation",
                                operator: "contains",
                                value: e.currentTarget.value
                                    ? e.currentTarget.value
                                    : undefined,
                            }
                        ]);
                    }}
                />
                 <TextField
                    className="glass" 
                    variant="outlined"
                    color="info"
                    placeholder="Date"
                    sx={{ width: "300px", border: "1px solid #a8a8a8", borderRadius: "6px", marginBottom: "2rem"  }}
                    value={currentFilterValues.date}
                    onChange={(e) => {
                        setFilters([
                            {
                                field: "date",
                                operator: "contains",
                                value: e.currentTarget.value
                                    ? e.currentTarget.value
                                    : undefined,
                            }
                        ]);
                    }}
                />
                <Box sx={{display: "flex", justifyContent: "center"}}>
                <CustomButton
                    title="Search"
                    handleClick={() => {}}
                    backgroundColor="#586ae9"
                    color="#fcfcfc"
                    icon={<SearchIcon />}
                />
                </Box> */}
            </Box>
        </Box>
        {/* <Typography fontSize="24px" fontWeight={600} color="#11142d" style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
            Latest Rides
        </Typography> */}
        {/* <Typography marginTop= {6} fontSize={25} fontWeight={700} color="#11142d" sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
            {!latestProperties.length
            ? "There are no Rides"
            : "Latest Rides"}
        </Typography>
                <Box
                 mt={2.5}
                 sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}
                >
                 {latestProperties?.reverse().map((property) => (
                    <Dummy
                        key={property._id}
                        id={property._id}
                        title={property.title}
                        name={property.name}
                        time={property.time}
                        min={property.min}
                        number={property.number}
                        date={property.date}
                        location={property.location}
                        dropLocation={property.dropLocation}
                        currency={property.currency}
                        price={property.price}
                        photo={property.photo}
                    />
                ))}
                </Box> */}
    </Box>
    );
};