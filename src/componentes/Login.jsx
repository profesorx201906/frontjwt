import swal from "sweetalert";
import axios from "axios";
import { useState }  from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config/config";
const URI = `${API_BASE_URL}/api/auth/signIn`

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const guardar = async (e) => {
        e.preventDefault();
        
        try {          
            const res = await axios({
                method : "POST",
                url: URI,
                data: {
                    username: username, password: password 
                },
            });          
            sessionStorage.setItem("token",res.data.accessToken)
            swal("Bienvenido "+res.data.username +"!", "Presiona el butón!", "success");
            navigate("/");
        }
        catch (error) {
            swal("No tiene Acceso!", "Presiona el butón!", "error");
        }

      };
    return (
        <div>
        <h3>Login</h3>
        <div className="container col-2">
        <form onSubmit={guardar}>
            <div className="mb-3">
                <label className="form-label">ID</label>
                <textarea
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    required
                    onInvalid={e => e.target.setCustomValidity('El campo username es obligatorio')}
                    onInput={e => e.target.setCustomValidity('')}
                    className="form-control"
            />
            </div>
            <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                    onInvalid={e => e.target.setCustomValidity('El campo Contraseña  es obligatorio')}
                    onInput={e => e.target.setCustomValidity('')}
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-primary">
            Login
            </button>
        </form>
    </div>
    </div> 

    );
  };
  
  export default Login;
