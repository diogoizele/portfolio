import { FiGithub, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";

import { Container, SocialMediaAnchor } from "./socialMedia.styles";

interface SocialMediaLinkProps {
  href: string;
  icon: React.ReactNode;
  title: string;
}

const ICONS_SIZE = 30;

const SocialMediaLink = ({ href, icon, title }: SocialMediaLinkProps) => {
  return (
    <SocialMediaAnchor title={title} href={href} target="_blank">
      {icon}
    </SocialMediaAnchor>
  );
};

export const SocialMedia = () => {
  return (
    <Container>
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
