import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addState } from "../redux/store/slices/statesSlice";

export const StatePage = () => {
  const stateInputRef = useRef(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const list = useSelector((state) => {
    return state.todoList;
  });

  const getList = () => {
    console.log(list);
  };

  return (
    <Box>
      <Typography>State Page</Typography>
      <span>
        <TextField
          style={{ backgroundColor: "whitesmoke" }}
          inputRef={stateInputRef}
        ></TextField>
        <Button
          style={{ margin: "0.5vw", backgroundColor: "whitesmoke" }}
          onClick={() => {
            console.log(stateInputRef.current.value);
            dispatch(addState(stateInputRef.current.value));
            stateInputRef.current.value = null;
          }}
        >
          add
        </Button>
      </span>
      <Box>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Dashboard
        </Button>

        <Button
          onClick={() => {
            getList();
          }}
        >
          getList
        </Button>
      </Box>
    </Box>
  );
};
