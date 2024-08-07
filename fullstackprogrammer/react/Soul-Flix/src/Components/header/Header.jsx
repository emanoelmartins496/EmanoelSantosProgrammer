import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../firebase/auth'
import { UsuarioContext } from '../../contexts/UsuarioContext'
import "..//..//..//src/Styles/Header.css"

const Header = () => {
  const usuario = useContext(UsuarioContext)
  const navigate = useNavigate();

  function handleLogout(){
    logout().then( ()=> {
      navigate("/")
    })
  }

  return (
    <header>
            <Navbar className="navbar" expand="md" variant='dark'>
                <Container fluid>
                    <Link to="/login">
                        <img src="/images/icone.png" width="270"/>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                    <Nav className="ms-auto">
                             <img className="fotodeperfil" src="/images/iconeaddimage.png" alt="Foto de perfil" />
                            {usuario && <span className="nav-link">{usuario.displayName}</span>}
                            {usuario && <Link className="nav-link" to="/filmes">filmes</Link>}
                            {!usuario && <Link className=" buttonlogin nav-link" to="/login">Login</Link>}
                            {!usuario && <Link className="nav-link" to="/cadastro">Cadastro</Link>}
                            <Link className="nav-link" to="/ajuda">Ajuda</Link>
                            {usuario && <button className="button" onClick={handleLogout}>
                                Sair
                            </button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </header>
  )
}

export default Header