import { HomeInfo, Greeting } from './HomePage.styled';

export default function Home() {
  // const { isLoggedIn } = useAuth();
  return (
    <HomeInfo>
      <Greeting>Your PhoneBook App</Greeting>
    </HomeInfo>
  );
}
