import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss';
import { Button } from '../components/button';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function NewRoom() {
    // const { user } = useContext(AuthContext);
    
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q and A ao vivo</strong>
                <p>Tire suas dúvidas em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Let me ask logo" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da Sala"
                        />
                        <Button type='submit'>
                            Criar Sala
                        </ Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <a href="/">Clique aqui</a>
                    </p>
                </div>
            </main>
        </div>
    )
}