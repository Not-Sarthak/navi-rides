import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useDelete, useGetIdentity, useShow } from "@refinedev/core";
import { useParams, useNavigate } from "react-router-dom";
import ChatBubble from "@mui/icons-material/ChatBubble";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import Phone from "@mui/icons-material/Phone";
import Place from "@mui/icons-material/Place";
import Star from "@mui/icons-material/Star";
import CallIcon from '@mui/icons-material/Call';
import { whatsapp } from 'assets';

import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";

import {
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon
  } from "react-share";

import { CustomButton } from "components";
import { response } from "express";

function checkImage(url: any) {
    const img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}

const PropertyDetails = () => {

    const navigate = useNavigate();
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });
    const { queryResult } = useShow();
    const { mutate } = useDelete();
    const { id } = useParams();

    const { data, isLoading, isError } = queryResult;

    const propertyDetails = data?.data ?? {};

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Something went wrong!</div>;
    }

    const isCurrentUser = user.email === propertyDetails.creator.email;

    const nope = `/properties/show/${id}`
    const c = window.location.origin + `/properties/show/${id}`

    const handleDeleteProperty = () => {
        // eslint-disable-next-line no-restricted-globals
        const response = confirm(
            "Are you sure you want to delete this property?",
        )
        if (response) {
            mutate(
                {
                    resource: "properties",
                    id: id as string,
                },
                {
                    onSuccess: () => {
                        navigate("/properties");
                    },
                },
            );
        }
    };
    const url = `tel:${propertyDetails.number}`;
    const handleClick = () => {
      window.open(url);
    }
    const url_w = `https://wa.me/${propertyDetails.number}?text=Hi`;
    const handleClick_w = () => {
      window.open(url_w);
    }
    return (
        <Box
            borderRadius="15px"
            padding="20px"
            bgcolor="#FCFCFC"
            width="fit-content"
        >
            <Typography mt={7} fontSize={25} fontWeight={700} color="#11142D" sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                Details
            </Typography>

            <Box
                mt="20px"
                display="flex"
                flexDirection={{ xs: "column", lg: "row" }}
                gap={4}
            >
                <Box flex={1} maxWidth={764}>
                    <img
                        src={propertyDetails.photo}
                        alt="property_details-img"
                        height={300}
                        style={{ objectFit: "cover", borderRadius: "10px" }}
                        className="property_details-img"
                    />

                    <Box mt="15px" style={{border: "1px solid #e4e4e4", padding: "30px", borderRadius: "10px"}} sx={{boxShadow: "-1px 15px 30px -12px #a8a8a8"}}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            flexWrap="wrap"
                            alignItems="center"
                        >
                            <Typography
                                fontSize={16}
                                fontWeight={600}
                                // mt="5px"
                                color="#11142D"
                                textTransform="capitalize"
                            >
                                {propertyDetails.title} ({propertyDetails.propertyType})
                            </Typography>
                            <Box sx={{display: "flex", justifyContent: "center", alignContent: "center", border: "1px solid #e4e4e4", padding: "2px", borderRadius: "13px"}}>
                            <Typography
                                    fontSize={16}
                                    fontWeight={400}
                                    // mt="5px"
                                    color="#11142D"
                                >
                                    {propertyDetails.currency}{propertyDetails.price}
                                </Typography>
                                </Box>
                            {/* <Box>
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <Star
                                        key={`star-${item}`}
                                        sx={{ color: "#F2C94C" }}
                                    />
                                ))}
                            </Box> */}
                        </Stack>

                        <Stack
                            direction="row"
                            flexWrap="wrap"
                            justifyContent="space-between"
                            alignItems="center"
                            gap={2}
                        >
                            <Box>
                                {/* <Typography
                                    fontSize={18}
                                    fontWeight={500}
                                    color="#11142D"
                                    textTransform="capitalize"
                                >
                                    
                                </Typography> */}
                                <Stack
                                    mt={0.5}
                                    direction="row"
                                    alignItems="center"
                                    gap={0.5}
                                >
                                    <Place sx={{ color: "#808191", fontSize: "medium", marginLeft: "-2px" }} />
                                    <Typography fontSize={14} color="#808191">
                                        {propertyDetails.location} to {propertyDetails.dropLocation}
                                    </Typography>
                                </Stack>
                            </Box>

                            {/* <Box sx={{display: "flex", justifyContent: "center", alignContent: "center", border: "1px solid #e4e4e4", padding: "2px", borderRadius: "13px"}}> */}
                                {/* <Typography
                                    fontSize={16}
                                    fontWeight={400}
                                    // mt="5px"
                                    color="#11142D"
                                >
                                    Price: {propertyDetails.currency}{propertyDetails.price}
                                </Typography> */}
                                {/* <Stack
                                    direction="row"
                                    alignItems="flex-end"
                                    gap={1}
                                >
                                    <Typography
                                        fontSize={16}
                                        fontWeight={600}
                                        // mt="5px"
                                        color="#11142D"
                                    >
                                        {propertyDetails.currency}{propertyDetails.price}
                                    </Typography>
                                </Stack> */}
                            {/* </Box> */}
                        </Stack>

                        <Stack mt="15px" direction="column" gap="10px">
                            <Typography  
                                fontSize={16}
                                fontWeight={600}
                                // mt="5px"
                                color="#11142D"
                                textTransform="capitalize">
                                Description
                            </Typography>
                            <Typography fontSize={14} color="#808191">
                                {propertyDetails.description}
                            </Typography>
                            <Typography 
                                fontSize={16}
                                fontWeight={600}
                                // mt="5px"
                                color="#11142D"
                                textTransform="capitalize">
                                Share
                            </Typography>
                            <Typography fontSize={14} color="#808191" style={{}}>
                                <FacebookShareButton url={c} style={{paddingRight:"1rem"}}>
                                    <FacebookIcon size={32} round={true} />
                                </FacebookShareButton>
                                <TwitterShareButton url={c} style={{paddingRight:"1rem"}}>
                                    <TwitterIcon size={32} round={true} />
                                </TwitterShareButton>
                                <WhatsappShareButton url={c}>
                                    <WhatsappIcon size={32} round={true} />
                                </WhatsappShareButton>
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
                <Box
                    width="100%"
                    flex={1}
                    maxWidth={326}
                    display="flex"
                    flexDirection="column"
                    gap="20px"
                    sx={{boxShadow: "-1px 15px 30px -12px #a8a8a8"}}
                >
                    <Stack
                        width="100%"
                        p={2}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        border="1px solid #E4E4E4"
                        borderRadius={2}
                    >
                        <Stack
                            mt={2}
                            justifyContent="center"
                            alignItems="center"
                            textAlign="center"
                        >
                            <img
                                src={
                                    checkImage(propertyDetails.creator.avatar)
                                        ? propertyDetails.creator.avatar
                                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                                }
                                alt="avatar"
                                width={90}
                                height={90}
                                style={{
                                    borderRadius: "100%",
                                    objectFit: "cover",
                                }}
                            />

                            <Box mt="15px">
                                <Typography
                                    fontSize={18}
                                    fontWeight={600}
                                    color="#11142D"
                                >
                                    {propertyDetails.creator.name}
                                </Typography>
                                <Typography
                                    mt="5px"
                                    fontSize={14}
                                    fontWeight={400}
                                    color="#808191"
                                >
                                    Driver
                                </Typography>
                                <Typography
                                    mt="5px"
                                    fontSize={14}
                                    fontWeight={400}
                                    color="#808191"
                                >
                                    {propertyDetails.number}
                                </Typography>
                            </Box>

                            {/* <Stack
                                mt="15px"
                                direction="row"
                                alignItems="center"
                                gap={1}
                            >
                                <Place sx={{ color: "#808191" }} /> */}
                                {/* <Typography
                                    fontSize={14}
                                    fontWeight={400}
                                    color="#808191"
                                >
                                    North Carolina, USA
                                </Typography> */}
                            {/* </Stack> */}

                            {/* <Typography
                                mt={1}
                                fontSize={16}
                                fontWeight={600}
                                color="#11142D"
                            >
                                {propertyDetails.creator.allProperties.length}{" "}
                                Cars
                            </Typography> */}
                            <div>
                                <button onClick={handleClick} style={{background: "none", cursor: "pointer", color: "#40c451", border: "none", marginRight: "1rem"}}><CallIcon style={{fontSize:"26px"}}/></button>
                                <button onClick={handleClick_w} style={{ background: "none", cursor: "pointer", color: "inherit", border: "none"}}><img src={whatsapp} style={{width: "30px"}}/></button>
                            </div>
                        </Stack>

                        <Stack
                            width="100%"
                            mt="25px"
                            direction="row"
                            flexWrap="wrap"
                            gap={2}
                        >
                            <CustomButton
                                title={!isCurrentUser ? "" : "Edit"}
                                backgroundColor={
                                    !isCurrentUser ? "" : "#00bef5"
                                }
                                color="#FCFCFC"
                                fullWidth
                                icon={
                                    !isCurrentUser ? "" : <Edit />
                                }
                                handleClick={() => {
                                    if (isCurrentUser) {
                                        navigate(
                                            `/properties/edit/${propertyDetails._id}`,
                                        );
                                    }
                                }}
                            />
                            <CustomButton
                                title={!isCurrentUser ? "" : "Delete"}
                                backgroundColor={
                                    !isCurrentUser ? "" : "#d42e2e"
                                }
                                color="#FCFCFC"
                                fullWidth
                                icon={!isCurrentUser ? "" : <Delete />}
                                handleClick={() => {
                                    if (isCurrentUser) handleDeleteProperty();
                                }}
                            />
                        </Stack>
                    </Stack>

                    {/* <Stack>
                        <img
                            src="https://serpmedia.org/scigen/images/googlemaps-nyc-standard.png?crc=3787557525"
                            width="100%"
                            height={306}
                            style={{ borderRadius: 10, objectFit: "cover" }}
                        />
                    </Stack> */}

                    {/* <Box>
                        <CustomButton
                            title="Book Now"
                            backgroundColor="#00bef5"
                            color="#FCFCFC"
                            fullWidth
                        />
                    </Box> */}
                </Box>
            </Box>
        </Box>
    );
};

export default PropertyDetails;