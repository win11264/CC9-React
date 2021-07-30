import Menu from "./Menu";

function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <img src="https://picsum.photos/200" alt="my logo" />
      </div>
      <Menu />
    </div>
  );
}

export default Header;
