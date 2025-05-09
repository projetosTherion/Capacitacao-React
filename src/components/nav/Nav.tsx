import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

export const Nav = () => {
  const styleLink =
    "cursor-pointer w-[60px] h-[60px] flex items-center justify-center";
  return (
    <nav className="fixed bottom-2 lg:bottom-7 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="bg-black/90 w-full h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] px-5 mx-auto flex items-center justify-between text-2xl text-yellow-50 z-50">
          <Link
            to="home"
            className={styleLink}
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            title="Home"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            className={styleLink}
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            title="About"
          >
            <BiUser />
          </Link>

          <Link
            to="services"
            className={styleLink}
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            title="Services"
          >
            <BsClipboardData />
          </Link>
          
          <Link
            to="contact"
            className={styleLink}
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            title="Contact"
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};
