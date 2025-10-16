import { FiGithub, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";

import { Container, SocialMediaAnchor } from "./socialMedia.styles";
import { useLiquidGlass } from "../../hooks";
import { useTheme } from "styled-components";

interface SocialMediaLinkProps {
  href: string;
  icon: React.ReactNode;
  title: string;
}

const ICONS_SIZE = 30;

const SocialMediaLink = ({ href, icon, title }: SocialMediaLinkProps) => {
  const theme = useTheme();
  const glassStyle = useLiquidGlass({
    borderRadius: 16,
    alpha: 0.4,
background: false,
  });

  return (
    <SocialMediaAnchor style={glassStyle} title={title} href={href} target="_blank">
      {icon}
    </SocialMediaAnchor>
  );
};

export const SocialMedia = () => {
  const glassStyle = useLiquidGlass({
    alpha: 0.0,
    blur: 20,
    saturation: 180,
  });

  return (
    <Container style={glassStyle}>
      <SocialMediaLink
        href="https://github.com/diogoizele"
        icon={<FiGithub size={ICONS_SIZE} />}
        title="GitHub"
      />
      <SocialMediaLink
        href="https://www.linkedin.com/in/diogoizele/"
        icon={<FiLinkedin size={ICONS_SIZE} />}
        title="LinkedIn"
      />
      {/* <SocialMediaLink
        href="https://twitter.com/diogoizele"
        icon={<FiTwitter size={ICONS_SIZE} />}
        title="Twitter"
      /> */}
      <SocialMediaLink
        href="https://www.youtube.com/@diogoizele"
        icon={<FiYoutube size={ICONS_SIZE} />}
        title="YouTube"
      />
    </Container>
  );
};
