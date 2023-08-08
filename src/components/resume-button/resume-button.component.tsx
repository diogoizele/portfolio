import { useTheme } from "styled-components";
import { HiOutlineDocumentDownload } from "react-icons/hi";

import { URIS } from "config/constants";

import {
  Container,
  ButtonLink,
  IconContainer,
  Text,
} from "./resume-button.styles";

export const ResumeButton = () => {
  const { isDarkMode } = useTheme();
  const { CURRICULUM } = URIS;

  const curriculumLink = isDarkMode ? CURRICULUM.DARK : CURRICULUM.LIGHT;

  return (
    <Container>
      <ButtonLink href={curriculumLink} download="DIOGO-IZELE-CURRICULUM">
        <IconContainer>
          <HiOutlineDocumentDownload
            size={20}
            title="Download Diogo Izele's Resume PDF"
          />
        </IconContainer>

        <Text>Download Resume</Text>
      </ButtonLink>
    </Container>
  );
};
