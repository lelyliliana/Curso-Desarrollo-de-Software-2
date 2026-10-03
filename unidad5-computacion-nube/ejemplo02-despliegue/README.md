# Ejemplo 02 - Despliegue de una aplicación web

[Volver a la unidad](../README.md) · [Volver al índice del curso](../../README.md)

## Unidad 5 - Introducción a la computación en la nube

Este ejemplo permite relacionar los conceptos de computación en la nube con el proceso de **despliegue de una aplicación web**.

Hasta este momento las aplicaciones desarrolladas durante el curso se han ejecutado principalmente en entornos locales utilizando direcciones como:

```text
http://localhost:5173
```

para React, o:

```text
http://localhost:8080
```

para Spring Boot.

El despliegue permite trasladar una aplicación desde el entorno local hacia un ambiente accesible desde Internet.

El módulo institucional sugiere que los desarrollos realizados durante el curso pueden ser desplegados utilizando proveedores de servicios en la nube.

---

# Objetivo de aprendizaje

Al finalizar este ejemplo, el estudiante estará en capacidad de:

* comprender qué significa desplegar una aplicación;
* diferenciar desarrollo y producción;
* generar una versión de producción de una aplicación React;
* comprobar localmente el build generado;
* reconocer qué archivos deben publicarse;
* comprender la función de las variables de entorno;
* reconocer por qué `localhost` no debe utilizarse en producción;
* identificar alternativas para publicar una aplicación Front End;
* reconocer conceptualmente cómo se despliega una aplicación Spring Boot;
* relacionar GitHub con procesos de despliegue;
* identificar configuraciones que no deben almacenarse públicamente.

---

# Aplicación utilizada

Para esta práctica puede utilizarse cualquiera de las aplicaciones React desarrolladas previamente.

Se recomienda utilizar uno de los laboratorios finales del módulo React de Lenguaje de Programación II.

Puede consultar:

[React - Lenguaje de Programación II](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react)

Especialmente:

```text
10 - Consumo de API
11 - Integración y publicación
```

---

# Desarrollo frente a producción

Una aplicación puede ejecutarse en diferentes ambientes.

## Desarrollo

Es el ambiente utilizado mientras se programa.

Por ejemplo:

```text
http://localhost:5173
```

Características frecuentes:

```text
recarga automática
herramientas de desarrollo
mensajes detallados
código sin optimizar
```

---

## Producción

Es el ambiente preparado para que la aplicación sea utilizada por usuarios finales.

Puede tener una dirección como:

```text
https://mi-aplicacion.com
```

La aplicación normalmente se encuentra:

```text
optimizada
compilada o empaquetada
configurada para producción
publicada
```

---

# Flujo general

```text
CÓDIGO FUENTE
     │
     ▼
DESARROLLO
localhost
     │
     ▼
BUILD
     │
     ▼
ARCHIVOS DE PRODUCCIÓN
     │
     ▼
DESPLIEGUE
     │
     ▼
INTERNET
```

---

# Parte 1 - Preparar una aplicación React

Ingrese a la carpeta de una aplicación React.

Instale las dependencias:

```bash
npm install
```

---

# Paso 1 - Ejecutar en desarrollo

Ejecute:

```bash
npm run dev
```

Vite mostrará una dirección local.

Por ejemplo:

```text
http://localhost:5173
```

Abra esa dirección y compruebe que la aplicación funciona correctamente.

---

# Importante

No continúe con el despliegue si la aplicación presenta errores en desarrollo.

Primero compruebe:

```text
interfaz
navegación
datos
formularios
consumo de API
consola
```

---

# Paso 2 - Ejecutar ESLint

Si el proyecto tiene configurado ESLint, ejecute:

```bash
npm run lint
```

Corrija los errores importantes antes de generar la versión de producción.

---

# Paso 3 - Generar el build

Ejecute:

```bash
npm run build
```

Vite generará una versión optimizada de la aplicación.

Normalmente aparecerá una carpeta:

```text
dist/
```

---

# ¿Qué es `dist`?

La carpeta:

```text
dist
```

contiene los archivos preparados para producción.

Puede incluir:

```text
index.html
assets/
archivos JavaScript
archivos CSS
imágenes
```

---

# Flujo de construcción

