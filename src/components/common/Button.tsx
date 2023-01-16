import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  children: ReactNode;
  width?: string;
  height?: string;
  bgColor?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  onClick?: any;
  display?: any;
  margin?: string;
  fontFamily?: string;
  color?: string;
}

const Button = ({
  children,
  width,
  height,
  bgColor,
  borderRadius,
  fontSize,
  onClick,
  fontWeight,
  display,
  margin,
  fontFamily,
  color,
}: ButtonProps) => {
  return (
    <Btn
      width={width}
      height={height}
      bgColor={bgColor}
      borderRadius={borderRadius}
      fontSize={fontSize}
      fontWeight={fontWeight}
      onClick={() => onClick()}
      display={display}
      margin={margin}
      fontFamily={fontFamily}
      color={color}
    >
      {children}
    </Btn>
  );
};

const Btn = styled.button<ButtonProps>`
  margin: ${({ margin }) => (margin ? margin : '10px')};
  border: none;
  cursor: pointer;
  user-select: none;
  width: ${({ width }) => (width ? width : '100px')};
  height: ${({ height }) => (height ? height : '30px')};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '10px'};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'lightgray')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '15px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : 'NanumSquare')};
  color: ${({ color }) => (color ? color : 'black')};
  display: ${({ display }) => (display ? display : 'inline-block')};
  align-items: center;
  justify-content: center;
  &:hover {
    filter: brightness(95%);
  }
`;

export default Button;
