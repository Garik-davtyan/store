import React from "react";
import { useNavigate } from "react-router-dom";


function Register() {
    const [login, setlogin] = React.useState("")
    const [password, setpassword] = React.useState("")
    const [error, seterror] = React.useState("")
    const navigate = useNavigate()

    const adminlogin = "admin"
    const adminpassword = "admin1234"
    
    const proverka = (i) => { i.preventDefault()
    if (login === adminlogin && password === adminpassword) {
        navigate("/admin");
    } else {
        seterror("Неверный логин или пароль");
}
    }
    return(
        <div id="reglog">
        <form className="register">
            <h2>գրանցում</h2>
            <label>էլ․ փոստ․</label>
            <input className="inputreg" placeholder="email" type="email" />
            <label>մուտքանուն</label>
            <input className="inputreg" placeholder="login" type="login"  />
            <label>Գաղտնաբառ</label>
            <input className="inputreg" placeholder="password" type="password" />
            <button className="buttonreg">Գրանցվել</button>
        </form>
        <form className="login" onSubmit={proverka}>
            <h2>մուտք</h2>
            <label>մուտքանուն</label>
            <input className="inputreg" placeholder="login" type="text" value={login} onChange={(i) => setlogin(i.target.value)} />
            <label>Գաղտնաբառ</label>
            <input className="inputreg" placeholder="password" type="password" value={password} onChange={(i) => setpassword(i.target.value)} />
            <div>
            <label>հիշել</label>
            <input style={{height: ""}} type="checkbox"/>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit" className="buttonreg">Մուտք գործել</button>
        </form>
        </div>
    )
}

export default Register