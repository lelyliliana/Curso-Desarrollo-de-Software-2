# Unidad 5 - Introducción a la computación en la nube

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/fullstack/)

Esta unidad introduce los conceptos fundamentales de la computación en la nube y su relación con el desarrollo de aplicaciones web.

El módulo institucional aborda:

* concepto de computación en la nube;
* agentes involucrados;
* nube pública;
* nube privada;
* nube híbrida;
* infraestructura como servicio;
* plataforma como servicio;
* software como servicio;
* ventajas y desventajas;
* principales proveedores.

El propósito de esta unidad no es profundizar en la administración de infraestructura cloud, sino comprender cómo los servicios en la nube pueden apoyar el desarrollo, despliegue y operación de aplicaciones.

---

# Objetivo de la unidad

Al finalizar esta unidad, el estudiante estará en capacidad de:

* explicar qué es computación en la nube;
* diferenciar nube pública, privada e híbrida;
* reconocer los principales actores involucrados;
* diferenciar IaaS, PaaS y SaaS;
* reconocer ventajas y riesgos del uso de servicios cloud;
* identificar algunos proveedores de servicios en la nube;
* relacionar la nube con el despliegue de aplicaciones;
* reconocer que una aplicación Front End o Back End puede publicarse utilizando infraestructura administrada por terceros.

---

# Estructura

```text
unidad5-computacion-nube/
│
├── README.md
│
├── ejemplo01-modelos-nube/
└── ejemplo02-despliegue/
```

---

# Ruta de aprendizaje

```text
Ejemplo 01
Modelos y tipos de nube
        │
        ▼
Ejemplo 02
Despliegue de una aplicación
```

---

# ¿Qué es computación en la nube?

La computación en la nube permite utilizar recursos tecnológicos a través de Internet.

Entre estos recursos pueden encontrarse:

```text
procesamiento
almacenamiento
redes
bases de datos
plataformas
aplicaciones
servicios
```

El módulo destaca que estos recursos pueden ser proporcionados de forma compartida y administrados por proveedores especializados.

---

# Idea general

En lugar de depender únicamente de:

```text
Servidor físico propio
```

puede utilizarse:

```text
Proveedor cloud
       │
       ▼
recursos disponibles
a través de Internet
```

---

# Agentes involucrados

El módulo identifica tres actores principales:

```text
Consumidores
Proveedores
Diseñadores
```

---

# Consumidor

Es quien utiliza los servicios.

Por ejemplo:

```text
empresa
desarrollador
institución
usuario
```

El consumidor no necesita conocer todos los detalles internos de la infraestructura.

---

# Proveedor

Es quien ofrece los servicios cloud.

Puede proporcionar:

```text
máquinas virtuales
bases de datos
almacenamiento
servicios de despliegue
herramientas
```

---

# Diseñadores

Crean y mantienen herramientas, servicios y soluciones dentro del ecosistema cloud.

---

# Tipos de nube

El módulo presenta:

```text
Nube pública
Nube privada
Nube híbrida
```

---

# Nube pública

La infraestructura es administrada por un proveedor y compartida entre múltiples clientes.

Conceptualmente:

```text
Proveedor cloud
   │
   ├── Cliente A
   ├── Cliente B
   └── Cliente C
```

Cada cliente utiliza sus propios recursos lógicos, aunque la infraestructura física sea administrada por el proveedor.

---

# Nube privada

La infraestructura está destinada a una única organización.

Conceptualmente:

```text
Organización
   │
   ▼
Infraestructura privada
   │
   ├── Área A
   ├── Área B
   └── Área C
```

---

# Nube híbrida

Combina recursos privados y públicos.

Por ejemplo:

```text
Nube privada
     │
     ├── datos sensibles
     │
     └──────────────┐
                    ▼
                Nube pública
                servicios adicionales
```

---

# Comparación

