import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

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

export const getCines = async () => {
    const consulta = collection(db, 'cines');
    const cines = await getDocs(consulta);
    let html = `<br/><h1>Nuestros Cines</h1><br/>`;
    cines.forEach((doc) => {
        let cine = doc.data();
        html += `
            <div class="contenido-cine">
                <img src="./img/cine/${cine.id}.1.jpg" width="227" height="170"/>
                <div class="datos-cine">
                    <h4>${cine.RazonSocial}</h4><br/>
                    <span>${cine.Direccion} - ${cine.Detalle}<br/><br/>Teléfono: ${cine.Telefonos}</span>
                </div>
                <br/>
                <a href="http://www.cinestar.com.pe/multicines/cine/${cine.RazonSocial}">
                    <img src="img/varios/ico-info2.png" width="150" height="40"/>
                </a>
            </div>`;
    });
    document.getElementById('contenido-interno').innerHTML = html;
};


/*
<br/><h1>Nuestros Cines</h1><br/>
<div class="contenido-cine">
    <img src="img/cine/1.1.jpg" width="227" height="170"/>
    <div class="datos-cine">
        <h4>Excelsior</h4><br/>
        <span>Jirón de la Unión 780 - Lima<br/><br/>Teléfono: 714-1865 anexo 865</span>
    </div>
    <br/>
    <a href="http://www.cinestar.com.pe/multicines/cine/Cinestar-Excelsior">
        <img src="img/varios/ico-info2.png" width="150" height="40"/>
    </a>
</div>
*/