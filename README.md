# easy-places

![npm](https://img.shields.io/npm/v/easy-places)
![license](https://img.shields.io/npm/l/easy-places)
![node](https://img.shields.io/node/v/easy-places)

> Lightweight country → state → city data manager built with Node.js, Express, Sequelize & PostgreSQL.

---

## 🚀 Features

- 🌍 Country/State/City management
- 📦 RESTful API (Express)
- 💾 PostgreSQL + Sequelize ORM
- 🧩 Easily extensible or embedded in your app

---

## 📦 Installation

```bash
npm install easy-places
```

---

## 🔧 Usage (Server Example)

```js
const express = require('express');
const app = express();
const db = require('easy-places/models');

app.get('/api/countries', async (req, res) => {
  const countries = await db.Country.findAll();
  res.json(countries);
});

app.listen(8080, () => console.log('Server ready'));
```

---

## 🌐 API Endpoints

| Method | Endpoint              | Description            |
|--------|-----------------------|------------------------|
| GET    | `/api/countries`      | List all countries     |
| POST   | `/api/countries`      | Create country         |
| GET    | `/api/states`         | List all states        |
| POST   | `/api/states`         | Create state           |
| GET    | `/api/cities`         | List all cities        |
| POST   | `/api/cities`         | Create city            |

---

## 🧪 Scripts

```bash
npm run dev       # Start dev server with nodemon
npm run migrate   # Run Sequelize migrations
npm run seed      # Seed DB with country/state/city
npm run reset     # Undo all + migrate + seed
```

---

## 🛠 Project Structure

```
easy-places/
├── models/
├── controllers/
├── routes/
├── seeders/
├── migrations/
├── config/
└── server.js
```

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 📬 Contact

Maintainer: **Ajay Kaithwas**  
Email: `ajkaithwas4561@gmail.com`  
GitHub: [Aj4561](https://github.com/Aj4561/eassy-places)
