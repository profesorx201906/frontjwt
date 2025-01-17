//import swal from "sweetalert"
import axios from "axios";
import { useState,useEffect }  from "react";
import { useNavigate} from "react-router-dom";
import { API_BASE_URL } from "../config/config";
const URI = `${API_BASE_URL}/api/test/all`

let headers = {
    Authorization:"Bearer " + sessionStorage.getItem("token"),
  };
const ContenidoPublico = () => {
    const navigate = useNavigate();
    const [contenido, setContenido] = useState("");
    useEffect(() =>{
        getContenidoUsuario()
    })
   
    const getContenidoUsuario = async () =>{
        try {
            const res = await axios({
                method : "GET",
                url : URI,
                headers: headers 
               
            });
            
            setContenido(res.data)
        }
        catch (error) {
           // swal("No tiene Acceso a esta Opción!", "Presiona el butón!", "error");
            navigate("/noAutorizado");
        }
    }
    return (
        <p>{contenido}</p>
    );
  };
  
  export default ContenidoPublico;