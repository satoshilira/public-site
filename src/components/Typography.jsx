import styled from 'styled-components';
import {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  width,
  margin,
} from 'styled-system';

const Typography = styled.p`
  color: #383b47;
  ${({cursor}) => cursor && `cursor: ${cursor};`}
  ${({textTransform}) => textTransform && `text-transform: ${textTransform};`}
  ${({overflow}) => overflow && `overflow: ${overflow};`}
  ${({textOverflow}) => textOverflow && `text-overflow: ${textOverflow};`}
  ${({wordWrap}) => wordWrap && `word-wrap: ${wordWrap};`}
  ${({whitespace}) => whitespace && `white-space: ${whitespace};`}

  ${lineHeight}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${width}
  ${margin}
`;

export default Typography;
