import { useState, useEffect, useContext } from "react";
import {
  Button,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Paper,
  TextField,
  Typography,
  Modal,
  Slider,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Checkbox,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { SetPopupContext } from "../App";
import isAuth, { userType } from "../lib/isAuth";
import apiList from "../lib/apiList";

const Users = (props) => {
    const { application, getData } = props;
    const setPopup = useContext(SetPopupContext);

    return (
      <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h5">Page Utilisateurs En Construction </Typography>
      </Grid>
      <Grid item>
        <div className="animationDiv"></div>
      </Grid>
    </Grid>
    );
  };
  
  

export default Users;
