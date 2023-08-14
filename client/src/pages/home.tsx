import { useList } from "@refinedev/core";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from "@mui/material";
import TextField from "@mui/material/TextField";
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

    const latestProperties = data?.data ?? [];

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
        <Box>
            {/* <Typography fontSize={25} fontWeight={700} color="#11142D">
                Dashboard
            </Typography>
            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart
                    title="Present Available Cars"
                    value={684}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Present Active Agents"
                    value={550}
                    series={[60, 40]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Total Customers"
                    value={2840}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Available Cities"
                    value={555}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
            </Box>

            <Stack
                mt="25px"
                width="100%"
                direction={{ xs: "column", lg: "row" }}
                gap={4}
            >
                <TotalRevenue />
                <PropertyReferrals />
            </Stack> */}
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <CustomButton
                    title="Add a Ride"
                    handleClick={() => navigate("/properties/create")}
                    backgroundColor="#475be8"
                    color="#fcfcfc"
                    icon={<Add />}
                />
            </Stack>
            <Box
                flex={1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
            >
                {/* <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: "3", top: 0, left: 0, right: 0 }}>
                    <img src={MainBG} style={{ width: "50%", height: "50%", borderRadius: "10px" }} />
                </Box> */}
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                <TextField
                    variant="outlined"
                    color="info"
                    placeholder="Pickup Location"
                    sx={{ width: "300px", border: "1px solid #a8a8a8", borderRadius: "6px" }}
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
                    variant="outlined"
                    color="info"
                    placeholder="Drop Location"
                    sx={{ width: "300px", border: "1px solid #a8a8a8", borderRadius: "6px" }}
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
                    variant="outlined"
                    color="info"
                    placeholder="Search by Date"
                    sx={{ width: "300px", border: "1px solid #a8a8a8", borderRadius: "6px" }}
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
                </div>
                <br />
                <Typography fontSize="18px" fontWeight={600} color="#11142d">
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
                        title={property.title}
                        name={property.name}
                        time={property.time}
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
        </Box>
    );
};

export default Home;