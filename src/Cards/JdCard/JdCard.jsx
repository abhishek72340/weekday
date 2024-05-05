import PropTypes from "prop-types";
import BasicModal from "./../../Components/Modal/Modal";
import { Tooltip, Box, Typography, Button, Stack, Grid } from "@mui/material";

export default function JdCard({ item, key }) {
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return `${words.slice(0, limit).join(" ")} ${words.slice(-50).join(" ")}`;
    }
    return text;
  };

  return (
    <Grid item xs={12} sm={6} md={4} sx={{ width: "100%" }}>
      <Box
        variant="outlined"
        key={key}
        sx={{
          maxWidth: "100%",
          margin: "1rem",
          boxShadow: "0 0 4px 0.1px lightgray",
          borderRadius: "25px",
          padding: 3,
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.01)",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 10,
            display: "inline",
            boxShadow: "0 0 0 0.4px lightgray",
            padding: "4px",
            borderRadius: "10px",

            fontFamily: " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
          }}
          color="text.secondary"
          gutterBottom
        >
          ⏳Posted {item.minExp + 1} days ago
        </Typography>

        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          color="text.secondary"
        >
          <img src={item?.logoUrl} width={40} height={40} alt="logo" />
          <Box>
            <Typography mt={3}>{item?.companyName}</Typography>
            <Typography
              sx={{
                fontFamily:
                  " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
                fontSize: 17,
                color: "black",
              }}
            >
              {item?.jobRole || "N/A"}
            </Typography>
            <Typography
              sx={{
                fontFamily:
                  " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
                fontSize: 14,
              }}
            >
              {item?.location || "N/A"}
            </Typography>
          </Box>
        </Stack>

        <Typography
          sx={{
            color: "rgba(0,0,0,0.7)",
            fontWeight: 600,
            fontSize: 14,
            margin: "5px 0 13px 0",
          }}
        >
          Estimated Salary: ₹
          {item?.minJdSalary ? <span>{item?.minJdSalary}-</span> : null}
          {item?.maxJdSalary || null} LPA{" "}
          <Tooltip title="Offered salary range" placement="top">
            ✅
          </Tooltip>
        </Typography>
        <Typography fontSize={15} color={"rgba(0, 0, 0, 0.8)"} fontWeight={600}>
          About Role:
        </Typography>
        <Typography
          sx={{
            fontFamily: " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
          }}
        >
          {truncateText(item?.jobDetailsFromCompany, 4)}
          <span style={{ color: "rgba(0, 0, 0, 0.3)" }}>
            {item?.jobDetailsFromCompany.length > 100
              ? " Ipsum passages and now in this assignment Lorem Ipsum passages and now in this... "
              : ""}
          </span>
        </Typography>

        <Stack textAlign="center" mt={-2.2}>
          <BasicModal item={item} />
        </Stack>
        <Typography
          color={"rgba(0, 0, 0, 0.5)"}
          fontSize={13}
          fontWeight={600}
          mt={3}
          sx={{ letterSpacing: "1px" }}
        >
          Minimum Experience
        </Typography>
        <Typography
          sx={{
            fontFamily: " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
          }}
        >
          {item?.minExp || 0}
          {-item?.maxExp || null} Years
        </Typography>

        <Stack gap={2} mt={2}>
          <Button
            sx={{
              width: "100%",
              color: "black",
              backgroundColor: "rgb(85, 239, 196)",
              padding: 1.2,
              borderRadius: 2,
              fontSize: 16,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgb(85, 239, 196)",
              },
            }}
          >
            ⚡ Easy Apply
          </Button>
          <Button
            sx={{
              width: "100%",
              color: "white",
              backgroundColor: "rgb(73, 67, 218)",
              padding: 1.2,
              borderRadius: 2,
              fontSize: 16,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgb(73, 67, 218)",
              },
            }}
          >
            🙎🏻‍♂️ Ask for referral
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
}

JdCard.propTypes = {
  item: PropTypes.object.isRequired,
  key: PropTypes.number.isRequired,
};
