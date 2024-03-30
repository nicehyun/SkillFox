import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed z-20 flex h-[100px] w-full items-center border-b-[1px] border-primary px-10 shadow backdrop-blur-[8px] sm:px-2 md:px-4">
      <Logo />

      {/* 
      <nav className="bottom-0 flexCenter w-full bg-success">
        <ul>
          <li>
            <a href="#home">홈</a>
          </li>
          <li>
            <a href="#news">뉴스</a>
          </li>
          <li>
            <a href="#contact">연락처</a>
          </li>
          <li>
            <a href="#about">우리에 대해</a>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
