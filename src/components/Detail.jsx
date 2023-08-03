import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";
import { LangContext } from "@/contexts/LangContext";
export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);

  const sth = () =>{
      if(theme.name === "dark") return lang.detail.darkActivated;
      else return lang.detail.lightActivated;
  }
  return (
    <p className="text-center" style={{ color: theme.fgColor }}>
      {sth()}
      </p>
  );
};
