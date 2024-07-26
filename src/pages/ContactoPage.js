import '../styles.css/contacto.css';

const ContactoPage = (props)=> {
    return(
        <main class="holder contacto">
        <div>
          <h2>Completa el formulario</h2>
          <form action="" class="formulario">
            <p>
              <label for="">Nombre</label>
              <input type="text" />
            </p>
            <p>
              <label for="">Email</label>
              <input type="text" />
            </p>
            <p>
              <label for="">Telefono</label>
              <input type="text" />
            </p>
            <p>
              <label for="">Comentario</label>
              <textarea name=""></textarea>
            </p>
            <p>
              <input type="submit" class="prueba" value="Enviar" />
            </p>
          </form>
        </div>
  
        
            <div class="datos">
              <h2>Otras vias de comunicacion</h2>
              <p>Tambien pueden contactarse a travez de estos medios</p>
              <ul>
                <li>Telefono: 2154545</li>
                
                <li><i class="fa-brands fa-tiktok"></i></li>
                <li>red social 3</li>
                <li>red social 4</li>
                <li>mail:</li>
              </ul>
              <div class="mapa">
              
              
              </div>
            </div>
            </main>
            
         
    )
}

export default ContactoPage;