```text
src/
 │
 │ npm run build
 ▼
Vite
 │
 ├── procesa
 ├── optimiza
 ├── empaqueta
 │
 ▼
dist/
```

---

# ¿Debemos publicar `src`?

No necesariamente.

Para un despliegue estático tradicional, lo que se publica es el resultado del proceso de construcción.

Es decir:

```text
dist/
```

---

# Paso 4 - Verificar la versión de producción

Después de generar el build, ejecute:

```bash
npm run preview
```

Vite mostrará una dirección local.

Por ejemplo:

```text
http://localhost:4173
```

La dirección exacta puede variar.

---

# ¿Por qué utilizar preview?

`npm run dev` ejecuta el entorno de desarrollo.

Mientras:

```bash
npm run preview
```

permite comprobar localmente el resultado del build.

Conceptualmente:

```text
npm run dev
│
└── desarrollo
```

mientras:

```text
npm run build
        │
        ▼
npm run preview
        │
        └── revisión del build
```

---

# Paso 5 - Comprobar nuevamente

Abra la dirección indicada por `npm run preview`.

Revise:

```text
página principal
imágenes
estilos
navegación
formularios
consumo de datos
```

---

# Problema común: rutas

Una aplicación puede funcionar en:

```text
npm run dev
```

pero presentar problemas después del build.

Por ello siempre debe probarse:

```text
npm run preview
```

antes de publicar.

---

# Parte 2 - Variables de entorno

Una aplicación no debería tener todas las configuraciones escritas directamente dentro del código.

Por ejemplo:

```javascript
const API_URL =
    "http://localhost:8080";
```

funciona durante desarrollo.

Pero después del despliegue:

```text
localhost
```

representaría el computador del usuario o el entorno donde se ejecute el Front End.

---

# Problema

Si una aplicación publicada contiene:

```text
http://localhost:8080
```

intentará buscar el Back End localmente.

Esto normalmente no corresponde al servidor de producción.

---

# Desarrollo

```text
React
http://localhost:5173

        │
        ▼

Spring Boot
http://localhost:8080
```

---

# Producción

Podría convertirse en:

```text
React
https://mi-aplicacion.com

        │
        ▼

Spring Boot
https://api.mi-aplicacion.com
```

---

# Variable de entorno

En Vite puede utilizarse una variable como:

```text
VITE_API_URL
```

Por ejemplo, durante desarrollo:

```text
VITE_API_URL=http://localhost:8080
```

Y en producción:

```text
VITE_API_URL=https://api.mi-aplicacion.com
```

---

# Uso desde JavaScript

Puede utilizarse:

```javascript
const API_URL =
    import.meta.env.VITE_API_URL;
```

---

# Ventaja

El código puede mantenerse igual:

```text
JavaScript
```

mientras cambia solamente:

```text
configuración del ambiente
```

---

# Archivo `.env`

Durante desarrollo podría existir:

```text
.env
```

con:

```text
VITE_API_URL=http://localhost:8080
```

---

# Precaución

No toda información debe almacenarse en una aplicación Front End.

Las variables de React/Vite terminan formando parte del código que llega al navegador.

Por tanto, **no deben utilizarse para ocultar secretos**.

---

# No colocar secretos en el Front End

No debería incluirse:

```text
contraseña de base de datos
token privado
clave secreta
credenciales del servidor
```

dentro de una aplicación React.

El usuario puede inspeccionar el código que llega a su navegador.

---

# Configuración pública frente a secreto

Puede resultar aceptable:

```text
URL pública de una API
```

Pero no:

```text
contraseña de MySQL
```

---

# Parte 3 - Publicar una aplicación React

Una aplicación React generada con Vite puede publicarse en servicios que permitan alojar sitios estáticos.

Entre las alternativas pueden encontrarse:

```text
Netlify
Vercel
Cloudflare Pages
GitHub Pages
Render
```

La disponibilidad, condiciones y planes pueden cambiar con el tiempo.

---

# Flujo general mediante GitHub

```text
CÓDIGO
  │
  ▼
Git
  │
  ▼
GitHub
  │
  ▼
PLATAFORMA DE DESPLIEGUE
  │
  ├── descarga código
  ├── instala dependencias
  ├── ejecuta build
  └── publica
  │
  ▼
URL PÚBLICA
```

---

# Configuración típica

Una plataforma puede solicitar:

