import { useTheme } from "styled-components";
import { Text } from "..";
import {
  CompanyLogo,
  Container,
  Header,
  HeaderInfo,
  Content,
} from "./company-card.styles";

interface Props {
  name: string;
  role: string;
  period: string;
  description: string;
  image: string;
  link: string;
}

export function CompanyCard({
  name,
  role,
  period,
  description,
  image,
  link,
}: Props) {
  const theme = useTheme();

  return (
    <Container href={link} target="_blank">
      <Header>
        <CompanyLogo alt={name} src={image} />
        <HeaderInfo>
          <Text.Title component="h2" fontSize="1.2rem">
            {role}
          </Text.Title>
          <Text.Subtitle fontSize="1.1rem">{name}</Text.Subtitle>
          <Text.Body color={theme.colors.textQuaternary}>{period}</Text.Body>
        </HeaderInfo>
      </Header>
      <Content>
        <Text.Body color={theme.colors.textPrimary}>{description}</Text.Body>
      </Content>
    </Container>
  );
}
