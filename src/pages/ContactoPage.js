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
              <textarea name="" ></textarea>
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
                <li>facebook: the best</li>
                <li>tiktok: El mejor </li>
                <li>instagram: The number One</li>
                <li>Twiter: Siempre mejorando</li>
                <li>mail:hrv21081969@gmail.com</li>
              </ul>
              <div class="mapa"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52547.49868462438!2d-58.4963346513672!3d-34.59863169999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb2e1493a6a3%3A0x1862a7c0b8163e5d!2sUTN.BA!5e0!3m2!1ses-419!2sar!4v1722401900852!5m2!1ses-419!2sar" title='ubicacion de la UTN' style={{width:800, height:400, border:0}} ></iframe>
              
              
              </div>
            </div>
            </main>
            
         
    )
}

export default ContactoPage;