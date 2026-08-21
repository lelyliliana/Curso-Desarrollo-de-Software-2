# Arquitectura Legacy

```mermaid
flowchart LR
    A[Navegador] -->|Request HTTP| B[Servidor]
    B --> C[Lógica de negocio]
    C --> D[Generación de HTML]
    D -->|HTML completo| A