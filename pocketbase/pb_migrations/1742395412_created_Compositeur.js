/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "d8vcb1z0xqnzqkz",
    "created": "2025-03-19 14:43:32.565Z",
    "updated": "2025-03-19 14:43:32.565Z",
    "name": "Compositeur",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lcdd76qs",
        "name": "Prenom",
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
        "id": "mbdmqklx",
        "name": "Nom",
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
        "id": "mt9bk1ep",
        "name": "Portrait",
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
        "id": "ooc5fjb3",
        "name": "Date_de_naissance",
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
        "id": "mxft1mxc",
        "name": "Date_de_deces",
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
        "id": "rsxvkkqt",
        "name": "Nationalite",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 3,
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
  const collection = dao.findCollectionByNameOrId("d8vcb1z0xqnzqkz");

  return dao.deleteCollection(collection);
})
