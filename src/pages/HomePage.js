import '../styles.css/home.css';



const HomePage = (props)=> {
    return(
        <main className="holder">
        <div className="homeimg">
            <img src="img/home/img01.jpg" alt="avion"/>
        </div>
        <div className="columnas">
            <div className="Bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, est ad! Quia beatae eius laudantium quae, incidunt commodi! Consectetur delectus quia nulla! Expedita quasi velit ut ullam modi quibusdam dolore!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, est ad! Quia beatae eius laudantium quae, incidunt commodi! Consectetur delectus quia nulla! Expedita quasi velit ut ullam modi quibusdam dolore!</p>
            </div>

            <div className="Testimonios">
                <h2>Testimonios</h2>
                <div className="testimonio">

                    <span class="cita">Simplemente excelente</span>
                    <span className="autor">Juan Gomez - Zapatos.com</span>
                </div>
            </div>
        </div>

        
    

    



</main>
       
    )
}

export default HomePage;