| Tipo    | Característica principal                                              |
| ------- | --------------------------------------------------------------------- |
| Pública | Infraestructura administrada por un proveedor para múltiples clientes |
| Privada | Infraestructura dedicada a una organización                           |
| Híbrida | Combina nube privada y pública                                        |

---

# Modelos de servicio

El módulo presenta:

```text
IaaS
PaaS
SaaS
```

---

# IaaS

IaaS significa:

```text
Infrastructure as a Service
```

El proveedor ofrece infraestructura.

Por ejemplo:

```text
máquina virtual
almacenamiento
red
```

El usuario suele encargarse de aspectos como:

```text
sistema operativo
runtime
aplicación
configuración
```

---

# PaaS

PaaS significa:

```text
Platform as a Service
```

El proveedor ofrece una plataforma preparada para desplegar aplicaciones.

Conceptualmente:

```text
Código
  │
  ▼
Plataforma
  │
  ▼
Aplicación publicada
```

El desarrollador puede concentrarse más en su aplicación y menos en administrar infraestructura.

---

# SaaS

SaaS significa:

```text
Software as a Service
```

El usuario consume directamente una aplicación disponible por Internet.

Por ejemplo:

```text
navegador
   │
   ▼
aplicación lista para usar
```

---

# Comparación IaaS - PaaS - SaaS

```text
IaaS
│
└── infraestructura

PaaS
│
└── plataforma para ejecutar aplicaciones

SaaS
│
└── aplicación lista para utilizar
```

---

# Ejemplo conceptual

Imagine que desea publicar una aplicación.

## IaaS

Podría recibir:

```text
Servidor virtual
```

y configurar:

```text
Linux
Java
servidor
aplicación
seguridad
```

---

## PaaS

Podría proporcionar:

```text
repositorio
código
configuración
```

y la plataforma se encargaría de gran parte del despliegue.

---

## SaaS

No desarrolla ni despliega la aplicación.

Simplemente utiliza el software ofrecido.

---

# Responsabilidad

Puede visualizarse:

```text
IaaS
más responsabilidad del usuario
        │
        ▼
PaaS
responsabilidad compartida
        │
        ▼
SaaS
más responsabilidad del proveedor
```

---

# Ventajas

El módulo identifica ventajas como:

* reducción de costos iniciales;
* facilidad de recuperación de información;
* disponibilidad rápida de recursos;
* integración de servicios;
* movilidad;
* capacidad de almacenamiento;
* colaboración.

---

# Escalabilidad

Una ventaja importante es poder ajustar recursos según las necesidades.

Conceptualmente:

```text
Pocos usuarios
     │
     ▼
pocos recursos

Más usuarios
     │
     ▼
más recursos
```

---

# Despliegue rápido

En lugar de preparar infraestructura física durante varios días o semanas, algunos servicios permiten disponer de recursos en pocos minutos.

---

# Acceso remoto

Los recursos pueden administrarse mediante Internet.

Esto facilita:

```text
trabajo remoto
colaboración
administración distribuida
```

---

# Desventajas y riesgos

El módulo también señala:

* dependencia de la conexión a Internet;
* variaciones de rendimiento;
* problemas técnicos;
* riesgos de seguridad;
* costos adicionales;
* limitaciones de soporte.

---

# Seguridad

Mover servicios a la nube no elimina la responsabilidad sobre la seguridad.

Deben considerarse:

```text
credenciales
permisos
protección de datos
configuración
copias de seguridad
actualizaciones
```

---

# Costos

Aunque la nube puede evitar una inversión inicial alta, un uso inadecuado puede generar costos inesperados.

Por ejemplo:

```text
máquinas encendidas sin uso
almacenamiento innecesario
tráfico excesivo
servicios sobredimensionados
```

---

# Dependencia del proveedor

También debe considerarse:

```text
disponibilidad
cambios de precios
cambios de servicios
migración
```

---

# Proveedores

El módulo menciona proveedores como:

```text
AWS
Google Cloud
Microsoft Azure
Oracle Cloud
IBM Cloud
Alibaba Cloud
```

