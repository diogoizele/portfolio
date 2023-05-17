import { useEffect } from "react";

import { ContactSocialMedia, ProjectHeader, Text } from "components";
import { getSocialMediaContent } from "api";
import { FONT_STYLES } from "styles";

import { injectAppIconsAtContentful } from "utils";

import {
  Button,
  Container,
  EmailForm,
  SocialMediaList,
  SocialMedias,
  TextContainer,
} from "../styles/pages/contact.styles";

import type { SocialMediaProps } from "types";

interface Props {
  socialMedias: SocialMediaProps[];
}

export default function Contact({ socialMedias }: Props) {
  const emailAddress = "diogogabrielizele@gmail.com";
  const socialMediaList = injectAppIconsAtContentful(socialMedias);

  function handleSendEmail() {
    const email = `
Hi Diogo 👋 \n
I'm contacting you because...
    `;

    window.open(
      `mailto:${emailAddress}
      ?subject=Contact from diogoizele.com
      &body=${email}
    `,
      "_blank"
    );
  }

  useEffect(() => {}, []);

  return (
    <>
      <ProjectHeader
        title="Diogo Izele - Contact"
        description="How can you contact me"
        keywords="Contact Diogo Izele"
        url="https://diogoizele.com/contact"
      />
      <Container>
        <SocialMedias>
          <Text.Title
            component="h2"
            fontStyle={FONT_STYLES.BOLD}
            fontSize="2rem"
          >
            Where you find me
          </Text.Title>
          <SocialMediaList>
            {socialMediaList.map((socialMedia) => (
              <ContactSocialMedia key={socialMedia.id} {...socialMedia} />
            ))}
          </SocialMediaList>
        </SocialMedias>
        <EmailForm>
          <Text.Title fontStyle={FONT_STYLES.BOLD} fontSize="2.8rem">
            Contact Me
          </Text.Title>
          <TextContainer>
            <Text.Body color={({ colors }) => colors.textSecondary}>
              My inbox is always open for new opportunities. If you have a
              question or just want to say hi, I&apos;ll do my best to get back
              to you!
            </Text.Body>
          </TextContainer>
          <Button onClick={handleSendEmail}>Say Hello</Button>
        </EmailForm>
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const socialMedias = await getSocialMediaContent();

    return {
      props: { socialMedias },
    };
  } catch {
    return {
      props: {},
    };
  }
};
