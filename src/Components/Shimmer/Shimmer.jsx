import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function Media({ data }) {
  return (
    <Grid container>
      <Grid item container xs={12}>
        {Array.from(new Array(data?.length)).map((_, index) => (
          <Grid key={index} container item xs={12} sm={6} md={4}>
            <Box sx={{ width: "100%", padding: 2 }}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "100%", height: 500, borderRadius: 5 }}
              />
              <Box sx={{ pt: 1 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default function Shimmer({ data }) {
  return (
    <Box
      sx={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Media data={data} />
    </Box>
  );
}

Shimmer.propTypes = {
  data: PropTypes.object.isRequired,
};
Media.propTypes = {
  data: PropTypes.object.isRequired,
};