## Comando de instalación

```bash
npm install
```

## Comando de construcción

```bash
npm run build
```

## Carpeta de publicación

```text
dist
```

---

# Estos valores pueden variar

La plataforma utilizada puede realizar automáticamente algunos pasos.

Por ello siempre debe revisar la configuración indicada por el proveedor.

---

# Flujo esperado

```text
Repositorio GitHub
       │
       ▼
Plataforma
       │
       ▼
npm install
       │
       ▼
npm run build
       │
       ▼
dist/
       │
       ▼
Publicación
       │
       ▼
https://...
```

---

# Parte 4 - Despliegue de Spring Boot

El Back End no se publica exactamente igual que una aplicación React.

Spring Boot necesita un entorno capaz de ejecutar Java.

---

# Empaquetar Spring Boot

Desde un proyecto Maven puede utilizarse:

```bash
mvn package
```

El resultado suele almacenarse en:

```text
target/
```

---

# Archivo JAR

Puede generarse:

```text
aplicacion.jar
```

Conceptualmente:

```text
Código Java
    │
    ▼
Maven
    │
    │ mvn package
    ▼
JAR
```

---

# Ejecutar el JAR

Puede ejecutarse mediante:

```bash
java -jar aplicacion.jar
```

---

# Desarrollo

Durante desarrollo usamos normalmente:

```bash
mvn spring-boot:run
```

---

# Producción

En producción puede utilizarse:

```bash
java -jar aplicacion.jar
```

dentro del servidor o plataforma seleccionada.

---

# Spring Boot en una plataforma cloud

Una plataforma puede realizar:

```text
clonar repositorio
compilar con Maven
generar JAR
ejecutar aplicación
```

Conceptualmente:

```text
GitHub
   │
   ▼
Plataforma
   │
   ▼
mvn package
   │
   ▼
JAR
   │
   ▼
java -jar
   │
   ▼
API pública
```

---

# Puerto

En desarrollo Spring Boot suele utilizar:

```text
8080
```

Sin embargo, algunas plataformas asignan un puerto dinámicamente.

Por eso una aplicación desplegable debe respetar la configuración proporcionada por el entorno.

---

# Variables de entorno en Spring Boot

Configuraciones como:

```text
base de datos
usuario
contraseña
URL de servicios
```

pueden proporcionarse mediante variables de entorno.

---

# Ejemplo conceptual

En lugar de escribir:

```properties
spring.datasource.password=123456
```

directamente en un repositorio público, el valor puede suministrarse mediante configuración externa.

---

# Base de datos

La base de datos también puede desplegarse como un servicio independiente.

Arquitectura:

```text
REACT
   │
   ▼
SPRING BOOT
   │
   ▼
MYSQL
```

Cada componente podría encontrarse en un servicio diferente.

---

# Arquitectura en producción

```text
USUARIO
   │
   │ Internet
   ▼
FRONT END
https://mi-app.com
   │
   │ HTTPS / JSON
   ▼
BACK END
https://api.mi-app.com
   │
   ▼
BASE DE DATOS
```

---

# Parte 5 - CORS

Cuando Front End y Back End se encuentran en dominios diferentes puede ser necesario configurar CORS.

Por ejemplo:

```text
Front End
https://mi-app.com

Back End
https://api.mi-app.com
```

Son orígenes diferentes.

---

# ¿Qué es CORS?

CORS significa:

```text
Cross-Origin Resource Sharing
```

Permite controlar qué orígenes pueden realizar solicitudes hacia una aplicación web.

---

# Desarrollo

Durante desarrollo podría existir:

```text
http://localhost:5173
        │
        ▼
http://localhost:8080
```

---

# Producción

Posteriormente:

```text
https://mi-app.com
        │
        ▼
https://api.mi-app.com
```

El Back End debe permitir el origen apropiado según su configuración.

---

# Evitar configuraciones demasiado abiertas

Durante ejemplos puede encontrarse:

```text
*
```

para permitir cualquier origen.

Sin embargo, en producción conviene evaluar qué dominios necesitan realmente acceso.

---

# Parte 6 - HTTPS

Una aplicación publicada debería utilizar comunicaciones seguras mediante:

```text
HTTPS
```

en lugar de:

```text
HTTP
```

especialmente cuando se intercambia información sensible.

---

