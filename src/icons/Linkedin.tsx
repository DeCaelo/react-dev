/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';

type LinkedinProps = {
  isDark: boolean;
};

const Linkedin = ({ isDark }: LinkedinProps) => {
  const StyledSvg = styled.svg`
    filter: drop-shadow(0 0 0.75rem rgb(40, 103, 178));

    &:hover {
      fill: 'rgb(40,103,178)';
    }
  `;

  return (
    <StyledSvg
      width={40}
      height={40}
      viewBox="0 0 24 24"
      fill={isDark ? '#fff' : 'black'}
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16H8v-6h2v6zM9 9.109c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zM17 16h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0V16h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548V16z" />
    </StyledSvg>
  );
};

export default Linkedin;