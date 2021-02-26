import React from 'react';
import styled from "@emotion/styled"
import TagIcon from '../icons/tag.svg';
import DropDown from '../icons/drop_down.svg';
import { backgroundColor } from './theme'
import { useState } from "react";

const textBoxSize = 200;
const fontSize = 14;

const TextBoxGroup = styled.div`
    box-sizing: border-box;
    width: ${textBoxSize}px;
    font-size: ${fontSize}px;
    justify-content: start;
    display: flex;
    padding: 6px 10px;
    box-shadow: inset 5px 5px 10px #bebebe,
              inset -5px -5px 10px #ffffff;
`

const TextBox = styled.input`
  width: ${textBoxSize}px;
  background: transparent;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`

const DisableTextGroup = styled.span`
  padding: 6px 10px;
  display: flex;
  box-sizing: border-box;
  font-size: ${fontSize}px;
  width: ${textBoxSize}px;
  text-align: left;
`

const TextBoxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 3px;
  box-shadow: 5px 5px 10px #bebebe,
              -5px -5px 10px #ffffff;
`

const Menu = styled.div`
  position: absolute;
  width: 150px;
  top: 42px;
  background: ${backgroundColor};
`

const MenuItem = styled.div`
  width: 100%;
  padding: 6px 10px;
  &:hover {
    background: #cccccc;
  }
  box-shadow: 8px 9px 3px #bebebe;
`

interface Props {
  disabled: boolean;
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
const TagTextField: React.FC<Props> = ({ disabled, text, onChange }) => {
  const [ showMenu, toggleMenu ] = useState(false)
  const TextGroup = disabled ? DisableTextGroup : TextBoxGroup;

  return <TextBoxContainer>
      <img src={TagIcon} width="18" height="18" alt="tag"/>
      <TextGroup>
        <TextBox value={text} type="text" id="fname" name="fname" onChange={disabled ? undefined : onChange} />
        <img src={DropDown} width="22" height="22" alt="tag" onClick={() => toggleMenu(!showMenu)}/>
      </TextGroup>
      {
        showMenu &&
          <Menu>
            <MenuItem>
              aaaaaa
            </MenuItem>
          </Menu>
      }
    </TextBoxContainer>
}

export default TagTextField
