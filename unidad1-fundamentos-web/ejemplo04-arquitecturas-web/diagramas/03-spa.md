
### `diagramas/03-spa.md`

```markdown
# Single Page Application - SPA

```mermaid
flowchart LR
    A[Usuario] --> B[SPA]
    B -->|HTTP / JSON| C[API]
    C -->|JSON| B
    B --> D[Actualización de interfaz]