import '../Styles/css/Home.css';

export default function Home() {
    return (
        <>
            <section className="main-banner">
                <div className='container introduction-container'>
                    <div className="introduction">
                        <h1>Venha fazer parte desta revolução na <span>tatuagem</span> e <span>piercing</span></h1>
                    </div>
                    <div className="introduction-card">
                        <h1>Cadastre-se</h1>
                        <h1>tatuador e piercing</h1>
                        <p>Você não paga nada para se cadastrar</p>
                        <button className='btn'>Quero cadastrar agora mesmo!</button>
                    </div>
                </div>
            </section>
            <section className="main-content">
                <div className="container partners-section-container">
                    <p>Nossos parceiros:</p>
                    <div className="partners">
                        <img src="assets/imgs/MonoLogo.png" alt="listtta" />
                        <img src="assets/imgs/MonoLogo.png" alt="listtta" />
                        <img src="assets/imgs/MonoLogo.png" alt="listtta" />
                        <img src="assets/imgs/MonoLogo.png" alt="listtta" />
                    </div>
                </div>
                <div className="container how-it-works-section">
                    <div className="how-it-works-section-content">
                        <div className="block-text">
                            <span>Como funciona?</span>
                            <h1>É tudo grátis! Sem taxas, comissões ou agendamentos. Fale diretamente com o artista</h1>
                            <p>
                                O cliente entra no site e coloca a cidade ou usa sua localização, escolhe o tatuador ou o piercer.
                                Se for tatuador escolhe o tema ou técnica de tatuagem (por exemplo floral, black work, aquarela etc)
                                e aí aparece a lista de tatuadores com foto, nome e seu perfil no instagram.
                            </p>
                            <button className="btn">Saiba mais</button>
                        </div>
                        <img src="assets/imgs/Woman.png" alt="woman" />
                    </div>
                    <div className="how-it-works-card">
                        <div className='card-content'>
                            <h1>Você ganha clientes e também descontos!</h1>
                            <p>Lorem ipsum dolor sit amet, cansectetur</p>
                            <button className="btn">Cadastre-se</button>
                        </div>
                    </div>
                    <div className="block-text-bottom">
                        <h1>Você tatuador não paga nada para fazer parte da LISTTTA. Você cliente não paga nad apara buscar seu artista.</h1>
                    </div>
                </div>
            </section>
        </>
    );
}