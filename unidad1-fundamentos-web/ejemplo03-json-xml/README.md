# Ejemplo 03 - JSON y XML

## Unidad 1 - Fundamentos de programación web

Este ejemplo permite comparar dos formatos utilizados para representar e intercambiar información: **JSON** y **XML**.

El objetivo principal es comprender cómo una misma información puede representarse utilizando estructuras diferentes.

---

# Objetivo de aprendizaje

Al finalizar este ejemplo, el estudiante estará en capacidad de:

* reconocer la estructura básica de JSON;
* reconocer la estructura básica de XML;
* identificar propiedades y valores en JSON;
* identificar etiquetas y contenido en XML;
* representar listas de datos en ambos formatos;
* diferenciar la sintaxis de JSON y XML;
* identificar algunos errores frecuentes de sintaxis;
* comprender por qué estos formatos pueden utilizarse para intercambiar información entre aplicaciones.

---

# Estructura

```text
ejemplo03-json-xml/
│
├── datos/
│   ├── estudiante.json
│   ├── estudiante.xml
│   ├── desarrollador.json
│   └── desarrollador.xml
│
├── ejemplos-invalidos/
│   ├── json-invalido.json
│   └── xml-invalido.xml
│
└── README.md
```

---

# ¿Qué es JSON?

JSON significa:

```text
JavaScript Object Notation
```

Permite representar información mediante pares:

```text
clave : valor
```

Ejemplo:

```json
{
  "nombre": "Ana",
  "edad": 20
}
```

En este ejemplo:

```text
nombre
edad
```

son las claves.

Mientras:

```text
Ana
20
```

son sus respectivos valores.

---

# Tipos de valores en JSON

JSON puede representar, entre otros:

```text
cadenas de texto
números
booleanos
arreglos
objetos
null
```

Ejemplo:

```json
{
  "nombre": "Laura",
  "edad": 22,
  "activo": true,
  "lenguajes": [
    "Java",
    "JavaScript"
  ]
}
```

---

# Objetos en JSON

Los objetos se representan utilizando:

```text
{
}
```

Ejemplo:

```json
{
  "nombre": "Carlos",
  "programa": "Ingeniería de Sistemas"
}
```

---

# Arreglos en JSON

Los arreglos utilizan:

```text
[
]
```

Por ejemplo:

```json
{
  "lenguajes": [
    "Java",
    "Python",
    "JavaScript"
  ]
}
```

---

# ¿Qué es XML?

XML significa:

```text
eXtensible Markup Language
```

Utiliza etiquetas para representar la estructura de la información.

Por ejemplo:

```xml
<estudiante>
    <nombre>Ana</nombre>
    <edad>20</edad>
</estudiante>
```

---

# Etiquetas XML

Generalmente una etiqueta tiene:

```xml
<nombre>
    contenido
</nombre>
```

La etiqueta inicial:

```xml
<nombre>
```

debe corresponder con la etiqueta final:

```xml
</nombre>
```

---

# Paso 1. Analizar estudiante.json

Abra:

```text
datos/estudiante.json
```

Encontrará:

```json
{
  "nombre": "Sebastián",
  "apellido": "Alarcón",
  "identificacion": 1234,
  "notas": [
    3.2,
    4.4,
    2.0,
    5.0
  ]
}
```

Identifique:

```text
nombre
apellido
identificacion
notas
```

Observe que `notas` contiene varios valores y por ello se representa mediante un arreglo.

---

# Paso 2. Analizar estudiante.xml

Abra:

```text
datos/estudiante.xml
```

La misma información aparece representada mediante etiquetas.

Observe especialmente:

```xml
<notas>
```

que contiene varias etiquetas:

```xml
<nota>
```

---

# Comparación

## JSON

```json
{
  "nombre": "Sebastián"
}
```

## XML

```xml
<estudiante>
    <nombre>Sebastián</nombre>
</estudiante>
```

Los dos formatos representan información, pero utilizan sintaxis diferentes.

---

# Representación de listas

## JSON

```json
{
  "lenguajes": [
    "Java",
    "Kotlin",
    "C++"
  ]
}
```

## XML

```xml
<lenguajes>
    <lenguaje>Java</lenguaje>
    <lenguaje>Kotlin</lenguaje>
    <lenguaje>C++</lenguaje>
</lenguajes>
```

---

# Paso 3. Comparar desarrollador.json y desarrollador.xml

Abra:

```text
datos/desarrollador.json
```

