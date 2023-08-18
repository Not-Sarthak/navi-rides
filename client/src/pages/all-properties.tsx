import Add from "@mui/icons-material/Add";
import { useTable } from "@refinedev/core";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import SearchIcon from '@mui/icons-material/Search';

import { PropertyCard, CustomButton } from "components";

import Dummy from "components/common/Dummy";

const AllProperties = () => {
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
    } = useTable();

    const allProperties = data?.data ?? [];
    // console.log(allProperties);

    const currentPrice = sorter.find((item) => item.field === "price")?.order;

    const toggleSort = (field: string) => {
        setSorter([{ field, order: currentPrice === "asc" ? "desc" : "asc" }]);
    };

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
    // console.log(currentFilterValues)

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Error...</Typography>;

    return (
        <Box>
            <Box mt="4rem" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                <Stack direction="column" width="100%">
                    <Typography fontSize={25} fontWeight={700} color="#11142d" sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                        All Available Rides
                    </Typography>
                    {/* <Box
                        mb={2}
                        mt={3}
                        display="flex"
                        width="84%"
                        justifyContent="space-between"
                        flexWrap="wrap"
                    > */}
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            gap={2}
                            flexWrap="wrap"
                            mb={{ xs: "20px", sm: 0 }}
                        >
                            {/* <TextField
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
                            /> */}
                            <TextField
                                variant="outlined"
                                color="info"
                                placeholder="Search by Pickup Location"
                                sx={{ width: "300px", border: "1px solid #a8a8a8", borderRadius: "6px", }}
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
                                placeholder="Search by Drop Location"
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
                            <Box sx={{display: "flex", justifyContent: "center"}}>
                            <CustomButton
                                title="Search"
                                handleClick={() => {}}
                                backgroundColor="#586ae9"
                                color="#fcfcfc"
                                icon={<SearchIcon />}
                            />
                            </Box>
                                        
                            {/* <Select
                                variant="outlined"
                                color="info"
                                displayEmpty
                                sx={{ border: "1px solid #a8a8a8" }}
                                required
                                inputProps={{ "aria-label": "Without label" }}
                                defaultValue=""
                                value={currentFilterValues.propertyType}
                                onChange={(e) => {
                                    setFilters(
                                        [
                                            {
                                                field: "propertyType",
                                                operator: "eq",
                                                value: e.target.value,
                                            },
                                        ],
                                        "replace",
                                    );
                                }}
                            >
                                <MenuItem value="">All</MenuItem>
                                {[
                                    "Sedan",
                                    "Hatchback",
                                    "SUV",
                                    "Crossover",
                                    "MUV",
                                    "XUV",
                                ].map((type) => (
                                    <MenuItem
                                        key={type}
                                        value={type.toLowerCase()}
                                    >
                                        {type}
                                    </MenuItem>
                                ))}
                            </Select> */}
                        </Box>
                    {/* </Box> */}
                </Stack>
            </Box>

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <CustomButton
                    title="Add a Ride"
                    handleClick={() => navigate("/properties/create")}
                    backgroundColor="#00c6ff"
                    color="#fcfcfc"
                    icon={<Add />}
                />
                <CustomButton
                    title={`Sort By price ${
                    currentPrice === "asc" ? "↑" : "↓"
                    }`}
                    handleClick={() => toggleSort("price")}
                    backgroundColor="#00c6ff"
                    color="#fcfcfc"
                />
            </Stack>
            <Typography fontSize={25} fontWeight={700} color="#11142d" sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                        {!allProperties.length
                            ? "There are no Rides"
                            : ""}
            </Typography>
            <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                {allProperties?.reverse().map((property) => (
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
            )}
        </Box>
    );
};

export default AllProperties;