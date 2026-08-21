# Guía de práctica 05 - Computación en la nube y despliegue

## Desarrollo de Software II

---

# 1. Propósito de la práctica

Esta práctica tiene como propósito relacionar los conceptos de computación en la nube con el proceso de preparación y despliegue de aplicaciones web.

El estudiante analizará los tipos de nube y modelos de servicio, preparará una aplicación React para producción, empaquetará una aplicación Spring Boot y diseñará conceptualmente una arquitectura de despliegue completa.

---

# 2. Objetivo de aprendizaje

Al finalizar la práctica, el estudiante estará en capacidad de:

* diferenciar nube pública, privada e híbrida;
* diferenciar IaaS, PaaS y SaaS;
* reconocer responsabilidades del usuario y del proveedor;
* comprender qué significa desplegar una aplicación;
* diferenciar desarrollo y producción;
* generar un build de React;
* comprobar localmente una versión de producción;
* empaquetar una aplicación Spring Boot;
* reconocer el propósito de un archivo JAR;
* utilizar variables de entorno;
* reconocer riesgos relacionados con credenciales y secretos;
* diseñar conceptualmente una arquitectura desplegada en Internet.

---

# 3. Recursos

Utilice:

```text id="kl005e"
unidad5-computacion-nube/
```

Específicamente:

```text id="4pdxoy"
ejemplo01-modelos-nube
ejemplo02-despliegue
```

También puede utilizar:

[React - Lenguaje de Programación II](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react)

[Curso Lenguaje de Programación III](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-3)

---

# 4. Requisitos

Se recomienda contar con:

* Node.js;
* npm;
* Java 21;
* Maven;
* Git;
* navegador;
* terminal.

Verifique:

```bash id="i61wnm"
node --version
```

```bash id="kw70xc"
npm --version
```

```bash id="xcfiwk"
java -version
```

```bash id="4ehq5j"
mvn -version
```

---

# 5. Actividad 1 - Tipos de nube

Ingrese a:

```text id="y2t6qx"
ejemplo01-modelos-nube/
```

Lea su `README.md`.

Complete:

```text id="cx8cez"
Nube pública
________________________________________

Nube privada
________________________________________

Nube híbrida
________________________________________
```

---

# 6. Clasificar escenarios

## Escenario A

Una empresa pequeña necesita publicar rápidamente una aplicación y no posee servidores propios.

Tipo de nube propuesto:

```text id="agknh7"
________________________________________
```

Justificación:

```text id="lyy12w"
____________________________________________________

____________________________________________________
```

---

## Escenario B

Una organización debe mantener información muy sensible en infraestructura dedicada.

Tipo de nube propuesto:

```text id="5lxamh"
________________________________________
```

---

## Escenario C

Una institución conserva información sensible internamente, pero publica servicios para usuarios externos.

Tipo de nube:

```text id="wguz1w"
________________________________________
```

---

# 7. Actividad 2 - Modelos de servicio

Complete:

```text id="0ztm2d"
IaaS significa:
________________________________________

PaaS significa:
________________________________________

SaaS significa:
________________________________________
```

---

# 8. Clasificar responsabilidades

Indique quién tiene mayor responsabilidad sobre cada elemento.

| Elemento                 | IaaS | PaaS | SaaS |
| ------------------------ | ---- | ---- | ---- |
| Infraestructura física   |      |      |      |
| Sistema operativo        |      |      |      |
| Runtime                  |      |      |      |
| Aplicación               |      |      |      |
| Uso directo del software |      |      |      |

---

# 9. Analizar escenarios

## Caso A

Se entrega una máquina virtual y usted debe instalar Linux, Java y configurar Spring Boot.

Modelo:

```text id="2aq839"
________________________________________
```

---

## Caso B

La plataforma recibe un repositorio Git, construye y ejecuta automáticamente la aplicación.

Modelo:

```text id="p855pp"
________________________________________
```

---

## Caso C

El usuario abre una aplicación desde el navegador y empieza a utilizarla.

Modelo:

```text id="f6lk27"
________________________________________
```

---

# 10. Comparar

Complete:

```text id="70huyz"
Mayor control sobre infraestructura:
________________________________________

Mayor facilidad para desplegar:
________________________________________

Software listo para usar:
________________________________________
```

---

# 11. Actividad 3 - Preparar React para producción

