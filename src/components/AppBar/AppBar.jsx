import {
  Header,
  Logo,
  MainNav,
  MainNavItem,
  MainNavLink,
  MainNavList,
} from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <Logo to="/">Rent Car</Logo>
      <MainNav>
        <MainNavList>
          <MainNavItem>
            <MainNavLink to="/catalog">Catalog</MainNavLink>
          </MainNavItem>
          <MainNavItem>
            <MainNavLink to="/favorites">Favorites</MainNavLink>
          </MainNavItem>
        </MainNavList>
      </MainNav>
    </Header>
  );
};
