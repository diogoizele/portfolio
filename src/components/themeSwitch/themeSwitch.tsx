import { ThemeMode } from "styles/theme.types";
import {
  ThemeSwitchContainer,
  ThemeSwitchEmojiContainer,
} from "./themeSwitch.styles";

interface ThemeSwitchProps {
  mode: ThemeMode;
  onToggle: (mode: ThemeMode) => void;
}

export const ThemeSwitch = ({
  mode = ThemeMode.DARK,
  onToggle,
}: ThemeSwitchProps) => {
  const handleToggle = () => {
    onToggle(mode);
  };

  return (
    <ThemeSwitchContainer themeMode={mode} onClick={handleToggle}>
      <ThemeSwitchEmojiContainer>
        {mode === ThemeMode.DARK ? "🌜" : "🌞"}
      </ThemeSwitchEmojiContainer>
    </ThemeSwitchContainer>
  );
};
