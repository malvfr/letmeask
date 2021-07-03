import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"

export function Home() {
    return (
        <>
            <aside>
                <img src={illustrationImg} alt={"Illustration"} />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire duvidas em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="Letmeask"/>
                    <button>
                        <img src="" alt="Google"/>
                        Crie sua sala com o google
                    </button>
                    <div>
                        ou entre em uma sala
                    </div>
                    <form>
                        <input
                        type="text"
                        placeholder="text"
                        />

                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </main>
        </>
    )
}
