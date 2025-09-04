import type { CompanyProps } from "types";
import companies from "static/experiences.json";
import { ComponentItemCard, Text } from "components";
import { FONT_SIZE, FONT_STYLES } from "styles";

import {
  CompanyContainer,
  Container,
  TitleContainer,
} from "./companies.styles";

interface Props {
  companies: CompanyProps[];
}

export function Companies({}: Props) {
  const getFormattedDateRange = (start: string, end?: string) => {
    const startDate = new Date(start).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
    const endDate = end
      ? new Date(end).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
        })
      : "Present";
    return `${startDate} - ${endDate}`;
  };

  return (
    <Container>
      <>
        {companies.map(({ company, experiences, startDate, endDate }) => (
          <CompanyContainer key={company}>
            <TitleContainer>
              <Text.Title
                align="center"
                fontSize="2rem"
                fontStyle={FONT_STYLES.MEDIUM}
              >
                {company}
                <Text.Title
                  style={{ paddingTop: "2px" }}
                  fontSize={FONT_SIZE.REGULAR}
                  fontStyle={FONT_STYLES.REGULAR}
                  color={(theme) => theme.colors.textQuaternary}
                >
                  {getFormattedDateRange(startDate, endDate)}
                </Text.Title>
              </Text.Title>
            </TitleContainer>
            {experiences.map((experience) => (
              <ComponentItemCard
                key={`${experience.position}-${experience.startDate}`}
                position={experience.position}
                period={experience.period}
                location={experience.location}
                skills={experience.skills}
                mainTasks={experience.mainTasks}
                startDate={experience.startDate}
                endDate={experience.endDate}
              />
            ))}
          </CompanyContainer>
        ))}
      </>
    </Container>
  );
}
