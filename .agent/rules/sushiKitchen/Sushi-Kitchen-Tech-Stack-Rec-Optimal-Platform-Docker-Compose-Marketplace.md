# Sushi Kitchen Tech Stack Recommendation: Optimal Platform for Docker-Compose Marketplace

# Sushi Kitchen Tech Stack Recommendation: Optimal Platform for Docker-Compose Marketplace

**Rapid scaling for 500 concurrent users with 2 developers—without over-engineering**

Your current FastAPI \+ Next.js foundation is solid. Based on comprehensive analysis of your PRDs, similar platforms (Runtipi, CasaOS, Umbrel), and small-team best practices, here's your optimal path forward prioritizing simplicity, developer velocity, and the smart builder vision.

## Current state assessment

Your existing architecture from the PRDs is remarkably well-suited for the mission. You've already made several excellent choices:

**Current Stack (Validated):**

- FastAPI backend with Python 3.11+ provides async capabilities and automatic API documentation  
- Next.js 15 with App Router offers modern React patterns and excellent developer experience  
- PostgreSQL 16 via Supabase delivers reliability with pgvector for future AI features  
- Redis 7.2 handles caching and BullMQ background jobs  
- Docker Compose v3.8 matches your deployment model (dogfooding principle)  
- Railway/Vercel hosting with Cloudflare CDN

This foundation aligns well with proven patterns from successful platforms. **The core recommendation: keep this stack and enhance it strategically** rather than rewriting.

## Platform components: what you need to build

### 1\. Docker-compose template engine (CRITICAL \- Build First)

**Recommended: Jinja2 \+ Python-on-Whales**

Why this combination dominates for Python-based platforms:

**Jinja2 for templating:**

- Native Python integration with FastAPI  
- Full conditional logic, loops, and variable inheritance  
- Battle-tested by Ansible, Flask, and major platforms  
- Handles complex dependency injection cleanly

**Python-on-Whales for compose management:**

- Wraps Docker Compose v2 with Pythonic API  
- Validates, builds, deploys, and monitors compose stacks  
- Streams logs and events programmatically  
- Zero shell scripting—pure Python control

**Implementation pattern:**

from jinja2 import Environment, FileSystemLoader

from python\_on\_whales import DockerClient

\# Template rendering

env \= Environment(loader=FileSystemLoader('templates/'))

template \= env.get\_template('bundle.yml.j2')

\# Generate compose file

compose\_content \= template.render(

    services=selected\_services,

    privacy\_profile=user.privacy\_profile,

    resources=hardware\_config,

    dependencies=resolved\_dependencies

)

\# Validate and deploy

docker \= DockerClient(compose\_files=\["generated/user-123.yml"\])

config \= docker.compose.config()  \# Validates syntax

docker.compose.up(detach=True, build=True)

**Alternative considered:** docker-compose-templer provides file-watching and advanced features, but python-on-whales offers better programmatic control for your API-driven model.

### 2\. App metadata storage (CRITICAL \- Build First)

**Recommended: PostgreSQL JSONB \+ structured schemas**

Store service metadata using the ComponentDetail structure from your PRD, enhanced with capability-based dependencies:

CREATE TABLE service\_catalog (

    service\_id TEXT PRIMARY KEY,  \-- "hosomaki.n8n"

    name TEXT NOT NULL,

    category TEXT NOT NULL,

    manifest JSONB NOT NULL,  \-- Full ComponentDetail object

    created\_at TIMESTAMPTZ DEFAULT NOW()

);

\-- Index for capability queries

CREATE INDEX idx\_service\_capabilities ON service\_catalog 

    USING GIN ((manifest-\>'provides') jsonb\_path\_ops);

CREATE INDEX idx\_service\_requirements ON service\_catalog 

    USING GIN ((manifest-\>'requires') jsonb\_path\_ops);

**Manifest structure** (matches PRD ComponentDetail):

{

  "service\_id": "hosomaki.n8n",

  "image": "n8nio/n8n:latest",

  "ports": \[

    {"container\_port": 5678, "host\_port": 5678, "protocol": "tcp"}

  \],

  "environment": {

    "DB\_POSTGRESDB\_HOST": "${postgres.service\_name}",

    "REDIS\_HOST": "${redis.service\_name}"

  },

  "volumes": \[

    {

      "name": "n8n-data",

      "mount\_path": "/data",

      "volume\_type": "volume",

      "backup\_priority": "critical"

    }

  \],

  "health\_check": {

    "endpoint": "http://localhost:5678/healthz",

    "interval\_seconds": 30,

    "timeout\_seconds": 10,

    "retries": 3

  },

  "network\_profile": "chirashi",

  "requires": \["database.postgres", "cache.redis"\],

  "provides": \["workflow.automation"\],

  "hardware\_requirements": {

    "min\_ram\_gb": 2,

    "min\_cpu\_cores": 1,

    "gpu\_required": false

  }

}

