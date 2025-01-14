import logoHeader from '../../assets/logoHeader.png'
import forma1 from '../../assets/forma1.png'
import forma2 from '../../assets/forma2.png'
import s from './header.module.scss'

export default function Header(){
    return (
        <header className={s.header}>
            <img src={forma1} alt="Uma forma abstarta ondulada" className={s.forma1}/>
            <img src={forma2} alt="Uma forma abstarta ondulada" className={s.forma2}/>
            <figure className={s.imagemPrincipal}>
                <img src={logoHeader} alt="Logo escrito Feliz 2025 e uma garrafa de champanhe"/>
            </figure>
            <nav>
                <ul>
                    <li><a href="#">Paz</a></li>
                    <li><a href="#">Saúde</a></li>
                    <li><a href="#">Alegria</a></li>
                </ul>
            </nav>
        </header>
    )
}