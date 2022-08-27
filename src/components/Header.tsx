import { MouseEvent, useState } from "react";
import ColorModeToggle from "./ColorModeToggle";

const Header = () => {
  const [colorMode, setColorMode] = useState(`dark`);
  const isDark = colorMode === `dark`;

  const toggleColorMode = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  return <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />;
};

export { Header };
