import { Text } from "components";
import { RepositoryProps } from "types";

import { Container } from "./project-card.styles";

interface Props {
  project: RepositoryProps;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <Container>
      <Text.Subtitle component="strong">{project.name}</Text.Subtitle>
      <Text.Body>{project.description}</Text.Body>
      <Text.Body>{project.language}</Text.Body>
      {project.languages_url}
    </Container>
  );
};