Seleccione una aplicación React desarrollada previamente.

Ingrese a su carpeta.

Ejecute:

```bash id="169bpz"
npm install
```

---

# 12. Ejecutar en desarrollo

Ejecute:

```bash id="j3xpk0"
npm run dev
```

Registre:

```text id="pwdxz7"
URL local:
________________________________________
```

Compruebe que la aplicación funcione correctamente.

---

# 13. Generar build

Detenga el servidor de desarrollo si lo considera necesario.

Ejecute:

```bash id="9epexp"
npm run build
```

---

# 14. Registrar resultado

Identifique la carpeta generada:

```text id="xbqzwe"
________________________________________
```

Normalmente corresponde a:

```text id="h5r5dt"
dist/
```

---

# 15. Revisar contenido

Registre algunos archivos presentes:

```text id="zap88p"
________________________________________

________________________________________

________________________________________
```

---

# 16. Analizar

Explique qué diferencia existe entre:

```text id="b4i2ea"
src/
```

y:

```text id="7uokqv"
dist/
```

```text id="axr9nh"
____________________________________________________

____________________________________________________
```

---

# 17. Ejecutar preview

Ejecute:

```bash id="xqxk1c"
npm run preview
```

Registre:

```text id="r07rd6"
URL:
________________________________________
```

---

# 18. Comparar

Complete:

```text id="95hhuh"
npm run dev
se utiliza para:

________________________________________
```

```text id="szzs7d"
npm run preview
se utiliza para:

________________________________________
```

---

# 19. Comprobar aplicación

Revise:

* estilos;
* imágenes;
* navegación;
* consumo de datos;
* consola del navegador.

Registre si encontró algún error:

```text id="qw5krb"
Sí / No
```

Si encontró alguno:

```text id="4jppd4"
____________________________________________________
```

---

# 20. Actividad 4 - Variables de entorno

Considere una aplicación React que contiene:

```javascript id="s2901l"
const API_URL =
    "http://localhost:8080";
```

Explique por qué esta configuración puede ser problemática en producción.

```text id="hzrukw"
____________________________________________________

____________________________________________________
```

---

# 21. Proponer variable

Utilice conceptualmente:

```text id="sxykdh"
VITE_API_URL
```

Complete:

```text id="3hnj4i"
DESARROLLO

VITE_API_URL=
________________________________________
```

```text id="8zsu2p"
PRODUCCIÓN

VITE_API_URL=
________________________________________
```

---

# 22. Utilizar en JavaScript

Complete:

```javascript id="5cuxg7"
const API_URL =
    import.meta.env.____________________;
```

---

# 23. Seguridad

Indique cuáles de los siguientes datos podrían exponerse en el Front End y cuáles no.

| Información                     | ¿Puede estar en el Front End? |
| ------------------------------- | ----------------------------- |
| URL pública de API              |                               |
| Contraseña MySQL                |                               |
| Token secreto del servidor      |                               |
| Nombre público de la aplicación |                               |
| Credencial privada              |                               |

---

# 24. Explique

¿Por qué una aplicación React no puede utilizar variables de entorno para ocultar realmente secretos?

```text id="onq344"
____________________________________________________

____________________________________________________
```

---

# 25. Actividad 5 - Empaquetar Spring Boot

Seleccione una unidad del repositorio Lenguaje de Programación III.

Por ejemplo:

```text id="schyvz"
unidad1
```

---

# 26. Ejecutar pruebas

Antes de empaquetar, ejecute:

```bash id="jspwyt"
mvn test
```

Compruebe que las pruebas pasen.

---

# 27. Empaquetar

Ejecute:

```bash id="p2em9v"
mvn package
```

---

# 28. Localizar resultado

Busque:

```text id="jqs49e"
target/
```

Registre el nombre del archivo generado:

```text id="pq4uj1"
________________________________________
```

---

# 29. Identificar extensión

Debe existir normalmente un archivo:

```text id="b5o84s"
.jar
```

Explique qué representa.

```text id="5kphak"
____________________________________________________

____________________________________________________
```

---

# 30. Ejecutar JAR

Si el proyecto está preparado para ello, ejecute:

```bash id="jg2z6q"
java -jar target/nombre-del-archivo.jar
```

---

# 31. Probar endpoint

Con la aplicación ejecutándose, pruebe uno de sus endpoints.

