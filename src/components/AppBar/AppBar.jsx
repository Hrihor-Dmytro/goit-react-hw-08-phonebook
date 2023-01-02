import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../hooks/useAuth';
import { Header } from './AppBar.styled';
import { Theme } from '../Theme/Theme';
export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Theme />
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </div>
  );
};
