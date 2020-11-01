export default () => {
  const MobileMenu = document.getElementById('MobileMenu');
  const SideMenu = document.getElementById('sidemenu');
  const CloseMenu = document.getElementById('closemenu');
  const SearchButton = document.getElementById('searchbutton');
  const SearchBar = document.getElementById('searchbar');
  const ExitSearch = document.getElementById('exitsearch');
  // const Profile = document.getElementById('profile');
  // const UserModal = document.getElementById('usermodal');
  // const CloseModalInfo = document.getElementById('closemodalinfo');
  const Navbar = document.getElementById('navbar');
  const LogoScroll = document.getElementById('logoscroll');

  MobileMenu.addEventListener('click', () => {
    if (SideMenu.classList.contains('menuinactive')) {
      SideMenu.classList.remove('menuinactive');
      SideMenu.classList.add('menuactive');
    } else {
      SideMenu.classList.remove('menuactive');
      SideMenu.classList.add('menuinactive');
    }
  });
  CloseMenu.addEventListener('click', () => {
    if (SideMenu.classList.contains('menuactive')) {
      SideMenu.classList.remove('menuactive');
      SideMenu.classList.add('menuinactive');
    }
  });
  SearchButton.addEventListener('click', () => {
    if (SearchBar.classList.contains('inactive')) {
      SearchBar.classList.remove('inactive');
      SearchBar.classList.add('active');
    }
  });
  ExitSearch.addEventListener('click', () => {
    if (SearchBar.classList.contains('active')) {
      SearchBar.classList.remove('active');
      SearchBar.classList.add('inactive');
    }
  });
  /* Profile.addEventListener('click', () => {
    if (UserModal.classList.contains('inactive')) {
      UserModal.classList.remove('inactive');
      UserModal.classList.add('active');
    } else {
      UserModal.classList.remove('active');
      UserModal.classList.add('inactive');
    }
  });
  CloseModalInfo.addEventListener('click', () => {
    if (UserModal.classList.contains('active')) {
      UserModal.classList.remove('active');
      UserModal.classList.add('inactive');
    }
  }); */
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
      Navbar.classList.remove('navbar');
      Navbar.classList.add('scroll');
    } else {
      Navbar.classList.remove('scroll');
      Navbar.classList.add('navbar');
    }
  });
  window.addEventListener('scroll', () => {
    window.scrollY >= 100
      ? (LogoScroll.style.display = 'block')
      : (LogoScroll.style.display = 'none');
  });
};
