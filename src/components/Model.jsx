import {
  Avatar,
  Button,
  Modal,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

// * emoji icons
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import DirtyLensIcon from "@mui/icons-material/DirtyLens";

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Model = ({ opens, setOpens }) => {
  return (
    <>
      <Modal
        open={opens}
        onClose={() => setOpens(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
           bgcolor={"background.default"}
            color={"text.primary"}
          sx={{
            width: 420,
            height: 310,
            padding: 3,
         
            borderRadius: "5px",
          }}
        >
          <Typography variant="h6" color={"gray"} textAlign="center">
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_960_720.jpg"
            />

            <Typography fontWeight={300} variant={"span"}>
              Adil Younas
            </Typography>
          </UserBox>

          <TextField
            sx={{
              width: "100%",
            }}
            multiline
            rows={3}
            placeholder="What's in your mind"
            variant="standard"
          />
          <Stack p={1} direction={"row"} gap={1}>
            <FaceRetouchingNaturalIcon color="success" />
            <MoodBadIcon color="secondary"  />
            <EmojiNatureIcon color="primary" />
            <SentimentSatisfiedAltIcon color="info"  />
            <DirtyLensIcon color="error" />
          </Stack>
          <Button variant="contained" sx={{
        width:"100%",
        marginTop:"15px"
          }}>Post</Button>
        </Box>
      </Modal>
    </>
  );
};

export default Model;
