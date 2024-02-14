import { Link } from 'react-router-dom';
import '../Styles/css/components/BlogPost.css';

export default function BlogPost() {
    return (
        <div className='card-area'>
            <div className='card'>
                <div className='blog-card-banner'>
                    <img src="assets/imgs/MainCard.png" alt="card-banner" />
                </div>
                <div className='blog-card-info'>
                    <h3>Título</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p> 
                    <Link>Veja mais +</Link>
                </div>
            </div>
        </div>
    );
}