import useCounter from "../hooks/use-counter";
import Card from "./Card";

const BackwardCounter = () => {
  const { value: counter } = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
