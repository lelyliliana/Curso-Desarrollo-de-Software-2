# Ejemplo 01 - Modelos de computación en la nube

[Volver a la unidad](../README.md) · [Volver al índice del curso](../../README.md)

## Unidad 5 - Introducción a la computación en la nube

Este ejemplo permite comparar los principales **tipos de nube** y **modelos de servicio** utilizados en computación en la nube.

El módulo institucional presenta:

* nube pública;
* nube privada;
* nube híbrida;
* IaaS;
* PaaS;
* SaaS;
* ventajas y desventajas del uso de servicios cloud;
* principales proveedores.

En este ejemplo no se desarrolla código.

El objetivo es analizar diferentes escenarios y comprender qué responsabilidades asume el usuario y cuáles son delegadas al proveedor.

---

# Objetivo de aprendizaje

Al finalizar este ejemplo, el estudiante estará en capacidad de:

* diferenciar nube pública, privada e híbrida;
* identificar situaciones en las que puede utilizarse cada tipo de nube;
* explicar qué significa IaaS;
* explicar qué significa PaaS;
* explicar qué significa SaaS;
* comparar el nivel de responsabilidad del usuario en cada modelo;
* relacionar servicios cloud con aplicaciones web;
* reconocer ventajas y riesgos de diferentes alternativas.

---

# Tipos de nube

Los tipos principales trabajados en esta unidad son:

```text id="n7tqcb"
Nube pública
Nube privada
Nube híbrida
```

---

# 1. Nube pública

En una nube pública, la infraestructura es proporcionada y administrada por un tercero.

Diferentes organizaciones pueden utilizar recursos ofrecidos por el mismo proveedor.

Conceptualmente:

```text id="xz5qdb"
              PROVEEDOR CLOUD
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
   Cliente A     Cliente B     Cliente C
```

Cada cliente administra sus recursos lógicos, aunque el proveedor se encarga de la infraestructura subyacente.

---

# Ejemplo conceptual

Una institución necesita publicar una aplicación web.

En lugar de comprar servidores propios, puede utilizar recursos proporcionados por un proveedor.

```text id="ytw38k"
Institución
     │
     ▼
Proveedor cloud
     │
     ▼
Aplicación disponible
en Internet
```

---

# Características comunes

Una nube pública puede resultar conveniente cuando se busca:

```text id="5b3mlo"
rapidez de aprovisionamiento
escalabilidad
acceso desde Internet
menor inversión inicial en hardware
servicios administrados
```

---

# 2. Nube privada

Una nube privada está destinada al uso de una organización específica.

Conceptualmente:

```text id="uvq8wy"
ORGANIZACIÓN
     │
     ▼
NUBE PRIVADA
     │
     ├── Aplicación A
     ├── Aplicación B
     └── Base de datos
```

La infraestructura puede estar físicamente dentro de la organización o ser administrada por un tercero, pero se encuentra dedicada a esa organización.

---

# ¿Cuándo puede resultar útil?

Por ejemplo, cuando existen:

```text id="xmdyam"
requisitos estrictos de seguridad
políticas internas
datos sensibles
restricciones regulatorias
necesidad de mayor control
```

---

# Mayor control

Una nube privada puede ofrecer un mayor control sobre:

```text id="uffcko"
infraestructura
configuración
red
seguridad
ubicación de los datos
```

Sin embargo, también puede implicar una mayor responsabilidad operativa.

---

# 3. Nube híbrida

Una nube híbrida combina recursos privados y públicos.

Puede representarse:

```text id="pw3upf"
        ORGANIZACIÓN
             │
      ┌──────┴──────┐
      ▼             ▼
NUBE PRIVADA    NUBE PÚBLICA
      │             │
datos sensibles    servicios
procesos internos  escalables
```

---

# Ejemplo conceptual

Una organización puede mantener:

```text id="vxv7gt"
información sensible
```

en una nube privada.

Mientras utiliza una nube pública para:

```text id="yl6vgi"
página web
procesamiento temporal
copias
servicios externos
```

---

