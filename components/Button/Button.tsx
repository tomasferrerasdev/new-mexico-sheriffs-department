import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { MouseEvent } from 'react';

export type Color = 'primary' | 'disabled';

export type Props = {
  children: string;
  color?: Color;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const getColor = (color?: Color): SerializedStyles => {
  switch (color) {
    case 'primary':
      return css`
        background-color: #fdbc0f;
        color: #172634;
      `;
    case 'disabled':
      return css`
        background-color: #c6c6c6;
        color: #475869;
      `;
    default:
      return css``;
  }
};

export const Button = styled.button<Props>`
  all: unset;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  font-size: 1rem;
  max-width: 200px;
  ${({ color }) => getColor(color)}
  border: 1px solid #172634;
  padding: 0.75rem 1rem;
  &:hover {
    opacity: 0.9;
  }
`;

Button.defaultProps = {
  color: 'primary',
};
