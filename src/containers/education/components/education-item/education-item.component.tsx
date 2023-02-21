import dayjs from "dayjs";
import { useRef } from "react";

import type { EducationProps } from "types";
import {
  Container,
  EducationInfoContainer,
  EducationItemCourse,
  EducationItemImage,
  EducationItemImageContainer,
  EducationItemPeriod,
} from "./education-item.styles";

interface Props {
  data: EducationProps;

  isSelected: boolean;

  onChange: () => void;
  onGetPosition?: (position: number) => void;
}

export const EducationItem = ({
  isSelected,
  data,
  onChange,
  onGetPosition,
}: Props) => {
  const itemRef = useRef<HTMLButtonElement>(null);
  const imageWidth = 36;

  function handleChange() {
    onChange();

    onGetPosition(itemRef.current.offsetTop);
  }

  return (
    <Container isSelected={isSelected} ref={itemRef} onClick={handleChange}>
      <EducationItemImageContainer isSelected={isSelected}>
        <EducationItemImage
          alt={data.course}
          src={data.image}
          isSelected={isSelected}
          width={imageWidth}
          height={imageWidth}
        />
      </EducationItemImageContainer>

      <EducationInfoContainer>
        <EducationItemPeriod isSelected={isSelected}>
          {dayjs(data.startedAt).year()}
        </EducationItemPeriod>
        <EducationItemCourse isSelected={isSelected}>
          {data.course}
        </EducationItemCourse>
      </EducationInfoContainer>
    </Container>
  );
};
