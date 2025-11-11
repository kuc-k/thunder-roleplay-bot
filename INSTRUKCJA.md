═══════════════════════════════════════════════════════════════════════════════
🤖 THUNDER ROLEPLAY BOT - INSTRUKCJA INSTALACJI I UŻYCIA
═══════════════════════════════════════════════════════════════════════════════

SZYBKA ŚCIEŻKA - REPLIT (POLECANE - 10 MINUT!)
───────────────────────────────────────────────────────────────────────────────

✅ KROK 1: PRZYGOTOWANIE BOTA W DISCORD (5 minut)
┌────────────────────────────────────────────────────────────────────────────┐
│ 1. Wejdź na: https://discord.com/developers/applications                   │
│                                                                             │
│ 2. Kliknij "New Application"                                                │
│    Nazwij go: "Thunder Roleplay Bot"                                        │
│                                                                             │
│ 3. Przejdź do zakładki "Bot" (po lewej stronie)                            │
│                                                                             │
│ 4. Kliknij "Reset Token" i SKOPIUJ TOKEN                                   │
│    WAŻNE: Przechowaj token w bezpiecznym miejscu! Nie udostępniaj nikomu!  │
│                                                                             │
│ 5. Przewiń w dół i włącz:                                                   │
│    ☑️  Server Members Intent                                                │
│    ☑️  Message Content Intent                                               │
│                                                                             │
│ 6. Kliknij "Save Changes"                                                   │
└────────────────────────────────────────────────────────────────────────────┘

✅ KROK 2: DODANIE BOTA NA SERWER
┌────────────────────────────────────────────────────────────────────────────┐
│ 1. W tym samym oknie przejdź do: OAuth2 → URL Generator (po lewej)         │
│                                                                             │
│ 2. Pod "SCOPES" zaznacz:                                                    │
│    ☑️  bot                                                                   │
│    ☑️  applications.commands                                                 │
│                                                                             │
│ 3. Pod "BOT PERMISSIONS" zaznacz:                                          │
│    ☑️  Manage Nicknames                                                     │
│    ☑️  Send Messages                                                        │
│    ☑️  Use Slash Commands                                                   │
│    ☑️  Read Messages/View Channels                                          │
│                                                                             │
│ 4. Skopiuj URL z dołu strony                                                │
│                                                                             │
│ 5. Otwórz URL w przeglądarce                                                │
│                                                                             │
│ 6. Wybierz serwer i kliknij "Authorize"                                     │
└────────────────────────────────────────────────────────────────────────────┘

✅ KROK 3: USTAWIENIE BOTA NA REPLIT
┌────────────────────────────────────────────────────────────────────────────┐
│ 1. Wejdź na: https://replit.com                                             │
│                                                                             │
│ 2. Zaloguj się lub zarejestruj (darmowe konto)                             │
│                                                                             │
│ 3. Kliknij "+ Create Repl"                                                  │
│                                                                             │
│ 4. Wybierz: "Node.js"                                                       │
│                                                                             │
│ 5. Nazwij projekt: "thunder-roleplay-bot"                                  │
│                                                                             │
│ 6. Kliknij "Create Repl"                                                    │
│                                                                             │
│ Otworzy się edytor kodu z plikami: index.js, package.json, .replit, .env  │
└────────────────────────────────────────────────────────────────────────────┘

✅ KROK 4: DODANIE KODU BOTA
┌────────────────────────────────────────────────────────────────────────────┐
│ 1. PLIK index.js                                                            │
│    • Otwórz plik index.js w Replit                                          │
│    • Usuń całą zawartość (Ctrl+A, Delete)                                   │
│    • Skopiuj zawartość pliku "index-bot.js" z tej paczki                    │
│    • Wklej do index.js (Ctrl+V)                                             │
│    • SAVE (Ctrl+S)                                                          │
│                                                                             │
│ 2. PLIK package.json                                                        │
│    • Otwórz plik package.json w Replit                                      │
│    • Usuń całą zawartość                                                    │
│    • Skopiuj zawartość pliku "package-json.txt" z tej paczki                │
│    • Wklej do package.json                                                  │
│    • SAVE (Ctrl+S)                                                          │
│                                                                             │
│ 3. PLIK .env                                                                │
│    • W lewym panelu Files kliknij "..."                                     │
│    • Kliknij "New File"                                                     │
│    • Nazwij: .env                                                           │
│    • Otwórz nowy plik .env                                                  │
│    • Wklej: TOKEN=TUTAJ_TWOJ_SKOPIOWANY_TOKEN                              │
│    • REPLACE "TUTAJ_TWOJ_SKOPIOWANY_TOKEN" SWYM TOKENEM!                   │
│    • SAVE (Ctrl+S)                                                          │
│                                                                             │
│    PRZYKŁAD:                                                                │
│    TOKEN=MTIzNDU2Nzg5MDEyMzQ1Njc4.AbCdEf.GhIjKlMnOpQrStUvWxYz123456      │
└────────────────────────────────────────────────────────────────────────────┘

