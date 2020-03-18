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
 * Mastercard	          5031 7557 3453 0604	    123	    11/25
 * Visa	                4170 0688 1010 8020	    123	    11/25
 * American Express	    3711 8030 3257 522	    1234	  11/25
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

const express = require('express')
const bodyParser = require('body-parser')
const exphbs  = require('express-handlebars')

const tools = require('./lib/tools')
const mp = require('./lib/mp')

const hbs = exphbs.create({
  helpers: {
    ifthen: (v1, v2, options) => {
      if(v1 == v2) return options.fn(this)
      return options.inverse(this)
    }
  }
})

const app = express()

mp.init()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('assets'))
app.use('/assets', express.static(__dirname + '/assets'))

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/', (_, res) => res.render('home'))

app.get('/detail', async (req, res) => res.render('detail', {
  img: req.query.img,
  title: req.query.title,
  price: req.query.price,
  unit: req.query.unit,
}))

app.get('/comprar', (req, res) => res.render('comprar', {
  img: req.query.img,
  title: req.query.title,
  price: req.query.price,
  unit: req.query.unit,
  img_url: `${req.protocol}://${req.get('host')}${req.query.img.substr(1)}`,
}))

app.post('/confirmar', async (req, res) => {
  const preferencia = await tools.generarPreferencia(req)
  res.render('confirmar', { prefId: preferencia.id })
})

app.post('/procesar-pago', async (req, res) => {
  const pago = await tools.getPaymentData(req.body.payment_id)
  const payment_method_id = pago.body.payment_method_id
  const total_paid_amount = pago.body.transaction_details.total_paid_amount
  const order_id = pago.body.order.id
  const payment_id = pago.body.id
  res.render('procesado', { payment_method_id, total_paid_amount, order_id, payment_id, ...req.body })
})

app.listen(process.env.PORT || 3000)