import Place from "@mui/icons-material/Place";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";

import { PropertyCardProps } from "interfaces/property";

const PropertyCard = ({
    id,
    title,
    location,
    number,
    dropLocation,
    currency,
    price,
    photo,
}: PropertyCardProps) => {
    return (
        <Card
            component={Link}
            to={`/properties/show/${id}`}
            sx={{
                backgroundColor:"#dadefa",
                maxWidth: "330px",
                padding: "10px",
                "&:hover": {
                    boxShadow: "0 22px 45px 2px #dbdad8",
                },
                cursor: "pointer",
                width: "100%",
            }}
            elevation={0}
        >
            <CardMedia
                component="img"
                width="100%"
                height={210}
                image={photo}
                alt="card image"
                sx={{ borderRadius: "10px" }}
            />
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "10px",
                    paddingX: "5px",
                }}
            >
                <Stack direction="column" gap={1}>
                    <Typography fontSize={16} fontWeight={500} color="#11142d">
                        {title}
                    </Typography>
                    <Stack direction="row" gap={0.5} alignItems="flex-start">
                        <Place
                            sx={{
                                fontSize: 18,
                                color: "#11142d",
                                marginTop: 0.25,
                            }}
                        />
                        <Typography fontSize={14} color="#808191">
                            {location} to {dropLocation}
                            <br/>
                            {number}
                        </Typography>
                    </Stack>
                </Stack>
                <Box
                    px={1.5}
                    py={0.5}
                    borderRadius={1}
                    bgcolor="#dadefa"
                    height="fit-content"
                >
                    <Typography fontSize={14} fontWeight={600} color="#475be8">
                        {currency} {price}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default PropertyCard;