# Comparación de tipos de nube

| Tipo de nube | Característica principal                                 | Ejemplo de uso                      |
| ------------ | -------------------------------------------------------- | ----------------------------------- |
| Pública      | Infraestructura compartida administrada por un proveedor | Publicar una aplicación web         |
| Privada      | Infraestructura dedicada a una organización              | Sistemas internos sensibles         |
| Híbrida      | Combina recursos públicos y privados                     | Datos privados + aplicación pública |

---

# Actividad 1 - Clasificar escenarios

Analice cada situación e identifique qué tipo de nube podría ser más apropiado.

## Escenario A

Una pequeña empresa necesita publicar rápidamente una aplicación web y no dispone de servidores propios.

Opciones:

```text id="4zw9jk"
Pública
Privada
Híbrida
```

Explique su elección.

---

## Escenario B

Una organización administra información altamente sensible y necesita controlar completamente la infraestructura utilizada.

Seleccione:

```text id="bdri21"
Pública
Privada
Híbrida
```

Explique por qué.

---

## Escenario C

Una institución mantiene información sensible internamente, pero necesita publicar un portal web para miles de usuarios.

Analice si podría resultar apropiada una arquitectura:

```text id="o9ne83"
Híbrida
```

---

# Modelos de servicio

Además del tipo de nube, debe identificarse qué nivel de servicio proporciona el proveedor.

Los tres modelos básicos estudiados son:

```text id="ogm9vu"
IaaS
PaaS
SaaS
```

---

# 1. IaaS

IaaS significa:

```text id="xo56ry"
Infrastructure as a Service
```

o:

```text id="c39m13"
Infraestructura como servicio
```

El proveedor ofrece recursos de infraestructura.

Por ejemplo:

```text id="2pj3cu"
servidores virtuales
red
almacenamiento
```

---

# Responsabilidad en IaaS

El proveedor puede administrar:

```text id="a0i81x"
hardware
virtualización
infraestructura física
```

Mientras el usuario puede encargarse de:

```text id="7oqz9k"
sistema operativo
runtime
aplicación
configuración
actualizaciones
```

---

# Ejemplo

Suponga que recibe una máquina virtual con Linux.

A partir de allí debe instalar:

```text id="f4a2b1"
Java
servidor web
aplicación
certificados
configuración
```

Eso representa un escenario cercano a IaaS.

---

# Flujo

```text id="lmntgm"
PROVEEDOR
   │
   ▼
Máquina virtual
   │
   ▼
USUARIO
   │
   ├── configura sistema
   ├── instala herramientas
   └── despliega aplicación
```

---

# 2. PaaS

PaaS significa:

```text id="5kocgt"
Platform as a Service
```

o:

```text id="n1w2do"
Plataforma como servicio
```

El proveedor ofrece una plataforma preparada para ejecutar aplicaciones.

---

# Flujo típico

```text id="v4w9pc"
DESARROLLADOR
     │
     │ código
     ▼
PLATAFORMA
     │
     ├── construye
     ├── ejecuta
     └── publica
     │
     ▼
APLICACIÓN
```

---

# Responsabilidad

En este escenario el desarrollador puede concentrarse principalmente en:

```text id="1ptzgo"
código
configuración de aplicación
datos
```

mientras el proveedor administra más elementos de infraestructura.

---

# Ejemplo conceptual con Spring Boot

El desarrollador puede proporcionar:

```text id="576gf0"
repositorio Git
```

o:

```text id="ycmuf2"
archivo .jar
```

y la plataforma se encarga de ejecutar la aplicación.

---

# Comparación con IaaS

## IaaS

```text id="h9o83e"
Recibo servidor
      │
      ▼
configuro todo
      │
      ▼
ejecuto aplicación
```

## PaaS

```text id="tkc6yt"
Entrego aplicación
      │
      ▼
plataforma configura
gran parte del entorno
      │
      ▼
aplicación ejecutándose
```

---

# 3. SaaS

SaaS significa:

```text id="l8wv5v"
Software as a Service
```

o:

