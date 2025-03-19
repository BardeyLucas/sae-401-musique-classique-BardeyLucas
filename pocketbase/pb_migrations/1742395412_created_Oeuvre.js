/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "uhq2i72x9z4uxdc",
    "created": "2025-03-19 14:43:32.566Z",
    "updated": "2025-03-19 14:43:32.566Z",
    "name": "Oeuvre",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jkgnhp5a",
        "name": "Titre",
        "type": "text",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "klzf9jj4",
        "name": "Cover",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "zlgh0afr",
        "name": "Annee_de_composition",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "4koryecy",
        "name": "Description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hlrinyzh",
        "name": "Compositeur",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "d8vcb1z0xqnzqkz",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "9wafmx3l",
        "name": "Genre",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
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
        }
      },
      {
        "system": false,
        "id": "fwekudfu",
        "name": "Interpreation",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "27hr3ixjwv3y4di",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("uhq2i72x9z4uxdc");

  return dao.deleteCollection(collection);
})