✅ KROK 5: URUCHOMIENIE BOTA
┌────────────────────────────────────────────────────────────────────────────┐
│ 1. Kliknij przycisk "Run" ▶️ na górze okna (lub Ctrl+Enter)                 │
│                                                                             │
│ 2. Po chwili powinnaś zobaczyć w konsoli (na dole):                        │
│                                                                             │
│    🚀 Uruchamianie bota Thunder Roleplay...                                 │
│    ✅ Bot Thunder Roleplay Bot#1234 jest online!                           │
│    📊 Obecny na 1 serwerach                                                 │
│    🔄 Rejestrowanie komend slash...                                         │
│    ✅ Komendy slash zarejestrowane pomyślnie!                               │
│                                                                             │
│ 3. JEŚLI WIDZISZ POWYŻSZE KOMUNIKATY = BOT DZIAŁA! ✨                       │
└────────────────────────────────────────────────────────────────────────────┘

✅ KROK 6: TESTOWANIE BOTA
┌────────────────────────────────────────────────────────────────────────────┐
│ Na Twoim serwerze Discord wpisz w kanale tekstowym:                         │
│                                                                             │
│ • /formularz                                                                │
│   → Otwiera się modal z formularzem                                         │
│   → Wypełnij wszystkie pola                                                 │
│   → Kliknij "Wyślij"                                                        │
│   → Bot zmieni Twój pseudonim                                               │
│   → Bot wyśle embed z Twoimi danymi                                          │
│                                                                             │
│ • /pokaz_dane                                                               │
│   → Bot pokaże Twoje zapisane dane                                          │
│                                                                             │
│ Jeśli wszystko działa = SUKCES! 🎉                                          │
└────────────────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════

ALTERNATYWA - INSTALACJA LOKALNA (PC/Mac/Linux)
───────────────────────────────────────────────────────────────────────────────

Jeśli nie chcesz używać Replit, możesz zainstalować bota lokalnie.

