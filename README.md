# The Amazing Brochures Grid


## Overview
 ```
    the-amazing-brochures-grid
     |__ web-API/ (Express.js App)
     |__ web-CMS/ (Directus App)
     |__ web-frontend/ (Next.js App)
     |__ docker-compose.yml
 ```

## Run locally (dev mode)

### web-CMS
```bash
$ npm install && npx directus start
# make sure that npx package is installed globally
```
### web-API
```bash
$ npm install && npm run dev
```
### web-frontend
```bash
$ npm install && npm run dev
```

## Run locally (prod mode)
```bash
$ docker-compose up --build
```

# Author
* [Wassim Mhamdi](https://wassimmhamdi.com)
