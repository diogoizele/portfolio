import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import { EntryCollection } from "contentful";

import { Text } from "components";

import { EducationItem } from "./components";
import {
  Container,
  EducationDetailContainer,
  SelecterContainer,
  SelecterIndicator,
  ImageContainer,
  InfoContainer,
  InstituteImage,
  Header,
} from "./education.styles";

import type { EducationProps } from "types";

interface Props {
  education: EntryCollection<EducationProps>;
}

export const Education = ({ education }: Props) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [positionY, setPositionY] = useState(0);

  const formattedEducation = education?.items?.map(({ fields }) => fields);

  const currentItem = formattedEducation[selectedItem];
  const imageWidth = 216;
  const itemDate = `${dayjs(currentItem.startedAt).format("MMM YYYY")} - ${
    dayjs().isBefore(dayjs(currentItem.finishedAt))
      ? "Present"
      : dayjs(currentItem.finishedAt).format("MMM YYYY")
  }`;

  function handleSelectItem(index: number) {
    setSelectedItem(index);
  }

  function handleGetItemPosition(position: number) {
    setPositionY(position);
  }

  return (
    <Container>
      <SelecterContainer>
        {formattedEducation.map((item, i) => (
          <EducationItem
            key={item.id}
            data={item}
            isSelected={selectedItem === i}
            onChange={() => handleSelectItem(i)}
            onGetPosition={handleGetItemPosition}
          />
        ))}
        <SelecterIndicator positionY={positionY} />
      </SelecterContainer>
      <EducationDetailContainer>
        <Header>
          <ImageContainer>
            <InstituteImage
              width={imageWidth}
              height={imageWidth}
              alt={currentItem.course}
              src={currentItem.image}
            />
          </ImageContainer>
          <InfoContainer>
            <Text.Title component="h3" fontSize="2rem" fontStyle="bold">
              {currentItem.course}
            </Text.Title>
            <Text.Subtitle
              component="strong"
              color={({ colors }) => colors.textSecondary}
              fontSize="1.5rem"
              fontStyle={600}
            >
              <Link href={currentItem.link} target="_blank">
                {currentItem.institution}
              </Link>
            </Text.Subtitle>
            <Text.Body
              component="p"
              fontSize="1.1rem"
              color={({ colors }) => colors.textTertiary}
            >
              {itemDate}
            </Text.Body>
          </InfoContainer>
        </Header>
        <Text.Body
          color={({ colors }) => colors.textTertiary}
          align="justify"
          style={{
            lineHeight: "1.2rem",
          }}
        >
          {currentItem.description}
        </Text.Body>
      </EducationDetailContainer>
    </Container>
  );
};
