import { useTheme } from '../hooks/use-theme';
import {
  ButtonBox,
  Buttons,
  ButtonsContainer,
  PContainer,
} from './Theme.styled';

export const Theme = () => {
  const { theme, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme('light');
  };
  const handleDarkThemeClick = () => {
    setTheme('dark');
  };
  return (
    <ButtonBox>
      <PContainer> Current theme: {theme} </PContainer>
      <ButtonsContainer>
        <Buttons type="button" onClick={handleLightThemeClick}>
          Light
        </Buttons>
        <Buttons type="button" onClick={handleDarkThemeClick}>
          Dark
        </Buttons>
      </ButtonsContainer>
    </ButtonBox>
  );
};
