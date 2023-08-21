import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Protected(props) {

  const currentUser = useSelector((state) => state.currentUser);

  return(
    <>
        {
            !currentUser ?
            <Navigate to="/login" replace /> :
            props.children
        }
    </>
  )
}

export default Protected;