---

# Relación con este curso

Hasta este momento se ha trabajado:

```text
React
Front End

Spring Boot
Back End

Base de datos
```

Estas aplicaciones pueden ejecutarse únicamente de forma local:

```text
localhost
```

o pueden publicarse en Internet.

---

# Desarrollo local

```text
Computador del desarrollador
        │
        ├── React
        ├── Spring Boot
        └── Base de datos
```

Solo el desarrollador puede acceder fácilmente a esos servicios si se encuentran en `localhost`.

---

# Despliegue

El despliegue permite trasladar una aplicación desde el entorno de desarrollo hacia un ambiente donde pueda ser utilizada por otros usuarios.

```text
DESARROLLO
localhost
     │
     ▼
BUILD
     │
     ▼
DESPLIEGUE
     │
     ▼
INTERNET
```

---

# Aplicación React

En React puede generarse una versión de producción mediante:

```bash
npm run build
```

Esto produce archivos optimizados para publicación.

---

# Aplicación Spring Boot

Una aplicación Spring Boot puede empaquetarse mediante Maven.

Por ejemplo:

```bash
mvn package
```

Esto puede producir un archivo:

```text
.jar
```

que posteriormente puede ejecutarse en un servidor.

---

# Arquitectura desplegada

Conceptualmente:

```text
USUARIO
   │
   │ Internet
   ▼
FRONT END
React
   │
   │ HTTP / JSON
   ▼
BACK END
Spring Boot
   │
   ▼
BASE DE DATOS
```

---

# ¿Dónde puede ejecutarse cada componente?

Por ejemplo:

```text
React
→ servicio de hosting web

Spring Boot
→ plataforma de aplicaciones

Base de datos
→ servicio administrado
```

No es obligatorio que todos los componentes se encuentren en el mismo proveedor.

---

# Ejemplo de distribución

```text
React
Proveedor A
   │
   ▼
Spring Boot
Proveedor B
   │
   ▼
Base de datos
Proveedor C
```

La comunicación puede establecerse mediante Internet.

---

# Variable importante: URL

En desarrollo React puede consumir:

```text
http://localhost:8080
```

Pero después del despliegue podría consumir:

```text
https://api.mi-aplicacion.com
```

Esto demuestra por qué resulta importante configurar las URLs en lugar de escribirlas repetidamente en el código.

---

# Variables de entorno

Las aplicaciones modernas suelen utilizar variables de entorno para configuraciones que cambian según el ambiente.

Por ejemplo:

```text
desarrollo
producción
```

---

# Ejemplo conceptual

```text
DESARROLLO

API_URL=http://localhost:8080
```

Mientras:

```text
PRODUCCIÓN

API_URL=https://api.ejemplo.com
```

---

# No almacenar secretos en Git

Información como:

```text
contraseñas
tokens
API keys
credenciales de base de datos
```

no debería escribirse directamente en repositorios públicos.

---

# Relación con GitHub

Un flujo común puede ser:

```text
Código
  │
  ▼
Git
  │
  ▼
GitHub
  │
  ▼
Plataforma cloud
  │
  ▼
Despliegue
```

Algunas plataformas pueden conectarse directamente con un repositorio para construir y publicar una aplicación.

---

# Integración de todo el curso

La evolución completa puede representarse:

```text
UNIDAD 1
Fundamentos web
      │
      ▼
UNIDAD 2
Interfaces
      │
      ▼
UNIDAD 3
React
      │
      ▼
UNIDAD 4
Spring Boot
      │
      ▼
UNIDAD 5
Despliegue / nube
```

---

# Arquitectura final

```text
USUARIO
   │
   │ Internet
   ▼
REACT
Front End
   │
   │ HTTP / JSON
   ▼
SPRING BOOT
Back End
   │
   ├──────────────┐
   ▼              ▼
BASE DE DATOS   API EXTERNA
```

La nube puede proporcionar infraestructura para uno o varios de estos componentes.

