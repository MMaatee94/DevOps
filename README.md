# DevOps Projekt: Egyszerű Webalkalmazás és Infrastruktúra

Ez a repository egy minimális, egyoldalas React alkalmazást (frontend) tartalmaz, amely a kötelező DevOps feladathoz készült, bemutatva a buildelési, verziókezelési és konténerizációs folyamatokat.

## 2.1. Alkalmazás

Az alkalmazás egy modern megjelenésű weboldal, amely HTTP-n keresztül elérhető, és a következő, egyszerű szöveges üzenetet adja vissza: **"Helló Világ!"**

### Elérhetőség
* **Fejlesztői környezetben (Local):** http://localhost:3000
* **Docker Konténerben:** http://localhost:8080

## 2.2. Buildelés

Az alkalmazás buildelése a standard Node Package Manager (npm) segítségével történik. A build folyamat statikus fájlokat generál a `build/` mappába.

**Kötelező Build Lépések:**

1.  **Függőségek telepítése:**
    ```bash
    npm install
    ```

2.  **Build parancs:**
    ```bash
    npm run build
    ```

## 2.3. Git Használata – Trunk-Based Development (TBD)

A projekt a Trunk-Based Development (TBD) verziókezelési modellt követi, ahol a `main` branch (trunk) a mindig stabil, kiadható állapotot tükrözi. Az új funkciók fejlesztése rövid életű feature branchekben történt.

### Commit Történet

A változások egymásra épülő, értelmes commitokban láthatók.

* **main branch:** Tartalmazza a kezdeti projektstruktúra és a dokumentáció alapjait.
* **feature/app-init branch:** Fejlesztési ág az alapvető "Hello DevOps" alkalmazáskód bevezetésére és a Dockerfile elkészítésére.
* **feature/styling-update branch:** Fejlesztési ág a vizuális modernizálásra (Tailwind CSS használatával).

Minden feature branch integrálásra került a `main` ágba, tükrözve a tiszta, folyamatos integrációt.

## 2.4. Dockerizálás

A projekt tartalmaz egy `Dockerfile`-t, amely egy multi-stage buildet használ. Ez biztosítja, hogy a konténerkép a lehető legkisebb legyen, mivel a buildeléshez szükséges Node.js környezetet elkülöníti a futtatáshoz használt minimális Nginx webszervertől.

### Docker Image Build Parancs

Az image létrehozása a projekt gyökerében:
```bash
docker build -t hello-devops:v1 .