Registre:

```text id="5k5qw0"
URL:
________________________________________

Código HTTP:
________________________________________
```

---

# 32. Comparar ejecución

Complete:

```text id="kcu35k"
Durante desarrollo:

________________________________________
```

```text id="ukg73n"
Con JAR:

________________________________________
```

---

# 33. Actividad 6 - Arquitectura local

Represente el entorno utilizado durante desarrollo:

```text id="37cgf5"
USUARIO
   │
   ▼
REACT
________________________
   │
   ▼
SPRING BOOT
________________________
   │
   ▼
BASE DE DATOS
```

Agregue los puertos utilizados normalmente.

---

# 34. Arquitectura de producción

Transforme el esquema anterior en:

```text id="6jiheo"
USUARIO
   │
   │ Internet
   ▼
FRONT END
________________________
   │
   │ HTTPS / JSON
   ▼
BACK END
________________________
   │
   ▼
BASE DE DATOS
```

---

# 35. URLs

Proponga:

```text id="53ubfl"
Front End:
https://________________________________

Back End:
https://________________________________
```

---

# 36. Actividad 7 - CORS

Suponga:

```text id="89s8m3"
Front End:
https://mi-app.com

Back End:
https://api.mi-app.com
```

Explique por qué pueden considerarse orígenes diferentes.

```text id="n6m17x"
____________________________________________________

____________________________________________________
```

---

# 37. CORS

Complete:

```text id="8oxkoj"
CORS significa:

________________________________________
```

---

# 38. Analizar

¿Qué riesgo existe al permitir:

```text id="ab0vo0"
Access-Control-Allow-Origin: *
```

sin evaluar qué clientes necesitan realmente acceso?

```text id="mgissm"
____________________________________________________

____________________________________________________
```

---

# 39. Actividad 8 - HTTPS

Complete:

```text id="1gc97l"
HTTP:

________________________________________
```

```text id="xxbhnp"
HTTPS:

________________________________________
```

---

# 40. Analizar

¿Por qué una aplicación en producción debería preferir HTTPS?

```text id="u524ta"
____________________________________________________

____________________________________________________
```

---

# 41. Actividad 9 - GitHub y despliegue

Represente el flujo:

```text id="rla3tg"
Código local
     │
     ▼
_____________
     │
     ▼
GitHub
     │
     ▼
_____________
     │
     ▼
Build
     │
     ▼
Aplicación publicada
```

---

# 42. Configuración React

Una plataforma de despliegue puede solicitar:

```text id="phuzmq"
Build command:
________________________________________

Publish directory:
________________________________________
```

---

# 43. Valores esperados

Para Vite normalmente:

```text id="23snqg"
Build command:
npm run build

Publish directory:
dist
```

Explique qué representa cada uno.

---

# 44. Actividad 10 - Secretos y Git

Antes de ejecutar:

```bash id="zss59p"
git add .
```

¿qué debe comprobar?

```text id="mvf546"
____________________________________________________

____________________________________________________
```

---

# 45. `.gitignore`

Indique por qué podrían ignorarse:

```text id="f1vbui"
node_modules/
.env
target/
```

---

# 46. Reto integrador - Diseñar despliegue

Debe publicar conceptualmente una aplicación compuesta por:

```text id="wml4op"
React
Spring Boot
MySQL
```

---

# 47. Seleccionar servicios

Proponga:

```text id="y92b2w"
React se ejecutaría en:
________________________________________

Spring Boot se ejecutaría en:
________________________________________

MySQL se ejecutaría en:
________________________________________
```

No es necesario elegir una marca específica.

Puede responder mediante categorías como:

```text id="8f4bwj"
hosting estático
PaaS
base de datos administrada
```

---

# 48. Comunicación

Explique cómo se comunicaría:

```text id="1u2ev0"
React
→ Spring Boot
```

```text id="1y21ap"
____________________________________________________
```

y:

```text id="87oeqx"
Spring Boot
→ MySQL
```

```text id="g0bfu7"
____________________________________________________
```

---

# 49. Variables necesarias

Proponga variables como:

```text id="upvtq1"
VITE_API_URL
________________________________________
```

```text id="9kr4eq"
DB_URL
________________________________________
```

```text id="vflc77"
DB_USER
________________________________________
```

```text id="twyjks"
DB_PASSWORD
________________________________________
```

