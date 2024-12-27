import { useEffect, useRef } from "react";
import { useLogin } from "@refinedev/core";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";
import useMeasure from "react-use-measure";
import "../index.css";
import "./login.css";
import { CredentialResponse } from "../interfaces/google";

import { useNavigate } from "react-router-dom";
import { useTable } from "@refinedev/core";

import React from "react";

import { useMemo } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Login: React.FC = () => {
  const [ref, { height }] = useMeasure();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  window.onload = handleClick;

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
      if (typeof window === "undefined" || !window.google || !divRef.current) {
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
      "field" in item ? item : []
    );
    return {
      title: logicalFilters.find((item) => item.field === "title")?.value || "",
      propertyType:
        logicalFilters.find((item) => item.field === "propertyType")?.value ||
        "",
      dropLocation:
        logicalFilters.find((item) => item.field === "dropLocation")?.value ||
        "",
      location:
        logicalFilters.find((item) => item.field === "location")?.value || "",
      date: logicalFilters.find((item) => item.field === "date")?.value || "",
    };
  }, [filters]);

  return (
    <Box sx={{ width: "100%", mb: "2rem" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <GoogleButton />
      </Box>
    </Box>
  );
};
