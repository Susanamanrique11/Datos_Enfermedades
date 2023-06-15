import {Link} from "react-router-dom"
import admin from '../Logo/Admin.png'
import inicio from '../Logo/Inicio.png'
import HeaderStyle from '../estilos/header.module.css'

const Header = function (){
    return (
    <><section className={HeaderStyle.header}>
        <ul>
            <li className={HeaderStyle.titulo}><h1>Datos de Salud</h1></li>
            <li className={HeaderStyle.inicio}><Link to = "/"><img className = {HeaderStyle.iconos} src= {inicio} alt="Inicio"/></Link></li>
            <li className={HeaderStyle.catalogo}><Link to = "/catalogo"><img className = {HeaderStyle.iconos_especiales} src= {catalogo} alt="Catalogo" /></Link></li>
            <li className={HeaderStyle.admin}><Link to = "/admin"><img className = {HeaderStyle.iconos} src= {admin} alt="Administrador"/></Link></li>
        </ul>
    </section>
    </>
    )
}

export default Header