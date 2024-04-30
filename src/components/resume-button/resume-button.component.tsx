import { useTheme } from "styled-components";
import { HiOutlineDocumentDownload } from "react-icons/hi";

import { useApp } from "hooks";
import { URIS } from "config/constants";

import {
  Container,
  ButtonLink,
  IconContainer,
  Text,
} from "./resume-button.styles";

export const ResumeButton = () => {
  const { isDarkMode } = useTheme();
  const { strings } = useApp();

  const { CURRICULUM } = URIS;

  const curriculumLink = isDarkMode ? CURRICULUM.DARK : CURRICULUM.LIGHT;

  return (
    <Container>
      <ButtonLink href={curriculumLink} download="DIOGO-IZELE-CURRICULUM">
        <IconContainer>
          <HiOutlineDocumentDownload
            size={20}
            title={strings.about.presentation.download.description}
          />
        </IconContainer>

        <Text>{strings.about.presentation.download.title}</Text>
      </ButtonLink>
    </Container>
  );
};