WYMAGANIA:
• Node.js 16+ (pobierz: https://nodejs.org/)
• Git (opcjonalnie)

INSTALACJA:
┌────────────────────────────────────────────────────────────────────────────┐
│ 1. Stwórz folder: "thunder-bot"                                             │
│                                                                             │
│ 2. Skopiuj do folderu:                                                       │
│    • index.js (zawartość pliku index-bot.js)                                │
│    • package.json (zawartość pliku package-json.txt)                        │
│    • .env (zawartość pliku env-template.txt z Twoim tokenem)                │
│                                                                             │
│ 3. Otwórz terminal w tym folderze                                           │
│                                                                             │
│ 4. Zainstaluj zależności:                                                   │
│    npm install                                                              │
│                                                                             │
│ 5. Uruchom bota:                                                            │
│    node index.js                                                            │
│                                                                             │
│ 6. Jeśli widzisz "✅ Bot jest online!" → DZIAŁA!                           │
└────────────────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════

❓ ROZWIĄZYWANIE PROBLEMÓW
───────────────────────────────────────────────────────────────────────────────

❌ PROBLEM: "Invalid Token"
   ROZWIĄZANIE:
   • Sprawdź czy skopiowałeś cały token (bez spacji!)
   • Upewnij się że token nie ma spacji przed/po
   • Zresetuj token w Discord Developer Portal (aby stary nie działał)
   • Skopiuj nowy token i wklej ponownie

❌ PROBLEM: "Cannot find module 'discord.js'"
   ROZWIĄZANIE:
   • W Replit: Kod powinien się zainstalować automatycznie
   • Lokalnie: Upewnij się że uruchomiłeś: npm install

❌ PROBLEM: Komendy nie pojawiają się
   ROZWIĄZANIE:
   • Odczekaj 1-2 minuty po uruchomieniu bota
   • Wyloguj się i zaloguj ponownie do Discord
   • Sprawdź czy bot ma uprawnienie "Use Slash Commands"
   • Odśwież Discord (F5)

❌ PROBLEM: Bot se wyłącza na Replit
   ROZWIĄZANIE:
   • Na Replit boty darmowe wyłączają się po pewnym czasie
   • Rozwiązania:
     1. Kliknij "Run" ponownie
     2. Załóż paid account na Replit (Always On)
     3. Użyj UptimeRobot do automatycznego restartowania bota

❌ PROBLEM: Bot nie zmienia pseudonimu
   ROZWIĄZANIE:
   • Bot musi mieć uprawnienie "Manage Nicknames"
   • Rola bota musi być WYŻEJ niż role użytkownika
   • Nie działa dla właściciela serwera (limit Discord)

❌ PROBLEM: Błąd w konsoli
   ROZWIĄZANIE:
   • Czytaj dokładnie komunikat błędu
   • Sprawdź czy token jest poprawny
   • Sprawdź czy bot ma wszystkie intenty włączone
   • Sprawdź czy bot ma uprawnienia na serwerze

═══════════════════════════════════════════════════════════════════════════════

📝 POLA FORMULARZA
───────────────────────────────────────────────────────────────────────────────

• Imię i nazwisko
  - Maksymalnie 100 znaków
  - To pole zmieni Twój pseudonim na serwerze

• Data Urodzenia
  - Format: DD.MM.YYYY (np. 21.12.2000)
  - Maksymalnie 10 znaków

• Obywatelstwo
  - Maksymalnie 50 znaków

• Historia Postaci
  - Maksymalnie 200 znaków
  - Pole tekstowe (duże)

• Nick Roblox
  - Maksymalnie 50 znaków

═══════════════════════════════════════════════════════════════════════════════

🎯 CO ROBI BOT
───────────────────────────────────────────────────────────────────────────────

Komenda: /formularz
├─ Otwiera formularz modalny
├─ Zbiera 5 pól danych
├─ Po wysłaniu:
│  ├─ Zmienia pseudonim użytkownika
│  ├─ Wysyła embed z danymi na kanał
│  ├─ Zapisuje dane w pamięci
│  └─ Potwierdzenie dla użytkownika

Komenda: /pokaz_dane
├─ Wyświetla zapisane dane
├─ Widoczne tylko dla Ciebie
└─ Jeśli brak danych → komunikat błędu

═══════════════════════════════════════════════════════════════════════════════

💾 STRUKTURA PROJEKTU
───────────────────────────────────────────────────────────────────────────────

thunder-bot/
├── index.js              ← Główny kod bota (221 linii)
├── package.json          ← Zależności (discord.js, dotenv)
├── .env                  ← Token bota (PRYWATNY - nie udostępniaj!)
├── .gitignore            ← Ignoruj pliki (node_modules, .env)
├── .replit               ← Konfiguracja Replit
└── README.md             ← Dokumentacja

═══════════════════════════════════════════════════════════════════════════════

🆘 POTRZEBUJESZ POMOCY?
───────────────────────────────────────────────────────────────────────────────

1. Sprawdź konsolę w Replit/terminalu - błędy są tam opisane
2. Przeczytaj dokładnie komunikat błędu
3. Sprawdź czy bot ma uprawnienia na serwerze
4. Sprawdź czy token jest poprawny
5. Czytaj tę instrukcję ponownie - odpowiedź jest tu gdzieś!

═══════════════════════════════════════════════════════════════════════════════

✅ POWODZENIA! ⚡🎮

Bot jest gotowy do pracy. Testuj go na swoim serwerze i ciesz się funkcjami!

═══════════════════════════════════════════════════════════════════════════════