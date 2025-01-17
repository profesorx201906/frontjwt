import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
const Logout = () => {
    
    sessionStorage.clear();
    const navigate = useNavigate();
    swal("Sesión Finalizada!", "Presiona el butón!", "success");
        navigate("/");

    return (
        <p>Sesión Cerrada</p>
    );
  };
  
  export default Logout;
