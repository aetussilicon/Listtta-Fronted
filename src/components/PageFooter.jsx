import { Link } from 'react-router-dom';
import '../Styles/css/components/PageFooter.css';

export default function PageFooter() {
    return (
            <footer>
                <section className="footer-top" />
                <section className="page-footer">
                    <div className='container footer-container'>
                        <img src='assets/imgs/MainLogo.png' alt='listtta-logo' />
                        <div className='footer-info'>
                            <div className='footer-info-block'>
                                <Link>Como Funciona</Link>
                                <Link>Cadastre-se</Link>
                                <Link>Encontre um profissional</Link>
                            </div>
                            <div className='footer-info-block'>
                                <Link>Dúvidas frequentes</Link>
                                <Link>Sobre o Listtta</Link>
                                <Link>Fale conosco</Link>
                            </div>
                            <div className='footer-info-block'>
                                <span className='bold'>Siga-nos</span>
                                <div className='social-media-icons'>
                                    <Link className='social-icon'>
                                        <img src='assets/icons/mono-instagram.svg'/>
                                    </Link>
                                    <Link className='social-icon'>
                                        <img src='assets/icons/mono-facebook.svg'/>
                                    </Link>
                                </div>
                            </div>
                            <div className='footer-info-block'>
                                <span className='bold'>Receba nossa newsletter</span>
                                <form>
                                    <input type='email' id='newsletter' name='newsletter' placeholder='Digite seu e-mail' />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='footer-footer'>
                        <div className='footer-politics'>
                        <span>© 2024 Listtta</span>
                        <ul>
                            <li className='dash'><Link>Termos de uso</Link></li>
                            <li><Link>Política de privacida</Link></li>
                            <li><Link>Política de cookies</Link></li>
                            <li><Link>LGPD</Link></li>
                        </ul>
                        </div>
                        <span className='developed-by'>Desenvolvido por <Link to="https://aetussilicon.github.io/portifolio-Artur-Dev/" target='_blank'>Artur Oliveira</Link></span>
                    </div>
                </section>
            </footer>
    );
}