# Comparación

```text
HTTP
│
└── comunicación sin cifrado de transporte
```

```text
HTTPS
│
└── comunicación protegida mediante TLS
```

---

# Parte 7 - Verificaciones posteriores al despliegue

Publicar la aplicación no significa que el proceso haya terminado.

Debe comprobarse:

```text
URL
HTTPS
interfaz
consumo API
errores
formularios
base de datos
CORS
logs
```

---

# Checklist de verificación

* [ ] La URL pública abre correctamente.
* [ ] La página carga estilos e imágenes.
* [ ] No existen errores importantes en la consola.
* [ ] El Front End utiliza la URL correcta del Back End.
* [ ] El Back End responde.
* [ ] Las solicitudes HTTP tienen códigos apropiados.
* [ ] CORS está configurado.
* [ ] HTTPS funciona.
* [ ] Las credenciales no están expuestas.
* [ ] La base de datos responde.
* [ ] Los logs no muestran errores inesperados.

---

# Logs

Los logs permiten revisar qué ocurre dentro de una aplicación desplegada.

Pueden utilizarse para identificar:

```text
errores
conexiones fallidas
excepciones
solicitudes
problemas con base de datos
```

---

# Relación con Lenguaje de Programación III

El repositorio de Lenguaje de Programación III también aborda temas de observabilidad.

Esto permite ampliar posteriormente conceptos como:

```text
health checks
métricas
logging
Actuator
Prometheus
```

Estos contenidos van más allá del alcance básico de esta unidad, pero son importantes para aplicaciones en producción.

---

# Parte 8 - Git y despliegue

Antes de desplegar compruebe que el repositorio esté actualizado.

Ejemplo:

```bash
git status
```

Después:

```bash
git add .
```

```bash
git commit -m "Preparar aplicación para despliegue"
```

```bash
git push
```

---

# Importante

Antes de ejecutar:

```bash
git add .
```

compruebe que no se estén incluyendo:

```text
contraseñas
tokens
archivos .env con secretos
archivos privados
```

---

# `.gitignore`

El archivo:

```text
.gitignore
```

permite excluir archivos que no deben almacenarse en Git.

---

# Ejemplos frecuentes

```text
node_modules/
.env
target/
```

La configuración exacta depende del proyecto.

---

# Parte 9 - Actualizaciones posteriores

Una ventaja de conectar una plataforma de despliegue con GitHub es que puede automatizarse:

```text
Cambio de código
      │
      ▼
git push
      │
      ▼
GitHub
      │
      ▼
Nuevo build
      │
      ▼
Nuevo despliegue
```

Esto se relaciona con procesos de integración y entrega continua.

---

# CI/CD

CI/CD puede referirse a prácticas de:

```text
Continuous Integration
Continuous Delivery / Deployment
```

Aunque no se profundiza en este curso, el despliegue automático desde un repositorio permite comenzar a comprender este flujo.

---

# Actividad práctica

Seleccione una aplicación React desarrollada durante el curso.

Realice:

```bash
npm install
```

Luego:

```bash
npm run dev
```

Compruebe el funcionamiento.

Después:

```bash
npm run build
```

Finalmente:

```bash
npm run preview
```

---

# Evidencia recomendada

Registre:

1. captura de la aplicación en desarrollo;
2. ejecución de `npm run build`;
3. contenido de `dist`;
4. aplicación ejecutándose con `npm run preview`;
5. URL pública, si realiza el despliegue en una plataforma.

---

# Reto 1 - Publicar el Front End

Seleccione una plataforma compatible con aplicaciones estáticas.

Configure:

```text
Build command:
npm run build

Publish directory:
dist
```

Compruebe la URL pública.

---

# Reto 2 - Variable de entorno

Modifique una aplicación para utilizar:

```text
VITE_API_URL
```

en lugar de escribir directamente la dirección del Back End.

Compruebe el funcionamiento en desarrollo.

---

# Reto 3 - Diferenciar ambientes

Configure conceptualmente:

```text
DESARROLLO
http://localhost:8080
```

y:

```text
PRODUCCIÓN
https://api.mi-app.com
```

Explique por qué se necesitan valores diferentes.

---

# Reto 4 - Empaquetar Spring Boot

Utilice uno de los proyectos de Lenguaje de Programación III.

Ejecute:

