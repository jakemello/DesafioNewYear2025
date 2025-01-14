import s from './footer.module.scss'
import linkedin from '../../assets/logoLinkedin.png'
import instagram from '../../assets/logoInstagram.png'
import facebook from '../../assets/logoFacebook.png'
import forma3 from '../../assets/forma3.png'
import forma4 from '../../assets/forma4.png'

export default function Footer(){
    return (
        <footer className={s.footer}>
            <img src={forma4} alt="Uma forma abstarta ondulada" className={s.forma4} />
            <img src={forma3} alt="Uma forma abstarta ondulada" className={s.forma3} />
            <section className={s.containerFooter}>
                <p>Aluna: Jakeline Melo</p>
                <p>Instrutor: Fernanda Corrêa</p>
                <p>Facilitador: João Pedro Belo</p>
                <p>Layout criado para fins de estudos na Escola Vai na Web</p>
            </section>
            <nav className={s.socialLinks}>
                <a href="https://www.linkedin.com/in/jakemelodev/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="Ícone logo do LinkedIn"/>
                </a>
                <a href="https://www.facebook.com/vainaweb/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Ícone logo do Facebook"/>
                </a>
                <a href="https://www.instagram.com/vainaweb/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Ícone logo do Instagram"/>
                </a>
            </nav>
        </footer>
    )
}
