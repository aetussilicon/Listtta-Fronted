import { Link } from "react-router-dom";
import '../Styles/css/components/PageHeader.css';

export default function PageHeader() {
    return (
        <header>
            <nav>
                <div className="container header-container">
                    <div className="header-right-side">
                        <img src="assets/imgs/MainLogo.png" alt="Listtta-logo" />
                        <div className="nav-links">
                            <ul>
                                <li>
                                    <Link>Home</Link>
                                </li>
                                <li>
                                    <Link>Como funciona</Link>
                                </li>
                                <li>
                                    <Link>Contato</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-register">
                        <button><Link>Login</Link></button>
                        <Link>Cadastre-se</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}