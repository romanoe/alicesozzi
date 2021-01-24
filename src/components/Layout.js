import React from 'react'
import { Link } from 'gatsby'

const Layout = ({children}) => {
    return (
        <>
            <nav>
                <Link to='/'>Page d'accueil</Link>
                <Link to='/app'>App</Link>
                <Link to='/traitements'>Les traitements</Link>
                <Link to='/fasciatherapie'>Qu'est-ce qu'un fascia</Link>
                <Link to='/mon-parcours'>Mon parcours</Link>
                <Link to='/info'>Informations et tarifs</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout
