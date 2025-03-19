/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hju1or2dx518pu3",
    "created": "2025-03-19 14:43:32.566Z",
    "updated": "2025-03-19 14:43:32.566Z",
    "name": "Page_content",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aqjqk5jv",
        "name": "Content",
        "type": "editor",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "myzgspt7",
        "name": "Test",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hju1or2dx518pu3");

  return dao.deleteCollection(collection);
})