**Why JSONB over separate tables:** Your PRD shows services with highly variable schemas (GPU requirements, scaling configs, multiple volume types). JSONB provides flexibility while GIN indexes enable fast capability queries for the smart builder.

### 3\. Template generation API (CRITICAL \- Build First)

**Core endpoint architecture** (extends your Phase 2 API):

POST /api/v2/compose/generate

\- Input: bundle\_id, user\_config, hardware\_profile

\- Process: Resolve dependencies → Inject variables → Render template → Validate

\- Output: docker-compose.yml, .env file, install script

GET /api/v2/bundles/{id}/dependencies  

\- Already planned in Phase 2

\- Returns dependency tree with depth and reasoning

POST /api/v2/compose/validate

\- Input: Generated compose content

\- Process: docker compose config \--quiet

\- Output: Validation errors or success with canonical YAML

**Generation pipeline** (4-stage process):

async def generate\_compose\_bundle(bundle\_id: str, user\_id: str):

    \# Stage 1: Resolve dependencies

    services \= await resolve\_service\_dependencies(bundle\_id)

    

    \# Stage 2: Apply privacy profile

    network\_config \= apply\_privacy\_profile(

        services, 

        user.verification\_status

    )

    

    \# Stage 3: Render template

    compose\_content \= render\_compose\_template(

        services=services,

        networks=network\_config,

        secrets=generate\_secrets(),

        user\_config=user.config

    )

    

    \# Stage 4: Validate

    validation \= await validate\_compose\_file(compose\_content)

    if not validation.success:

        raise ComposeValidationError(validation.errors)

    

    return compose\_content

### 4\. Smart builder: Auto-connect logic (Phase 2 \- After MVP)

**Capability-based dependency resolution** (from your PRD vision):

def resolve\_dependencies(selected\_services: List\[str\]) \-\> List\[Service\]:

    """

    Auto-resolves service dependencies using capability matching.

    Example: n8n requires \['database.postgres'\] → adds postgres service

    """

    resolved \= \[\]

    requirements \= set()

    

    for service\_id in selected\_services:

        service \= get\_service\_metadata(service\_id)

        resolved.append(service)

        requirements.update(service.manifest\['requires'\])

    

    \# Find services that provide required capabilities

    while requirements:

        capability \= requirements.pop()

        

        \# Check if already provided

        if any(capability in s.manifest.get('provides', \[\]) 

               for s in resolved):

            continue

        

        \# Find service that provides this capability

        provider \= find\_service\_by\_capability(capability)

        if not provider:

            raise DependencyError(f"No service provides {capability}")

        

        resolved.append(provider)

        requirements.update(provider.manifest.get('requires', \[\]))

    

    return resolved

**Network auto-configuration** based on privacy profiles (Legal Privilege, Business Confidential, Open Research):

NETWORK\_TEMPLATES \= {

    "legal\_privilege": {

        "driver": "bridge",

        "internal": True,  \# No external access

        "labels": {

            "encryption": "required",

            "audit\_logging": "enabled"

        }

    },

    "business\_confidential": {

        "driver": "bridge", 

        "internal": False,

        "labels": {"isolation": "moderate"}

    },

    "open\_research": {

        "driver": "bridge",

        "labels": {"telemetry": "enabled"}

    }

}

**Environment variable injection** for service discovery:

services:

  n8n:

    environment:

      \- DB\_POSTGRESDB\_HOST={{ postgres.service\_name }}

      \- DB\_POSTGRESDB\_PORT=5432

      \- DB\_POSTGRESDB\_DATABASE={{ postgres.database }}

      \- REDIS\_HOST={{ redis.service\_name }}

      \- REDIS\_PORT=6379

    depends\_on:

      postgres:

        condition: service\_healthy

      redis:

        condition: service\_started

### 5\. Frontend: Bundle builder UI

**Keep Next.js 15 with planned stack:**

- React Hook Form \+ Zod for validation (already planned)  
- Zustand for menu builder state (already planned)  
- SWR for API data fetching (already planned)  
- Drag-and-drop: @dnd-kit/core (lighter than react-beautiful-dnd)

**Key components to build:**

/app/builder/

├── ServiceCatalog.tsx       \# Browse services by category

├── BundleCanvas.tsx         \# Drag-drop composition area  

├── DependencyGraph.tsx      \# Visual dependency tree

├── HardwareCalculator.tsx   \# Real-time resource calc

├── PrivacyProfileSelector.tsx

└── ComposePreview.tsx       \# Show generated YAML

**Real-time validation** as users add services:

// Check hardware constraints