```bash
mvn package
```

Localice el archivo generado dentro de:

```text
target/
```

No es obligatorio publicarlo para completar este reto.

---

# Reto 5 - Ejecutar el JAR

Si el proyecto está preparado correctamente, pruebe:

```bash
java -jar target/nombre-del-archivo.jar
```

Compruebe que los endpoints siguen funcionando.

---

# Reto 6 - Arquitectura completa

Diseñe el despliegue de:

```text
React
Spring Boot
MySQL
```

Indique:

```text
dónde estaría React
dónde estaría Spring Boot
dónde estaría MySQL
qué URL utilizaría React
qué información sería privada
```

---

# Preguntas de análisis

1. ¿Qué significa desplegar una aplicación?
2. ¿Qué diferencia existe entre desarrollo y producción?
3. ¿Para qué se utiliza `npm run build`?
4. ¿Qué contiene normalmente la carpeta `dist`?
5. ¿Para qué sirve `npm run preview`?
6. ¿Por qué debe comprobarse el build antes de publicarlo?
7. ¿Por qué no debe utilizarse `localhost` como URL del Back End en producción?
8. ¿Qué es una variable de entorno?
9. ¿Por qué una variable de Vite no debe utilizarse para guardar secretos?
10. ¿Qué tipo de aplicación puede publicarse como sitio estático?
11. ¿Qué función cumple GitHub dentro de un flujo de despliegue?
12. ¿Qué comando permite empaquetar una aplicación Maven?
13. ¿Qué es un archivo JAR?
14. ¿Cómo puede ejecutarse un JAR?
15. ¿Por qué el Back End necesita un entorno con Java?
16. ¿Qué es CORS?
17. ¿Por qué puede aparecer un problema CORS después del despliegue?
18. ¿Por qué es importante HTTPS?
19. ¿Qué función cumplen los logs?
20. ¿Qué archivos o datos no deberían subirse a un repositorio público?
21. ¿Puede Front End, Back End y base de datos estar en plataformas diferentes?
22. ¿Cómo se comunicarían?

---

# Resultado esperado

Al finalizar este ejemplo, el estudiante debe comprender el paso:

```text
ANTES

React
localhost:5173

Spring Boot
localhost:8080
```

hacia:

```text
DESPUÉS

React
https://mi-app.com

Spring Boot
https://api.mi-app.com
```

y comprender que la base de datos puede encontrarse en otro servicio.

---

# Arquitectura completa

```text
                INTERNET

USUARIO
   │
   ▼
FRONT END
React
https://mi-app.com
   │
   │ HTTPS / JSON
   ▼
BACK END
Spring Boot
https://api.mi-app.com
   │
   ├───────────────┐
   ▼               ▼
BASE DE DATOS   API EXTERNA
```

---

# Conceptos trabajados

* despliegue;
* desarrollo;
* producción;
* build;
* `npm run build`;
* `npm run preview`;
* `dist`;
* hosting;
* variables de entorno;
* Vite;
* Git;
* GitHub;
* Maven;
* JAR;
* Spring Boot;
* CORS;
* HTTPS;
* secretos;
* logs;
* Front End;
* Back End;
* bases de datos;
* computación en la nube.

---

# Conclusión

El despliegue convierte una aplicación desarrollada localmente en una solución accesible para otros usuarios.

En React, el proceso comienza generando una versión optimizada mediante `npm run build`. En Spring Boot, Maven puede empaquetar la aplicación como un archivo JAR que posteriormente se ejecuta en un servidor o plataforma compatible.

El despliegue también exige gestionar correctamente URLs, variables de entorno, CORS, HTTPS, credenciales y bases de datos.

Comprender este flujo permite conectar todos los contenidos del curso: desde los fundamentos HTTP hasta la construcción de interfaces con React, servicios Back End con Spring Boot, persistencia y publicación en Internet.


---

## Continuar la práctica

- **Ejemplo anterior:** [Ejemplo 01 - Modelos de computación en la nube](../ejemplo01-modelos-nube/README.md)
- **Volver a la unidad:** [Unidad 5 - Introducción a la computación en la nube](../README.md)
- **Volver al índice:** [Todas las unidades](../../README.md)

Completaste los ejemplos de la última unidad. Vuelve a la unidad para revisar las actividades y comprobaciones.
