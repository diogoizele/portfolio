import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";

import { Languages } from "config/constants";
import { useApp } from "hooks";

import {
  LangSwitchBullet,
  LangSwitchContainer,
  LangSwitchEmojiContainer,
} from "./lang-switch.styles";

interface LangSwitchProps {
  isMenuOpen: boolean;
}

export const LangSwitch = ({ isMenuOpen }: LangSwitchProps) => {
  const { language, strings, onToggleLanguage } = useApp();

  const isEnglish = language === Languages.EN;

  const handleToggle = () => {
    onToggleLanguage();
  };

  return (
    <LangSwitchContainer
      isMenuOpen={isMenuOpen}
      onClick={handleToggle}
      title={`${strings.header.actions.change.language} ${
        !isEnglish
          ? strings.header.actions.lang.en
          : strings.header.actions.lang.pt
      }`}
    >
      <LangSwitchEmojiContainer isEnglish={isEnglish}>
        {isEnglish ? <LiaFlagUsaSolid /> : <GiBrazilFlag />}
      </LangSwitchEmojiContainer>
      <LangSwitchBullet isEnglish={isEnglish} />
    </LangSwitchContainer>
  );
};