const validateHardwareCapacity \= (

  services: Service\[\], 

  userHardware: HardwareProfile

): ValidationResult \=\> {

  const totalRam \= services.reduce((sum, s) \=\> 

    sum \+ s.hardware\_requirements.min\_ram\_gb, 0);

  

  if (totalRam \> userHardware.available\_ram\_gb) {

    return {

      valid: false,

      error: \`Requires ${totalRam}GB RAM, you have ${userHardware.available\_ram\_gb}GB\`

    };

  }

  

  return { valid: true };

};

### 6\. Database schema enhancements

Your PRD schema is solid. Minor additions for template generation:

\-- Cache generated compose files

CREATE TABLE generated\_bundles (

    id UUID PRIMARY KEY,

    order\_id UUID REFERENCES orders(id),

    compose\_content TEXT NOT NULL,

    env\_content TEXT,

    generated\_at TIMESTAMPTZ DEFAULT NOW(),

    version INTEGER DEFAULT 1

);

\-- Track deployment status (future)

CREATE TABLE deployments (

    id UUID PRIMARY KEY,

    order\_id UUID REFERENCES orders(id),

    status TEXT CHECK (status IN ('pending', 'running', 'stopped', 'error')),

    deployed\_at TIMESTAMPTZ,

    health\_status JSONB

);

### 7\. Authentication & David Points system

**Keep existing approach:**

- Supabase Auth for JWT tokens (already implemented)  
- Row-level security for bundle access (already planned)  
- David Points multiplier system (already specified in PRD)

**Add for template generation:**

\# Apply David Points benefits to resource allocation

def apply\_david\_benefits(user: User) \-\> ResourceBonus:

    multiplier \= MULTIPLIERS\[user.user\_type\]

    

    if multiplier \>= 2.0:  \# Library, nonprofit, individual

        return ResourceBonus(

            priority\_queue=True,

            extended\_storage\_gb=50 \* multiplier,

            faster\_downloads=True

        )

    return ResourceBonus()

## What NOT to build (avoid over-engineering)

Based on small-team research and 500-user scale constraints:

### ❌ Kubernetes (Massive overkill)

**Why avoid:** Kubernetes adds enormous complexity for a 2-person team. Docker Compose handles 500+ users excellently. Platforms like Runtipi and CasaOS prove Docker Compose scales to thousands of deployments.

**When to reconsider:** 10,000+ concurrent users, multiple geographic regions, need for auto-scaling. Years away.

### ❌ Microservices architecture

**Your monolithic FastAPI app is correct.** Microservices require 5+ engineers per service, distributed tracing, service mesh complexity. All successful platforms you're competing with started as monoliths.

**When to reconsider:** Team grows to 20+ engineers, clear service boundaries emerge after 2+ years.

### ❌ Custom container runtime

**Use Docker Compose CLI.** Don't build custom orchestration. Python-on-Whales gives you programmatic control without reinventing containers.

### ❌ Complex message queues (Kafka, RabbitMQ)

**Redis \+ BullMQ (your current choice) is perfect.** Kafka is overkill for background jobs at this scale.

**When to reconsider:** Processing 10,000+ events/second. Not remotely close.

### ❌ GraphQL API

**REST APIs (your current approach) are simpler.** GraphQL adds complexity without benefits at this scale. Your OpenAPI 3.1 spec \+ FastAPI automatic documentation is excellent.

### ❌ ElasticSearch for search

**PostgreSQL full-text search is sufficient.** At 500 users with hundreds of apps, Postgres GIN indexes handle search beautifully.

\-- Full-text search example

CREATE INDEX idx\_bundles\_search ON bundles 

    USING GIN (to\_tsvector('english', name || ' ' || description));

SELECT \* FROM bundles 

WHERE to\_tsvector('english', name || ' ' || description) 

    @@ to\_tsquery('postgres & docker');

### ❌ Complex frontend state management (Redux, MobX)

**Your choice of Zustand \+ SWR is perfect.** Simple, performant, less boilerplate than Redux.

### ❌ Custom secret management (Vault)

**Docker Compose secrets are sufficient** for platform secrets. User deployments use their own secret management.

## Observability integration

While one subagent timed out, here's the proven approach for monitoring THE PLATFORM (not user stacks):

### Prometheus metrics (FastAPI instrumentation)

\# Install prometheus-fastapi-instrumentator

from prometheus\_fastapi\_instrumentator import Instrumentator

app \= FastAPI()

\# Automatic instrumentation

Instrumentator().instrument(app).expose(app)

\# Custom metrics for template generation

from prometheus\_client import Counter, Histogram

compose\_generation\_counter \= Counter(

    'compose\_generated\_total', 

    'Total compose files generated'

)

compose\_generation\_duration \= Histogram(

    'compose\_generation\_seconds',

    'Time to generate compose files'

)

@app.post("/api/v2/compose/generate")

async def generate\_compose(bundle\_id: str):

    with compose\_generation\_duration.time():

        result \= await generate\_compose\_bundle(bundle\_id)

        compose\_generation\_counter.inc()

        return result

**Metrics exposed at `/metrics` endpoint for Prometheus scraping.**

### Loki logging integration

\# Use python-logging-loki

import logging

from logging\_loki import LokiHandler

loki\_handler \= LokiHandler(

    url="http://loki:3100/loki/api/v1/push",

    tags={"application": "sushi-kitchen", "environment": "production"},

    version="1",

)

logger \= logging.getLogger("sushi-kitchen")

logger.addHandler(loki\_handler)

\# Structured logging

logger.info("Compose generated", extra={

    "user\_id": user.id,

    "bundle\_id": bundle\_id,

    "service\_count": len(services),

    "generation\_time\_ms": duration\_ms

})

### Tempo tracing (OpenTelemetry)

\# FastAPI OpenTelemetry instrumentation

from opentelemetry import trace

from opentelemetry.instrumentation.fastapi import FastAPIInstrumentor

from opentelemetry.exporter.otlp.proto.grpc.trace\_exporter import OTLPSpanExporter

from opentelemetry.sdk.trace import TracerProvider

from opentelemetry.sdk.trace.export import BatchSpanProcessor

\# Configure Tempo exporter

trace.set\_tracer\_provider(TracerProvider())

tracer \= trace.get\_tracer(\_\_name\_\_)

otlp\_exporter \= OTLPSpanExporter(

    endpoint="http://tempo:4317",

    insecure=True

)

trace.get\_tracer\_provider().add\_span\_processor(

    BatchSpanProcessor(otlp\_exporter)

)

\# Auto-instrument FastAPI

FastAPIInstrumentor.instrument\_app(app)

**Traces automatically capture:**

- API request spans  
- Database query spans  
- External service calls (Supabase, Docker API)

### Grafana dashboards

**Key metrics to visualize:**

- API response times (p50, p95, p99) by endpoint  
- Compose generation success rate  
- Background job queue depth (BullMQ)  
- Database connection pool usage  
- Error rates by type  
- Active user sessions  
- David Points transactions

**Pre-built dashboard sources:**

- FastAPI dashboard: grafana.com/grafana/dashboards/16110  
- PostgreSQL dashboard: grafana.com/grafana/dashboards/9628  
- Redis dashboard: grafana.com/grafana/dashboards/11835

### AlertManager rules

groups:

  \- name: sushi\_kitchen\_alerts

    rules:

      \- alert: HighAPILatency

        expr: histogram\_quantile(0.95, rate(http\_request\_duration\_seconds\_bucket\[5m\])) \> 2

        for: 5m

        annotations:

          summary: "API p95 latency above 2 seconds"

      

      \- alert: ComposeGenerationFailures

        expr: rate(compose\_generation\_errors\_total\[5m\]) \> 0.1

        annotations:

          summary: "Compose generation failing at \>10% rate"

      

      \- alert: DatabaseConnectionPoolExhausted

        expr: pg\_stat\_database\_numbackends / pg\_settings\_max\_connections \> 0.8

        annotations:

          summary: "Database connections at 80%+ capacity"

### Resource overhead for observability stack

**Separate monitoring server recommended:**

- **Prometheus**: 2GB RAM, 1 vCPU, 50GB storage  
- **Loki**: 1GB RAM, 1 vCPU, 100GB storage  
- **Tempo**: 1GB RAM, 1 vCPU, 50GB storage  
- **Grafana**: 1GB RAM, 1 vCPU, 10GB storage  
- **AlertManager**: 512MB RAM, 1 vCPU, 5GB storage

**Total monitoring overhead:** 5.5GB RAM, \~3 vCPU, 215GB storage

**Cost at Hetzner:** CPX21 (3 vCPU, 4GB RAM) \+ storage \= \~$12/month

## Recommended hosting architecture

### **Migration from Railway to Hetzner (STRONGLY RECOMMENDED)**

**Cost comparison (monthly):**

| Component | Railway | Hetzner | Savings |
| :---- | :---- | :---- | :---- |
| App server (4 vCPU, 8GB) | $60-80 | $15 | $45-65 |
| Database (PostgreSQL) | $30-50 (Supabase) | Included | $30-50 |
| Redis cache | $15-25 | Included | $15-25 |
| Monitoring stack | N/A | $12 | \-$12 |
| **Total** | **$105-155** | **$27** | **$78-128/month** |

**Annual savings: $936-1,536**

### Recommended Hetzner setup

**Application server (CPX31):**

- 4 vCPU, 8GB RAM, 160GB SSD  
- Runs FastAPI app, PostgreSQL, Redis via Docker Compose  
- €15/month (\~$16)

**Monitoring server (CPX21):**

- 3 vCPU, 4GB RAM, 80GB SSD  
- Runs Prometheus, Loki, Tempo, Grafana, AlertManager  
- €10/month (\~$11)

**Total: $27/month for complete infrastructure**

### Docker Compose deployment setup

\# docker-compose.platform.yml (main app)

version: '3.9'

services:

  fastapi:

    build: .

    ports:

      \- "8000:8000"

    environment:

      \- DATABASE\_URL=${DATABASE\_URL}

      \- REDIS\_URL=${REDIS\_URL}

    depends\_on:

      postgres:

        condition: service\_healthy

      redis:

        condition: service\_started

    networks:

      \- platform-network

  

  postgres:

    image: postgres:16

    volumes:

      \- postgres-data:/var/lib/postgresql/data

    environment:

      \- POSTGRES\_DB=sushi\_kitchen

      \- POSTGRES\_PASSWORD\_FILE=/run/secrets/db\_password

    secrets:

      \- db\_password

    healthcheck:

      test: \["CMD", "pg\_isready", "-U", "postgres"\]

      interval: 10s

      timeout: 5s

      retries: 5

    networks:

      \- platform-network

  

  redis:

    image: redis:7-alpine

    volumes:

      \- redis-data:/data

    networks:

      \- platform-network

  

  nginx:

    image: nginx:alpine

    ports:

      \- "80:80"

      \- "443:443"

    volumes:

      \- ./nginx.conf:/etc/nginx/nginx.conf

      \- letsencrypt:/etc/letsencrypt

    networks:

      \- platform-network

volumes:

  postgres-data:

  redis-data:

  letsencrypt:

secrets:

  db\_password:

    file: ./secrets/db\_password.txt

networks:

  platform-network:

    driver: bridge

**Keep Next.js on Vercel** (makes sense):

- Free tier covers 500 users easily  
- Automatic scaling and CDN  
- Excellent DX with instant deployments  
- Communicates with FastAPI backend on Hetzner

**Architecture:**

\[Users\] → \[Vercel Next.js\] → \[Cloudflare CDN\] → \[Hetzner FastAPI \+ PostgreSQL \+ Redis\]

                                                           ↓

                                                   \[Hetzner Monitoring Stack\]

## Resource requirements breakdown

### Platform components (serving 500 concurrent users)

**FastAPI application:**

- **RAM**: 2-3GB allocated  
- **CPU**: 2 cores (4 vCPU handles \~5,000 users)  
- **Storage**: 20GB (application code, logs)  
- **Network**: Minimal (API responses are small JSON)

**PostgreSQL database:**

- **RAM**: 3-4GB allocated (shared\_buffers \= 1GB, effective\_cache \= 3GB)  
- **CPU**: 1-2 cores  
- **Storage**: 50GB SSD (service metadata, user data, orders)  
- **Connections**: 100 max (connection pooling with PgBouncer)

**Redis cache:**

- **RAM**: 1-2GB (session cache, background job queue)  
- **CPU**: 0.5 core (Redis is single-threaded, rarely bottleneck)  
- **Storage**: 10GB (persistence RDB snapshots)

**Background job processing (BullMQ):**

- **RAM**: 1GB (Node.js worker process)  
- **CPU**: 1 core  
- Handles model downloads, compose generation jobs

**Total platform requirements:**

- **RAM**: 7-10GB (CPX31 with 8GB tight but workable)  
- **CPU**: 4-6 cores (CPX31 with 4 vCPU sufficient)  
- **Storage**: 80GB SSD minimum, 160GB recommended

**Scaling path:**

- **500-2,000 users:** Single CPX31 server ($15/month)  
- **2,000-5,000 users:** CPX41 (8 vCPU, 16GB RAM, $30/month)  
- **5,000-20,000 users:** Separate database server, multiple app servers with load balancer (\~$100/month)

### Per-user deployment resources (NOT your problem)

Users deploy generated compose bundles on their own infrastructure. Your platform only generates the files and stores metadata.

**Estimating user deployment sizes:**

- Small bundle (2-3 services): 2-4GB RAM, 2 cores  
- Medium bundle (5-7 services): 8-16GB RAM, 4 cores  
- Large bundle (10+ services): 32GB+ RAM, 8+ cores

These run on user hardware, not your servers.

## Cost estimates

### Option A: Current path (Railway \+ Vercel)

| Component | Cost/month |
| :---- | :---- |
| Railway (app \+ DB \+ Redis) | $105-155 |
| Vercel (Next.js, free tier) | $0 |
| Supabase (database alternative) | $25-50 |
| Domain \+ SSL | $2 |
| **Total** | **$107-157/month** |

**Annual: $1,284-1,884**

### Option B: Recommended path (Hetzner \+ Vercel)

| Component | Cost/month |
| :---- | :---- |
| Hetzner CPX31 (app server) | $16 |
| Hetzner CPX21 (monitoring) | $11 |
| Vercel (Next.js, free tier) | $0 |
| Backblaze B2 (backups, 50GB) | $1 |
| Domain \+ SSL | $2 |
| **Total** | **$30/month** |

**Annual: $360**

**Savings: $924-1,524/year**

### Option C: All Hetzner (if moving frontend)

| Component | Cost/month |
| :---- | :---- |
| Hetzner CPX31 (app \+ frontend) | $16 |
| Hetzner CPX21 (monitoring) | $11 |
| Cloudflare CDN (free tier) | $0 |
| Backblaze B2 (backups) | $1 |
| Domain \+ SSL | $2 |
| **Total** | **$30/month** |

**Same cost as Option B, but more management overhead**

## Implementation roadmap

### Phase 1: API Hardening (Weeks 1-6) \- Already Planned

**From your PRD Phase 2, execute as designed:**

✅ Implement 13 core API endpoints  
✅ Bundle management (CRUD operations)  
✅ User orders (saved bundles)  
✅ Component metadata exposure (90%+ visibility)  
✅ OpenAPI 3.1 spec with validation  
✅ Row-level security enforcement

**ADD to Phase 1:**

- Set up Python-on-Whales for programmatic Docker control  
- Create basic Jinja2 template structure for compose generation  
- Implement schema validation for generated compose files

**Deliverable:** Hardened API with compose generation capability

**Team allocation:** Both developers, 6 weeks

### Phase 2: Smart Builder Foundation (Weeks 7-10) \- CRITICAL PATH

**Focus: Template engine \+ dependency resolution**

Week 7-8: Template System

- Design Jinja2 template structure for docker-compose generation  
- Implement variable injection for service discovery (${redis.service\_name} pattern)  
- Create privacy profile network configurations  
- Build compose validation pipeline

Week 9-10: Dependency Resolution

- Implement capability-based dependency matching algorithm  
- Build dependency tree API endpoint (GET /api/v2/bundles/{id}/dependencies)  
- Create conflict detection (port conflicts, incompatible services)  
- Implement hardware requirements calculator

**Deliverable:** Working compose generation with auto-resolved dependencies

**Team allocation:** 1 developer (backend), 4 weeks

### Phase 3: Frontend Builder UI (Weeks 7-12) \- PARALLEL TRACK

**Focus: Interactive menu builder**

Week 7-9: Service Catalog

- Build category browsing interface (Hosomaki, Futomaki, etc.)  
- Service cards with metadata display  
- Search and filtering

Week 10-12: Bundle Composition

- Drag-and-drop service selection (@dnd-kit)  
- Real-time dependency visualization  
- Hardware requirement calculator display  
- Privacy profile selector  
- Compose preview panel

**Deliverable:** Functional bundle builder with real-time validation

**Team allocation:** 1 developer (frontend), 6 weeks

### Phase 4: Testing & Refinement (Weeks 13-14)

**Integration testing:**

- End-to-end bundle creation → compose generation → validation  
- Edge cases (circular dependencies, missing capabilities)  
- Performance testing (generate 100 bundles rapidly)

**User acceptance testing:**

- Internal testing with predefined bundles  
- Validate generated compose files actually deploy correctly  
- Security review (ensure no injection vulnerabilities in templates)

**Deliverable:** Production-ready MVP

**Team allocation:** Both developers, 2 weeks

### Phase 5: Migration & Launch (Weeks 15-16)

**Infrastructure migration (if adopting Hetzner):**

- Set up Hetzner servers with Docker Compose  
- Migrate PostgreSQL database (pg\_dump/restore)  
- Configure Cloudflare DNS  
- Set up monitoring stack  
- Migrate user data and test thoroughly

**Launch checklist:**

- Backup systems operational  
- Monitoring dashboards configured  
- AlertManager rules active  
- Documentation complete  
- Rollback plan prepared

**Deliverable:** Platform live on production infrastructure

**Team allocation:** Both developers, 2 weeks

**Total timeline: 16 weeks (4 months) to production-ready platform**

## Development priorities: build order

### Tier 1: Must Have for MVP (Weeks 1-10)

1. **Docker-compose template engine** (Jinja2 \+ Python-on-Whales)  
2. **Service metadata API** (expose ComponentDetail objects)  
3. **Basic compose generation endpoint** (single bundle → compose YAML)  
4. **Dependency resolution algorithm** (capability matching)  
5. **Frontend service catalog** (browse and select services)

**Why first:** These enable the core user journey: browse services → select bundle → generate compose file → deploy.

### Tier 2: Essential for Launch (Weeks 11-14)

6. **Privacy profile application** (network configs per profile)  
7. **Hardware validation** (real-time resource calculation)  
8. **Compose file validation** (docker compose config integration)  
9. **Bundle saving** (orders system from PRD)  
10. **David Points integration** (resource bonuses per user type)

**Why second:** Polish the experience and add differentiating features (privacy-first, David Points economics).

### Tier 3: Post-Launch Enhancements (Month 5+)

11. **Model download system** (BullMQ background jobs)  
12. **Workflow marketplace** (community contributions)  
13. **Asset management** (attach workflows/datasets to orders)  
14. **Advanced search** (faceted filtering, recommendations)  
15. **Federation** (connect multiple Sushi Kitchen instances)

**Why later:** These expand the platform but aren't required for core value delivery. Validate product-market fit first.

## Success metrics to track

**Technical Performance:**

- Compose generation time: Target p95 \<2s (from your PRD)  
- API response time: Target p95 \<500ms for catalog endpoints  
- Background job completion rate: \>95% success  
- Database query performance: p95 \<100ms

**Business Metrics:**

- Bundles generated per week  
- User activation rate (signup → first generated bundle)  
- Bundle deployment success rate  
- David Points distributed and spent  
- Community workflow contributions

**Infrastructure Health:**

- Server CPU utilization (target \<70% average)  
- Database connection pool usage (target \<60%)  
- Disk space remaining (alert at \<20%)  
- Uptime (target 99.5%+)

## Risk mitigation strategies

### Risk 1: Docker Compose generation complexity

**Mitigation:** Start with simple templates for well-understood services (Postgres, Redis, n8n). Test extensively. Use validation pipeline to catch errors before user deployment.

**Fallback:** Provide pre-generated compose files for common bundles. Users can customize manually if generation fails.

### Risk 2: Dependency resolution infinite loops

**Mitigation:** Implement maximum dependency depth (e.g., 5 levels). Track visited services to detect circular dependencies. Add timeout on resolution algorithm (5 seconds max).

**Fallback:** If auto-resolution fails, show user manual service selection UI with recommendations.

### Risk 3: User-generated compose files fail to deploy

**Mitigation:** Comprehensive testing of generated files. Provide deployment validation script users run before deploying. Clear error messages pointing to specific issues.

**Fallback:** Support channel for deployment issues. Iteratively improve templates based on failure patterns.

### Risk 4: Resource underestimation

**Mitigation:** Monitor actual resource usage closely in production. Scale vertically at first signs of constraint. Have Hetzner CPX41 upgrade plan ready ($30/month, 8 vCPU, 16GB).

**Fallback:** Add horizontal scaling with load balancer if vertical scaling insufficient. Docker Compose makes this straightforward.

### Risk 5: Database performance bottlenecks

**Mitigation:** Proper indexing (GIN for JSONB, B-tree for UUIDs). Connection pooling with PgBouncer. Query optimization (no SELECT \*, pagination).

**Fallback:** Add read replica for search queries. Separate database server. Upgrade PostgreSQL resources independently.

## Recommended tech stack: final configuration

### Backend Stack

**Core Framework:**

- Python 3.11+ with FastAPI (KEEP)  
- Pydantic v2 for data validation (KEEP)  
- Async/await for I/O operations (KEEP)

**Template Engine:**

- Jinja2 3.1+ (ADD)  
- Python-on-Whales for Docker Compose control (ADD)

**Database & Caching:**

- PostgreSQL 16 with pgvector (KEEP)  
- Redis 7.2 for caching \+ BullMQ (KEEP)  
- Prisma ORM or SQLAlchemy 2.0 (KEEP if Prisma, MIGRATE if using Prisma Python)

**Background Jobs:**

- BullMQ for job queue (KEEP)  
- Celery as alternative if needed (DON'T ADD)

**Authentication:**

- Supabase Auth for JWT (KEEP)  
- Row-level security (KEEP)

### Frontend Stack

**Core Framework:**

- Next.js 15 with App Router (KEEP)  
- TypeScript 5.x (KEEP)  
- React 19 (KEEP)

**State Management:**

- Zustand 4.4 for UI state (KEEP)  
- SWR for data fetching (KEEP)  
- React Context for auth (KEEP)

**UI Components:**

- Tailwind CSS v4 (KEEP)  
- shadcn/ui components (KEEP)  
- @dnd-kit/core for drag-drop (ADD)

**Forms & Validation:**

- React Hook Form 7.47 (KEEP)  
- Zod 3.22 for schemas (KEEP)

### Infrastructure Stack

**Hosting:**

- Hetzner Cloud CPX31 for backend (MIGRATE FROM RAILWAY)  
- Vercel for Next.js frontend (KEEP)  
- Cloudflare for CDN/DNS (KEEP)

**Containerization:**

- Docker 24+ (KEEP)  
- Docker Compose v3.9 (KEEP)  
- Docker Compose v2 CLI (KEEP)

**Observability:**

- Prometheus for metrics (ADD)  
- Loki for logging (ADD)  
- Tempo for tracing (ADD)  
- Grafana for visualization (KEEP)  
- AlertManager for alerts (ADD)  
- Portainer for container UI (KEEP)

**CI/CD:**

- GitHub Actions for pipelines (KEEP/ADD)  
- Automated testing (ADD)  
- Automated deployment to Hetzner (ADD)

### Database Schema

**Core Tables (from PRD):**

- users, bundles, orders, order\_assets, model\_downloads (KEEP ALL)

**Additional Tables (for template system):**

- service\_catalog (ComponentDetail storage) (ADD)  
- generated\_bundles (cache generated compose files) (ADD)  
- deployments (track user deployment status) (FUTURE)

### Development Tools

**Code Quality:**

- Black for Python formatting (ADD)  
- Ruff for linting (ADD)  
- ESLint \+ Prettier for TypeScript (ADD)  
- Pre-commit hooks (ADD)

**Testing:**

- pytest for backend tests (ADD)  
- Jest \+ React Testing Library for frontend (ADD)  
- Playwright for E2E tests (ADD)

**API Development:**

- OpenAPI 3.1 spec generation (KEEP)  
- FastAPI automatic docs (KEEP)  
- Postman/Insomnia for testing (OPTIONAL)

## Critical success factors

**1\. Simplicity over sophistication**

Your 2-person team cannot afford complexity. Every technology choice should answer: "Is this the simplest solution that could work?" The recommended stack (FastAPI \+ Jinja2 \+ PostgreSQL \+ Docker Compose) is battle-tested and boring—exactly what you need.

**2\. Template quality over template quantity**

Start with 20-30 well-tested service templates. Perfect compose generation for Postgres, Redis, n8n, Ollama before adding 100 services. Quality of generated files builds user trust.

**3\. Dogfooding your own product**

Your platform runs on Docker Compose. Generate your own deployment using Sushi Kitchen. This ensures your templates work and validates the user experience.

**4\. Privacy-first architecture as differentiator**

The privacy profile system (Legal Privilege, Business Confidential, Open Research) is your unique value proposition. Make network isolation and audit logging automatic and bulletproof.

**5\. David Points economics as moat**

The multiplier system favoring libraries/nonprofits is brilliant social impact design. Implement it faithfully and promote it heavily. This attracts your core audience.

**6\. Progressive enhancement over big-bang launch**

Ship the MVP (browse → select → generate → download) first. Add smart builder, model downloads, marketplace incrementally. Each release should add one major feature, not ten.

**7\. Monitoring from day one**

Don't wait to add observability. Install Prometheus, Loki, and Grafana during initial deployment. You'll catch issues before users report them.

## Conclusion: your path forward

Your Sushi Kitchen architecture is fundamentally sound. The core recommendation is **strategic enhancement, not replacement:**

**Keep:** FastAPI, Next.js 15, PostgreSQL, Redis, Docker Compose foundation  
**Add:** Jinja2 templating, Python-on-Whales, comprehensive observability  
**Migrate:** Railway → Hetzner (6-10x cost savings)  
**Avoid:** Kubernetes, microservices, GraphQL, complex patterns

**The complete recommended stack:**

- **Backend:** FastAPI \+ Jinja2 \+ Python-on-Whales \+ PostgreSQL \+ Redis  
- **Frontend:** Next.js 15 \+ Zustand \+ SWR \+ shadcn/ui  
- **Infrastructure:** Hetzner CPX31 \+ Vercel \+ Cloudflare  
- **Observability:** Prometheus \+ Loki \+ Tempo \+ Grafana  
- **Architecture:** Monolithic application with template-based compose generation

**Resource requirements:**

- CPX31 server (4 vCPU, 8GB RAM, 160GB SSD): $16/month  
- CPX21 monitoring (3 vCPU, 4GB RAM): $11/month  
- Vercel frontend: $0/month (free tier)  
- **Total: $27/month** for complete infrastructure

**Timeline to production:**

- 16 weeks (4 months) for fully functional platform  
- First 10 weeks deliver core MVP (browse \+ generate)  
- 500 concurrent users easily handled from day one  
- Years of scaling runway before architectural changes needed

**Your competitive advantage:** You're building the platform you wished existed—democratizing AI infrastructure with privacy-first architecture and economics that favor small actors over enterprises. Stay true to that vision, ship iteratively, and avoid over-engineering. The boring technology choices recommended here free you to focus on what matters: making AI accessible to libraries, nonprofits, and individuals.

Now go build Sushi Kitchen. The recipe is ready.  
