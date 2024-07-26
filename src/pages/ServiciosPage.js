import '../styles.css/servicios.css';
const ServiciosPage = (props)=> {
    return(
        <main class="holder">

        <h2>Servicios</h2>
        <div className="servicio">
        <img src="img/servicios/aereo.jpg" alt=""/>
            <div className="info">
                <h4>Transporte Aéreo</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit dolorem quam tempora doloribus maxime asperiores, adipisci molestias commodi numquam minus debitis nesciunt, dolor beatae. Fuga, tempora? Quia, ratione eligendi.</p>

            </div>
        </div>

            <div className="servicio">
                <img src="img/servicios/maritimo.jpg" alt=""/>
                    <div className="info">
                        <h4>Transporte Marítimo</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit dolorem quam tempora doloribus maxime asperiores, adipisci molestias commodi numquam minus debitis nesciunt, dolor beatae. Fuga, tempora? Quia, ratione eligendi.</p>
        
                    </div>
            </div>

            <div className="servicio">
                <img src="img/servicios/terrestre.jpg" alt=""/>
                    <div class="info">
                        <h4>Transporte Terrestre</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit dolorem quam tempora doloribus maxime asperiores, adipisci molestias commodi numquam minus debitis nesciunt, dolor beatae. Fuga, tempora? Quia, ratione eligendi.</p>
                </div>
            </div>

            <div className="servicio">
                <img src="img/servicios/ferroviario.jpg" alt=""/>
                    <div class="info">
                        <h4>Transporte Ferroviario</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit dolorem quam tempora doloribus maxime asperiores, adipisci molestias commodi numquam minus debitis nesciunt, dolor beatae. Fuga, tempora? Quia, ratione eligendi.</p>
                </div>
            </div>
    </main>
       
    )
}

export default ServiciosPage;