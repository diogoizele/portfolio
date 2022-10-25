import { ThemeMode } from "styles/theme.types";
import {
  ThemeSwitchContainer,
  ThemeSwitchEmojiContainer,
} from "./themeSwitch.styles";

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
      <ThemeSwitchEmojiContainer>
        {mode === ThemeMode.DARK ? "🌜" : "🌞"}
      </ThemeSwitchEmojiContainer>
    </ThemeSwitchContainer>
  );
};
