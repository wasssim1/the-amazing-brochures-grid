# The Amazing Brochures Grid


## Overview
The project is based on **Node.js** techs and contains 3 main components:
 ```
    the-amazing-brochures-grid
     |__ web-API/ (Express.js App)
     |__ web-CMS/ (Directus App)
     |__ web-frontend/ (Next.js App)
     |__ docker-compose.yml
 ```

## Run locally (npm)

### web-CMS
```bash
$ npm install && npx directus start
# make sure that npx package is installed globally
```
***PS: Only for this case, web-CMS module includes .env (which is usually prohibited).***

### web-API
```bash
# prod mode
$ npm install && npm run start
# OR
# dev mode
$ npm install && npm run dev
```

### web-frontend
```bash
# prod mode
$ npm install && npm run build && npm start
# OR
# dev mode
$ npm install && npm run dev
```

## Run locally (dockerized)
```bash
$ docker-compose up --build
```


# Author
* [Wassim Mhamdi](https://wassimmhamdi.com)
