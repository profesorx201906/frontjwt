import axios from "axios";
import { useState,useEffect }  from "react";
import { useNavigate} from "react-router-dom";
import { API_BASE_URL } from "../config/config";
const URI = `${API_BASE_URL}/api/test/mod`

let headers = {
    Authorization:"Bearer " + sessionStorage.getItem("token"),
  };
const ContenidoModerador = () => {
    const navigate = useNavigate();
    const [contenido, setContenido] = useState("");
    useEffect(() =>{
        getContenidoMod()
    })
   
    const getContenidoMod = async () =>{
        try {
            const res = await axios({
                method : "GET",
                url : URI,
                headers: headers 
               
            });
            
            setContenido(res.data)
        }
        catch (error) {
            navigate("/noAutorizado");
        }
    }
    return (
        <p>{contenido}</p>
    );
  };
  
  export default ContenidoModerador;