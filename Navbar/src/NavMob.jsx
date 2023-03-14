import { useGolbalContext } from "./Context";

const MobileNav = () => {
  const { isOpen } = useGolbalContext();

  return (
    <div className={`${isOpen ? "menus-mob active " : "menus-mob"}`}>
      <ul>
        <li>Home</li>
        <li>about</li>
        <li>projects</li>
        <li>contact</li>
        <li>profile</li>
      </ul>
    </div>
  );
};

export default MobileNav;