---

# Ejemplo 01 - Modelos de nube

Carpeta:

```text
ejemplo01-modelos-nube
```

Este recurso permitirá comparar:

```text
nube pública
nube privada
nube híbrida

IaaS
PaaS
SaaS
```

mediante diagramas y casos de análisis.

---

# Ejemplo 02 - Despliegue

Carpeta:

```text
ejemplo02-despliegue
```

Este recurso permitirá relacionar los conceptos de nube con una práctica de publicación de una aplicación.

---

# Actividad de repaso

Antes de finalizar el curso, compruebe que puede responder:

1. ¿Qué es computación en la nube?
2. ¿Qué es una nube pública?
3. ¿Qué es una nube privada?
4. ¿Qué es una nube híbrida?
5. ¿Qué significa IaaS?
6. ¿Qué significa PaaS?
7. ¿Qué significa SaaS?
8. ¿Cuál ofrece mayor control sobre la infraestructura?
9. ¿Cuál ofrece una aplicación lista para usar?
10. ¿Qué ventaja tiene desplegar una aplicación en Internet?
11. ¿Qué significa `localhost`?
12. ¿Por qué `localhost` no representa una aplicación pública?
13. ¿Qué significa despliegue?
14. ¿Para qué se utiliza `npm run build`?
15. ¿Para qué puede utilizarse `mvn package`?
16. ¿Qué es una variable de entorno?
17. ¿Por qué no deben almacenarse secretos en un repositorio público?
18. ¿Cómo puede relacionarse GitHub con un proceso de despliegue?
19. ¿Puede Front End y Back End encontrarse en proveedores diferentes?
20. ¿Cómo se conecta React con Spring Boot después del despliegue?

---

# Reto integrador

Diseñe conceptualmente el despliegue de una aplicación compuesta por:

```text
React
Spring Boot
MySQL
```

Proponga dónde ejecutaría cada componente.

---

# Ejemplo

```text
React
→ hosting de Front End

Spring Boot
→ plataforma de aplicaciones

MySQL
→ base de datos administrada
```

Explique:

1. cómo se comunicaría React con Spring Boot;
2. cómo se comunicaría Spring Boot con MySQL;
3. qué URLs serían públicas;
4. qué información debería mantenerse privada;
5. qué variables de entorno serían necesarias.

---

# Resultado esperado de la unidad

El estudiante debe poder interpretar:

```text
LOCAL

React
localhost:5173
   │
   ▼
Spring Boot
localhost:8080
```

frente a:

```text
PRODUCCIÓN

https://mi-app.com
       │
       ▼
https://api.mi-app.com
       │
       ▼
Base de datos
```

---

# Conceptos trabajados

* computación en la nube;
* nube pública;
* nube privada;
* nube híbrida;
* IaaS;
* PaaS;
* SaaS;
* proveedor cloud;
* consumidor;
* despliegue;
* producción;
* build;
* hosting;
* variables de entorno;
* seguridad;
* secretos;
* Front End;
* Back End;
* bases de datos.

---

# Conclusión

La computación en la nube permite utilizar infraestructura, plataformas y aplicaciones mediante servicios accesibles a través de Internet.

Para un desarrollador, uno de los usos más importantes consiste en desplegar aplicaciones para que puedan ser utilizadas fuera del entorno local.

Después de construir un Front End con React y un Back End con Spring Boot, el siguiente paso natural es preparar y publicar estos componentes en un ambiente accesible desde Internet.

La nube proporciona múltiples alternativas para realizar este proceso, desde infraestructura administrada directamente por el usuario hasta plataformas que automatizan gran parte del despliegue.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 4 - Desarrollo Back End con Spring Boot](../unidad4-backend/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Comenzar los ejemplos:** [Ejemplo 01 - Modelos de computación en la nube](ejemplo01-modelos-nube/README.md)

Llegaste a la última unidad. Revisa tu proyecto y la lista de comprobación antes de dar por terminado el curso.
