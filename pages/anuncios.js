import Link from 'next/link';
import Image from 'next/image';

export default function Anuncios() {
    return (
        <section id="anuncios">
        <div class="container p-4 h-100">
            <h2 class="display-2 fw-bold mt-3 mb-5">Esta semana en Cardano</h2>
            <div class="d-flex justify-content-center align-items-center">
                <Image src="/images/twitter-post-taller4.png" alt="Taller No.4 de Cardano Sin Tecnicismos" class="img-fluid rounded" width="800" height="1000" />
            </div>
            <div class="container d-flex flex-column justify-content-center align-items-start p-4">
                <p>En el <span class="fw-bold">Taller No.3</span> hablamos de <span class="fst-italic">Proof-of-Stake</span> y el protocolo Ouroboros de Cardano. Puedes ver la grabación haciendo click en el ícono.
                    <Link href="https://youtu.be/lqHggZ3SRAQ" target="_blank">
                        <Image src="/images/yt_logo_rgb_light.png" className="px-1" width="75" height="150" alt="Youtube logo"/>
                    </Link>
                </p>
                <p> Este <span class="fw-bold">Jueves 17</span> vamos a poner esos conceptos en práctica aprendiendo sobre staking y delegación con la billetera <Link href="https://twitter.com/eternlwallet">@eternlwallet</Link></p>
            </div>
            <div class="container d-flex flex-column justify-content-center-align-items-start">
                <h2>Información importante y canales de comunicación</h2>
                <ul>
                    <li>
                        <p>Aún no tienes tu link de Zoom para el taller de este jueves? Regístrate <Link href="https://forms.gle/vrqVtGdnsTrW1QWn6 ">aquí</Link>
                        </p>
                    </li>
                    <li>
                        <p>Quieres acceso a la plataforma LMS con recursos, tutoriales, tareas y foros de discusión? Regístrate <Link href="https://canvas.instructure.com/enroll/MG9EFA">aquí</Link> o puedes hacer click <Link href="https://canvas.instructure.com/register">aquí</Link> y usar el código MG9EFA
                        </p>
                    </li>
                    <li>
                        <p>¿Prefieres usar Whatsapp? Haz click <Link href=" https://chat.whatsapp.com/IyxkbkiesL52aiip7NqViL">aquí</Link>
                        </p>
                    </li>
                    <li>
                        <p>Suscríbete a nuestro canal de <Link href="https://www.youtube.com/channel/UCdYflNYOIZbEzLzSFztGZsA" target="_blank"><Image src="/images/yt_logo_rgb_light.png" className="px-1" width="75" height="150" alt="Youtube logo"/>
                        </Link>
                        </p>
                    </li>
                    <li>
                        <p>Léenos en <Link href="https://cardanosintecnicismos.substack.com/">Substack </Link></p>
                    </li>
                    <li>
                        <p>Todos nuestros links en <Link href="https://linktr.ee/cardanosintecnicismos">Linktree</Link></p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    )
}