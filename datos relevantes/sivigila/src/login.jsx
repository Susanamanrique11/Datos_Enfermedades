import AdminStyle from '../estilos/admin.module.css'
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const users = ["Cristian Q", "Christian R", "Leydy", "Susana"]
const pass = "Contraseña";

const Entrar = function (){
  const [error, setError] = useState("");
  const form = useRef();
  const navigate = useNavigate();

  const access = async function (e) {
    e.preventDefault();

    let texto = document.getElementById('username').value;
    let texto2 = document.getElementById('password').value;
    if (texto == users[0]||texto == users[1]||texto == users[2]||texto == users[3]){
       if(texto2 == pass){
          navigate("/ ");
       }else{
          setError("Contraseña inválida !!");
       }
    }else{
        setError("El usuario ingresado no es válido !!");
    }
    

  }

  return (
    <>
      <form className={AdminStyle.form} ref={form} onSubmit={access}>
        <h2>Accede con tu usuario</h2>
        <fieldset>
          <label>User: </label>
          <input className={AdminStyle.input_box_margin} type="text" id="username" name="username" />
        </fieldset>
        <fieldset>
          <label>Pass: </label>
          <input className={AdminStyle.input_box_margin} type="password" id="password" name="password" />
        </fieldset>
        {error && error != "" ? <p>{error}</p> : null}
        <p></p>
        <button className={AdminStyle.button_submit} >Ingresar</button>
      </form>
      </>
  );
    
}

const Admin = function () {
    return (<>
    <section className={AdminStyle.general}>
        <Header></Header>

        <section className={AdminStyle.login}>
            <Entrar></Entrar> 
        </section>

        <Footer></Footer>
        </section>
    </>)
}

export default Admin