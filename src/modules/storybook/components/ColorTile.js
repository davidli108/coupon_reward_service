// @flow
import { readableColor } from 'polished';
import React, { useRef } from 'react';
import styled from 'styled-components';

type ColorTileProps = {
  color: string,
  label: string,
  name: string,
  onCopy: ?(string, string) => void,
};

const ColorTile = ({ color, label, name, onCopy }: ColorTileProps) => {
  const colorValueRef = useRef(null);

  return (
    <ColorTile.Container
      ref={colorValueRef}
      data-clipboard-text={`\${props => props.theme.colors.${name}}`}
      color={color}
    >
      <ColorTile.Label>{label}</ColorTile.Label>
      <ColorTile.Value>{color}</ColorTile.Value>
      <ColorTile.CopyLabel>Copy</ColorTile.CopyLabel>
    </ColorTile.Container>
  );
};

ColorTile.defaultProps = {
  color: '#000',
  label: 'Black',
  name: 'black',
  onCopy: null,
};

ColorTile.Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 150px;
  width: 200px;
  padding: 20px;
  margin: 10px;
  box-sizing: border-box;
  color: ${props => readableColor(props.color)};
  background: ${props => props.color};
  border: solid 1px #bdbbb9;
  border-radius: 2px;
  font-family: Roboto, sans-serif;
  cursor: pointer;

  &:hover label {
    opacity: 1;
  }
`;

ColorTile.Label = styled.p`
  margin: 0 0 10px;
  font-weight: bold;
`;

ColorTile.Value = styled.p`
  margin: 0;
`;

ColorTile.CopyLabel = styled.label`
  position: absolute;
  top: 20px;
  right: 20px;
  opacity: 0;
  transition: 0.3s all;
`;

export default ColorTile;
