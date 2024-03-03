import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, getDocs, query, where, collection} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBNHSGGKnkbZwx_VmEcLMsQUXZ7un6GDPI",
    authDomain: "cinestar-firebase-5d222.firebaseapp.com",
    databaseURL: "https://cinestar-firebase-5d222-default-rtdb.firebaseio.com",
    projectId: "cinestar-firebase-5d222",
    storageBucket: "cinestar-firebase-5d222.appspot.com",
    messagingSenderId: "26658824738",
    appId: "1:26658824738:web:11bedae2674da7d218e07b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getPelicula = async () => {
    let id = new URLSearchParams(window.location.search).get('id');
    const pelicula = await getDocs(query(collection(db, 'peliculas'), where('id', '==', `${id}`)));

    pelicula.forEach((doc) => {
        const pelicula_datos = doc.data();
        let html = `
            <br/><h1>Cartelera</h1><br/>
            <div class="contenido-pelicula">
                <div class="datos-pelicula">
                    <h2>${pelicula_datos.Titulo}</h2>
                    <p>${pelicula_datos.Sinopsis}</p>
                    <br/>
                    <div class="tabla">
                        <div class="fila">
                            <div class="celda-titulo">Título Original :</div>
                            <div class="celda">${pelicula_datos.Titulo}</div>
                        </div>
                        <div class="fila">
                            <div class="celda-titulo">Estreno :</div>
                            <div class="celda">${pelicula_datos.FechaEstrenoss}</div>
                        </div>
                        <div class="fila">
                            <div class="celda-titulo">Género :</div>
                            <div class="celda">${pelicula_datos.Geneross}</div>
                        </div>
                        <div class="fila">
                            <div class="celda-titulo">Director :</div>
                            <div class="celda">${pelicula_datos.Director}</div>
                        </div>
                        <div class="fila">
                            <div class="celda-titulo">Reparto :</div>
                            <div class="celda">${pelicula_datos.Reparto}Reparto</div>
                        </div>
                    </div>
                </div>
                <img src="img/pelicula/${pelicula_datos.id}.jpg" width="160" height="226"><br/><br/>
            </div>
            <div class="pelicula-video">
                <embed src="https://www.youtube.com/v/${pelicula_datos.Link}" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="580" height="400">
            </div>
        `;
        document.getElementById('contenido-interno').innerHTML = html;
    });
}


/*
<br/><h1>Cartelera</h1><br/>
<div class="contenido-pelicula">
    <div class="datos-pelicula">
        <h2>Jumanji: En la Selva (Todo Público)</h2>
        <p>Remake de la película homónima de 1995 adaptado a la época actual, en donde cuatro adolescentes se introducen en un nueva aventura a partir de “Jumanji”, un videojuego que sirve como un portal a través del espacio-tiempo. Absorbidos por el mundo de Jumanji, este juego no se puede abandonar hasta que acaba la partida</p>
        <br/>
        <div class="tabla">
            <div class="fila">
                <div class="celda-titulo">Título Original :</div>
                <div class="celda">Jumanji: En la Selva (Todo Público)</div>
            </div>
            <div class="fila">
                <div class="celda-titulo">Estreno :</div>
                <div class="celda">11 de Enero del 2018</div>
            </div>
            <div class="fila">
                <div class="celda-titulo">Género :</div>
                <div class="celda">Aventura / Acción</div>
            </div>
            <div class="fila">
                <div class="celda-titulo">Director :</div>
                <div class="celda">Jake Kasdan</div>
            </div>
            <div class="fila">
                <div class="celda-titulo">Reparto :</div>
                <div class="celda">Dwayne Johnson, Kevin Hart, Jack Black, Karen Gillan</div>
            </div>
        </div>
    </div>
    <img src="img/pelicula/1.jpg" width="160" height="226"><br/><br/>
</div>
<div class="pelicula-video">
    <embed src="https://www.youtube.com/v/6maujJFcuxAfs" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="580" height="400">
</div>
*/