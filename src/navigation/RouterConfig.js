import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { HomePage } from "../pages/HomePage";
import { ROOT, HOME, ABOUT, STATE } from "./CONSTANTS";
import { NotFound } from "../pages/NotFound";
import { Dashboard } from "../pages/Dashboard";
import { Provider } from "react-redux";
import { StatePage } from "../pages/StatePage";
import { stateStore, todoStore } from "../redux/store";

export const RouterConfig = () => {
  return (
    <Box>
      <Routes>
        <Route exact path={HOME} Component={HomePage} />
        <Route exact path={ABOUT} Component={AboutPage} />
        <Route
          exact
          path={ROOT}
          Component={() => (
            <Provider store={todoStore}>
              <Dashboard />
            </Provider>
          )}
        />
        <Route
          exact
          path={STATE}
          Component={() => (
            <Provider store={stateStore}>
              <StatePage />
            </Provider>
          )}
        />
        {/* 404 page */}
        <Route path="*" Component={NotFound}></Route>
      </Routes>
    </Box>
  );
};
