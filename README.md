# Wikipedia-sökning
 
Ett enkelt exempel på hur man hämtar information från Wikipedia med hjälp av deras API.
 
## Hur det fungerar
 
Sökningen sker i två steg:
 
1. **Hitta rätt sidtitel** – `opensearch` tar användarens söktext och returnerar den bästa matchande Wikipedia-titeln. Det här löser problemet med att API:et kräver exakta sidnamn (t.ex. "New York City" istället för "New York").
 
2. **Hämta sammanfattning** – med den korrekta titeln hämtas ett färdigt textutdrag via `/page/summary/`.
 
## Tekniker
 
- Vanilla JavaScript
- `fetch` med `async/await` och `try/catch`
- Wikipedia [opensearch API](https://www.mediawiki.org/wiki/API:Opensearch)
- Wikipedia [REST summary API](https://en.wikipedia.org/api/rest_v1/#/Page%20content/get_page_summary__title_)
 
## Användning
 
Öppna `index.html` i en webbläsare, skriv in en stad och klicka på **Sök**.
 
## Exempel på API-anrop
 
**Steg 1 – sök efter titel:**
```
https://en.wikipedia.org/w/api.php?action=opensearch&search=New York&limit=1&format=json&origin=*
```
 
**Steg 2 – hämta sammanfattning:**
```
https://en.wikipedia.org/api/rest_v1/page/summary/New_York_City
```