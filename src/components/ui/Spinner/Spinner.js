import { useContext } from "react";
import "./Spinner.css";
import { ThemeContext } from "../../../services/theme/theme.context";

const Spinner = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`spinner ${theme === "dark" && "dark-theme-spinner"}`} />
  );
};

export default Spinner;
