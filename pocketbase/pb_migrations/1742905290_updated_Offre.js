/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("oow04bzvllt640j")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select4007068232",
    "maxSelect": 1,
    "name": "Type_offre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Physique",
      "Gratuit",
      "Achat",
      "Abonnement"
    ]
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number1474119008",
    "max": null,
    "min": null,
    "name": "Prix",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "4atwio2gwhh6yyx",
    "hidden": false,
    "id": "relation1935609793",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Plateforme",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("oow04bzvllt640j")

  // remove field
  collection.fields.removeById("select4007068232")

  // remove field
  collection.fields.removeById("number1474119008")

  // remove field
  collection.fields.removeById("relation1935609793")

  return app.save(collection)
})
