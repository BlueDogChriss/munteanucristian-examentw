# Obiectiv general
Realizarea unei aplicații pe una dintre temele specificate, cu back-end RESTful care accesează date stocate într-o bază relațională pe baza unui API de persistenţă și date expuse de un serviciu extern și frontend SPA în React realizat cu un framework bazat pe componente.

Descriere
Implementarea unui serviciu REST și a unei interfețe în React pentru următoarele entități: - FavouriteList - Video

FavouriteList are mai mulți Video. FavouriteList are un id (întreg, cheie primară), o descriere (un string de cel puțin 3 caractere), o dată/ora (date, după momentul creării). 
Video are un id (întreg, cheie primară), o descriere (un string de cel puțin 5 caractere), un titlu (un string de cel puțin 5 caractere) și un url (un string validat la url).

Componente și punctaje
Serviciu REST
Definirea primei entități - 0.3
Definire celei de-a doua entități - 0.3
Definirea relației dintre cele două entități - 0.3
Operație GET pentru prima entitate - 0.3
Operație POST pentru prima entitate - 0.3
Operație PUT pentru prima entitate - 0.3
Operație DELETE pentru prima entitate - 0.3
Operație GET pentru a doua entitate ca subresursă - 0.3
Operație POST pentru a doua entitate ca subresursă - 0.3
Operație PUT pentru a doua entitate ca subresursă - 0.3
Operație DELETE pentru a doua entitate ca subresursă - 0.3
Filtrare după două câmpuri pentru prima entitate - 0.3
Sortare după un câmp pentru prima entitate - 0.3
Paginare pentru prima entitate - 0.3
Import - 0.2
Export - 0.2
Interfață SPA în React
Rutare pe baza id-ului de entitate copil - 0.3
Create pentru prima entitate - 0.3
Read pentru prima entitate - 0.3
Update pentru prima entitate - 0.3
Delete pentru prima entitate - 0.3
Create pentru a doua entitate (master-detail) - 0.3
Read pentru a doua entitate (master-detail) - 0.3
Update pentru a doua entitate (master-detail) - 0.3
Delete pentru a doua entitate (master-detail) - 0.3
Filtrare după după două câmpuri pentru prima entitate - 0.3
Sortare după un câmp pentru prima entitate - 0.3
Paginare pentru prima entitate - 0.3
Interfață import - 0.2
Interfața export - 0.2
Layout cu grid/flex - 0.4
Punctaj din oficiu - 10%
Note
Dacă aplicația nu merge pe heroku se depunctează 10%
Dacă nu se încarcă videoclipul, lucrarea nu va fi corectată
Videoclipul trebuie înregistrat cu facecam
În videclip prezentați aplicația funcționând, nu codul
După ce ați terminat, încărcați componentele răspunsului aici