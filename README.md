# 210_Sneakerliste


Projektvorstellung (Project pitch)

    Die Sneakerliste ist eine Webanwendung, die es Nutzer:innen ermöglicht, eine persönliche Sneaker-Datenbank zu erstellen und zu verwalten. Die App bietet die Kernfunktionen Suchen, Hinzufügen, Bearbeiten und Löschen (CRUD) von Sneakern.

    Technologie:

    Frontend: React für eine schnelle und dynamische Benutzeroberfläche.

    Backend & Authentifizierung: Supabase wird für die Datenbank und die Nutzer-Authentifizierung verwendet. Dies ermöglicht ein schnelles und effizientes Setup, da Supabase sowohl die Datenverwaltung als auch verschiedene Authentifizierungsmechanismen bereitstellt.
    
    Ziele:

    Nutzer:innen können Sneaker einfach durchsuchen, hinzufügen, bearbeiten und löschen.
    Einsteigerfreundliche Implementierung mit Fokus auf Supabase als Backend-Lösung.
    Eine benutzerfreundliche Oberfläche, die modernes Design und einfache Bedienbarkeit kombiniert.

Arbeitsplan mit Zeitschätzung
    
    -Git Reposetory erstellen   /15 min 
    -Neues Superbase Projekt anlegen    /20 min
    -React Projekt lokal anlegen    /10 min
    -User und Sneakertabellen in der DB anlegen     /30 min
    -Authentifizierung für User anlegen     /30 min
    -Table Persmissions anlegen     /20 min
    -Routing erstellen      /20 min 
    -Komponente erstellen   /2h

Arbeitsjournal

    13.12.2024:
    -Git Reposetory erstellt
    -Supabase project angelegt mit Sneaker Tabelle
    -React Projekt angelegt
    -Sneaker Tabelle in der DB kreiert 
    -added Login and dashboard components

    14.12.2024
    -updated Sneakerlist.jsx
    -updated Dashboard component
    -updated index.html
    
    15.12.2024 
    -updated Sneakerlist.jsx
    -updated index.html
    -updated README.md

Architektur-Dokumentation für Sneakerliste-Projekt

    1. Überblick
        Das Sneakerliste-Projekt basiert auf einer 2-Tier-Architektur, bestehend aus:

        Frontend (Präsentationsschicht): Die Benutzeroberfläche, über die Nutzer:innen mit der Anwendung interagieren.
        Backend/Datenbank (Datenhaltungsschicht): Eine zentrale Datenbank zur Speicherung und Verwaltung der Sneaker-Daten und Benutzerauthentifizierung.
        Die beiden Schichten kommunizieren direkt miteinander, ohne eine zusätzliche Middleware oder einen separaten Backend-Server.

    2. Schichtenbeschreibung
    Frontend (Präsentationsschicht):

        Technologie: React.js

    Funktion:

        Stellt die Benutzeroberfläche für die Sneakerliste bereit.
        Ermöglicht Nutzern das Anzeigen, Hinzufügen, Bearbeiten und Löschen von Sneaker-Einträgen (CRUD-Operationen).
        Kommuniziert direkt mit der Supabase-Datenbank über API-Aufrufe.
        Schlüsselkomponenten:
        Sneakerliste anzeigen: Ruft die Daten aus der Supabase-Datenbank ab und rendert sie in einer Tabelle.
        Sneaker hinzufügen: Schickt einen Eintrag über die Supabase-API an die Datenbank.
        Sneaker löschen: Löscht einen spezifischen Eintrag basierend auf der ID.
        Backend/Datenbank (Datenhaltungsschicht):
        Technologie: Supabase (PostgreSQL)
    
    Funktion:

        Speichert alle Sneaker-Daten in einer relationalen Datenbank.
        Verwaltet Benutzerauthentifizierung und Zugriffsrechte.
        Führt Datenbankoperationen (Abfragen, Hinzufügen, Löschen) über direkte API-Aufrufe aus.
        Datenbankstruktur:
        Tabelle: sneaker
        -id (Primary Key)
        -marke (Text)
        -model (Text)
        -releaseYear (Datum)
        -price (Zahl/Text)
        Authentifizierung: Standard-Supabase Auth (z. B. Email/Passwort).

Projektarchitektur

        +--------------------+          +--------------------------+
        |   React Frontend   |          | Supabase (Backend/DB)    |
        |                    | <------> | PostgreSQL Database      |
        |  User Interface    |   API    | Authentication           |
        | CRUD Operations    |          | Data Storage             |
        +--------------------+          +--------------------------+

Deployment

    Vercel

    Beschreibung:

        -Vercel ist eine beliebte Hosting-Plattform, speziell für moderne Frontend-Anwendungen wie React.

    Vorteile:

        -Einfaches Setup: Direkte Verbindung zu GitHub-Repository.
        -Automatische Builds: Bei jedem neuen Commit wird die Anwendung neu gebaut und deployed.
        -Kostenfrei für kleine Projekte (kostenlose Tier verfügbar).

    Schritte zum Deployment:
        -Auf das sneakerliste Verzeichnis wechseln.
        -GitHub-Repository mit dem Code erstellen.
        -Auf Vercel anmelden und das Repository verknüpfen.
        -Vercel erkennt automatisch die React-App und konfiguriert den Build-Prozess (npm run build).
        -.env-Variablen in den Vercel-Einstellungen eintragen.
        -Deployment starten.

    Deployment-Optionen für Supabase
        -Supabase ist bereits ein gehosteter Dienst, daher ist kein separates Deployment erforderlich. Die   Datenbank und API sind direkt über die von Supabase bereitgestellte URL zugänglich.

Review meines Projekts: Sneakerliste

    Ich habe bei diesem Projekt eine solide Grundlage geschaffen. Die Idee, eine Sneakerliste mit CRUD-Funktionen umzusetzen, ist klar und funktional. Besonders stolz bin ich darauf, dass ich Supabase als Backend nutzen konnte, obwohl es mein erstes Mal mit dieser Technologie war. Ich habe es geschafft, die grundlegenden Funktionen wie das Hinzufügen, Löschen und Anzeigen von Sneakers erfolgreich zu implementieren.

    Es gibt jedoch noch Verbesserungspotenzial. Zum Beispiel könnte ich die Benutzeroberfläche attraktiver gestalten und mehr Feedback für Nutzeraktionen einbauen, wie eine Erfolgsmeldung nach dem Hinzufügen eines Sneakers. Außerdem sollte ich sicherstellen, dass Fehler, wie Probleme beim Abrufen von Daten, besser angezeigt werden.

    Da es sich um ein Schulprojekt handelt, habe ich die .env-Datei bewusst nicht in das .gitignore-File aufgenommen, um sicherzustellen, dass alle notwendigen Informationen für die Bewertung zugänglich sind. Dennoch achte ich darauf, die Datei in einem realen Projekt nicht öffentlich zugänglich zu machen.

    Insgesamt bin ich zufrieden mit meinem Fortschritt, sehe aber noch Raum für Optimierungen, vor allem in den Bereichen Design, Nutzererlebnis und erweiterte Funktionen wie Filter oder Sortierung. Es ist ein tolles Lernprojekt, mit dem ich viel über React und Supabase gelernt habe.

