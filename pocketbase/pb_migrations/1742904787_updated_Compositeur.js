/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("d8vcb1z0xqnzqkz")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2710147437",
    "max": 0,
    "min": 0,
    "name": "Prenom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file1815500461",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "Portrait",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date2402643517",
    "max": "",
    "min": "",
    "name": "Date_de_naissance",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date2663618234",
    "max": "",
    "min": "",
    "name": "Date_de_deces",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select408443112",
    "maxSelect": 2,
    "name": "Nationalite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "FR",
      "EN",
      "US",
      "AL",
      "IT",
      "AUT",
      "RU",
      "HONG",
      "TCHE",
      "BEL",
      "POL"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("d8vcb1z0xqnzqkz")

  // remove field
  collection.fields.removeById("text2710147437")

  // remove field
  collection.fields.removeById("file1815500461")

  // remove field
  collection.fields.removeById("date2402643517")

  // remove field
  collection.fields.removeById("date2663618234")

  // remove field
  collection.fields.removeById("select408443112")

  return app.save(collection)
})
