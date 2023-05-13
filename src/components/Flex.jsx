import styled from 'styled-components';
import {
  flexbox,
  margin,
  padding,
  height,
  width,
  background,
  color,
  boxShadow,
  borderRadius,
  border,
  position,
  minHeight,
  minWidth,
  maxWidth,
  maxHeight,
  display,
  overflow,
} from 'styled-system';


const Flex = styled.div`
  display: flex;
  ${({cursor}) => cursor && `cursor: ${cursor};`}
  background: ${(props) =>
    props.background ? `url(${props.background})` : null};
  ${(props) =>
    props.borderTopRightRadius &&
    `border-top-right-radius:${props.borderTopRightRadius}px`};
  ${(props) =>
    props.borderTopLeftRadius &&
    `border-top-left-radius:${props.borderTopLeftRadius}px`};

  ${flexbox}
  ${margin}
  ${padding}
  ${height}
  ${width}
  ${background}
  ${color}
  ${boxShadow}
  ${borderRadius}
  ${border}
  ${position}
  ${minHeight}
  ${minWidth}
  ${maxWidth}
  ${maxHeight}
  ${display}
  ${overflow}
`;

export default Flex;
