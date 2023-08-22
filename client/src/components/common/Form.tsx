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
            <Typography fontSize={25} fontWeight={700} color="#11142d" paddingTop={8} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
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
                            placeholder="(Country-Code) Contact No."
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
                                <MenuItem value="luxury">Luxury</MenuItem>
                            </Select>
                        </FormControl>

                    <Stack direction="row" gap={4}>
                        <FormControl>
                        <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                                Select Currency Type
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
                            Select Time
                        </FormHelperText>
                        <Select
                                variant="outlined"
                                placeholder="Hrs"
                                color="info"
                                sx={{ border: "1px solid #c2c2c2", borderRadius: "6px", width: "50%"}}
                                displayEmpty
                                required
                                inputProps={{ "aria-label": "Without label" }}
                                defaultValue=""
                                {...register("time", {
                                    required: true,
                                })}
                            >
                                <MenuItem value="01">01</MenuItem>
                                <MenuItem value="02">02</MenuItem>
                                <MenuItem value="03">03</MenuItem>
                                <MenuItem value="04">04</MenuItem>
                                <MenuItem value="05">05</MenuItem>
                                <MenuItem value="06">06</MenuItem>
                                <MenuItem value="07">07</MenuItem>
                                <MenuItem value="08">08</MenuItem>
                                <MenuItem value="09">09</MenuItem>
                                <MenuItem value="10">10</MenuItem>
                                <MenuItem value="11">11</MenuItem>
                                <MenuItem value="12">12</MenuItem>
                                <MenuItem value="13">13</MenuItem>
                                <MenuItem value="14">14</MenuItem>
                                <MenuItem value="15">15</MenuItem>
                                <MenuItem value="16">16</MenuItem>
                                <MenuItem value="17">17</MenuItem>
                                <MenuItem value="18">18</MenuItem>
                                <MenuItem value="19">19</MenuItem>
                                <MenuItem value="20">20</MenuItem>
                                <MenuItem value="21">21</MenuItem>
                                <MenuItem value="22">22</MenuItem>
                                <MenuItem value="23">23</MenuItem>
                                <MenuItem value="24">24</MenuItem>
                            </Select>
                            <Select
                                variant="outlined"
                                placeholder="Mins"
                                color="info"
                                sx={{ border: "1px solid #c2c2c2", borderRadius: "6px", width: "50%"}}
                                displayEmpty
                                required
                                inputProps={{ "aria-label": "Without label" }}
                                defaultValue=""
                                {...register("min", {
                                    required: true,
                                })}
                            >
                                <MenuItem value="00">00</MenuItem>
                                <MenuItem value="01">01</MenuItem>
                                <MenuItem value="02">02</MenuItem>
                                <MenuItem value="03">03</MenuItem>
                                <MenuItem value="04">04</MenuItem>
                                <MenuItem value="05">05</MenuItem>
                                <MenuItem value="06">06</MenuItem>
                                <MenuItem value="07">07</MenuItem>
                                <MenuItem value="08">08</MenuItem>
                                <MenuItem value="09">09</MenuItem>
                                <MenuItem value="10">10</MenuItem>
                                <MenuItem value="11">11</MenuItem>
                                <MenuItem value="12">12</MenuItem>
                                <MenuItem value="13">13</MenuItem>
                                <MenuItem value="14">14</MenuItem>
                                <MenuItem value="15">15</MenuItem>
                                <MenuItem value="16">16</MenuItem>
                                <MenuItem value="17">17</MenuItem>
                                <MenuItem value="18">18</MenuItem>
                                <MenuItem value="19">19</MenuItem>
                                <MenuItem value="20">20</MenuItem>
                                <MenuItem value="21">21</MenuItem>
                                <MenuItem value="22">22</MenuItem>
                                <MenuItem value="23">23</MenuItem>
                                <MenuItem value="24">24</MenuItem>
                                <MenuItem value="25">25</MenuItem>
                                <MenuItem value="26">26</MenuItem>
                                <MenuItem value="27">27</MenuItem>
                                <MenuItem value="28">28</MenuItem>
                                <MenuItem value="29">29</MenuItem>
                                <MenuItem value="30">30</MenuItem>
                                <MenuItem value="31">31</MenuItem>
                                <MenuItem value="32">32</MenuItem>
                                <MenuItem value="33">33</MenuItem>
                                <MenuItem value="34">34</MenuItem>
                                <MenuItem value="35">35</MenuItem>
                                <MenuItem value="36">36</MenuItem>
                                <MenuItem value="37">37</MenuItem>
                                <MenuItem value="38">38</MenuItem>
                                <MenuItem value="39">39</MenuItem>
                                <MenuItem value="40">40</MenuItem>
                                <MenuItem value="41">41</MenuItem>
                                <MenuItem value="42">42</MenuItem>
                                <MenuItem value="43">43</MenuItem>
                                <MenuItem value="44">44</MenuItem>
                                <MenuItem value="45">45</MenuItem>
                                <MenuItem value="46">46</MenuItem>
                                <MenuItem value="47">47</MenuItem>
                                <MenuItem value="48">48</MenuItem>
                                <MenuItem value="49">49</MenuItem>
                                <MenuItem value="50">50</MenuItem>
                                <MenuItem value="51">51</MenuItem>
                                <MenuItem value="52">52</MenuItem>
                                <MenuItem value="53">53</MenuItem>
                                <MenuItem value="54">54</MenuItem>
                                <MenuItem value="55">55</MenuItem>
                                <MenuItem value="56">56</MenuItem>
                                <MenuItem value="57">57</MenuItem>
                                <MenuItem value="58">58</MenuItem>
                                <MenuItem value="59">59</MenuItem>
                            </Select>
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