```text id="86nrva"
Software como servicio
```

El usuario recibe una aplicación lista para utilizar.

---

# Flujo

```text id="l6qrc9"
USUARIO
   │
   ▼
NAVEGADOR
   │
   ▼
SOFTWARE LISTO
PARA UTILIZAR
```

El usuario normalmente no administra:

```text id="akx5ku"
servidores
sistema operativo
runtime
despliegue
```

---

# Ejemplo conceptual

Un usuario necesita enviar correos electrónicos.

En lugar de:

```text id="u0azs5"
comprar servidor
instalar software
configurar plataforma
```

utiliza directamente una aplicación disponible en Internet.

Eso corresponde conceptualmente a SaaS.

---

# Comparación general

```text id="9f7yp3"
IaaS
Infraestructura
     │
     ▼
PaaS
Plataforma
     │
     ▼
SaaS
Software
```

---

# Responsabilidad del usuario

Puede observarse:

```text id="at036t"
MÁS RESPONSABILIDAD DEL USUARIO

IaaS
 │
 ▼
PaaS
 │
 ▼
SaaS

MENOS RESPONSABILIDAD DEL USUARIO
```

---

# Comparación detallada

| Elemento                 | IaaS                               | PaaS      | SaaS      |
| ------------------------ | ---------------------------------- | --------- | --------- |
| Hardware                 | Proveedor                          | Proveedor | Proveedor |
| Virtualización           | Proveedor                          | Proveedor | Proveedor |
| Sistema operativo        | Usuario / proveedor según servicio | Proveedor | Proveedor |
| Runtime                  | Usuario                            | Proveedor | Proveedor |
| Aplicación               | Usuario                            | Usuario   | Proveedor |
| Datos propios            | Usuario                            | Usuario   | Usuario   |
| Uso directo del software | No necesariamente                  | No        | Sí        |

Esta tabla es conceptual. La distribución exacta de responsabilidades puede variar entre servicios.

---

# Actividad 2 - Clasificar servicios

Para cada situación determine si se aproxima más a:

```text id="gfjj9d"
IaaS
PaaS
SaaS
```

---

## Caso A

Le entregan una máquina virtual y usted debe instalar Java, configurar el sistema operativo y desplegar Spring Boot.

Respuesta esperada:

```text id="3v6j0p"
IaaS
```

Justifique.

---

## Caso B

Conecta un repositorio Git y la plataforma construye y ejecuta automáticamente su aplicación.

Respuesta aproximada:

```text id="no2uih"
PaaS
```

---

## Caso C

Abre una aplicación desde el navegador y comienza a utilizarla sin instalar ni administrar infraestructura.

Respuesta:

```text id="8c7q4y"
SaaS
```

---

# Caso completo: aplicación del curso

Imagine la aplicación:

```text id="mwy66u"
React
+
Spring Boot
+
MySQL
```

Existen diferentes formas de desplegarla.

---

# Alternativa A - Mayor administración

```text id="22chz6"
Máquina virtual
      │
      ├── instalar Java
      ├── instalar servidor
      ├── instalar MySQL
      ├── configurar seguridad
      └── publicar aplicación
```

Este escenario se aproxima a:

```text id="lkxr1c"
IaaS
```

---

# Alternativa B - Plataforma administrada

```text id="kk8mbv"
GitHub
  │
  ▼
Plataforma
  │
  ├── build
  ├── ejecución
  └── despliegue
```

Este escenario se aproxima más a:

```text id="03p66o"
PaaS
```

---

# Alternativa C - Aplicación terminada

Si simplemente utilizamos una aplicación web proporcionada por un tercero:

```text id="ox8oxm"
Navegador
   │
   ▼
Aplicación
```

estamos ante:

```text id="9haqjw"
SaaS
```

---

# ¿Cuál modelo es mejor?

No existe una única respuesta.

La selección depende de:

```text id="75vfo1"
nivel de control necesario
experiencia técnica
costos
seguridad
tiempo disponible
escalabilidad
mantenimiento
```

---

# Mayor control frente a facilidad

