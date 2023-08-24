import { useList } from "@refinedev/core";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from "@mui/material";
import TextField from "@mui/material/TextField";
import Hero from "../components/common/Hero";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import {
//     PieChart,
//     PropertyReferrals,
//     TotalRevenue,
//     PropertyCard,
// } from "components";

import { CustomButton } from "components";
import { useTable } from "@refinedev/core";
import Dummy from "components/common/Dummy";
import Add from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

import useMeasure from "react-use-measure";
import { MainBG } from "../assets";
import { useMemo } from "react";

const Home = () => {
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

    const allProperties = data?.data ?? [];

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

    if (isLoading) return <Typography sx={{display:"flex", justifyContent: "center", alignItems: "center"}}>Loading...</Typography>;
    if (isError) return <Typography>Something went wrong!</Typography>;

    return (
        <Box sx={{width:"98.5%"}}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mt={10}
            >
                <CustomButton
                    title="Add a Ride"
                    handleClick={() => navigate("/properties/create")}
                    backgroundColor="#00c6ff"
                    color="#fcfcfc"
                    icon={<Add />}
                />
            </Stack>
            <Box mt={-12}>
                <Hero />
            </Box>
            {/* <Box
                // flex={1}
                borderRadius="15px"
                // padding="20px"
                bgcolor="#fcfcfc"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
            > */}
                {/* <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: "3", top: 0, left: 0, right: 0 }}>
                    <img src={MainBG} style={{ width: "50%", height: "50%", borderRadius: "10px" }} />
                </Box> */}
                {/* <Box style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                <TextField
                    className="glass"
                    variant="outlined"
                    color="info"
                    placeholder="Pickup Location"
                    sx={{ width: "300px", border: "1px solid #a8a8a8", borderRadius: "6px", marginBottom: "1rem", marginTop: "0rem"  }}
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
                    sx={{ width: "300px", border: "1px solid #a8a8a8", borderRadius: "6px",  marginBottom: "1rem" }}
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
                    placeholder="Search by Date"
                    sx={{ width: "300px", border: "1px solid #a8a8a8", borderRadius: "6px",  marginBottom: "1rem" }}
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
                    backgroundColor="#586ae9"
                    color="#fcfcfc"
                    icon={<SearchIcon />}
                />
                </Box>
                </Box>
                <br /> */}
                {/* <Typography fontSize="18px" fontWeight={600} color="#11142d" sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                    Latest Rides
                </Typography> */}
                {/* <Typography fontSize={25} fontWeight={700} color="#11142d" sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                        {!allProperties.length
                            ? "There are no Rides"
                            : "Latest Rides"}
                </Typography>

                <Box
                    mt={2.5}
                    sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}
                > */}
                {/* {allProperties?.reverse().map((property) => (
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
                </Box>
            </Box>
            {allProperties.length > 0 && (
                <Box display="flex" gap={2} mt={3} flexWrap="wrap">
                    <CustomButton
                        title="Previous"
                        handleClick={() => setCurrent((prev) => prev - 1)}
                        backgroundColor="#00c6ff"
                        color="#fcfcfc"
                        disabled={!(current > 1)}
                    />
                    <Box
                        display={{ xs: "hidden", sm: "flex" }}
                        alignItems="center"
                        gap="5px"
                    >
                        Page{" "}
                        <strong>
                            {current} of {pageCount}
                        </strong>
                    </Box>
                    <CustomButton
                        title="Next"
                        handleClick={() => setCurrent((prev) => prev + 1)}
                        backgroundColor="#00c6ff"
                        color="#fcfcfc"
                        disabled={current === pageCount}
                    />
                    <Select
                        variant="outlined"
                        color="info"
                        displayEmpty
                        required
                        inputProps={{ "aria-label": "Without label" }}
                        defaultValue={10}
                        onChange={(e) =>
                            setPageSize(
                                e.target.value ? Number(e.target.value) : 10,
                            )
                        }
                    >
                        {[10, 20, 30, 40, 50].map((size) => (
                            <MenuItem key={size} value={size}>
                                Show {size}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
            )} */}
        </Box>
    );
};

export default Home;