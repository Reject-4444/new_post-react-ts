import { NavLink, useSearchParams } from 'react-router-dom';
import '../Navbar/Navbar.scss';
import './Footer.scss';

export const Footer = () => {
  const [searchParams] = useSearchParams();

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <nav className='header__nav' />
      <button
        onClick={handleButtonClick}
        className='footer__button'
      />
    </>
  );
};
