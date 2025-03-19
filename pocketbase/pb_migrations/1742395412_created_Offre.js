/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "oow04bzvllt640j",
    "created": "2025-03-19 14:43:32.566Z",
    "updated": "2025-03-19 14:43:32.566Z",
    "name": "Offre",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "z3m3vdkx",
        "name": "Type_offre",
        "type": "select",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Physique",
            "Gratuit",
            "Achat",
            "Abonnement"
          ]
        }
      },
      {
        "system": false,
        "id": "mzfh5i2n",
        "name": "Prix",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "wdtdmrkk",
        "name": "Plateforme",
        "type": "relation",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "collectionId": "4atwio2gwhh6yyx",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
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
  const collection = dao.findCollectionByNameOrId("oow04bzvllt640j");

  return dao.deleteCollection(collection);
})
