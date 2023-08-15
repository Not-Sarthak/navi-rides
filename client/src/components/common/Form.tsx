import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

import Date from "./Date";

const Form = ({
    type,
    register,
    handleSubmit,
    handleImageChange,
    formLoading,
    onFinishHandler,
    propertyImage,
}: FormProps) => {
    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142d" paddingTop={8}>
                Add Ride Details
            </Typography>

            <Box mt={2.5} borderRadius="15px" padding="20px" paddingTop={0} bgcolor="#fcfcfc">
                <form
                    style={{
                        marginTop: "20px",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                    onSubmit={handleSubmit(onFinishHandler)}
                >
                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Enter Car Name
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            placeholder="Car Name"
                            color="info"
                            sx={{ border: "1px solid #c2c2c2", borderRadius: "6px"}}
                            variant="outlined"
                            {...register("title", { required: true })}
                        />
                    </FormControl>
                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Enter Driver Name
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            placeholder="Driver Name"
                            color="info"
                            sx={{ border: "1px solid #c2c2c2", borderRadius: "6px"}}
                            variant="outlined"
                            {...register("name", { required: true })}
                        />
                         <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Driver Contact No.
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            placeholder="(+Country-Code) Contact No."
                            color="info"
                            sx={{ border: "1px solid #c2c2c2", borderRadius: "6px"}}
                            variant="outlined"
                            {...register("number", { required: true })}
                        />
                    </FormControl>
                    
                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Enter Description
                        </FormHelperText>
                        <TextareaAutosize
                            minRows={5}
                            required
                            placeholder="Write Description"
                            color="info"
                            style={{
                                width: "100%",
                                background: "transparent",
                                fontSize: "16px",
                                borderColor: "rgba(0,0,0,0.23)",
                                borderRadius: 6,
                                padding: 10,
                                color: "#919191",
                            }}
                            {...register("description", { required: true })}
                        />
                    </FormControl>

                    <Stack direction="row" gap={4}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                                Select Car Type
                            </FormHelperText>
                            <Select
                                variant="outlined"
                                placeholder="Car type"
                                color="info"
                                displayEmpty
                                required
                                inputProps={{ "aria-label": "Without label" }}
                                defaultValue=""
                                {...register("propertyType", {
                                    required: true,
                                })}
                            >
                                <MenuItem value="sedan">Sedan</MenuItem>
                                <MenuItem value="hatchback">Hatchback</MenuItem>
                                <MenuItem value="suv">SUV</MenuItem>
                                <MenuItem value="crossover">Crossover</MenuItem>
                                <MenuItem value="muv">MUV</MenuItem>
                                <MenuItem value="xuv">XUV</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                        <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                                Enter Currency Type
                            </FormHelperText>
                            <Select
                                variant="outlined"
                                placeholder="Car type"
                                color="info"
                                displayEmpty
                                required
                                inputProps={{ "aria-label": "Without label" }}
                                defaultValue=""
                                {...register("currency", {
                                    required: true,
                                })}
                            >
                                <MenuItem value="US$">USD</MenuItem>
                                <MenuItem value="AU$">AUD</MenuItem>
                                <MenuItem value="CA$">CAD</MenuItem>
                                <MenuItem value="₹">INR</MenuItem>
                                <MenuItem value="£">GBP</MenuItem>
                            </Select>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                                Enter Trip Price
                            </FormHelperText>
                            <TextField
                                fullWidth
                                required
                                placeholder="Enter Trip Price"
                                id="outlined-basic"
                                color="info"
                                type="number"
                                variant="outlined"
                                {...register("price", { required: true })}
                            />
                        </FormControl>
                    </Stack>

                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Enter Pickup Location
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            placeholder="Enter Pickup Location"
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            {...register("location", { required: true })}
                        />
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Enter Drop Location
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            placeholder="Enter Drop Location"
                            id="outlined-basic"
                            color="info"
                            sx={{ border: "1px solid #c2c2c2", borderRadius: "6px"}}
                            variant="outlined"
                            {...register("dropLocation", { required: true })}
                        />
                        <Box sx={{}}>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Enter Date
                        </FormHelperText>
                        <TextField
                            required
                            placeholder="dd/mm/yyyy"
                            id="outlined-basic"
                            color="info"
                            sx={{ border: "1px solid #c2c2c2", borderRadius: "6px", width: "50%"}}
                            variant="outlined"
                            {...register("date", { required: true })}
                        />
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Enter Time
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            placeholder="Hrs: Mins: Secs"
                            id="outlined-basic"
                            color="info"
                            sx={{ border: "1px solid #c2c2c2", borderRadius: "6px", width: "50%"}}
                            variant="outlined"
                            {...register("time", { required: true })}
                        />
                        </Box>
                    </FormControl>

                    <Stack
                        direction="column"
                        gap={1}
                        justifyContent="center"
                        mb={2}
                    >
                        <Stack direction="row" gap={2}>
                            <Typography
                                color="#11142d"
                                fontSize={16}
                                fontWeight={500}
                                my="10px"
                            >
                                Driver Photo
                            </Typography>

                            <Button
                                component="label"
                                sx={{
                                    width: "fit-content",
                                    color: "#2ed480",
                                    textTransform: "capitalize",
                                    fontSize: 16,
                                }}
                            >
                                Upload *
                                <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                    ) => {
                                        handleImageChange(e.target.files![0]);
                                    }}
                                />
                            </Button>
                        </Stack>
                        <Typography
                            fontSize={14}
                            color="#808191"
                            sx={{ wordBreak: "break-all" }}
                        >
                            {propertyImage?.name}
                        </Typography>
                    </Stack>

                    <CustomButton
                        type="submit"
                        title={formLoading ? "Submitting..." : "Submit"}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                    />
                </form>
            </Box>
        </Box>
    );
};

export default Form;