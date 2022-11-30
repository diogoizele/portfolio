import { Text } from "..";
import {
  CompanyLogo,
  Container,
  Header,
  HeaderInfo,
  LeftSize,
  RightSize,
} from "./company-card.styles";

interface Props {
  name: string;
  role: string;
  period: string;
  description: string;
  image: string;
  link: string;
}

export function CompanyCard({ name, role, period, description, image }: Props) {
  return (
    <Container>
      <Header>
        <CompanyLogo alt={name} src={image} />
        <HeaderInfo>
          <Text.Title component="h2" fontSize="1.1rem">
            {role}
          </Text.Title>
          <Text.Subtitle fontSize="1.1rem">{name}</Text.Subtitle>
        </HeaderInfo>
      </Header>
      <RightSize></RightSize>
      <LeftSize></LeftSize>
    </Container>
  );
}
