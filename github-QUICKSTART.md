# 🚀 SZYBKI START - INSTRUKCJA DLA POCZĄTKUJĄCYCH

## 📌 Dla kogoś z 8 klasy - bez skomplikowanych rzeczy!

### Co potrzebujesz:
- ✅ Discord account
- ✅ Replit account (darmowy)
- ✅ 5 minut czasu

---

## 📋 KROK 1: Stwórz bota w Discord (3 minuty)

### 1.1 Otwórz Discord Developer Portal
```
Idź na: https://discord.com/developers/applications
```

### 1.2 Stwórz nową aplikację
```
Kliknij: "New Application"
Nazwij ją: "Thunder Roleplay Bot"
Kliknij: "Create"
```

### 1.3 Stwórz bot
```
Po lewej stronie kliknij: "Bot"
Kliknij: "Add Bot"
```

### 1.4 Skopiuj TOKEN
```
Kliknij: "Reset Token"
Kliknij: "Copy" (przycisk obok tokena)
PRZECHOWAJ TOKEN - będziesz go potrzebować!
```

### 1.5 Włącz uprawnienia
```
Przewiń w dół
Zaznacz:
  ☑️ Server Members Intent
  ☑️ Message Content Intent
Kliknij: "Save Changes"
```

---

## 📊 KROK 2: Dodaj bota na serwer (2 minuty)

### 2.1 Idź do OAuth2
```
Po lewej: OAuth2
Kliknij: URL Generator
```

### 2.2 Zaznacz Scopes
```
Zaznacz:
  ☑️ bot
  ☑️ applications.commands
```

### 2.3 Zaznacz Permissions
```
Zaznacz:
  ☑️ Manage Nicknames
  ☑️ Send Messages
  ☑️ Use Slash Commands
  ☑️ Read Messages/View Channels
```

### 2.4 Kopiuj i dodaj
```
Na dole skopiuj wygenerowany URL
Otwórz URL w przeglądarce
Wybierz swój serwer
Kliknij: "Authorize"
```

---

## 🎮 KROK 3: Uruchom na Replit (2 minuty)

### 3.1 Wejdź na Replit
```
https://replit.com
```

### 3.2 Zaloguj się lub zarejestruj
```
Jeśli nie masz konta - stwórz darmowe
```

### 3.3 Import z GitHub
```
Kliknij: "Import from GitHub"
Wklej URL tego repozytorium:
https://github.com/TWOJA_NAZWA/thunder-roleplay-bot

Kliknij: "Import"
Czekaj... (30 sekund)
```

### 3.4 Stwórz plik .env
```
W lewym panelu "Files" kliknij "+"
Nazwij go: .env
Wklej: TOKEN=TWOJ_TOKEN

Zastąp TWOJ_TOKEN tym co skopiowałeś z Discord Portal!

Kliknij: "Save"
```

### 3.5 Uruchom bota!
```
Kliknij: "Run" ▶️ (duży niebieski przycisk na górze)

Po 10 sekundach powinieneś zobaczyć w konsoli:
✅ Bot [nazwa]#1234 jest online!
✅ Komendy slash zarejestrowane pomyślnie!
```

---

## ✅ KROK 4: Testuj bota!

Na Twoim serwerze Discord wpisz:

### Test 1: Formularz
```
/formularz
```
Pojawia się modal z formularzem. Wypełnij wszystkie pola i kliknij "Wyślij".

Powinno się:
- ✅ Zmienić Twój pseudonim
- ✅ Pokazać się embed z Twoimi danymi
- ✅ Wyświetlić komunikat sukcesu

### Test 2: Pokaż dane
```
/pokaz_dane
```
Bot pokaże Ci zapisane dane!

---

## 🎉 GOTOWE!

Jeśli wszystko działa - bot jest uruchomiony! 🚀

---

## ❌ Coś nie działa?

### Problem: "Invalid Token"
```
✅ Sprawdź czy skopiowałeś cały token
✅ Nie ma spacji!
✅ Spróbuj zresetować token i skopiować ponownie
```

### Problem: Komendy nie działają
```
✅ Odczekaj 1-2 minuty
✅ Wyloguj się i zaloguj na Discord
✅ Odśwież (F5)
```

### Problem: Bot się wyłączy
```
✅ To normalne - Replit darmowy wyłącza boty
✅ Kliknij Run ponownie jeśli to się stanie
```

### Problem: Nie mogę znaleźć przycisków
```
✅ Czytaj dokładnie nazwy przycisków
✅ Discord/Replit interface czasem zmienia się
✅ Google'uj "how to [coś]" jeśli pojawi się problem
```

---

## 💡 Porady

- **Token** - nigdy go nikomu nie pokazuj!
- **Replit** - jeśli bot się wyłączy, kliknij Run ponownie
- **Discord** - jeśli coś nie działa, odśwież (F5)
- **Bota** - może przechowywać dane aż będzie online

---

## 🆘 Nadal coś nie wychodzi?

1. Sprawdź konsolę Replit - tam będą błędy
2. Czytaj te instrukcje jeszcze raz
3. Zapytaj kogoś bardziej doświadczonego

---

**Powodzenia! ⚡🎮**

Bot jest teraz gotowy do testowania!