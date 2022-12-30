import { useTheme } from '../hooks/use-theme';
import { ButtonBox, Buttons } from './Theme.styled';

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
      <p> Current theme: {theme} </p>
      <Buttons type="button" onClick={handleLightThemeClick}>
        Light
      </Buttons>
      <Buttons type="button" onClick={handleDarkThemeClick}>
        Dark
      </Buttons>
    </ButtonBox>
  );
};
