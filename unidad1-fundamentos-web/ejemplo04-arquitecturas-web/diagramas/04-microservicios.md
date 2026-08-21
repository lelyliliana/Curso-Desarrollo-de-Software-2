
### `diagramas/04-microservicios.md`

```markdown
# Microservicios

```mermaid
flowchart LR
    A[Cliente] --> B[API Gateway]

    B --> C[Servicio de usuarios]
    B --> D[Servicio de productos]
    B --> E[Servicio de pedidos]

    C --> B
    D --> B
    E --> B

    B --> A