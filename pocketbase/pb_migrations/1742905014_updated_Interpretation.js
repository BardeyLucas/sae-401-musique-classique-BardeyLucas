/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("27hr3ixjwv3y4di")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "date681578878",
    "max": "",
    "min": "",
    "name": "Date_enregistrement",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number2220277813",
    "max": null,
    "min": null,
    "name": "duree",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "yrcg31omlixf6a5",
    "hidden": false,
    "id": "relation3266421532",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Formation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "oow04bzvllt640j",
    "hidden": false,
    "id": "relation1850190187",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "Offre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("27hr3ixjwv3y4di")

  // remove field
  collection.fields.removeById("date681578878")

  // remove field
  collection.fields.removeById("number2220277813")

  // remove field
  collection.fields.removeById("relation3266421532")

  // remove field
  collection.fields.removeById("relation1850190187")

  return app.save(collection)
})
