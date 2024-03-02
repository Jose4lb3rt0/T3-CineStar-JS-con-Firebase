import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, getDocs, query, where, orderBy } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

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

export const getPeliculas = async()=>{
    let id = new URLSearchParams(window.location.search).get('id')
    id = id == 'cartelera' ? 1 : id == 'estrenos' ? 2 : 0
    const consulta = query(collection(db, 'peliculas'), where('idEstado', '==', `${id}`), orderBy('id'));
    const peliculas = await getDocs(consulta) //collection(db, 'peliculas') //consulta
    let html = `<br/><h1>Cartelera</h1><br/>`
    peliculas.forEach((doc)=>{
        let pelicula = doc.data()
        //console.log("Datos de la película:", pelicula);
        html += `
        <div class="contenido-pelicula">
            <div class="datos-pelicula">
                <h2>${pelicula.Titulo}</h2><br/>
                <p>${pelicula.Sinopsis}</p>
                <br/>
                <div class="boton-pelicula"> 
                    <a href="pelicula.html?id=${pelicula.id}" >
                        <img src="img/varios/btn-mas-info.jpg" width="120" height="30" alt="Ver info"/>
                    </a>
                </div>
                <div class="boton-pelicula"> 
                    <a href="https://www.youtube.com/v/${pelicula.Link}" target=_blank  onclick="return hs.htmlExpand(this, { objectType: 'iframe' } )" >
                        <img src="img/varios/btn-mas-info.jpg" width="120" height="30" alt="Ver trailer"/>
                    </a>
                </div> 
            </div>
            <img src="img/pelicula/${pelicula.id}.jpg" width="160" height="226"/><br/><br/>
        </div>`
    })
    document.getElementById('contenido-interno').innerHTML=html
}




 
/*
<br/><h1>Cartelera</h1><br/>
<div class="contenido-pelicula">
    <div class="datos-pelicula">
        <h2>Locos de Amor 2 (+14) (HD - Doblada)</h2><br/>
        <p>¡Vuelve la comedia musical del año! Un hombre descorazonado que empieza a salir con una conductora que da consejos de amor en la radio. Una mujer desesperada por ser mamá ...</p>
        <br/>
        <div class="boton-pelicula"> 
            <a href="http://www.cinestar.com.pe/cartelera/pelicula/Locos-de-Amor-2" >
                <img src="img/varios/btn-mas-info.jpg" width="120" height="30" alt="Ver info"/>
            </a>
        </div>
        <div class="boton-pelicula"> 
            <a href="https://www.youtube.com/v/v3fspveODBI" target=_blank  onclick="return hs.htmlExpand(this, { objectType: 'iframe' } )" >
                <img src="img/varios/btn-trailer.jpg" width="120" height="30" alt="Ver trailer"/>
            </a>
        </div> 
    </div>
    <img src="img/pelicula/10.jpg" width="160" height="226"/><br/><br/>
</div>
                */