import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";

export const AboutPage = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <Box>
      <Typography>Hello</Typography>
      <Button
        onClick={() => {
          navigateToHome();
        }}
      >
        click to go back to home page
      </Button>
    </Box>
  );
};
