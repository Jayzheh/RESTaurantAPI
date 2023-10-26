## RESTaurant API

### Overview

The RESTaurant API is a Node.js API that provides digital menu. Intuitive and ergonomic, it's designed to fit the needs of customers and restaurants alike. All of the API's services are optimized to provide a time-saving experience.

### Features

The RESTaurant API provides the following features:

* **Digital menu:** Customers can view the restaurant's menu online, including item descriptions, prices, and images.

### How to launch the API

1. Install Node.js and MySQL.
2. Clone this repository.
3. Install the API's dependencies: `npm install`.
4. Create a MySQL database and configure the API to connect to it.
5. Start the API server: `node index.js`.

### Usage

Once the API server is running, you can access it using the following endpoints:

* **Items:** `/items`
* **Categories:** `/categories`
* **Formulas:** `/formulas`

You can use the following HTTP methods to interact with the API:

* **GET:** To retrieve data from the API.
* **POST:** To create new data in the API.
* **PUT:** To update existing data in the API.
* **DELETE:** To delete data from the API.

### Collection from Postman 

The following collection from Postman provides a complete set of requests for interacting with the RESTaurant API:

```json
"item": [
		{
			"name": "GET_ALL_ITEMS",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/items",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"items"
					]
				}
			},
			"response": []
		},
		{
			"name": "CREATE_NEW_ITEM",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"HELP ME\",\n  \"description\": \"PLEASE\",\n  \"price\": 5\n}\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/items",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"items"
					]
				}
			},
			"response": []
		},
		{
			"name": "GET_AN_ITEM",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/items/1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"items",
						"1"
					]
				}
			},
			"response": []
		},
		{
			"name": "UPDATE_ITEM",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"Updated item name\",\n  \"description\": \"Updated item description\",\n  \"price\": 300.99\n}\n\n\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/items/6",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"items",
						"6"
					]
				}
			},
			"response": []
		},
		{
			"name": "DELETE_ITEM",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/items/6",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"items",
						"6"
					]
				}
			},
			"response": []
		},
		{
			"name": "GET_ALL_CATEGORIES",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/categories",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"categories"
					]
				}
			},
			"response": []
		},
		{
			"name": "GET_CATEGORY_BY_ID",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/categories/5",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"categories",
						"5"
					]
				}
			},
			"response": []
		},
		{
			"name": "CREATE_CATEGORY",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"PAIN\"\n}\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/categories",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"categories"
					]
				}
			},
			"response": []
		},
		{
			"name": "UPDATE_CATEGORY",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"TEARS\"\n}\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/categories/8",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"categories",
						"8"
					]
				}
			},
			"response": []
		},
		{
			"name": "DELETE_CATEGORY",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/categories/8",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"categories",
						"8"
					]
				}
			},
			"response": []
		},
		{
			"name": "GET_ALL_FORMULAS",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/formulas",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"formulas"
					]
				}
			},
			"response": []
		},
		{
			"name": "CREATE_FORMULA",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"Hell\",\n  \"description\": \"tears & salt & pain.\",\n  \"price\": 6.66\n}\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/formulas",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"formulas"
					]
				}
			},
			"response": []
		},
		{
			"name": "GET_FORMULA_BY_ID",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/formulas/2",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"formulas",
						"2"
					]
				}
			},
			"response": []
		},
		{
			"name": "UPDATE_FORMULA",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"name\": \"HEAVEN & HELL\",\n    \"description\": \"Breathe, cry, repeat\",\n    \"price\": 6.66\n}\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/formulas/4",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"formulas",
						"4"
					]
				}
			},
			"response": []
		},
		{
			"name": "DELETE_FORMULA",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/formulas/4",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"formulas",
						"4"
					]
				}
			},
			"response": []
		}
	]
}
```
### Conclusion 

Easy to use, the RESTaurant API can be the perfect way to interact with a digital menu. To learn more about the API, please visit the collection from Postman.