Puede representarse:

```text id="6uhlfp"
MAYOR CONTROL

IaaS
 │
 ▼
PaaS
 │
 ▼
SaaS

MAYOR ABSTRACCIÓN
Y FACILIDAD DE USO
```

---

# Ventajas de la computación en la nube

Algunas ventajas posibles son:

```text id="l4rdyj"
aprovisionamiento rápido
escalabilidad
acceso remoto
servicios administrados
automatización
reducción de infraestructura propia
```

---

# Desventajas o riesgos

También deben considerarse:

```text id="lrvce7"
costos variables
dependencia del proveedor
dependencia de Internet
seguridad
configuraciones incorrectas
disponibilidad del servicio
```

---

# Seguridad compartida

Utilizar un proveedor cloud no significa que el proveedor sea responsable de absolutamente toda la seguridad.

Conceptualmente existe una responsabilidad compartida.

Por ejemplo:

```text id="1qk7ly"
PROVEEDOR
│
└── infraestructura

USUARIO
│
├── credenciales
├── configuración
├── permisos
├── aplicación
└── datos
```

La distribución exacta depende del servicio utilizado.

---

# Error frecuente

No debe asumirse:

```text id="g6zyo2"
Está en la nube
=
es automáticamente seguro
```

La configuración sigue siendo fundamental.

---

# Costos

La nube puede permitir pagar de acuerdo con el uso.

Sin embargo, esto también exige controlar:

```text id="3jg4c8"
recursos activos
almacenamiento
tráfico
bases de datos
copias
servicios adicionales
```

---

# Ejemplo

Una máquina virtual olvidada y encendida puede continuar generando consumo aunque nadie esté utilizando la aplicación.

---

# Escalabilidad

Imagine:

```text id="767ffc"
100 usuarios
```

y posteriormente:

```text id="mx5frj"
10.000 usuarios
```

Una infraestructura cloud puede facilitar la ampliación de recursos para responder a un incremento de demanda.

---

# Escalar verticalmente

Conceptualmente:

```text id="p2q1gn"
Servidor pequeño
     │
     ▼
Servidor con
más CPU / RAM
```

---

# Escalar horizontalmente

Conceptualmente:

```text id="ic24np"
1 servidor
   │
   ▼
varios servidores
   │
   ├── instancia 1
   ├── instancia 2
   └── instancia 3
```

---

# Alta disponibilidad

Una aplicación importante puede necesitar continuar funcionando aunque falle una instancia.

Conceptualmente:

```text id="oqg3jt"
Usuario
   │
   ▼
Balanceador
   │
   ├── Servidor A
   ├── Servidor B
   └── Servidor C
```

Si una instancia falla, otras pueden continuar atendiendo solicitudes.

---

# Relación con arquitecturas web

Los conceptos de esta unidad pueden conectarse con la Unidad 1.

Por ejemplo, una arquitectura de microservicios podría desplegar diferentes servicios:

```text id="dpkejn"
Servicio usuarios
      │
Servicio cursos
      │
Servicio pagos
```

en infraestructura cloud.

---

# Relación con serverless

La Unidad 1 introdujo:

```text id="p62z2m"
serverless
```

Este enfoque se relaciona estrechamente con servicios cloud en los que el proveedor administra gran parte de la infraestructura necesaria para ejecutar funciones.

---

# Actividad 3 - Diseñar una solución

Se desea publicar:

```text id="2hjyv0"
Portal académico
```

compuesto por:

```text id="tvs6f6"
React
Spring Boot
MySQL
```

Proponga dos posibles arquitecturas.

---

# Alternativa 1

Utilizando una máquina virtual:

```text id="jld0o7"
IaaS
```

Indique qué componentes tendría que instalar y administrar.

---

# Alternativa 2

Utilizando plataformas administradas:

```text id="q9uhb5"
PaaS
```

Indique qué responsabilidades podría delegar al proveedor.

---

# Compare

Analice:

```text id="40qwt8"
control
complejidad
mantenimiento
tiempo de despliegue
```

en ambas alternativas.

