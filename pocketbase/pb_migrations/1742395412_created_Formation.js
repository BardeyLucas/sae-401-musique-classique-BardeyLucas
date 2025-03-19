/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yrcg31omlixf6a5",
    "created": "2025-03-19 14:43:32.565Z",
    "updated": "2025-03-19 14:43:32.565Z",
    "name": "Formation",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "k3po8ys3",
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
        "id": "k6tybxt6",
        "name": "Chef_orchestre",
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
        "id": "fl4fdh2h",
        "name": "annee_creation",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
  const collection = dao.findCollectionByNameOrId("yrcg31omlixf6a5");

  return dao.deleteCollection(collection);
})
