import { List, X } from "@phosphor-icons/react";

const HamburgerMenu = ({ hamburger, setHamburger }) => {
  return (
    <button
      onClick={() => setHamburger(!hamburger)}
      className="text-2xl text-color-primary/90 border-2 border-color-primary/90 p-1 rounded inline-block md:hidden"
    >
      {hamburger ? <X weight="bold" /> : <List weight="bold" />}
    </button>
  );
};

export default HamburgerMenu;
