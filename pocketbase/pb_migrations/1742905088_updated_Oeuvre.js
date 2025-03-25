/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("uhq2i72x9z4uxdc")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1052141744",
    "max": 0,
    "min": 0,
    "name": "Titre",
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
    "id": "file1288284609",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "Cover",
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
    "id": "date4020618427",
    "max": "",
    "min": "",
    "name": "Annee_de_composition",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3950563313",
    "max": 0,
    "min": 0,
    "name": "Description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "d8vcb1z0xqnzqkz",
    "hidden": false,
    "id": "relation668308320",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Compositeur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select1116806396",
    "maxSelect": 1,
    "name": "Genre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Baroque",
      "Classique",
      "Romantique",
      "Pré-baroque",
      "Médiéval",
      "Impressionnisme",
      "Post-romantisme",
      "Modernisme",
      "Néoclassicisme",
      "Minimalisme",
      "Musique contemporaine",
      "Musique sacrée",
      "Opéra",
      "Opérette",
      "Messe",
      "Oratorio",
      "Symphonie",
      "Musique de chambre",
      "Ballet",
      "Musique expérimentale"
    ]
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "27hr3ixjwv3y4di",
    "hidden": false,
    "id": "relation650095055",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "Interpretation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("uhq2i72x9z4uxdc")

  // remove field
  collection.fields.removeById("text1052141744")

  // remove field
  collection.fields.removeById("file1288284609")

  // remove field
  collection.fields.removeById("date4020618427")

  // remove field
  collection.fields.removeById("text3950563313")

  // remove field
  collection.fields.removeById("relation668308320")

  // remove field
  collection.fields.removeById("select1116806396")

  // remove field
  collection.fields.removeById("relation650095055")

  return app.save(collection)
})
