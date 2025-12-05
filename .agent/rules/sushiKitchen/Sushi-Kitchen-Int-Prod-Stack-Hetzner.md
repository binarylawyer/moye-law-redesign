# Sushi Kitchen Internal Production Stack (Hetzner)

Purpose: document the business-running stack (not shipped to customers), how we organize services, and which profiles to enable per environment.

---

## Core (Always On)

- APIs  
  - Medusa (backend \+ worker): rewards module enabled; Postgres via Supabase; Redis for queues/cache.  
  - FastAPI (apps/api): business APIs; uses Supabase and Redis.  
  - Payload CMS: editorial CMS; Supabase Postgres (DATABASE\_URI) with schema `payload`.  
- Gateway  
  - Caddy: reverse proxy \+ TLS for all domains (dev \+ prod), HSTS \+ redirects.  
- Data  
  - Supabase: Postgres \+ Storage (uploads go here; no local MinIO).  
  - Redis: shared cache/queue (container on Hetzner).  
- Observability & Ops  
  - Grafana, Prometheus: metrics/dashboards.  
  - Uptime Kuma: external checks for public endpoints.  
  - Promtail \+ Loki: centralized logs.  
  - cAdvisor: container metrics for Prometheus.  
  - Portainer: cluster admin; lock behind admin domain/IP allow list.  
  - Alertmanager: paging integration.  
  - pgAdmin, RedisInsight: ad-hoc DB/cache UI (admin-only).  
- Identity & SSO  
  - Keycloak (production only): use Neon Postgres for persistence; front admin surfaces (Grafana, Portainer, pgAdmin, RedisInsight, Uptime Kuma, optional Medusa/Payload Admin) with OIDC.  
- Automation  
  - n8n: internal workflows (limited creds; server-side only).  
- Search  
  - MeiliSearch: product/content search for Medusa \+ Payload. Official Medusa plugin exists; Payload can integrate via webhook/indexer.  
- LLM Utilities  
  - Ollama, anythingLLM: keep small and scoped; place on dedicated node if GPU required.

Notes

- Storage: standardize on Supabase Storage with presigned URLs; remove MinIO.  
- Backups: rely on Supabase backups for DB/Storage.  
- Vector: use pgVector in Supabase initially.  
- Documentation: author locally with mkdocs; in prod either run the sushi-mkdocs container (ops profile) or serve static site/ files via Caddy after CI build.

---

## 

## Optional Profiles

### tracing \+ paging (on-demand)

- Tempo: tracing backend.  
- OpenTelemetry Collector: receive/export traces/metrics/logs.  
- OnCall: paging/rota (Grafana OnCall or similar). Use when you need distributed tracing or on-call rotations beyond Alertmanager.

### vector \+ graph (pick only what you need)

- Vector DB: Qdrant or Weaviate (do not run both).  
- Graph DB: Neo4j or Memgraph (or ArangoDB multi-model). Enable only when a feature requires it (for example, graph catalogs or advanced recommendations). Index from Medusa/Payload events via worker.

### ml \+ r\&d (default off)

- Ray: distributed compute. Use for batch/ETL or large parallel jobs; otherwise skip.  
- MLflow: experiment tracking/model registry. Useful only if training internal models.  
- Kubeflow: full ML platform on Kubernetes; heavy; not recommended on Hetzner VMs.  
- LangChain: a library, not a service; embed in app code as needed (no container).  
- Others (LiteLLM, vLLM, Dify, Flowise, JupyterLab): enable only for specific projects; prefer separate nodes for GPU/CPU isolation. Restrict networks, secrets, and internet egress for these components.

---

## Environment Layout (Hetzner)

- Separate hosts recommended: sk-dev (smaller) and sk-prod (larger).  
- Folder structure per host:  
  - /opt/apps/sushi-kitchen/dev/.env and /opt/apps/sushi-kitchen/dev/medusa/.env  
  - /opt/apps/sushi-kitchen/prod/.env and /opt/apps/sushi-kitchen/prod/medusa/.env  
- Supabase: separate projects (or branches) for dev vs prod, each with its own DATABASE\_URL and service role key.

---

## Profiles in Compose

- core: Medusa, worker, FastAPI, Payload, Redis, Caddy, Grafana, Prometheus, Loki, Promtail, cAdvisor, Uptime Kuma, Portainer, Alertmanager, pgAdmin, RedisInsight, MeiliSearch, n8n.  
- core-prod: Keycloak (connects to Neon Postgres).  
- tracing-paging: Tempo, OpenTelemetry Collector, OnCall.  
- vector-graph: Qdrant or Weaviate; Neo4j or Memgraph (or ArangoDB).  
- ml-rd: Ray, MLflow, JupyterLab, LiteLLM, vLLM, Dify, Flowise (off by default).

---

## OIDC Client Checklist

1. Create a Keycloak realm (e.g., sushi-internal) and confirm Neon DB connectivity.  
2. Register OIDC clients with redirect/logout URLs:  
- Grafana \=\> [https://grafana.sushikitchen.io/login/generic\_oauth](https://grafana.sushikitchen.io/login/generic_oauth)  
- Portainer \=\> [https://portainer.sushikitchen.io](https://portainer.sushikitchen.io)  
- pgAdmin / RedisInsight / Uptime Kuma \=\> front with Caddy forward\_auth or oauth2-proxy pointing to Keycloak.  
- Optional: Medusa Admin, Payload Admin, FastAPI endpoints.  
3. Store client IDs/secrets in server secrets (/opt/apps/.../.env).  
4. Update Caddy to enforce SSO on admin hostnames.  
5. Smoke test login and logout flows for each client.

---

## Search Choice (Medusa \+ Payload)

- Default: MeiliSearch \- simple, fast, great DX; official Medusa plugin; community options for Payload.  
- Alternatives: Typesense (similar DX), OpenSearch (heavy ops), or Postgres FTS (pg\_trgm; OK for smaller catalogs but fewer features).  
- Indexing: subscribe to product/content change events; use worker to push to MeiliSearch; add reindex CLI for backfills.

---

## Next Steps

- Keep .env per environment on host; run cd medusa && npm ci && npx @medusajs/medusa@latest migrations run in dev, validate, then prod.  
- Update Caddy for dev/prod domains; protect admin surfaces with Keycloak.  
- Enable core profile first; verify health checks and dashboards.  
- For production, also enable core-prod to start Keycloak.  
- Create `/opt/apps/sushi-kitchen/prod/keycloak/.env` with `KEYCLOAK_DB_URL`, `KEYCLOAK_DB_USERNAME`, `KEYCLOAK_DB_PASSWORD`, `KEYCLOAK_ADMIN_USER`, and `KEYCLOAK_ADMIN_PASSWORD` (Neon connection requires `sslmode=require`).  
- Implement MeiliSearch indexing (Medusa plugin \+ simple Payload webhook indexer).  
- Leave tracing-paging, vector-graph, and ml-rd profiles off until needed.

