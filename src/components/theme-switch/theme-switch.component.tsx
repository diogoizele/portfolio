import { MdLightMode, MdModeNight } from "react-icons/md";

import { useApp } from "hooks";

import { ThemeMode } from "styles/theme.types";
import {
  ThemeSwitchBullet,
  ThemeSwitchContainer,
  ThemeSwitchEmojiContainer,
} from "./theme-switch.styles";

interface ThemeSwitchProps {
  mode: ThemeMode;
  isMenuOpen: boolean;
  onToggle: (mode: ThemeMode) => void;
}

export const ThemeSwitch = ({
  mode = ThemeMode.DARK,
  isMenuOpen,
  onToggle,
}: ThemeSwitchProps) => {
  const { strings } = useApp();

  const handleToggle = () => {
    onToggle(mode);
  };

  return (
    <ThemeSwitchContainer
      isMenuOpen={isMenuOpen}
      onClick={handleToggle}
      title={`${strings.header.actions.change.theme} ${
        mode === ThemeMode.DARK
          ? strings.header.actions.theme.light
          : strings.header.actions.theme.dark
      }`}
    >
      <ThemeSwitchEmojiContainer>
        {mode === ThemeMode.DARK ? <MdModeNight /> : <MdLightMode />}
      </ThemeSwitchEmojiContainer>
      <ThemeSwitchBullet />
    </ThemeSwitchContainer>
  );
};
