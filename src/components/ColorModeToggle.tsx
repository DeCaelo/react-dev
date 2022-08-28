import { MouseEvent, useContext } from 'react';
import { ThemeContext } from '../context/theme-context';
import styled from 'styled-components';
import { colors } from '../constants/Colors';

const ColorModeToggleButton = styled.button`
  opacity: 0.65;
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  padding: 0;
  appearance: none;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const ColorModeToggle = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const isDark = state.value === true;

  const ColorModeToggleIcon = styled.div`
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: ${isDark ? `4px solid #fbbf24` : `none`};
    background-color: ${isDark ? `#fbbf24` : `transparent`};
    transform: ${isDark ? `scale(0.55)` : `scale(1)`};
    transition: all 0.45s ease;
    overflow: ${isDark ? `visible` : `hidden`};
    box-shadow: ${isDark
      ? `none`
      : `inset 8px -8px 0px 0px ${colors.light.moon}`};
    &:before {
      content: '';
      position: absolute;
      right: -9px;
      top: -9px;
      height: 24px;
      width: 24px;
      border: ${isDark ? `2px solid ${colors.dark.toggleIcon}` : `none`};
      border-radius: 50%;
      transform: ${isDark ? `translate(14px, -14px)` : `translate(0, 0)`};
      opacity: ${isDark ? 0 : 1};
      transition: transform 0.45s ease;
    }
    &:after {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin: -4px 0 0 -4px;
      position: absolute;
      top: 50%;
      left: 50%;
      box-shadow: 0 -23px 0 #fbbf24, 0 23px 0 #fbbf24, 23px 0 0 #fbbf24,
        -23px 0 0 #fbbf24, 15px 15px 0 #fbbf24, -15px 15px 0 #fbbf24,
        15px -15px 0 #fbbf24, -15px -15px 0 #fbbf24;
      transform: ${isDark ? `scale(1)` : `scale(0)`};
      transition: all 0.35s ease;
    }
  `;

  return (
    <ColorModeToggleButton
      onClick={() =>
        isDark
          ? dispatch({
              type: 'LIGHTMODE',
              payload: false,
            })
          : dispatch({
              type: 'DARKMODE',
              payload: true,
            })
      }
      type="button"
      aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
      title={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
    >
      <ColorModeToggleIcon />
    </ColorModeToggleButton>
  );
};

export default ColorModeToggle;
