import PropTypes from "prop-types";
import BasicModal from "./../../Components/Modal/Modal";
import { Tooltip, Box, Typography, Button, Stack } from "@mui/material";

export default function JdCard({ item, key }) {
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return `${words.slice(0, limit).join(" ")} ${words.slice(-50).join(" ")}`;
    }
    return text;
  };

  return (
    <Box>
      <Box
        variant="outlined"
        key={key}
        sx={{
          maxWidth: "100%",
          margin: "1rem",
          boxShadow: "0 0 4px 0.1px lightgray",
          borderRadius: "25px",
          padding: 2,
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
          ⏳Posted 10 days ago
        </Typography>

        <Stack direction="row" gap={2} color="text.secondary">
          <img src={item?.logoUrl} width={20} alt="logo" />
          <Typography>{item?.companyName}</Typography>
        </Stack>
        <Typography
          sx={{
            fontFamily: " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
          }}
        >
          {item?.jobRole || "N/A"}
        </Typography>
        <Typography
          sx={{
            fontFamily: " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
          }}
        >
          {item?.location || "N/A"}
        </Typography>
        <Typography
          sx={{
            fontFamily: " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
          }}
        >
          Estimated Salary: ₹{item?.minJdSalary || "NA"} -
          {item?.maxJdSalary || "N/A"} LPA{" "}
          <Tooltip title="Offered salary range" placement="top">
            ✅
          </Tooltip>
        </Typography>
        <Typography
          fontSize={16}
          color={"rgba(0, 0, 0, 0.7)"}
          fontWeight={600}
          sx={{
            fontFamily: " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
          }}
        >
          About Role:
        </Typography>
        <Typography
          sx={{
            fontFamily: " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
          }}
        >
          {truncateText(item?.jobDetailsFromCompany, 9)}
          <span style={{ color: "rgba(0, 0, 0, 0.3)" }}>
            {item?.jobDetailsFromCompany.length > 100 ? "" : ""}
          </span>
        </Typography>

        <Stack textAlign="center">
          <BasicModal item={item} />
        </Stack>
        <Typography
          color={"rgba(0, 0, 0, 0.5)"}
          fontSize={15}
          fontWeight={600}
          sx={{
            fontFamily: " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
          }}
        >
          Minimum Experience:
        </Typography>
        <Typography
          sx={{
            fontFamily: " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
          }}
        >
          {item?.minExp || "N/A"} Years
        </Typography>

        <Stack gap={2}>
          <Button
            sx={{
              width: "100%",
              color: "black",
              backgroundColor: "rgb(85, 239, 196)",
              padding: 1.2,
              borderRadius: 3,
              fontSize: 16,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgb(85, 239, 196)",
              },
              fontFamily: " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
            }}
          >
            Easy Apply
          </Button>
          <Button
            sx={{
              width: "100%",
              color: "white",
              backgroundColor: "rgb(73, 67, 218)",
              padding: 1.2,
              borderRadius: 3,
              fontSize: 16,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgb(73, 67, 218)",
              },
              fontFamily: " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
            }}
          >
            Ask for referral
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

JdCard.propTypes = {
  item: PropTypes.object.isRequired,
  key: PropTypes.number.isRequired,
};