---

# Actividad 4 - Elegir un modelo

Seleccione uno de estos escenarios:

```text id="wf6ho9"
Blog personal
Sistema bancario
Sistema académico
Tienda virtual
Aplicación de pruebas
```

Determine:

1. si utilizaría nube pública, privada o híbrida;
2. si preferiría IaaS, PaaS o una combinación;
3. qué ventajas tendría;
4. qué riesgos debería controlar.

---

# Preguntas de análisis

1. ¿Qué diferencia existe entre nube pública y privada?
2. ¿Qué es una nube híbrida?
3. ¿Qué significa IaaS?
4. ¿Qué significa PaaS?
5. ¿Qué significa SaaS?
6. ¿En cuál modelo suele tener el usuario mayor responsabilidad?
7. ¿En cuál modelo recibe una aplicación lista para utilizar?
8. ¿Qué diferencia existe entre IaaS y PaaS?
9. ¿Por qué PaaS puede facilitar el despliegue?
10. ¿Qué factores deben considerarse para seleccionar un modelo?
11. ¿Qué significa escalabilidad?
12. ¿Qué diferencia existe entre escalabilidad vertical y horizontal?
13. ¿Qué significa alta disponibilidad?
14. ¿Qué riesgos de seguridad deben considerarse?
15. ¿Por qué es importante controlar los costos?
16. ¿Qué relación existe entre serverless y computación en la nube?
17. ¿Cómo podría desplegarse una aplicación React + Spring Boot?
18. ¿Por qué no existe un modelo cloud apropiado para todos los casos?

---

# Resultado esperado

Al finalizar este ejemplo debe poder diferenciar:

```text id="co9sph"
TIPOS DE NUBE

Pública
Privada
Híbrida
```

y:

```text id="bx0ful"
MODELOS DE SERVICIO

IaaS
PaaS
SaaS
```

También debe comprender que corresponden a clasificaciones diferentes.

---

# Importante

No deben confundirse:

```text id="ds461p"
Pública / Privada / Híbrida
```

con:

```text id="tpi6hs"
IaaS / PaaS / SaaS
```

La primera clasificación responde principalmente a:

```text id="ei9bxx"
¿Cómo se dispone la infraestructura?
```

La segunda responde a:

```text id="ymljg5"
¿Qué nivel de servicio ofrece el proveedor?
```

---

# Ejemplo combinado

Una organización podría utilizar:

```text id="033147"
Nube pública
+
PaaS
```

o:

```text id="dnmjfo"
Nube privada
+
IaaS
```

Las dos clasificaciones pueden combinarse.

---

# Conceptos trabajados

* computación en la nube;
* nube pública;
* nube privada;
* nube híbrida;
* IaaS;
* PaaS;
* SaaS;
* proveedor;
* consumidor;
* responsabilidad;
* escalabilidad;
* escalabilidad vertical;
* escalabilidad horizontal;
* alta disponibilidad;
* seguridad;
* costos;
* infraestructura;
* plataforma;
* software.

---

# Conclusión

Los tipos de nube permiten analizar cómo se dispone la infraestructura, mientras que los modelos de servicio indican qué nivel de responsabilidad asume el proveedor.

IaaS proporciona mayor control sobre la infraestructura, PaaS facilita el despliegue de aplicaciones al administrar una parte más amplia del entorno y SaaS ofrece directamente software listo para utilizar.

Comprender estas diferencias facilita seleccionar una alternativa adecuada según las necesidades técnicas, económicas y de seguridad de cada solución.


---

## Continuar la práctica

- **Ejemplo anterior:** [Ejemplo 04 - Consumo de una API externa desde Spring Boot](../../unidad4-backend/ejemplo04-consumo-api-externa/README.md)
- **Volver a la unidad:** [Unidad 5 - Introducción a la computación en la nube](../README.md)
- **Volver al índice:** [Todas las unidades](../../README.md)
- **Siguiente ejemplo:** [Ejemplo 02 - Despliegue de una aplicación web](../ejemplo02-despliegue/README.md)
