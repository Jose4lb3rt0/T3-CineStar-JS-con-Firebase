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

export const getCine = async () => {
    let id = new URLSearchParams(window.location.search).get('id');
    const cines = await getDocs(query(collection(db, 'cines'), where('id', '==', id)));

    cines.forEach((doc) => {
    const cine_datos = doc.data();

    // aqui van las tarifas
    let htmlTarifas=''
    cine_datos.tarifas.forEach((tarifa) => {
        htmlTarifas += `
            <div class="tabla">
                <div class="fila">
                    <div class="celda-titulo">${tarifa.DiasSemana}</div>
                    <div class="celda">${tarifa.Precio}</div>
                </div>
            </div>
        `
    });

    // aqui van las peliculas y los horarios
    let htmlPeliHora=''
    cine_datos.peliculas.forEach((pelicula) => {
        htmlPeliHora += `
            <div class="cine-info peliculas">
                <div class="tabla">
                    <div class="fila">
                        <div class="celda-titulo">${pelicula.Titulo}</div>
                        <div class="celda">${pelicula.Horarios}</div>
                    </div>
                </div>
            </div>
        `;
    });

    //HTML ORIGINAL
        let html = `
        <h2>${cine_datos.RazonSocial}</h2>
        <div class="cine-info">
            <div class="cine-info datos">
                <p>${cine_datos.Direccion} - ${cine_datos.Detalle}</p>
                <p>Teléfono: ${cine_datos.Telefonos}</p>
                <p>Salas: ${cine_datos.Salas}</p>
                <br/>
                <div class="tabla">

                ${htmlTarifas}

                </div>
                <div class="aviso">
                    <p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.</p>
                </div>
            </div>
            <img src="img/cine/${cine_datos.id}.2.jpg"/>
            <br/><br/><h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br/>
            <div class="cine-info peliculas">
                <div class="tabla">
                    <div class="fila">
                        <div class="celda-cabecera">Películas</div>
                        <div class="celda-cabecera">Horarios</div>
                    </div>
                ${htmlPeliHora}

                </div>
            </div>
        </div>
        <div>
            <img style="float:left;" src="img/cine/${cine_datos.id}.3.jpg" alt="Imagen del cine"/>
            <span class="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br/>
                Horario de atención de juegos es de 12:00 m hasta las 10:30 pm. 
                <br/><br/>
                Visitános y diviértete con nosotros. 
                <br/><br/>
                <b>CINESTAR</b>, siempre pensando en tí. 
            </span>		
        </div>
        `;

        document.getElementById('contenido-interno').innerHTML = html;
    });
}

/**
<h2>Cinestar Excelsior</h2>
<div class="cine-info">
    <div class="cine-info datos">
        <p>Jirón de la Unión 780 - Lima</p>
        <p>Teléfono: 714-1865 anexo 865</p>
        <br/>
        <div class="tabla">
            <div class="fila">
                <div class="celda-titulo">Lunes y Miércoles</div>
                <div class="celda">S/. 4.00</div>
            </div>
            <div class="fila impar">
                <div class="celda-titulo">Martes</div>
                <div class="celda">S/. 3.50</div>
            </div>
            <div class="fila">
                <div class="celda-titulo">Jueves y Viernes</div>
                <div class="celda">S/. 6.50</div>
            </div>
            <div class="fila impar">
                <div class="celda-titulo">Sábado, Domingo y Feriados</div>
                <div class="celda">S/. 7.50</div>
            </div>
            <div class="fila">
                <div class="celda-titulo">Adulto mayor y niños hasta 8 años (sábados, domingos y feriados)</div>
                <div class="celda">S/. 4.00</div>
            </div>
            <div class="fila impar">
                <div class="celda-titulo">3D - Lunes y Miércoles</div>
                <div class="celda">S/. 7.50</div>
            </div>
            <div class="fila">
                <div class="celda-titulo">3D - Martes</div>
                <div class="celda">S/. 6.00</div>
            </div>
            <div class="fila impar">
                <div class="celda-titulo">3D - Jueves a Domingo y Feriados</div>
                <div class="celda">S/. 11.00</div>
            </div>
        </div>
        <div class="aviso">
            <p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.</p>
        </div>
    </div>
    <img src="img/cine/1.2.jpg"/>
    <br/><br/><h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br/>
    <div class="cine-info peliculas">
        <div class="tabla">
            <div class="fila">
                <div class="celda-cabecera">Películas</div>
                <div class="celda-cabecera">Horarios</div>
            </div>
            <div class="fila impar">
                <div class="celda-titulo">GUERRERO</div>
                <div class="celda">13:00 / 13:30 / 14:00 / 15:00 / 15:30 / 16:00 / 17:00 / 17:30 / 18:00 / 19:00 / 20:00 / 21:00 / 21:55</div>
            </div>
            <div class="fila">
                <div class="celda-titulo">LA LEYENDA DE LA BELLA DURMIENTE</div>
                <div class="celda">19:45 / 21:30</div>
            </div>
            <div class="fila impar">
                <div class="celda-titulo">ROGUE ONE</div>
                <div class="celda">13:00 / 14:00 / 15:30 / 16:30 / 18:00 / 19:00 / 19:30 / 20:30 / 21:30 / 21:55</div>
            </div>
            <div class="fila">
                <div class="celda-titulo">MOANA</div>
                <div class="celda">13:00 / 15:15 / 17:30</div>
            </div>
        </div>
    </div>
</div>
<div>
    <img style="float:left;" src="img/cine/1.3.jpg" alt="Imagen del cine"/>
    <span class="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br/>
        Horario de atención de juegos es de 12:00 m hasta las 10:30 pm. 
        <br/><br/>
        Visitános y diviértete con nosotros. 
        <br/><br/>
        <b>CINESTAR</b>, siempre pensando en tí. 
    </span>		
</div>

 */