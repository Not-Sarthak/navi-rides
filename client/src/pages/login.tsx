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

import { CredentialResponse } from "../interfaces/google";

import Dummy from "../components/common/Dummy";
import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";

import { useNavigate } from "react-router-dom";
import { useTable } from "@refinedev/core";

import {
    PieChart,
    PropertyReferrals,
    TotalRevenue,
    PropertyCard,
} from "components";

import { useMemo } from "react";

export const Login: React.FC = () => {

    const [ref, { height }] = useMeasure();

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
    <Box sx={{width: "100%"}}>
        <Box mt={1}>
            <Navbar />
            <Hero />
        </Box>
        <Box  component="div">
            <Box style={{display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignContent: "center"}}>
                <TextField
                    className="glass" 
                    variant="outlined"
                    color="info"
                    placeholder="Pickup Location"
                    sx={{ width: "300px", border: "1px solid #a8a8a8", borderRadius: "6px", marginBottom: "1rem", marginTop: "0rem" }}
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
            </Box>
        </Box>
        
        <Typography fontSize="24px" fontWeight={600} color="#11142d" style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
            Latest Rides
        </Typography>
              <Box
                 mt={2.5}
                 sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}
             >
                 {latestProperties.map((property) => (
                     <Dummy
                         key={property._id}
                         id={property._id}
                         time={property.time}
                         min={property.min}
                         name={property.name}
                         number={property.number}
                         title={property.title}
                         date={property.date}
                         location={property.location}
                         dropLocation={property.dropLocation}
                         currency={property.currency}
                         price={property.price}
                         photo={property.photo}
                     />
                 ))}
             </Box>
    </Box>
    );
};