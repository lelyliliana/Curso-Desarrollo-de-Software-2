
### `diagramas/05-serverless.md`

```markdown
# Arquitectura Serverless

```mermaid
flowchart LR
    A[Cliente] --> B[Servicio en la nube]
    B --> C[Función]
    C --> D[Servicio administrado]
    D --> C
    C --> B
    B --> A