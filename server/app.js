const webpush = require('web-push');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors())

app.use(bodyParser.json())


/**
 * Settings VAPID
 */

const vapidKeys = {
    "publicKey": "BO0dLzEYTs5OEFq4T78yemC5MMtG_rGHxyeNcadC5kbMDj-ai2IOe9D0-8Z2-xZHt19Z6TkkfUJAN7dQ9v_HVj4",
    "privateKey": "H_rtRvkXKbZbspbR9Bl8gShmwQv1vsI92m47X3XMaSE"
}


webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);



//HELPERS

const handlerResponse =(res,data,code=200 )=>{
    res.status(code).send({data})


}



//CONTROLADORES¨¨¨¨¨¨¨¨

const savePush = (req, res) => {
    const name = Math.floor(Date.now() / 1000);
  
    const subscription = req.body.token; // Obtiene la suscripción directamente
  
    // Convierte la suscripción en una cadena JSON
    const jsonData = JSON.stringify(subscription, null, 2);
  
    fs.writeFile(`./tokens/token-${name}.json`, jsonData, (err) => {
      if (err) {
        // Manejar el error adecuadamente aquí
        console.error(err);
        res.status(500).json({ error: 'Error al guardar el token' });
      } else {
        handlerResponse(res, 'Guardado exitoso');
      }
    });
  };
  


  const enviarNotificacion = (req, res) => {
    const payload = {
      notification: {
        title: '😄😄 HNueva oferta',
        body: 'Pala :Trupper',
        vibrate: [100, 50, 100],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqg28aswWuw6OVNYOwHHeW01ZXS68IyXnK8g&usqp=CAU",
        actions: [
          {
            action: 'explore',
            title: 'Ir al sitio',
          },
        ],
      },
    };
  
    const directoryPath = path.join(__dirname, 'tokens');
  
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        handlerResponse(res, 'Error de lectura', 500);
      }
  
      const promises = [];
  
      files.forEach((file) => {
        const tokenRaw = fs.readFileSync(path.join(directoryPath, file));
        const tokenParse = JSON.parse(tokenRaw);
  
        const pushPromise = webpush
          .sendNotification(tokenParse, JSON.stringify(payload))
          .then(() => {
            console.log('Notificación enviada a', tokenParse.endpoint);
          })
          .catch((err) => {
            console.error('Error al enviar notificación:', err);
          });
  
        promises.push(pushPromise);
      });
  
      // Esperar a que se completen todas las notificaciones antes de responder
      Promise.all(promises)
        .then(() => {
          res.json({ data: 'Se enviaron las notificaciones exitosamente' });
        })
        .catch((error) => {
          console.error('Error al enviar notificaciones:', error);
          res.status(500).json({ error: 'Error al enviar notificaciones' });
        });
    });
  };
  
app.route('/api/enviar').post(enviarNotificacion);
app.route('/api/save').post(savePush);

const httpServer = app.listen(9000, () => {
    console.log("HTTP Server running at http://localhost:" + httpServer.address().port);
});