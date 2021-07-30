import ProductItem from "../ProductItem";

function Welcome(props) {
  return <div>Welcome to my React Project, Please enjoy !</div>;
}

function Greeting(props) {
  return <div>Greeting</div>;
}

function MyCom(props) {
  return (
    <div>
      My Component
      <ProductItem />
    </div>
  );
}

export { Welcome, Greeting };

export default MyCom;
