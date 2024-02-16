PROJECT IDEA: Media Forums

PROJECT NAME: ReelTalkHub

DESCRIPTION: ReelTalkHub is a media forum web app like tiktok, fb reels, and yt shorts. The main focus of this project is to practice the technologies mentioned in the stack bellow.

DOCUMENTATION: https://docs.google.com/document/d/1mZYqfinq9KU62nxLUtclXlsH553giex_AwjKm_SS8Ck/edit?usp=sharing

WBS & PROGRESS: https://docs.google.com/spreadsheets/d/1peMIW0Iv2Ce5i07Mu0mytw8kuhUrBj6A4LKpDpRNeao/edit?usp=sharing

## Stack

### FE

-   React via Inertia
-   Tailwind
-   Redux Toolkit
-   TypeScript

### BE

-   Laravel v10.44.0
-   PHP v8.2.15

### Tools

-   Docker
-   NGINX
-   ESLint
-   Makefile

## Getting Started (Quick Guide)

### 1. Clone repository in your local

```
git clone git@github.com:ragg09/ReelTalkHub.git
```

_note: use ssh when you clone_

### 2. Create .env file.

```
make env
```

### 3. Add Database Credentials

update the `DB_` variables part. To add the mysql credentials pleaser refer from
`docker-compose.yml`.

```
DB_CONNECTION=mysql
DB_HOST=laravel-database
DB_PORT=3309
DB_DATABASE=<placeholder>
DB_USERNAME=<placeholder>
DB_PASSWORD=<placeholder>
```

### 4. Build the docker container & configuration

```
make setup
```

### 5. Visit it the application in browser

```
http://localhost:8081
```
