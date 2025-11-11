# 🤖 Thunder Roleplay Bot

Discord bot z formularzem modalnym do zgłoszeń Thunder Roleplay.

## ✨ Funkcje

- ✅ `/formularz` - Otwiera modal z formularzem zgłoszeniowym
- ✅ `/pokaz_dane` - Wyświetla zapisane dane (tylko dla Ciebie)
- ✅ Automatyczna zmiana pseudonimu użytkownika
- ✅ Wysyłanie embeda z danymi na kanał
- ✅ Zapisywanie danych w pamięci bota
- ✅ Walidacja wszystkich pól formularza

## 🚀 Szybki Start

### Opcja 1: Replit (najszybciej - 2 minuty)

1. Wejdź na [Replit.com](https://replit.com)
2. Kliknij "Import from GitHub"
3. Wklej: `https://github.com/TWOJA_NAZWA/thunder-roleplay-bot`
4. Czekaj aż się załaduje
5. Stwórz plik `.env` i wklej: `TOKEN=TWOJ_TOKEN_Z_DISCORD`
6. Kliknij "Run" ▶️

### Opcja 2: Instalacja Lokalna

```bash
# Sklonuj repozytorium
git clone https://github.com/TWOJA_NAZWA/thunder-roleplay-bot.git
cd thunder-roleplay-bot

# Zainstaluj zależności
npm install

# Utwórz plik .env
echo "TOKEN=TWOJ_TOKEN" > .env

# Uruchom bota
npm start
```

## 🔧 Konfiguracja

### 1. Stwórz bota w Discord

1. Wejdź na [Discord Developer Portal](https://discord.com/developers/applications)
2. Kliknij "New Application"
3. Przejdź do "Bot" i kliknij "Reset Token"
4. **SKOPIUJ TOKEN** (najważniejsze!)

### 2. Włącz uprawnienia

W Discord Portal:
- Bot → Privileged Gateway Intents
  - ✅ Server Members Intent
  - ✅ Message Content Intent

### 3. Dodaj bota na serwer

- OAuth2 → URL Generator
- Zaznacz: `bot` + `applications.commands`
- Permissions: `Manage Nicknames`, `Send Messages`, `Use Slash Commands`
- Skopiuj link i otwórz w przeglądarce

### 4. Wklej token do `.env`

```
TOKEN=TWOJ_SKOPIOWANY_TOKEN_TUTAJ
```

## 📝 Pola Formularza

Gdy wpiszesz `/formularz` pojawia się formularz z polami:

| Pole | Limit | Format |
|------|-------|--------|
| Imię i nazwisko | 100 znaków | Tekst (zmienia Twój nick!) |
| Data urodzenia | 10 znaków | DD.MM.YYYY |
| Obywatelstwo | 50 znaków | Tekst |
| Historia postaci | 200 znaków | Duższy tekst |
| Nick Roblox | 50 znaków | Tekst |

## 📋 Komendy

### `/formularz`
Otwiera modal formularza. Po wypełnieniu:
- Bot zmienia Twój pseudonim
- Bot wysyła embed z danymi na kanał
- Dane są zapisane

### `/pokaz_dane`
Pokazuje Twoje zapisane dane (tylko dla Ciebie)

## ❓ Rozwiązywanie Problemów

### Błąd: "Invalid Token"
```
✅ Sprawdź czy token jest poprawny
✅ Brak spacji przed/po tokenie
✅ Zresetuj token w Discord Portal
```

### Komendy nie pojawiają się
```
✅ Odczekaj 1-2 minuty po uruchomieniu
✅ Wyloguj się i zaloguj do Discord
✅ Sprawdź czy bot ma uprawnienia
```

### Bot się wyłącza na Replit
```
✅ To normalne - Replit darmowy wyłącza boty
✅ Kliknij Run ponownie
✅ Lub załóż Replit Pro (Always On)
```

### Bot nie zmienia pseudonimu
```
✅ Bot musi mieć uprawnienie "Manage Nicknames"
✅ Rola bota musi być wyżej niż role użytkowników
✅ Nie działa dla właściciela serwera (Discord limit)
```

## 📚 Wymagania

- Node.js 16 lub wyżej
- discord.js 14.x
- dotenv

## 🆘 Potrzebujesz pomocy?

1. Sprawdź konsolę (błędy są opisane tam)
2. Czytaj te instrukcje jeszcze raz
3. Zapytaj na [Discord.js Help](https://discord.gg/djs)

## 📄 Struktura Plików

```
thunder-roleplay-bot/
├── index.js          ← Główny kod bota
├── package.json      ← Zależności
├── .env.example      ← Szablon zmiennych środowiska
├── .gitignore        ← Ignoruj node_modules i .env
└── README.md         ← Ta instrukcja
```

## 🎮 Przykład Użycia

```
Ty: /formularz
Bot: [otwiera modal]
Ty: Wpisujesz dane...
Ty: Kliknij "Wyślij"
Bot: ✅ Formularz wypełniony! Nick zmieniony na [Twoje Imię]
Bot: [wyśle embed na kanał]

Ty: /pokaz_dane
Bot: [pokaże Twoje dane, tylko dla Ciebie]
```

## ⚡ Szybkie Porady

- Token przechowuj w `.env` - NIGDY nie commituj go na GitHub!
- `.gitignore` pilnuje by `.env` nie został wysłany
- Dane są w pamięci - po restarcie znikają (normalnie)
- Bot musi być online żeby działał

## 📞 Support

Problemy? Sprawdź:
1. Konsolę (error messages)
2. Discord Bot Intents (włączone?)
3. Bot permissions (na serwerze)
4. Token (poprawny?)

## 📄 Licencja

MIT

---

**Powodzenia! ⚡🎮**

Jeśli masz pytania, zapytaj!

---

### Pro Tip 🔥

Chcesz więcej funkcji? Możesz dodać:
- Bazę danych (MongoDB, SQLite)
- Więcej komend
- Automatyczne moderowanie
-Customowe embedy

Tego nie ma w tym bocie, ale możesz rozbudować!