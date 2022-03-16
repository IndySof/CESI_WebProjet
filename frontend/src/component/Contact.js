import { Grid, Typography } from "@material-ui/core";

const Contact = (props) => {
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
        <Typography variant="h5">Bienvenue sur CesiJobs ! </Typography>
      </Grid>
    </Grid>
  );
};


export default Contact;