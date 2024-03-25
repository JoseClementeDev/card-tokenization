# Prueba técnica de Tokenización de Tarjetas

## 🛠️ Stack

- [**Node.js**](https://nodejs.org/en) - Entorno de ejecución de JavaScript.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript con sintaxis de tipado.
- [**Express.js**](https://expressjs.com/es/) - Framework backend para Node.js.
- [**Redis**](https://redis.io/docs/get-started/data-store/) - Base de datos en memoria.

## 🖥️ Prerrequisitos

Antes de comenzar, asegúrese de tener instalado lo siguiente:

- Node.js: versión 18+
- Docker: [**Install Docker**](https://docs.docker.com/get-docker/)
- Docker Compose: [**Install Docker Compose**](https://docs.docker.com/compose/install/)

## 🚀 Empezar

### 1. Clonar repositorio del proyecto:

```bash
git clone https://github.com/joseclementepro/card-tokenization
cd card-tokenization
```

### 2. Instalar dependencias:

```bash
npm install
```

### 3. Iniciar base de datos Redis:

```bash
docker compose up -d redis
```

### 4. Ejecutar comandos:

|     | Comando          | Acción                                        |
| :-- | :--------------- | :-------------------------------------------- |
| ⚙️  | `npm run dev`    | Lanza un servidor de desarrollo local en `localhost:3009`.  |
| ⚙️  | `npm run test`   | Ejecuta pruebas.      |
| ⚙️  | `npm run build`  | Hace un empaquetado de producción en `./build/`.      |
| ⚙️  | `npm run lint`   | Comprueba posibles errores.  |



## 🌎 Usar EndPoints:

### Consideraciones

- Vamos a usar token **"pk_test_123456"** solicitud para facilitar las pruebas.
- El tiempo de expiración del token sera de 1 minuto.

### 1. Lanzar servidor de desarrollo:

```bash
npm run dev
```
> Puedes abrir [**http://localhost:3009/health**](http://localhost:3009/health) en tu navegador para verificar el estado del servidor 🚀

### 2. Crear token:
```bash
POST: http://localhost:3009/tokens
```

#### Request (ejemplo):
```bash
# Header:
Authorization: Bearer pk_test_123456
```

```json
// Body:
{
  "card_number": "4111111111111111",
  "cvv": "123",
  "expiration_month": "05",
  "expiration_year": "2026",
  "email": "jose@gmail.com"
}
```

#### Response (ejemplo):
```bash
HTTP Status: 201
```

```json
// Body:
{
  "id": "tkn_card_d9e9029ddd264b13",
  "card_number": "4111111111111112",
  "expiration_month": "09",
  "expiration_year": "2025",
  "email": "richard@piedpiper.com",
  "creation_date": 1711384576
}
```


---

### 3. Consultar token:
```bash
GET: http://localhost:3009/tokens/{id}
```

Request (ejemplo):
```bash
# Header
Authorization: Bearer pk_test_123456
```

```bash
http://localhost:3009/tokens/tkn_card_4588446454be56df
```

Response (ejemplo):
```bash
HTTP Status: 200
```

```json
// Body:
{
  "id": "tkn_card_4588446454be56df",
  "card_number": "4111111111111115",
  "expiration_month": "10",
  "expiration_year": "2028",
  "email": "ricardo@gmail.com",
  "creation_date": 1711384716
}
```
