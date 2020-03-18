/**
 * Test User (Comprador)
 * ------------------------------------------
 * "id": 471923173
 * "password": "qatest2417"
 * "email": "test_user_63274575@testuser.com"
 *
 *
 * POST - API Preferencia: https://www.mercadopago.com.mx/developers/es/reference/preferences/_checkout_preferences/post/
 * GET - API Payments: https://www.mercadopago.com.mx/developers/es/reference/payments/_payments_id/get/
 * Integración Web Checkout: https://www.mercadopago.com.mx/developers/es/guides/payments/web-payment-checkout/introduction/
 * Notificaciones de Pago: https://www.mercadopago.com.mx/developers/es/guides/notifications/webhooks/
 *
 * SDK’s Backend: PHP, .NET, Java o Node JS: https://github.com/mercadopago
 *
 *
 * Tarjetas de prueba
 * -------------------------------------------------------------------------------------------------------------
 * Tarjeta	            Número	                CVV	    Fecha de vencimiento
 * Mastercard	        5031 7557 3453 0604	    123	    11/25
 * Visa	                4170 0688 1010 8020	    123	    11/25
 * American Express	    3711 8030 3257 522	    1234	11/25
 *
 *
 * Para probar distintos resultados de pago, completa el dato que quieras en el nombre del titular de la tarjeta
 * -------------------------------------------------------------------------------------------------------------
 * APRO: Pago aprobado.
 * CONT: Pago pendiente.
 * OTHE: Rechazado por error general.
 * CALL: Rechazado con validación para autorizar.
 * FUND: Rechazado por monto insuficiente.
 * SECU: Rechazado por código de seguridad inválido.
 * EXPI: Rechazado por problema con la fecha de expiración.
 * FORM: Rechazado por error en formulario.
 */

const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/detail', function (req, res) {
    res.render('detail', req.query);
});

app.use(express.static('assets'));

app.use('/assets', express.static(__dirname + '/assets'));

app.listen(process.env.PORT);