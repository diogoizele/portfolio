import { IconType } from "react-icons";
import { useTheme } from "styled-components";

import { Text } from "components";
import { Container, LinkContainer } from "./contact-social-media.styles";

interface SocialMediaLinkProps {
  href: string;
  icon: IconType;
  title: string;
}

export const ContactSocialMedia = ({
  href,
  icon: Icon,
  title,
}: SocialMediaLinkProps) => {
  const { colors } = useTheme();

  return (
    <Container>
      <LinkContainer title={title} href={href} target="_blank">
        <Icon size={30} color={colors.primary} />
        <Text.Body>{title}</Text.Body>
      </LinkContainer>
    </Container>
  );
};
