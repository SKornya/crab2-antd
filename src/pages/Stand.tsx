import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

const Stand: FunctionComponent = () => {
  const { id } = useParams();

  return (<div>{`Stand with id: ${id}`}</div>);
};

export default Stand;
