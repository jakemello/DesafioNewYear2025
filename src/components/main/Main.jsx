import s from './main.module.scss'
import imagemAnoNovo from '../../assets/imagemAnoNovo.png'

export default function Main(){
    return (
        <main className={s.main}>
            <section className={s.AnoNovo}>
                <article className={s.containerFigure}>
                    <figure>
                        <img src={imagemAnoNovo} alt="Ano Novo 2025" />
                    </figure>
                    <article className={s.mensagem}>
                        <h2>Boas Festas!!!</h2>
                        <h1>Felicidades!!!</h1>
                        <p>Em 2025, vamos juntos programar,
                        Com mais código limpo e muito para alcançar!
                        Que o ano novo traga só funções de felicidade,
                        E que a paz seja nossa variável de realidade!
                        Sem bugs, sem falhas, com muito amor,
                        Vamos debugar os problemas com ardor!
                        Que a vida seja sempre o output de alegria,
                        o Vai Na Web te deseja um Ano Novo, que seja pura harmonia!</p>
                    </article>
                </article>
            </section>
        </main>
    )
}