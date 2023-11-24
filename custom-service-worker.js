self.addEventListener('notificationclick', function(event) {
    const notification = event.notification;
    const action = event.action;
  
    if (action === 'explore') {
      // Define la URL a la que quieres redirigir
      const url = 'https://ferreteria-pwa.vercel.app/inicio';
  
      // Abre la ventana con la URL especificada
      event.waitUntil(clients.openWindow(url));
    }
  
    // Cierra la notificación
    notification.close();
  });
  