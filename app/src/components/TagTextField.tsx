import React, { useCallback, useRef } from 'react';
import styled from "@emotion/styled"
import TagIcon from '../icons/tag.svg';
import DropDown from '../icons/drop_down.svg';
import { backgroundLightColor } from './theme'
import { useState } from "react";
import { Tag } from '../data/tag';

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
  z-index: 0;
  box-shadow: 5px 5px 10px #bebebe,
              -5px -5px 10px #ffffff;
`

const Menu = styled.div`
  position: absolute;
  width: 200px;
  top: 42px;
  right: 0;
  background: ${backgroundLightColor};
`

const MenuItem = styled.div`
  width: 100%;
  padding: 6px 10px;
  box-sizing: border-box;
  &:hover {
    background: #cccccc;
  }
  z-index: 999;
  background: ${backgroundLightColor};
  box-shadow: 8px 9px 3px #bebebe;
`

interface Props {
  disabled: boolean;
  tags: Tag[];
  text: string;
  onChange: (tag: string) => void
}
const TagTextField: React.FC<Props> = ({ disabled, tags, text, onChange }) => {
  let canCloseMenu = useRef(false);
  const [ showMenu, toggleMenu ] = useState(false)
  const [ filteredTags, setFilteredTags ] = useState(tags)
  const TextGroup = disabled ? DisableTextGroup : TextBoxGroup;
  const onChangeText = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    onChange(ev.target.value)
    setFilteredTags(tags.filter((t) => t.label.includes(ev.target.value)))
  }, [onChange, tags])
  const onFocus = useCallback(() => {
    toggleMenu(true)
  }, [])
  const onBlur = useCallback(() => {
    if (canCloseMenu.current) {
      toggleMenu(false)
    }
  }, [])
  const onSelectTag = useCallback((tag: Tag) => {
    onChange(tag.label)
    toggleMenu(false)
  }, [onChange])

  const onEnter = useCallback(() => {
    canCloseMenu.current = false;
  }, [])
  const onLeave = useCallback(() => {
    canCloseMenu.current = true;
  }, [])

  return <TextBoxContainer>
      <img src={TagIcon} width="18" height="18" alt="tag"/>
      <TextGroup>
        <TextBox value={text} type="text" onFocus={onFocus} onBlur={onBlur} onChange={disabled ? undefined : onChangeText} />
        <img src={DropDown} width="22" height="22" alt="tag" onClick={() => toggleMenu(!showMenu)}/>
      </TextGroup>
      {
        showMenu &&
          <Menu onMouseEnter={onEnter} onMouseLeave={onLeave}>
            {
              filteredTags.map(tag => {
                return (
                  <MenuItem onClick={() => onSelectTag(tag)}>
                    {tag.label}
                  </MenuItem>
                )
              })
            }
          </Menu>
      }
    </TextBoxContainer>
}

export default TagTextField
