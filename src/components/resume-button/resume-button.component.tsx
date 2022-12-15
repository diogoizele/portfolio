import { HiOutlineDocumentDownload } from "react-icons/hi";

import {
  Container,
  ButtonLink,
  IconContainer,
  Text,
} from "./resume-button.styles";
export const ResumeButton = () => (
  <Container>
    <ButtonLink
      href="https://github.com/diogoizele/DIOGO-IZELE-RESUME/raw/master/DIOGO-IZELE-RESUME.pdf"
      download="DIOGO-IZELE-CURRICULUM"
    >
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
