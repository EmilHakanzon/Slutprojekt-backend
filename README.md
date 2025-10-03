# Allsvenskan kunskapsdomän sltprojekt

Ett REST API byggt med Express.js och MongoDB för att hantera svenska fotbollslag.

## 📋 Funktioner

- Hämta alla lag från databasen
- Filtrera lag efter stad
- Sök lag efter namn eller stad
- Få statistik om antal lag
- Hämta specifikt lag via ID

## 🛠 Teknologier

- **Node.js** 
- **Express.js** 
- **MongoDB** 
- **Mongoose** 
- **ES Modules** 

## 📦 Installation

### 1. Klona projektet
```bash
git clone <repository-url>
cd Slutprojekt-backend
```

### 2. Installera dependencies
```bash
npm install
```

### 3. Skapa .env fil
```env
NODE_ENV=development
PORT=4200
MONGO_URI=
```

### 4. Starta MongoDB
Se till att MongoDB körs lokalt eller använd MongoDB Atlas.

### 5. Starta servern
```bash
npm start
```

Servern körs på: `http://localhost:4200`

## 🚀 API Endpoints

### Lag (Teams)

| Method | Endpoint | Beskrivning |
|--------|----------|-------------|
| GET | `/api/v1/teams` | Hämta alla lag |
| GET | `/api/v1/teams/count` | Antal lag totalt |
| GET | `/api/v1/teams/city/:city` | Lag från specifik stad |
| GET | `/api/v1/teams/search?q=namn&stad=stad` | Sök lag |
| GET | `/api/v1/teams/:id` | Hämta lag via ID |

## 📝 Exempel på användning

### Hämta alla lag
```bash
 http://localhost:4200/api/v1/teams
```

### Hämta lag från Stockholm
```bash
 http://localhost:4200/api/v1/teams/city/Stockholm
```

### Sök lag
```bash
 http://localhost:4200/api/v1/teams/search?q=AIK
```

### Få antal lag
```bash
 http://localhost:4200/api/v1/teams/count
```


## 📁 Projektstruktur

```
src/
├── controllers/     # Business logic
├── models/         # Mongoose schemas
├── routes/         # API routes
├── utils/          # Utility functions
├── db/            # Database connection
├── app.js         # Express app setup
└── server.js      # Server startup
```

## ⚙️ Scripts

```bash
npm start          # Starta servern
npm run dev        # Starta med nodemon (utveckling)
```

## 🔧 Utveckling

Projektet använder:
- **ESM modules** (import/export)
- **Async/await** konsekvent
- **Error handling** i alla endpoints
- **Graceful shutdown** för server och databas
- **CORS** för cross-origin requests

## 📄 License

MIT License
