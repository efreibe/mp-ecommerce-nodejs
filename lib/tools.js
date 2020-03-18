const mp = require('./mp')

module.exports.generarPreferencia = async function (req) {
  try {
    const data = {
      "external_reference": "ABCD",
      "items": [
        {
          id: "1234",
          title: req.body.title,
          picture_url: req.body.img_url,
          description: "Dispositivo móvil de Tienda e-commerce",
          quantity: parseInt(req.body.unit, 10),
          unit_price: parseFloat(req.body.price, 10)
        }
      ],
      "payer": {
        name: req.body.nombre,
        email: req.body.email,
        identification: {
          type: req.body.tipo,
          number: req.body.numero
        },
        phone: {
          area_code: req.body.area,
          number: parseInt(req.body.fono, 10)
        },
        address: {
          street_name: req.body.calle,
          street_number: parseInt(req.body.calle_num, 10),
          zip_code: req.body.zip
        }
      }
    }

    const preferencia = await mp.preferences.create(data)

    console.log(preferencia)

    return preferencia.response
  } catch (e) {
    console.log(e)
  }
}
