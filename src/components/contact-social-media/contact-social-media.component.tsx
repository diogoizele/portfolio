import { IconType } from "react-icons";
import { useTheme } from "styled-components";

import { Text } from "components";
import { Container, LinkContainer } from "./contact-social-media.styles";

interface SocialMediaLinkProps {
  link: string;
  icon: IconType;
  name: string;
}

export const ContactSocialMedia = ({
  link,
  icon: Icon,
  name,
}: SocialMediaLinkProps) => {
  const { colors } = useTheme();

  return (
    <Container>
      <LinkContainer title={name} href={link} target="_blank">
        {Icon && <Icon size={30} color={colors.primary} />}
        <Text.Body>{name}</Text.Body>
      </LinkContainer>
    </Container>
  );
};
