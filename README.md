# Certificación Developers

## Checkout Mercado Pago

#### En esta certificación los desarrolladores van a tener que implementar un Checkout Mercado Pago que cumpla con los estándares de calidad del equipo de integraciones de Mercado Pago.

#### El equipo de integraciones validará el ejercicio para determinar que se cumplió con lo solicitado en el ejercicio.

## Conocimientos técnicos necesarios:

- Front End: HTML, JavaScript
- Backend: PHP, .NET, Java o Node JS (Con saber alguna de estas tecnologías es suficiente).
- Servidores: Configuraciones básicas
- API REST
- GitHub

## Documentación

* POST - API Preferencia:
https://www.mercadopago.com.mx/developers/es/reference/preferences/_checkout_preferences/post/

* GET - API Payments:
https://www.mercadopago.com.mx/developers/es/reference/payments/_payments_id/get/

* SDK’s Backend: PHP, .NET, Java o Node JS
https://github.com/mercadopago

* Integración Web Checkout:
https://www.mercadopago.com.mx/developers/es/guides/payments/web-payment-checkout/introduction/

* Notificaciones de Pago:
https://www.mercadopago.com.mx/developers/es/guides/notifications/webhooks/

## Tiendas
* https://github.com/agustinfrancesconi/mp-ecommerce-php​ (php)
* https://github.com/hdlopez/mp-ecommerce-nodejs​ (nodejs)


## Descripción
La empresa “Tienda e-commerce” vende celulares y está terminando su sitio de eCommerce.
Te han contratado para que implementes el Checkout Mercado Pago como solución de pago sobre el proyecto que actualmente tiene la empresa.

## Requerimiento
**Medios de Pago**: El cliente quiere que los pagos con tarjeta de crédito se puedan pagar sólo con hasta 6 cuotas. A su vez, no quiere permitir pagos con tarjetas American Express (amex) ni tampoco con medios de pago del tipo cajero automático (atm).

## Información del pagador

**Datos del pagador:**
* Nombre y Apellido: Lalo Landa
* DNI (Número de Identificación): 22.333.444
* Email: ​El email del test-user pagador generado.
* Teléfono: 011 2222-3333

**Datos de la dirección del pagador:**
* Nombre de la calle: Falsa
* Número de la casa: 123
* Código postal: 1111

## Producto
A partir del producto seleccionado, se deberá enviar el mismo como un ítem de la preferencia
de pago:

```
a) ID: 1234
b) Nombre del Producto: ​Nombre del producto seleccionado.
c) Descripción del Producto: “Dispositivo móvil de Tienda e-commerce”
d) URL Imagen: ​Foto del producto seleccionado.
e) Cantidad: 1
f) Precio: ​Precio del producto seleccionado.

Número de orden del pedido (external_reference): ABCD
```

## Congrats
Una vez que el pagador termine el flujo de Mercado Pago, se deberá retornar al sitio web del cliente y manejar una pantalla diferente para cada estado de pago:

* El pago haya sido “rechazado” o no haya finalizado (failure)
* El usuario haya decidido pagar con un medio de pago offline (atm o ticket) y el pago quede en un estado “pending” o “in_process” (pending)
* El pago haya sido exitoso. En la pantalla se deberá mostrar el payment_method_id que se usó para pagar, el monto pagado, el número de orden del pedido y el ID de pago de Mercado Pago (approved)
  * Se deberá configurar para que desde el checkout de Mercado Pago el retorno en caso de pago aprobado sea automático (auto_return).

## Checkout Mercado Pago
El cliente solicitó que el checkout de Mercado Pago se levante como una ventana modal.
El botón que inicia el flujo del checkout debe decir: “Pagar la compra”
El color predeterminante del sitio debe ser el azul oscuro de Mercado Pago (HEX: #2D3277)

## Al generar la preferencia de pago se debe
- Enviar la información del ítem que se está comprando.
- Enviar los datos del pagador.
- Enviar la URL donde se van a recibir las notificaciones de pago.
- Enviar el número de orden (external_reference)
- Limitar la cantidad de cuotas según lo solicitado.
- No ofrecer los medios de pago solicitados.

## Evaluación
1) Se revisará la completitud de la preferencia de pago generada para el inicio del flujo de pago.
2) Se revisará el correcto manejo de las back-url para los diferentes estados de pagos.
3) Se revisará el correcto manejo de las notificaciones de pago.

## Notas
Para la generación de la preferencia deberán utilizar las credenciales productivas del
siguiente test-user de Mercado Pago.

### Test User (Vendedor)
```
"id": 469485398
"password": "qatest7903"
"email": "​test_user_97555375@testuser.com​"
"Public-Key": APP_USR-a83913d5-e583-4556-8c19-d2773746b430
"Access-Token": APP_USR-6317427424180639-090914-5c508e1b02a34fcce879a999574cf5c9-469485398
```

Para probar los flujos, deberán usar un test-user que será el pagador y podrán utilizar las
tarjetas de prueba de Mercado Pago:

### Test User (Comprador)
```
"id": 471923173
"password": "qatest2417"
"email": "test_user_63274575@testuser.com"
```

### Tarjetas de Testeo
https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/test-integration/
