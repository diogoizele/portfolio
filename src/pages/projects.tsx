import { getReposByIdsOrNames } from "api";
import { ProjectCard, ProjectHeader } from "components";

import { Container, Title, List } from "styles/pages/projects.styles";
import { RepositoryProps } from "types";

interface Props {
  repositories: RepositoryProps[];
}

export default function Projects({ repositories }: Props) {
  return (
    <>
      <ProjectHeader
        title="Diogo Izele - Projects"
        description="A list of projects that Diogo Izele has worked on"
        keywords="Projects Diogo Izele"
        url="https://diogoizele.com/projects"
      />
      <Container>
        <Title>Projects.</Title>
        <List>
          {repositories.map((repo) => (
            <ProjectCard project={repo} key={repo.id} />
          ))}
        </List>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  try {
    const repositories = await getReposByIdsOrNames([
      "portfolio",
      "gofinance",
      "github-users",
      "character-creator",
      "minha-grana",
      "user-register-java",
      "landing-page-teufuturo2021",
      "Freeway",
      "Flyt",
      "fruta-e-fruto",
      "book-crud",
    ]);

    return {
      props: { repositories },
      revalidate: 60 * 60 * 24, // 24 hours
    };
  } catch {
    return {
      props: {},
    };
  }
}