---

# 50. Clasificar información

Indique:

```text id="mlall0"
Configuración pública:
________________________________________
```

```text id="8jbp5u"
Información privada:
________________________________________
```

---

# 51. Tipo de servicio

Clasifique conceptualmente:

```text id="vb7185"
Hosting de React:
________________________

Plataforma Spring Boot:
________________________

Base de datos administrada:
________________________
```

Determine si se aproxima a:

```text id="os0w5v"
IaaS
PaaS
SaaS
```

según el escenario elegido.

---

# 52. Evidencias sugeridas

Conserve:

1. clasificación de nube pública/privada/híbrida;
2. comparación IaaS/PaaS/SaaS;
3. aplicación React en desarrollo;
4. ejecución de `npm run build`;
5. contenido de `dist`;
6. ejecución de `npm run preview`;
7. `mvn package`;
8. archivo JAR generado;
9. ejecución del JAR;
10. diagrama de despliegue final.

---

# 53. Preguntas de cierre

1. ¿Qué es computación en la nube?
2. ¿Qué es una nube pública?
3. ¿Qué es una nube privada?
4. ¿Qué es una nube híbrida?
5. ¿Qué significa IaaS?
6. ¿Qué significa PaaS?
7. ¿Qué significa SaaS?
8. ¿Cuál proporciona mayor control sobre la infraestructura?
9. ¿Cuál proporciona software listo para utilizar?
10. ¿Qué significa desplegar una aplicación?
11. ¿Cuál es la diferencia entre desarrollo y producción?
12. ¿Para qué sirve `npm run build`?
13. ¿Qué contiene `dist`?
14. ¿Para qué sirve `npm run preview`?
15. ¿Qué es una variable de entorno?
16. ¿Por qué `localhost` no debe utilizarse como dirección del Back End publicado?
17. ¿Por qué no deben colocarse secretos en React?
18. ¿Para qué sirve `mvn package`?
19. ¿Qué es un JAR?
20. ¿Cómo se ejecuta un JAR?
21. ¿Qué es CORS?
22. ¿Por qué puede ser necesario configurarlo?
23. ¿Qué diferencia existe entre HTTP y HTTPS?
24. ¿Qué relación existe entre GitHub y un despliegue automatizado?
25. ¿Por qué deben revisarse los archivos antes de ejecutar `git add .`?

---

# 54. Resultado esperado

Al finalizar debe comprender la evolución:

```text id="2514kf"
DESARROLLO

React
localhost:5173
   │
   ▼
Spring Boot
localhost:8080
   │
   ▼
Base de datos local
```

hacia:

```text id="2yda2d"
PRODUCCIÓN

USUARIO
   │
   │ Internet
   ▼
React
https://mi-app.com
   │
   │ HTTPS / JSON
   ▼
Spring Boot
https://api.mi-app.com
   │
   ▼
Base de datos
```

---

# 55. Integración final del curso

La ruta completa puede representarse:

```text id="iz6zhm"
UNIDAD 1
Cliente - servidor
HTTP
JSON
      │
      ▼
UNIDAD 2
HTML
CSS
JavaScript
DOM
      │
      ▼
UNIDAD 3
React
Front End
      │
      ▼
UNIDAD 4
Spring Boot
Back End
Persistencia
      │
      ▼
UNIDAD 5
Nube
Despliegue
```

---

# Arquitectura final

```text id="c9psdi"
                     INTERNET

USUARIO
   │
   ▼
REACT
Front End
   │
   │ HTTPS / JSON
   ▼
SPRING BOOT
Back End
   │
   ├─────────────────┐
   ▼                 ▼
BASE DE DATOS     API EXTERNA
```

---

# Conclusión

La computación en la nube permite utilizar infraestructura y plataformas disponibles a través de Internet para ejecutar aplicaciones y servicios.

El despliegue es el proceso mediante el cual una aplicación deja de estar limitada al entorno local y pasa a estar disponible para otros usuarios.

Una aplicación React puede prepararse mediante un build de producción, mientras que una aplicación Spring Boot puede empaquetarse como JAR.

El despliegue completo también exige considerar variables de entorno, CORS, HTTPS, credenciales, bases de datos, logs y seguridad.

Con esta práctica se integran los principales conceptos estudiados durante todo el curso de Desarrollo de Software II.
