
### `diagramas/02-widgets.md`

```markdown
# Aplicación con Widgets

```mermaid
flowchart LR
    A[Navegador] --> B[Página HTML]
    B --> C[Widget]
    C -->|Solicitud asíncrona| D[Servicio web]
    D -->|Datos| C