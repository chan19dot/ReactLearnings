import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addTodo } from "../redux/store/slices/todoSlice";

export const Dashboard = () => {
  const inputTodo = useRef("abcd");
  // const [todo, setTodo] = useState("");
  // const [todoList, setTodoList] = useState(["How are you?"]);
  // const handleChange = (evt) => {
  //   // setTodo(evt.target.value);
  // };
  // const addToTodoList = () => {
  //   setTodoList([...todoList, todo]);
  //   setTodo("");
  // };

  const navigate = useNavigate();

  const handleAddToDo = () => {
    dispatch(addTodo(inputTodo.current.value));
    inputTodo.current.value = "";
  };
  const dispatch = useDispatch();
  const todoList = useSelector((state) => {
    return state.todoList;
  });

  return (
    <Box>
      <Typography>Dashboard for TODO ITEMS</Typography>
      <Box>
        <Typography>Enter TODO List</Typography>
        <span>
          <TextField
            style={{ backgroundColor: "rgb(245, 222, 179)" }}
            inputRef={inputTodo}
            variant="outlined"
          />
          <Button
            style={{ backgroundColor: "rgb(245, 222, 179)", margin: "0.5vw" }}
            onClick={() => {
              handleAddToDo();
            }}
          >
            add
          </Button>
        </span>
      </Box>
      <Box>
        <Typography>The list</Typography>
        <ul>
          {todoList.map((todo) => {
            return <li key={todo}>{todo}</li>;
          })}
        </ul>
      </Box>
      <Button
        style={{ backgroundColor: "rgb(245, 222, 179)", margin: "0.5vw" }}
        onClick={() => {
          navigate("/state");
        }}
      >
        navigate to state
      </Button>
    </Box>
  );
};
