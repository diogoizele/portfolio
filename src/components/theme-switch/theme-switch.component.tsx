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
  const handleToggle = () => {
    onToggle(mode);
  };

  return (
    <ThemeSwitchContainer
      isMenuOpen={isMenuOpen}
      themeMode={mode}
      onClick={handleToggle}
    >
      <ThemeSwitchEmojiContainer themeMode={mode}>
        {mode === ThemeMode.DARK ? "🌜" : "🌞"}
      </ThemeSwitchEmojiContainer>
      <ThemeSwitchBullet themeMode={mode} />
    </ThemeSwitchContainer>
  );
};
