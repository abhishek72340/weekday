import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          textTransform: "none",
          color: "#4943da",
          fontSize: "1rem",
          fontFamily: " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
          "&:hover": {
            background: "none",
          },
        }}
      >
        Show more
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "1.25rem",
              marginTop: -3,
              fontWeight: 600,
              fontFamily: " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
            }}
          >
            Job Description
          </Typography>
          <Box mt={4}>
            <Typography
              id="modal-modal-title"
              sx={{
                fontSize: 17,
                fontWeight: 600,
                color: "rgba(0,0,0,0.9)",
                fontFamily:
                  " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
              }}
            >
              About Role:
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                color: "rgba(0,0,0,0.7)",
                fontFamily:
                  " __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
              }}
            >
              {item?.jobDetailsFromCompany || "N/A"}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

BasicModal.propTypes = {
  item: PropTypes.object.isRequired,
};
