import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const navigate = useNavigate();

  const navigateToAboutPage = () => {
    navigate("/about");
  };
  
  return (
    <Box>
      <Typography>HomePage</Typography>
      <Button
        onClick={() => {
          navigateToAboutPage();
        }}
      >
        Click here to go to about page
      </Button>
    </Box>
  );
};