y:

```text
datos/desarrollador.xml
```

Compruebe que ambos archivos representan:

```text
nombre
apellido
identificación
lenguajes
idiomas
```

La información es la misma.

Lo que cambia es la forma en que se representa.

---

# Paso 4. Analizar un JSON incorrecto

Abra:

```text
ejemplos-invalidos/json-invalido.json
```

Encontrará:

```text
{
  "nombre": "Ana",
  "programa": "Ingeniería de Sistemas",
  "semestre": 4,
}
```

Existe una coma después del último atributo.

Este detalle hace que el JSON sea inválido.

Corríjalo eliminando la coma:

```json
{
  "nombre": "Ana",
  "programa": "Ingeniería de Sistemas",
  "semestre": 4
}
```

---

# Paso 5. Analizar XML incorrecto

Abra:

```text
ejemplos-invalidos/xml-invalido.xml
```

Observe:

```xml
<estudiante>
```

y posteriormente:

```xml
</estudiantes>
```

Las etiquetas no coinciden.

Corrija el cierre:

```xml
</estudiante>
```

---

# JSON utilizado en aplicaciones web

En los ejemplos anteriores del curso se observó una respuesta como:

```json
{
  "mensaje": "Hola desde el servidor"
}
```

También se utilizó:

```json
{
  "id": 1,
  "nombre": "Ana",
  "programa": "Ingeniería de Sistemas"
}
```

Esto permite relacionar los ejemplos.

El servidor genera información y el cliente necesita conocer el formato utilizado para poder interpretarla.

---

# Extensiones de archivo

Los archivos JSON normalmente utilizan:

```text
.json
```

Ejemplo:

```text
estudiante.json
```

Los archivos XML utilizan:

```text
.xml
```

Ejemplo:

```text
estudiante.xml
```

---

# Diferencias principales

| JSON                               | XML                                                                |
| ---------------------------------- | ------------------------------------------------------------------ |
| Utiliza claves y valores           | Utiliza etiquetas                                                  |
| Utiliza `{}` para objetos          | Utiliza etiquetas de apertura y cierre                             |
| Utiliza `[]` para arreglos         | Puede utilizar etiquetas repetidas                                 |
| Sintaxis generalmente más compacta | Sintaxis generalmente más descriptiva                              |
| Muy común en APIs web actuales     | También se utiliza para intercambio y configuración de información |

---

# Reto 1

Cree:

```text
producto.json
```

con:

```text
id
nombre
descripcion
precio
disponible
```

---

# Reto 2

Represente exactamente el mismo producto en:

```text
producto.xml
```

---

# Reto 3

Agregue al producto una lista de categorías.

Por ejemplo:

```text
Tecnología
Computadores
Accesorios
```

Represente la lista tanto en JSON como en XML.

---

# Reto 4

Cree un archivo JSON incorrecto deliberadamente.

Después:

1. identifique el error;
2. explique por qué es inválido;
3. corríjalo.

---

# Preguntas de análisis

1. ¿Qué significa JSON?
2. ¿Qué significa XML?
3. ¿Cómo se representan los pares clave-valor en JSON?
4. ¿Cómo se representa información en XML?
5. ¿Qué símbolos identifican un objeto JSON?
6. ¿Qué símbolos identifican un arreglo JSON?
7. ¿Qué ocurre si una etiqueta XML se abre con un nombre y se cierra con otro?
8. ¿Puede la misma información representarse mediante JSON y XML?
9. ¿Qué formato hemos utilizado en los ejemplos HTTP anteriores?
10. ¿Por qué cliente y servidor deben conocer el formato utilizado para intercambiar datos?

---

# Resultado esperado

Al finalizar debe poder observar una transformación conceptual como:

```text
INFORMACIÓN

nombre
apellido
identificación
notas

      │
      ├─────────────┐
      ▼             ▼

    JSON           XML

clave-valor      etiquetas
```

---

# Conceptos trabajados

* JSON;
* XML;
* claves;
* valores;
* objetos;
* arreglos;
* etiquetas;
* estructuras de datos;
* intercambio de información;
* sintaxis válida e inválida.

---

# Conclusión

JSON y XML permiten representar información de forma estructurada.

Aunque utilizan sintaxis diferentes, ambos pueden representar los mismos datos y permitir que diferentes aplicaciones intercambien información.

En los ejemplos posteriores del curso se utilizará principalmente JSON para la comunicación entre aplicaciones Front End y servicios Back End.
