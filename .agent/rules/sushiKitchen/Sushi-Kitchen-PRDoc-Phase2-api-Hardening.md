# **Sushi Kitchen Product Requirements Document**

## **Phase 2: API Hardening | Phase 3: Frontend Implementation**

**Document Version:** 1.0  
 **Last Updated:** 2025-10-09  
 **Status:** Ready for Implementation  
 **Target Audience:** AI Agents, Backend Engineers, Frontend Engineers

---

## **Table of Contents**

1. [Executive Summary](https://claude.ai/chat/825f7324-52b9-465e-806f-f2a49e9a63a1#executive-summary)  
2. [Technical Context](https://claude.ai/chat/825f7324-52b9-465e-806f-f2a49e9a63a1#technical-context)  
3. [Phase 2: API Hardening](https://claude.ai/chat/825f7324-52b9-465e-806f-f2a49e9a63a1#phase-2-api-hardening)  
   * [Build Order & Dependencies](https://claude.ai/chat/825f7324-52b9-465e-806f-f2a49e9a63a1#build-order--dependencies)  
   * [OpenAPI 3.1 Specification](https://claude.ai/chat/825f7324-52b9-465e-806f-f2a49e9a63a1#openapi-31-specification)  
   * [Authentication & Authorization](https://claude.ai/chat/825f7324-52b9-465e-806f-f2a49e9a63a1#authentication--authorization)  
   * [Database Schema](https://claude.ai/chat/825f7324-52b9-465e-806f-f2a49e9a63a1#database-schema)  
   * [Error Handling](https://claude.ai/chat/825f7324-52b9-465e-806f-f2a49e9a63a1#error-handling)  
4. [Phase 3: Frontend Implementation](https://claude.ai/chat/825f7324-52b9-465e-806f-f2a49e9a63a1#phase-3-frontend-implementation)  
   * [Routing Structure](https://claude.ai/chat/825f7324-52b9-465e-806f-f2a49e9a63a1#routing-structure)  
   * [Component Architecture](https://claude.ai/chat/825f7324-52b9-465e-806f-f2a49e9a63a1#component-architecture)  
   * [Component-to-Endpoint Mapping](https://claude.ai/chat/825f7324-52b9-465e-806f-f2a49e9a63a1#component-to-endpoint-mapping)  
   * [UI Component Specifications](https://claude.ai/chat/825f7324-52b9-465e-806f-f2a49e9a63a1#ui-component-specifications)  
5. [Testing Strategy](https://claude.ai/chat/825f7324-52b9-465e-806f-f2a49e9a63a1#testing-strategy)  
6. [Success Criteria](https://claude.ai/chat/825f7324-52b9-465e-806f-f2a49e9a63a1#success-criteria)

---

## **Executive Summary**

### **Goals**

Transform Sushi Kitchen from 75% technical completion to production-ready state by:

1. **Phase 2 (4-6 weeks)**: Implement 13 critical API endpoints with complete data exposure (volumes, scaling, networks)  
2. **Phase 3 (4-5 weeks)**: Build frontend to consume 90%+ of available API data with polished UX

### **Success Metrics**

* **API Completeness**: 100% of required endpoints implemented with OpenAPI validation  
* **Data Exposure**: 90%+ of manifest metadata accessible via API  
* **Frontend Coverage**: All P0 pages functional (menu, bundles, detail pages, dashboard, admin)  
* **Performance**: API p95 \< 500ms (catalog), \< 2s (compose generation)  
* **Test Coverage**: 70%+ backend, 40%+ frontend critical paths

### **Key Technical Decisions**

1. **API Versioning**: URL-based (`/api/v2/...`) to support legacy clients  
2. **Authentication**: Supabase Auth with JWT \+ Row Level Security (RLS)  
3. **Testing**: OpenAPI contract validation \+ Playwright E2E  
4. **State Management**: React Context \+ SWR for data fetching

---

## **Technical Context**

### **Current Stack**

**Backend:**

* FastAPI (Python 3.11+)  
* Supabase (Postgres \+ Auth \+ Storage)  
* Redis (caching, rate limiting \- planned)  
* Docker Compose (deployment)

**Frontend:**

* Next.js 15 (App Router)  
* TypeScript 5.x  
* Aceternity UI (design system)  
* Tailwind CSS v4  
* Supabase JS client

### **Existing API Foundation**

✅ GET  /api/v1/rolls  
✅ GET  /api/v1/categories  
✅ GET  /api/v1/combos  
✅ GET  /api/v1/platters  
✅ GET  /api/v1/bento-boxes  
✅ GET  /api/v1/services/{service\_id}  
✅ POST /api/v1/compose/generate

---

## **Phase 2: API Hardening**

### **Build Order & Dependencies**

#### **Week 1: Foundation (No dependencies)**

1\. API Versioning Infrastructure  
   \- Create /api/v2/ namespace  
   \- Implement v1 deprecation headers  
   \- Setup OpenAPI spec generation

2\. Auth Enhancement  
   \- JWT validation middleware  
   \- RLS policy enforcement  
   \- Role-based access control

3\. Error Handling Framework  
   \- Standard error response format  
   \- Error code taxonomy  
   \- Logging integration

#### **Week 2: Bundle Management (Admin CMS)**

**Depends on:** Foundation (Week 1\)

Priority Order:  
1\. POST   /api/v2/bundles                    \# Create bundle  
2\. GET    /api/v2/bundles/{id}               \# Read bundle  
3\. PUT    /api/v2/bundles/{id}               \# Update bundle  
4\. DELETE /api/v2/bundles/{id}               \# Delete bundle  
5\. GET    /api/v2/bundles/{id}/components    \# Get components with full details

Rationale: Admin needs CRUD operations before users can interact with bundles

#### **Week 3: User Orders (Dashboard)**

**Depends on:** Bundle Management (Week 2\)

Priority Order:  
1\. POST   /api/v2/orders                     \# Save bundle to account  
2\. GET    /api/v2/orders                     \# List saved bundles  
3\. GET    /api/v2/orders/{id}                \# Get order details \+ assets  
4\. PUT    /api/v2/orders/{id}                \# Update order (name, status)  
5\. DELETE /api/v2/orders/{id}                \# Remove saved bundle

Rationale: Users can't save orders until bundles exist

#### **Week 4: User Assets (Dashboard Enhancement)**

**Depends on:** User Orders (Week 3\)

Priority Order:  
1\. POST   /api/v2/orders/{id}/notes          \# Add/update notes  
2\. POST   /api/v2/orders/{id}/workflows      \# Attach workflow  
3\. POST   /api/v2/orders/{id}/datasets       \# Attach dataset

Rationale: Asset attachment requires existing orders

#### **Week 5: Model Downloads (Roll Detail Pages)**

**Depends on:** Foundation (Week 1\) \- Can parallelize with Weeks 2-4

Priority Order:  
1\. GET    /api/v2/models                     \# List available models  
2\. POST   /api/v2/models/download            \# Initiate download  
3\. GET    /api/v2/models/status/{job\_id}    \# Check progress

Rationale: Independent of orders/bundles, can build in parallel

#### **Week 6: Enhanced Search & Relationships**

**Depends on:** Bundle Management (Week 2\)

Priority Order:  
1\. GET    /api/v2/services/search            \# Faceted search  
2\. GET    /api/v2/services/{id}/bundles      \# Which bundles include this?  
3\. GET    /api/v2/bundles/{id}/dependencies  \# Full dependency tree  
4\. POST   /api/v2/recommendations            \# Personalized suggestions

Rationale: Search enhancement leverages existing bundle data

### **Dependency Graph**

Week 1: Foundation (Auth, Versioning, Errors)  
   ├─→ Week 2: Bundle Management (CRUD)  
   │      └─→ Week 3: User Orders  
   │             └─→ Week 4: User Assets  
   ├─→ Week 5: Model Downloads (parallel with 2-4)  
   └─→ Week 6: Enhanced Search (requires Week 2 data)

---

## **OpenAPI 3.1 Specification**

### **Complete API Spec**

openapi: 3.1.0  
info:  
  title: Sushi Kitchen API  
  version: 2.0.0  
  description: |  
    Sushi Kitchen API for curated AI infrastructure deployment.  
    This is v2 of the API with enhanced bundle management, user orders, and model downloads.  
  contact:  
    name: Sushi Kitchen Support  
    email: support@sushikitchen.io  
  license:  
    name: MIT  
    url: https://opensource.org/licenses/MIT

servers:  
  \- url: https://api.sushikitchen.io/api/v2  
    description: Production server  
  \- url: http://localhost:8000/api/v2  
    description: Local development server

security:  
  \- BearerAuth: \[\]

components:  
  securitySchemes:  
    BearerAuth:  
      type: http  
      scheme: bearer  
      bearerFormat: JWT  
      description: Supabase JWT token

  schemas:  
    \# \============================================  
    \# BUNDLE SCHEMAS  
    \# \============================================  
      
    BundleType:  
      type: string  
      enum: \[combo, bento\_box, platter\]  
      description: Type of bundle  
      
    BundleVisibility:  
      type: string  
      enum: \[public, private, unlisted\]  
      description: Who can see this bundle  
      
    ComponentReference:  
      type: object  
      required:  
        \- service\_id  
        \- quantity  
      properties:  
        service\_id:  
          type: string  
          description: Service identifier (e.g., "hosomaki.n8n")  
          example: "hosomaki.n8n"  
        quantity:  
          type: integer  
          minimum: 1  
          maximum: 10  
          description: Number of instances to deploy  
          example: 1  
        optional:  
          type: boolean  
          default: false  
          description: Whether this component is optional  
        configuration\_overrides:  
          type: object  
          additionalProperties: true  
          description: Environment variable overrides for this component  
          example:  
            N8N\_PORT: "5679"  
      
    BundleCreate:  
      type: object  
      required:  
        \- name  
        \- bundle\_type  
        \- components  
      properties:  
        name:  
          type: string  
          minLength: 3  
          maxLength: 100  
          pattern: '^\[a-zA-Z0-9\\s\\-\_\]+$'  
          description: Bundle name  
          example: "LLM Starter Pack"  
        slug:  
          type: string  
          pattern: '^\[a-z0-9\\-\]+$'  
          description: URL-friendly slug (auto-generated if not provided)  
          example: "llm-starter-pack"  
        bundle\_type:  
          $ref: '\#/components/schemas/BundleType'  
        description:  
          type: string  
          maxLength: 1000  
          description: Markdown-formatted description  
          example: "A complete LLM deployment stack with vector database and workflow automation"  
        tagline:  
          type: string  
          maxLength: 200  
          description: Short tagline for cards  
          example: "Everything you need for production LLM apps"  
        components:  
          type: array  
          minItems: 1  
          maxItems: 20  
          items:  
            $ref: '\#/components/schemas/ComponentReference'  
        visibility:  
          $ref: '\#/components/schemas/BundleVisibility'  
          default: public  
        tags:  
          type: array  
          items:  
            type: string  
          maxItems: 10  
          example: \["llm", "vector-db", "workflows"\]  
        estimated\_setup\_time\_minutes:  
          type: integer  
          minimum: 5  
          maximum: 1440  
          description: Estimated setup time in minutes  
          example: 30  
        hardware\_requirements:  
          type: object  
          properties:  
            min\_ram\_gb:  
              type: integer  
              minimum: 1  
            min\_cpu\_cores:  
              type: integer  
              minimum: 1  
            min\_storage\_gb:  
              type: integer  
              minimum: 10  
            gpu\_required:  
              type: boolean  
              default: false  
      
    BundleUpdate:  
      type: object  
      properties:  
        name:  
          type: string  
          minLength: 3  
          maxLength: 100  
        description:  
          type: string  
          maxLength: 1000  
        tagline:  
          type: string  
          maxLength: 200  
        components:  
          type: array  
          items:  
            $ref: '\#/components/schemas/ComponentReference'  
        visibility:  
          $ref: '\#/components/schemas/BundleVisibility'  
        tags:  
          type: array  
          items:  
            type: string  
        estimated\_setup\_time\_minutes:  
          type: integer  
        hardware\_requirements:  
          type: object  
      description: All fields optional for updates  
      
    Bundle:  
      type: object  
      required:  
        \- id  
        \- name  
        \- slug  
        \- bundle\_type  
        \- components  
        \- created\_at  
        \- updated\_at  
      properties:  
        id:  
          type: string  
          format: uuid  
          description: Bundle UUID  
          example: "550e8400-e29b-41d4-a716-446655440000"  
        name:  
          type: string  
          example: "LLM Starter Pack"  
        slug:  
          type: string  
          example: "llm-starter-pack"  
        bundle\_type:  
          $ref: '\#/components/schemas/BundleType'  
        description:  
          type: string  
        tagline:  
          type: string  
        components:  
          type: array  
          items:  
            $ref: '\#/components/schemas/ComponentReference'  
        visibility:  
          $ref: '\#/components/schemas/BundleVisibility'  
        tags:  
          type: array  
          items:  
            type: string  
        estimated\_setup\_time\_minutes:  
          type: integer  
        hardware\_requirements:  
          type: object  
        created\_by:  
          type: string  
          format: uuid  
          description: User ID of creator  
        created\_at:  
          type: string  
          format: date-time  
          example: "2025-10-09T10:30:00Z"  
        updated\_at:  
          type: string  
          format: date-time  
        stats:  
          type: object  
          description: Usage statistics  
          properties:  
            total\_deployments:  
              type: integer  
              example: 142  
            total\_saves:  
              type: integer  
              example: 89  
            avg\_rating:  
              type: number  
              format: float  
              example: 4.7  
      
    ComponentDetail:  
      type: object  
      description: Full service details with manifest metadata  
      required:  
        \- service\_id  
        \- name  
        \- category  
      properties:  
        service\_id:  
          type: string  
          example: "hosomaki.n8n"  
        name:  
          type: string  
          example: "n8n"  
        category:  
          type: string  
          example: "hosomaki"  
        description:  
          type: string  
        image:  
          type: string  
          description: Docker image  
          example: "n8nio/n8n:latest"  
        ports:  
          type: array  
          items:  
            type: object  
            properties:  
              container\_port:  
                type: integer  
              host\_port:  
                type: integer  
              protocol:  
                type: string  
                enum: \[tcp, udp\]  
              description:  
                type: string  
        environment:  
          type: object  
          additionalProperties:  
            type: string  
          description: Environment variables  
        volumes:  
          type: array  
          items:  
            type: object  
            properties:  
              name:  
                type: string  
              mount\_path:  
                type: string  
              volume\_type:  
                type: string  
                enum: \[bind, volume, tmpfs\]  
              backup\_priority:  
                type: string  
                enum: \[critical, important, optional\]  
        health\_check:  
          type: object  
          properties:  
            endpoint:  
              type: string  
              example: "/healthz"  
            interval\_seconds:  
              type: integer  
              example: 30  
            timeout\_seconds:  
              type: integer  
              example: 10  
            retries:  
              type: integer  
              example: 3  
        scaling:  
          type: object  
          properties:  
            min\_replicas:  
              type: integer  
              example: 1  
            max\_replicas:  
              type: integer  
              example: 3  
            scale\_metric:  
              type: string  
              enum: \[cpu, memory, requests\]  
        network\_profile:  
          type: string  
          enum: \[chirashi, temaki, inari\]  
          description: Security profile (simple/segmented/isolated)  
        requires:  
          type: array  
          items:  
            type: string  
          description: Required capabilities  
          example: \["database.postgres", "cache.redis"\]  
        provides:  
          type: array  
          items:  
            type: string  
          description: Provided capabilities  
          example: \["workflow.automation"\]  
        gpu\_requirements:  
          type: object  
          properties:  
            required:  
              type: boolean  
            driver:  
              type: string  
              enum: \[nvidia, amd\]  
            min\_memory\_gb:  
              type: integer  
            count:  
              type: integer

    \# \============================================  
    \# ORDER SCHEMAS  
    \# \============================================  
      
    OrderStatus:  
      type: string  
      enum: \[draft, active, archived\]  
      description: Order lifecycle status  
      
    OrderCreate:  
      type: object  
      required:  
        \- bundle\_id  
      properties:  
        bundle\_id:  
          type: string  
          format: uuid  
          description: Reference to saved bundle  
        custom\_name:  
          type: string  
          maxLength: 200  
          description: User's custom name for this deployment  
          example: "My Production AI Stack"  
        notes:  
          type: string  
          maxLength: 5000  
          description: User notes (markdown)  
      
    OrderUpdate:  
      type: object  
      properties:  
        custom\_name:  
          type: string  
          maxLength: 200  
        status:  
          $ref: '\#/components/schemas/OrderStatus'  
        notes:  
          type: string  
          maxLength: 5000  
      
    Order:  
      type: object  
      required:  
        \- id  
        \- user\_id  
        \- bundle\_id  
        \- status  
        \- created\_at  
      properties:  
        id:  
          type: string  
          format: uuid  
        user\_id:  
          type: string  
          format: uuid  
        bundle\_id:  
          type: string  
          format: uuid  
        bundle:  
          $ref: '\#/components/schemas/Bundle'  
          description: Embedded bundle details  
        custom\_name:  
          type: string  
        status:  
          $ref: '\#/components/schemas/OrderStatus'  
        notes:  
          type: string  
        assets:  
          type: object  
          properties:  
            workflows:  
              type: array  
              items:  
                type: object  
                properties:  
                  name:  
                    type: string  
                  url:  
                    type: string  
                    format: uri  
                  created\_at:  
                    type: string  
                    format: date-time  
            datasets:  
              type: array  
              items:  
                type: object  
                properties:  
                  name:  
                    type: string  
                  url:  
                    type: string  
                    format: uri  
                  size\_bytes:  
                    type: integer  
                  created\_at:  
                    type: string  
                    format: date-time  
        created\_at:  
          type: string  
          format: date-time  
        updated\_at:  
          type: string  
          format: date-time  
        deployed\_at:  
          type: string  
          format: date-time  
          nullable: true  
      
    AssetCreate:  
      type: object  
      required:  
        \- name  
        \- url  
      properties:  
        name:  
          type: string  
          maxLength: 200  
        url:  
          type: string  
          format: uri  
        metadata:  
          type: object  
          additionalProperties: true

    \# \============================================  
    \# MODEL SCHEMAS  
    \# \============================================  
      
    ModelSource:  
      type: string  
      enum: \[huggingface, ollama, custom\]  
      description: Model repository source  
      
    ModelStatus:  
      type: string  
      enum: \[available, downloading, ready, failed\]  
      description: Download/availability status  
      
    Model:  
      type: object  
      required:  
        \- id  
        \- name  
        \- source  
        \- size\_bytes  
      properties:  
        id:  
          type: string  
          description: Model identifier  
          example: "llama-3.1-8b-instruct"  
        name:  
          type: string  
          example: "Llama 3.1 8B Instruct"  
        source:  
          $ref: '\#/components/schemas/ModelSource'  
        description:  
          type: string  
        size\_bytes:  
          type: integer  
          format: int64  
          example: 8589934592  
        format:  
          type: string  
          enum: \[gguf, safetensors, pytorch\]  
        quantization:  
          type: string  
          example: "Q4\_K\_M"  
        tags:  
          type: array  
          items:  
            type: string  
          example: \["llm", "instruction-following", "8b-params"\]  
        license:  
          type: string  
          example: "Llama 3.1 Community License"  
        download\_url:  
          type: string  
          format: uri  
        status:  
          $ref: '\#/components/schemas/ModelStatus'  
        downloaded\_at:  
          type: string  
          format: date-time  
          nullable: true  
      
    ModelDownloadRequest:  
      type: object  
      required:  
        \- model\_id  
      properties:  
        model\_id:  
          type: string  
          example: "llama-3.1-8b-instruct"  
        storage\_location:  
          type: string  
          description: Optional custom storage path  
          example: "/data/models/llama-3.1"  
      
    ModelDownloadStatus:  
      type: object  
      required:  
        \- job\_id  
        \- model\_id  
        \- status  
      properties:  
        job\_id:  
          type: string  
          format: uuid  
        model\_id:  
          type: string  
        status:  
          type: string  
          enum: \[queued, downloading, extracting, completed, failed\]  
        progress\_percent:  
          type: number  
          format: float  
          minimum: 0  
          maximum: 100  
          example: 42.5  
        bytes\_downloaded:  
          type: integer  
          format: int64  
        bytes\_total:  
          type: integer  
          format: int64  
        estimated\_completion\_seconds:  
          type: integer  
          nullable: true  
        error\_message:  
          type: string  
          nullable: true  
        started\_at:  
          type: string  
          format: date-time  
        completed\_at:  
          type: string  
          format: date-time  
          nullable: true

    \# \============================================  
    \# SEARCH & DISCOVERY SCHEMAS  
    \# \============================================  
      
    ServiceSearchFilters:  
      type: object  
      properties:  
        category:  
          type: string  
          example: "futomaki"  
        gpu\_required:  
          type: boolean  
        min\_ram\_gb:  
          type: integer  
        tags:  
          type: array  
          items:  
            type: string  
        provides:  
          type: array  
          items:  
            type: string  
          description: Filter by provided capabilities  
      
    ServiceSearchResponse:  
      type: object  
      required:  
        \- query  
        \- results  
        \- total  
      properties:  
        query:  
          type: string  
        filters:  
          $ref: '\#/components/schemas/ServiceSearchFilters'  
        results:  
          type: array  
          items:  
            $ref: '\#/components/schemas/ComponentDetail'  
        total:  
          type: integer  
          description: Total matching services  
        page:  
          type: integer  
          default: 1  
        page\_size:  
          type: integer  
          default: 20  
      
    BundleDependency:  
      type: object  
      properties:  
        service\_id:  
          type: string  
        name:  
          type: string  
        depth:  
          type: integer  
          description: Dependency tree depth (0 \= direct)  
        reason:  
          type: string  
          description: Why this dependency exists  
          example: "Provides required capability: database.postgres"  
        required\_by:  
          type: array  
          items:  
            type: string  
          description: Which services require this dependency

    \# \============================================  
    \# ERROR SCHEMAS  
    \# \============================================  
      
    Error:  
      type: object  
      required:  
        \- error\_code  
        \- message  
      properties:  
        error\_code:  
          type: string  
          description: Machine-readable error code  
          example: "BUNDLE\_NOT\_FOUND"  
        message:  
          type: string  
          description: Human-readable error message  
          example: "Bundle with ID '123' does not exist"  
        details:  
          type: object  
          additionalProperties: true  
          description: Additional error context  
        request\_id:  
          type: string  
          format: uuid  
          description: Request ID for debugging  
        timestamp:  
          type: string  
          format: date-time

    \# \============================================  
    \# PAGINATION SCHEMAS  
    \# \============================================  
      
    PaginationMeta:  
      type: object  
      properties:  
        page:  
          type: integer  
          minimum: 1  
          example: 1  
        page\_size:  
          type: integer  
          minimum: 1  
          maximum: 100  
          example: 20  
        total\_items:  
          type: integer  
          example: 142  
        total\_pages:  
          type: integer  
          example: 8

\# \============================================  
\# ENDPOINTS  
\# \============================================

paths:  
  \# \============================================  
  \# BUNDLE MANAGEMENT (ADMIN)  
  \# \============================================  
    
  /bundles:  
    post:  
      summary: Create new bundle  
      tags: \[Bundles, Admin\]  
      security:  
        \- BearerAuth: \[\]  
      requestBody:  
        required: true  
        content:  
          application/json:  
            schema:  
              $ref: '\#/components/schemas/BundleCreate'  
            example:  
              name: "LLM Starter Pack"  
              bundle\_type: "combo"  
              description: "Complete LLM deployment with vector DB and workflows"  
              tagline: "Everything for production LLM apps"  
              components:  
                \- service\_id: "hosomaki.n8n"  
                  quantity: 1  
                \- service\_id: "futomaki.ollama"  
                  quantity: 1  
                \- service\_id: "futomaki.qdrant"  
                  quantity: 1  
              visibility: "public"  
              tags: \["llm", "vector-db", "workflows"\]  
              estimated\_setup\_time\_minutes: 30  
              hardware\_requirements:  
                min\_ram\_gb: 16  
                min\_cpu\_cores: 4  
                min\_storage\_gb: 100  
                gpu\_required: true  
      responses:  
        '201':  
          description: Bundle created successfully  
          content:  
            application/json:  
              schema:  
                $ref: '\#/components/schemas/Bundle'  
        '400':  
          description: Invalid request  
          content:  
            application/json:  
              schema:  
                $ref: '\#/components/schemas/Error'  
              example:  
                error\_code: "INVALID\_BUNDLE\_DATA"  
                message: "Bundle name must be 3-100 characters"  
                details:  
                  field: "name"  
                  constraint: "minLength"  
        '401':  
          description: Unauthorized  
        '403':  
          description: Forbidden \- admin access required  
      
    get:  
      summary: List all bundles  
      tags: \[Bundles\]  
      parameters:  
        \- name: bundle\_type  
          in: query  
          schema:  
            $ref: '\#/components/schemas/BundleType'  
        \- name: visibility  
          in: query  
          schema:  
            $ref: '\#/components/schemas/BundleVisibility'  
        \- name: tags  
          in: query  
          schema:  
            type: array  
            items:  
              type: string  
          style: form  
          explode: true  
        \- name: page  
          in: query  
          schema:  
            type: integer  
            minimum: 1  
            default: 1  
        \- name: page\_size  
          in: query  
          schema:  
            type: integer  
            minimum: 1  
            maximum: 100  
            default: 20  
      responses:  
        '200':  
          description: List of bundles  
          content:  
            application/json:  
              schema:  
                type: object  
                properties:  
                  bundles:  
                    type: array  
                    items:  
                      $ref: '\#/components/schemas/Bundle'  
                  meta:  
                    $ref: '\#/components/schemas/PaginationMeta'

  /bundles/{id}:  
    parameters:  
      \- name: id  
        in: path  
        required: true  
        schema:  
          type: string  
          format: uuid  
      
    get:  
      summary: Get bundle details  
      tags: \[Bundles\]  
      responses:  
        '200':  
          description: Bundle details  
          content:  
            application/json:  
              schema:  
                $ref: '\#/components/schemas/Bundle'  
        '404':  
          description: Bundle not found  
          content:  
            application/json:  
              schema:  
                $ref: '\#/components/schemas/Error'  
              example:  
                error\_code: "BUNDLE\_NOT\_FOUND"  
                message: "Bundle with ID '550e8400-e29b-41d4-a716-446655440000' does not exist"  
      
    put:  
      summary: Update bundle  
      tags: \[Bundles, Admin\]  
      security:  
        \- BearerAuth: \[\]  
      requestBody:  
        required: true  
        content:  
          application/json:  
            schema:  
              $ref: '\#/components/schemas/BundleUpdate'  
      responses:  
        '200':  
          description: Bundle updated  
          content:  
            application/json:  
              schema:  
                $ref: '\#/components/schemas/Bundle'  
        '400':  
          description: Invalid update data  
        '401':  
          description: Unauthorized  
        '403':  
          description: Forbidden  
        '404':  
          description: Bundle not found  
      
    delete:  
      summary: Delete bundle  
      tags: \[Bundles, Admin\]  
      security:  
        \- BearerAuth: \[\]  
      responses:  
        '204':  
          description: Bundle deleted successfully  
        '401':  
          description: Unauthorized  
        '403':  
          description: Forbidden  
        '404':  
          description: Bundle not found

  /bundles/{id}/components:  
    parameters:  
      \- name: id  
        in: path  
        required: true  
        schema:  
          type: string  
          format: uuid  
      
    get:  
      summary: Get full component details for bundle  
      tags: \[Bundles\]  
      description: Returns complete service metadata for all components in a bundle  
      responses:  
        '200':  
          description: Component details with full manifest metadata  
          content:  
            application/json:  
              schema:  
                type: object  
                properties:  
                  bundle\_id:  
                    type: string  
                    format: uuid  
                  components:  
                    type: array  
                    items:  
                      allOf:  
                        \- $ref: '\#/components/schemas/ComponentReference'  
                        \- type: object  
                          properties:  
                            details:  
                              $ref: '\#/components/schemas/ComponentDetail'  
              example:  
                bundle\_id: "550e8400-e29b-41d4-a716-446655440000"  
                components:  
                  \- service\_id: "hosomaki.n8n"  
                    quantity: 1  
                    optional: false  
                    details:  
                      service\_id: "hosomaki.n8n"  
                      name: "n8n"  
                      category: "hosomaki"  
                      description: "Workflow automation tool"  
                      image: "n8nio/n8n:latest"  
                      ports:  
                        \- container\_port: 5678  
                          host\_port: 5678  
                          protocol: "tcp"  
                          description: "Web UI"  
                      volumes:  
                        \- name: "n8n\_data"  
                          mount\_path: "/home/node/.n8n"  
                          volume\_type: "volume"  
                          backup\_priority: "critical"  
        '404':  
          description: Bundle not found

  \# \============================================  
  \# USER ORDERS (DASHBOARD)  
  \# \============================================  
    
  /orders:  
    post:  
      summary: Save bundle to user account  
      tags: \[Orders\]  
      security:  
        \- BearerAuth: \[\]  
      requestBody:  
        required: true  
        content:  
          application/json:  
            schema:  
              $ref: '\#/components/schemas/OrderCreate'  
            example:  
              bundle\_id: "550e8400-e29b-41d4-a716-446655440000"  
              custom\_name: "My Production AI Stack"  
              notes: "\# Deployment Notes\\n\\nUsing this for production workloads"  
      responses:  
        '201':  
          description: Order created  
          content:  
            application/json:  
              schema:  
                $ref: '\#/components/schemas/Order'  
        '400':  
          description: Invalid request  
        '401':  
          description: Unauthorized  
        '404':  
          description: Bundle not found  
      
    get:  
      summary: List user's saved bundles  
      tags: \[Orders\]  
      security:  
        \- BearerAuth: \[\]  
      parameters:  
        \- name: status  
          in: query  
          schema:  
            $ref: '\#/components/schemas/OrderStatus'  
        \- name: page  
          in: query  
          schema:  
            type: integer  
            minimum: 1  
            default: 1  
        \- name: page\_size  
          in: query  
          schema:  
            type: integer  
            minimum: 1  
            maximum: 100  
            default: 20  
      responses:  
        '200':  
          description: List of orders  
          content:  
            application/json:  
              schema:  
                type: object  
                properties:  
                  orders:  
                    type: array  
                    items:  
                      $ref: '\#/components/schemas/Order'  
                  meta:  
                    $ref: '\#/components/schemas/PaginationMeta'  
        '401':  
          description: Unauthorized

  /orders/{id}:  
    parameters:  
      \- name: id  
        in: path  
        required: true  
        schema:  
          type: string  
          format: uuid  
      
    get:  
      summary: Get order details with assets  
      tags: \[Orders\]  
      security:  
        \- BearerAuth: \[\]  
      responses:  
        '200':  
          description: Order details  
          content:  
            application/json:  
              schema:  
                $ref: '\#/components/schemas/Order'  
        '401':  
          description: Unauthorized  
        '403':  
          description: Forbidden \- not your order  
        '404':  
          description: Order not found  
      
    put:  
      summary: Update order  
      tags: \[Orders\]  
      security:  
        \- BearerAuth: \[\]  
      requestBody:  
        required: true  
        content:  
          application/json:  
            schema:  
              $ref: '\#/components/schemas/OrderUpdate'  
      responses:  
        '200':  
          description: Order updated  
          content:  
            application/json:  
              schema:  
                $ref: '\#/components/schemas/Order'  
        '400':  
          description: Invalid update  
        '401':  
          description: Unauthorized  
        '403':  
          description: Forbidden  
        '404':  
          description: Order not found  
      
    delete:  
      summary: Delete order  
      tags: \[Orders\]  
      security:  
        \- BearerAuth: \[\]  
      responses:  
        '204':  
          description: Order deleted  
        '401':  
          description: Unauthorized  
        '403':  
          description: Forbidden  
        '404':  
          description: Order not found

  \# \============================================  
  \# USER ASSETS (ORDER ATTACHMENTS)  
  \# \============================================  
    
  /orders/{id}/notes:  
    parameters:  
      \- name: id  
        in: path  
        required: true  
        schema:  
          type: string  
          format: uuid  
      
    post:  
      summary: Add or update order notes  
      tags: \[Orders, Assets\]  
      security:  
        \- BearerAuth: \[\]  
      requestBody:  
        required: true  
        content:  
          application/json:  
            schema:  
              type: object  
              required:  
                \- notes  
              properties:  
                notes:  
                  type: string  
                  maxLength: 5000  
                  description: Markdown-formatted notes  
            example:  
              notes: |  
                \# Production Deployment Notes  
                  
                \#\# Configuration  
                \- Using GPU node pool  
                \- Custom domain: ai.example.com  
                  
                \#\# Resources  
                \- 16GB RAM allocated  
                \- 100GB storage  
      responses:  
        '200':  
          description: Notes updated  
          content:  
            application/json:  
              schema:  
                $ref: '\#/components/schemas/Order'  
        '400':  
          description: Invalid notes (too long)  
        '401':  
          description: Unauthorized  
        '403':  
          description: Forbidden  
        '404':  
          description: Order not found

  /orders/{id}/workflows:  
    parameters:  
      \- name: id  
        in: path  
        required: true  
        schema:  
          type: string  
          format: uuid  
      
    post:  
      summary: Attach workflow reference to order  
      tags: \[Orders, Assets\]  
      security:  
        \- BearerAuth: \[\]  
      requestBody:  
        required: true  
        content:  
          application/json:  
            schema:  
              $ref: '\#/components/schemas/AssetCreate'  
            example:  
              name: "Customer Support Workflow"  
              url: "https://n8n.example.com/workflow/customer-support-v2"  
              metadata:  
                workflow\_id: "workflow\_abc123"  
                version: "2.1"  
      responses:  
        '201':  
          description: Workflow attached  
          content:  
            application/json:  
              schema:  
                $ref: '\#/components/schemas/Order'  
        '400':  
          description: Invalid workflow data  
        '401':  
          description: Unauthorized  
        '403':  
          description: Forbidden  
        '404':  
          description: Order not found

  /orders/{id}/datasets:  
    parameters:  
      \- name: id  
        in: path  
        required: true  
        schema:  
          type: string  
          format: uuid  
      
    post:  
      summary: Attach dataset reference to order  
      tags: \[Orders, Assets\]  
      security:  
        \- BearerAuth: \[\]  
      requestBody:  
        required: true  
        content:  
          application/json:  
            schema:  
              $ref: '\#/components/schemas/AssetCreate'  
            example:  
              name: "Customer FAQs Vector DB"  
              url: "s3://my-bucket/datasets/customer-faqs-vectors.parquet"  
              metadata:  
                format: "parquet"  
                size\_mb: 2400  
                vector\_dimensions: 1536  
      responses:  
        '201':  
          description: Dataset attached  
          content:  
            application/json:  
              schema:  
                $ref: '\#/components/schemas/Order'  
        '400':  
          description: Invalid dataset data  
        '401':  
          description: Unauthorized  
        '403':  
          description: Forbidden  
        '404':  
          description: Order not found

  \# \============================================  
  \# MODEL DOWNLOADS  
  \# \============================================  
    
  /models:  
    get:  
      summary: List available and downloaded models  
      tags: \[Models\]  
      security:  
        \- BearerAuth: \[\]  
      parameters:  
        \- name: source  
          in: query  
          schema:  
            $ref: '\#/components/schemas/ModelSource'  
        \- name: status  
          in: query  
          schema:  
            $ref: '\#/components/schemas/ModelStatus'  
        \- name: tags  
          in: query  
          schema:  
            type: array  
            items:  
              type: string  
          style: form  
          explode: true  
        \- name: page  
          in: query  
          schema:  
            type: integer  
            default: 1  
        \- name: page\_size  
          in: query  
          schema:  
            type: integer  
            default: 20  
      responses:  
        '200':  
          description: List of models  
          content:  
            application/json:  
              schema:  
                type: object  
                properties:  
                  models:  
                    type: array  
                    items:  
                      $ref: '\#/components/schemas/Model'  
                  meta:  
                    $ref: '\#/components/schemas/PaginationMeta'  
        '401':  
          description: Unauthorized

  /models/download:  
    post:  
      summary: Initiate model download  
      tags: \[Models\]  
      security:  
        \- BearerAuth: \[\]  
      requestBody:  
        required: true  
        content:  
          application/json:  
            schema:  
              $ref: '\#/components/schemas/ModelDownloadRequest'  
            example:  
              model\_id: "llama-3.1-8b-instruct"  
              storage\_location: "/data/models/llama-3.1"  
      responses:  
        '202':  
          description: Download initiated  
          content:  
            application/json:  
              schema:  
                $ref: '\#/components/schemas/ModelDownloadStatus'  
              example:  
                job\_id: "job\_abc123xyz"  
                model\_id: "llama-3.1-8b-instruct"  
                status: "queued"  
                progress\_percent: 0  
                bytes\_downloaded: 0  
                bytes\_total: 8589934592  
                started\_at: "2025-10-09T10:30:00Z"  
        '400':  
          description: Invalid model ID  
        '401':  
          description: Unauthorized  
        '409':  
          description: Model already downloaded or download in progress

  /models/status/{job\_id}:  
    parameters:  
      \- name: job\_id  
        in: path  
        required: true  
        schema:  
          type: string  
      
    get:  
      summary: Check model download progress  
      tags: \[Models\]  
      security:  
        \- BearerAuth: \[\]  
      responses:  
        '200':  
          description: Download status  
          content:  
            application/json:  
              schema:  
                $ref: '\#/components/schemas/ModelDownloadStatus'  
              example:  
                job\_id: "job\_abc123xyz"  
                model\_id: "llama-3.1-8b-instruct"  
                status: "downloading"  
                progress\_percent: 42.5  
                bytes\_downloaded: 3650722201  
                bytes\_total: 8589934592  
                estimated\_completion\_seconds: 180  
                started\_at: "2025-10-09T10:30:00Z"  
        '401':  
          description: Unauthorized  
        '404':  
          description: Job not found

  \# \============================================  
  \# ADVANCED SEARCH  
  \# \============================================  
    
  /services/search:  
    get:  
      summary: Advanced service search with faceted filtering  
      tags: \[Services, Search\]  
      parameters:  
        \- name: q  
          in: query  
          required: true  
          schema:  
            type: string  
          description: Search query  
          example: "vector database"  
        \- name: category  
          in: query  
          schema:  
            type: string  
          example: "futomaki"  
        \- name: gpu  
          in: query  
          schema:  
            type: boolean  
          description: Filter by GPU requirement  
        \- name: min\_ram\_gb  
          in: query  
          schema:  
            type: integer  
        \- name: tags  
          in: query  
          schema:  
            type: array  
            items:  
              type: string  
          style: form  
          explode: true  
        \- name: provides  
          in: query  
          schema:  
            type: array  
            items:  
              type: string  
          style: form  
          explode: true  
          description: Filter by provided capabilities  
        \- name: page  
          in: query  
          schema:  
            type: integer  
            default: 1  
        \- name: page\_size  
          in: query  
          schema:  
            type: integer  
            default: 20  
      responses:  
        '200':  
          description: Search results  
          content:  
            application/json:  
              schema:  
                $ref: '\#/components/schemas/ServiceSearchResponse'

  /services/{id}/bundles:  
    parameters:  
      \- name: id  
        in: path  
        required: true  
        schema:  
          type: string  
        example: "hosomaki.n8n"  
      
    get:  
      summary: Find bundles that include this service  
      tags: \[Services, Discovery\]  
      responses:  
        '200':  
          description: Bundles containing this service  
          content:  
            application/json:  
              schema:  
                type: object  
                properties:  
                  service\_id:  
                    type: string  
                  bundles:  
                    type: array  
                    items:  
                      $ref: '\#/components/schemas/Bundle'  
        '404':  
          description: Service not found

  /bundles/{id}/dependencies:  
    parameters:  
      \- name: id  
        in: path  
        required: true  
        schema:  
          type: string  
          format: uuid  
      
    get:  
      summary: Get full dependency tree for bundle  
      tags: \[Bundles, Dependencies\]  
      description: Returns complete dependency graph with reasoning  
      responses:  
        '200':  
          description: Dependency tree  
          content:  
            application/json:  
              schema:  
                type: object  
                properties:  
                  bundle\_id:  
                    type: string  
                    format: uuid  
                  dependencies:  
                    type: array  
                    items:  
                      $ref: '\#/components/schemas/BundleDependency'  
              example:  
                bundle\_id: "550e8400-e29b-41d4-a716-446655440000"  
                dependencies:  
                  \- service\_id: "hosomaki.postgres"  
                    name: "PostgreSQL"  
                    depth: 0  
                    reason: "Direct component in bundle"  
                    required\_by: \[\]  
                  \- service\_id: "hosomaki.redis"  
                    name: "Redis"  
                    depth: 1  
                    reason: "Provides required capability: cache.inmemory"  
                    required\_by: \["hosomaki.n8n"\]  
        '404':  
          description: Bundle not found

  /recommendations:  
    post:  
      summary: Get personalized bundle recommendations  
      tags: \[Discovery\]  
      security:  
        \- BearerAuth: \[\]  
      requestBody:  
        required: true  
        content:  
          application/json:  
            schema:  
              type: object  
              properties:  
                use\_case:  
                  type: string  
                  example: "AI chatbot with RAG"  
                preferences:  
                  type: object  
                  properties:  
                    max\_setup\_time\_minutes:  
                      type: integer  
                    max\_ram\_gb:  
                      type: integer  
                    gpu\_available:  
                      type: boolean  
      responses:  
        '200':  
          description: Recommended bundles  
          content:  
            application/json:  
              schema:  
                type: object  
                properties:  
                  recommendations:  
                    type: array  
                    items:  
                      type: object  
                      properties:  
                        bundle:  
                          $ref: '\#/components/schemas/Bundle'  
                        score:  
                          type: number  
                          format: float  
                          description: Relevance score (0-1)  
                        reasoning:  
                          type: string  
                          description: Why this bundle was recommended  
        '400':  
          description: Invalid preferences  
        '401':  
          description: Unauthorized

  \# \============================================  
  \# UPDATE TRACKING (FUTURE)  
  \# \============================================  
    
  /orders/{id}/updates:  
    parameters:  
      \- name: id  
        in: path  
        required: true  
        schema:  
          type: string  
          format: uuid  
      
    get:  
      summary: Check if bundle has updates available  
      tags: \[Orders, Updates\]  
      security:  
        \- BearerAuth: \[\]  
      description: Compares saved bundle version with current published version  
      responses:  
        '200':  
          description: Update status  
          content:  
            application/json:  
              schema:  
                type: object  
                properties:  
                  order\_id:  
                    type: string  
                    format: uuid  
                  updates\_available:  
                    type: boolean  
                  saved\_version:  
                    type: string  
                    description: Version when bundle was saved  
                  current\_version:  
                    type: string  
                    description: Latest published version  
                  changes:  
                    type: array  
                    items:  
                      type: object  
                      properties:  
                        type:  
                          type: string  
                          enum: \[component\_added, component\_removed, component\_updated, metadata\_changed\]  
                        description:  
                          type: string  
                        breaking:  
                          type: boolean  
              example:  
                order\_id: "order\_abc123"  
                updates\_available: true  
                saved\_version: "1.2.0"  
                current\_version: "1.3.0"  
                changes:  
                  \- type: "component\_updated"  
                    description: "n8n upgraded from 1.20.0 to 1.25.0"  
                    breaking: false  
                  \- type: "component\_added"  
                    description: "Added optional Grafana monitoring"  
                    breaking: false  
        '401':  
          description: Unauthorized  
        '404':  
          description: Order not found

---

## **Authentication & Authorization**

### **JWT Token Structure**

{  
  "sub": "user\_uuid",  
  "email": "user@example.com",  
  "role": "admin" | "user",  
  "exp": 1234567890,  
  "iat": 1234567890  
}

### **Row Level Security (RLS) Policies**

#### **Bundles Table**

\-- Public bundles: Anyone can read  
CREATE POLICY "Public bundles are viewable by all"  
ON bundles FOR SELECT  
USING (visibility \= 'public');

\-- Private bundles: Only creator can read  
CREATE POLICY "Users can view their own private bundles"  
ON bundles FOR SELECT  
USING (visibility \= 'private' AND created\_by \= auth.uid());

\-- Admins can create/update/delete  
CREATE POLICY "Admins can manage bundles"  
ON bundles FOR ALL  
USING (  
  EXISTS (  
    SELECT 1 FROM user\_roles  
    WHERE user\_id \= auth.uid() AND role \= 'admin'  
  )  
);

#### **Orders Table**

\-- Users can only see their own orders  
CREATE POLICY "Users can view their own orders"  
ON orders FOR SELECT  
USING (user\_id \= auth.uid());

CREATE POLICY "Users can create their own orders"  
ON orders FOR INSERT  
WITH CHECK (user\_id \= auth.uid());

CREATE POLICY "Users can update their own orders"  
ON orders FOR UPDATE  
USING (user\_id \= auth.uid());

CREATE POLICY "Users can delete their own orders"  
ON orders FOR DELETE  
USING (user\_id \= auth.uid());

### **Role-Based Access Control (RBAC)**

| Endpoint | Anonymous | User | Admin |
| ----- | ----- | ----- | ----- |
| GET /bundles | ✅ (public only) | ✅ (public \+ own private) | ✅ (all) |
| POST /bundles | ❌ | ❌ | ✅ |
| PUT /bundles/{id} | ❌ | ❌ | ✅ |
| DELETE /bundles/{id} | ❌ | ❌ | ✅ |
| GET /orders | ❌ | ✅ (own only) | ✅ (all) |
| POST /orders | ❌ | ✅ | ✅ |
| PUT /orders/{id} | ❌ | ✅ (own only) | ✅ |
| GET /models | ❌ | ✅ | ✅ |
| POST /models/download | ❌ | ✅ | ✅ |

---

## **Database Schema**

### **Core Tables**

\-- \============================================  
\-- BUNDLES TABLE  
\-- \============================================  
CREATE TABLE bundles (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  slug TEXT UNIQUE NOT NULL,  
  name TEXT NOT NULL CHECK (char\_length(name) \>= 3 AND char\_length(name) \<= 100),  
  bundle\_type TEXT NOT NULL CHECK (bundle\_type IN ('combo', 'bento\_box', 'platter')),  
  description TEXT CHECK (char\_length(description) \<= 1000),  
  tagline TEXT CHECK (char\_length(tagline) \<= 200),  
  components JSONB NOT NULL,  
  visibility TEXT NOT NULL DEFAULT 'public' CHECK (visibility IN ('public', 'private', 'unlisted')),  
  tags TEXT\[\] DEFAULT '{}',  
  estimated\_setup\_time\_minutes INTEGER CHECK (estimated\_setup\_time\_minutes \>= 5 AND estimated\_setup\_time\_minutes \<= 1440),  
  hardware\_requirements JSONB,  
  created\_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,  
  created\_at TIMESTAMPTZ NOT NULL DEFAULT now(),  
  updated\_at TIMESTAMPTZ NOT NULL DEFAULT now(),  
    
  \-- Computed stats (updated via triggers or periodic jobs)  
  total\_deployments INTEGER NOT NULL DEFAULT 0,  
  total\_saves INTEGER NOT NULL DEFAULT 0,  
  avg\_rating DECIMAL(3,2) CHECK (avg\_rating \>= 0 AND avg\_rating \<= 5\)  
);

\-- Indexes  
CREATE INDEX bundles\_bundle\_type\_idx ON bundles(bundle\_type);  
CREATE INDEX bundles\_visibility\_idx ON bundles(visibility);  
CREATE INDEX bundles\_created\_by\_idx ON bundles(created\_by);  
CREATE INDEX bundles\_tags\_idx ON bundles USING GIN(tags);  
CREATE INDEX bundles\_created\_at\_idx ON bundles(created\_at DESC);

\-- Auto-update updated\_at  
CREATE TRIGGER update\_bundles\_updated\_at  
BEFORE UPDATE ON bundles  
FOR EACH ROW EXECUTE FUNCTION update\_updated\_at\_column();

\-- \============================================  
\-- ORDERS TABLE  
\-- \============================================  
CREATE TABLE orders (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  user\_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,  
  bundle\_id UUID NOT NULL REFERENCES bundles(id) ON DELETE CASCADE,  
  custom\_name TEXT CHECK (char\_length(custom\_name) \<= 200),  
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'archived')),  
  notes TEXT CHECK (char\_length(notes) \<= 5000),  
  created\_at TIMESTAMPTZ NOT NULL DEFAULT now(),  
  updated\_at TIMESTAMPTZ NOT NULL DEFAULT now(),  
  deployed\_at TIMESTAMPTZ,  
    
  CONSTRAINT unique\_user\_bundle UNIQUE (user\_id, bundle\_id)  
);

\-- Indexes  
CREATE INDEX orders\_user\_id\_idx ON orders(user\_id);  
CREATE INDEX orders\_bundle\_id\_idx ON orders(bundle\_id);  
CREATE INDEX orders\_status\_idx ON orders(status);  
CREATE INDEX orders\_created\_at\_idx ON orders(created\_at DESC);

\-- Auto-update updated\_at  
CREATE TRIGGER update\_orders\_updated\_at  
BEFORE UPDATE ON orders  
FOR EACH ROW EXECUTE FUNCTION update\_updated\_at\_column();

\-- \============================================  
\-- ORDER ASSETS TABLE (WORKFLOWS, DATASETS)  
\-- \============================================  
CREATE TABLE order\_assets (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  order\_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,  
  asset\_type TEXT NOT NULL CHECK (asset\_type IN ('workflow', 'dataset')),  
  name TEXT NOT NULL CHECK (char\_length(name) \<= 200),  
  url TEXT NOT NULL,  
  metadata JSONB DEFAULT '{}',  
  created\_at TIMESTAMPTZ NOT NULL DEFAULT now()  
);

\-- Indexes  
CREATE INDEX order\_assets\_order\_id\_idx ON order\_assets(order\_id);  
CREATE INDEX order\_assets\_asset\_type\_idx ON order\_assets(asset\_type);

\-- \============================================  
\-- MODEL DOWNLOADS TABLE  
\-- \============================================  
CREATE TABLE model\_downloads (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  user\_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,  
  model\_id TEXT NOT NULL,  
  job\_id TEXT UNIQUE NOT NULL,  
  status TEXT NOT NULL DEFAULT 'queued' CHECK (status IN ('queued', 'downloading', 'extracting', 'completed', 'failed')),  
  progress\_percent DECIMAL(5,2) CHECK (progress\_percent \>= 0 AND progress\_percent \<= 100),  
  bytes\_downloaded BIGINT DEFAULT 0,  
  bytes\_total BIGINT,  
  error\_message TEXT,  
  storage\_location TEXT,  
  started\_at TIMESTAMPTZ NOT NULL DEFAULT now(),  
  completed\_at TIMESTAMPTZ  
);

\-- Indexes  
CREATE INDEX model\_downloads\_user\_id\_idx ON model\_downloads(user\_id);  
CREATE INDEX model\_downloads\_model\_id\_idx ON model\_downloads(model\_id);  
CREATE INDEX model\_downloads\_job\_id\_idx ON model\_downloads(job\_id);  
CREATE INDEX model\_downloads\_status\_idx ON model\_downloads(status);

\-- \============================================  
\-- USER ROLES TABLE (FOR RBAC)  
\-- \============================================  
CREATE TABLE user\_roles (  
  user\_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,  
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),  
  created\_at TIMESTAMPTZ NOT NULL DEFAULT now()  
);

\-- \============================================  
\-- HELPER FUNCTION  
\-- \============================================  
CREATE OR REPLACE FUNCTION update\_updated\_at\_column()  
RETURNS TRIGGER AS $$  
BEGIN  
  NEW.updated\_at \= now();  
  RETURN NEW;  
END;  
$$ LANGUAGE plpgsql;

---

## **Error Handling**

### **Error Code Taxonomy**

// Validation Errors (400)  
INVALID\_BUNDLE\_DATA  
INVALID\_ORDER\_DATA  
INVALID\_MODEL\_ID  
VALIDATION\_FAILED

// Authentication Errors (401)  
UNAUTHORIZED  
INVALID\_TOKEN  
TOKEN\_EXPIRED

// Authorization Errors (403)  
FORBIDDEN  
INSUFFICIENT\_PERMISSIONS  
NOT\_OWNER

// Not Found Errors (404)  
BUNDLE\_NOT\_FOUND  
ORDER\_NOT\_FOUND  
SERVICE\_NOT\_FOUND  
MODEL\_NOT\_FOUND  
JOB\_NOT\_FOUND

// Conflict Errors (409)  
BUNDLE\_ALREADY\_EXISTS  
ORDER\_ALREADY\_EXISTS  
MODEL\_DOWNLOAD\_IN\_PROGRESS

// Server Errors (500)  
INTERNAL\_SERVER\_ERROR  
DATABASE\_ERROR  
EXTERNAL\_SERVICE\_ERROR

### **Standard Error Response Format**

interface ErrorResponse {  
  error\_code: string;  
  message: string;  
  details?: Record\<string, any\>;  
  request\_id?: string;  
  timestamp: string;  
}

### **Example Error Responses**

// 400 \- Validation Error  
{  
  "error\_code": "INVALID\_BUNDLE\_DATA",  
  "message": "Bundle name must be between 3 and 100 characters",  
  "details": {  
    "field": "name",  
    "constraint": "minLength",  
    "provided\_length": 2,  
    "required\_length": 3  
  },  
  "request\_id": "req\_abc123",  
  "timestamp": "2025-10-09T10:30:00Z"  
}

// 404 \- Not Found  
{  
  "error\_code": "BUNDLE\_NOT\_FOUND",  
  "message": "Bundle with ID '550e8400-e29b-41d4-a716-446655440000' does not exist",  
  "request\_id": "req\_def456",  
  "timestamp": "2025-10-09T10:31:00Z"  
}

// 409 \- Conflict  
{  
  "error\_code": "MODEL\_DOWNLOAD\_IN\_PROGRESS",  
  "message": "Model 'llama-3.1-8b-instruct' is already being downloaded",  
  "details": {  
    "job\_id": "job\_abc123xyz",  
    "progress\_percent": 42.5  
  },  
  "request\_id": "req\_ghi789",  
  "timestamp": "2025-10-09T10:32:00Z"  
}

---

## **Phase 3: Frontend Implementation**

### **Routing Structure**

// New Route Structure  
/                                    // Homepage  
/menu                                // Service catalog (rolls only)  
/bundles                             // Bundle catalog (tabs: combos/bento/platters)  
  /bundles/combos                   // Combos tab  
  /bundles/bento-boxes              // Bento boxes tab  
  /bundles/platters                 // Platters tab  
/rolls/\[category\]/\[slug\]            // Roll detail page  
/combos/\[id\]                        // Combo detail page  
/bento-boxes/\[id\]                   // Bento box detail page  
/platters/\[id\]                      // Platter detail page  
/builder                            // Custom bundle builder  
/dashboard                          // User dashboard  
  /dashboard/orders                 // Saved bundles  
  /dashboard/models                 // Downloaded models  
  /dashboard/settings              // User settings  
/admin                              // Admin panel  
  /admin/bundles                    // Bundle management  
  /admin/services                   // Service management  
  /admin/users                      // User management (future)

### **Component Architecture**

src/  
├── app/  
│   ├── layout.tsx                  // Root layout  
│   ├── page.tsx                    // Homepage  
│   ├── menu/  
│   │   └── page.tsx                // Service catalog  
│   ├── bundles/  
│   │   ├── page.tsx                // Bundle catalog (tabs)  
│   │   ├── combos/  
│   │   │   └── \[id\]/  
│   │   │       └── page.tsx        // Combo detail  
│   │   ├── bento-boxes/  
│   │   │   └── \[id\]/  
│   │   │       └── page.tsx        // Bento detail  
│   │   └── platters/  
│   │       └── \[id\]/  
│   │           └── page.tsx        // Platter detail  
│   ├── rolls/  
│   │   └── \[category\]/  
│   │       └── \[slug\]/  
│   │           └── page.tsx        // Roll detail  
│   ├── builder/  
│   │   └── page.tsx                // Custom builder  
│   ├── dashboard/  
│   │   ├── layout.tsx              // Dashboard layout  
│   │   ├── page.tsx                // Dashboard home  
│   │   ├── orders/  
│   │   │   ├── page.tsx            // Orders list  
│   │   │   └── \[id\]/  
│   │   │       └── page.tsx        // Order detail  
│   │   └── models/  
│   │       └── page.tsx            // Models management  
│   └── admin/  
│       ├── layout.tsx              // Admin layout  
│       └── bundles/  
│           ├── page.tsx            // Bundles list  
│           ├── new/  
│           │   └── page.tsx        // Create bundle  
│           └── \[id\]/  
│               └── edit/  
│                   └── page.tsx    // Edit bundle  
├── components/  
│   ├── ui/                         // Aceternity UI components  
│   ├── bundles/  
│   │   ├── BundleCard.tsx          // Bundle card  
│   │   ├── BundleDetail.tsx        // Bundle detail view  
│   │   ├── BundleComparison.tsx    // Compare bundles  
│   │   └── BundleForm.tsx          // Admin bundle form  
│   ├── services/  
│   │   ├── ServiceCard.tsx         // Service card  
│   │   ├── ServiceDetail.tsx       // Service detail view  
│   │   ├── VolumeInfo.tsx          // Volume mounts display  
│   │   ├── NetworkProfiles.tsx     // Network config display  
│   │   ├── ScalingInfo.tsx         // Scaling config display  
│   │   └── HealthCheckInfo.tsx     // Health check display  
│   ├── orders/  
│   │   ├── OrderCard.tsx           // Order card  
│   │   ├── OrderDetail.tsx         // Order detail view  
│   │   ├── OrderForm.tsx           // Save order form  
│   │   └── AssetAttachments.tsx    // Workflow/dataset attachments  
│   ├── models/  
│   │   ├── ModelCard.tsx           // Model card  
│   │   ├── ModelDownloadButton.tsx // Download with progress  
│   │   └── ModelList.tsx           // Models list  
│   ├── search/  
│   │   ├── SearchBar.tsx           // Advanced search  
│   │   └── Filters.tsx             // Faceted filters  
│   └── common/  
│       ├── DependencyTree.tsx      // Dependency visualization  
│       ├── ResourceCalculator.tsx  // Resource aggregator  
│       └── EnvironmentVarList.tsx  // Env vars display  
├── lib/  
│   ├── api/  
│   │   ├── client.ts               // API client singleton  
│   │   ├── bundles.ts              // Bundle API methods  
│   │   ├── orders.ts               // Order API methods  
│   │   ├── models.ts               // Model API methods  
│   │   └── services.ts             // Service API methods  
│   ├── hooks/  
│   │   ├── useBundles.ts           // SWR hooks for bundles  
│   │   ├── useOrders.ts            // SWR hooks for orders  
│   │   ├── useModels.ts            // SWR hooks for models  
│   │   └── useServices.ts          // SWR hooks for services  
│   ├── context/  
│   │   ├── AuthContext.tsx         // Auth state  
│   │   └── ToastContext.tsx        // Toast notifications  
│   └── utils/  
│       ├── validation.ts           // Form validation  
│       ├── formatting.ts           // Data formatting  
│       └── errors.ts               // Error handling  
└── types/  
    ├── api.ts                      // API types (auto-generated)  
    └── components.ts               // Component prop types

---

## **Component-to-Endpoint Mapping**

### **Bundle Management (Admin)**

#### **BundleForm Component**

**Consumes:**

* `POST /api/v2/bundles` \- Create new bundle  
* `PUT /api/v2/bundles/{id}` \- Update existing bundle  
* `GET /api/v2/services` \- For component selection dropdown

**State Management:**

const \[formData, setFormData\] \= useState\<BundleCreate\>({  
  name: '',  
  bundle\_type: 'combo',  
  components: \[\],  
  visibility: 'public',  
  // ...  
});

const { mutate: createBundle } \= useCreateBundle();  
const { mutate: updateBundle } \= useUpdateBundle();

#### **BundleCard Component**

**Consumes:**

* `GET /api/v2/bundles` \- List bundles  
* `DELETE /api/v2/bundles/{id}` \- Delete bundle (admin only)

**Props:**

interface BundleCardProps {  
  bundle: Bundle;  
  showActions?: boolean; // Admin delete/edit actions  
  onSave?: (bundleId: string) \=\> void; // Save to user account  
}

#### **BundleDetail Component**

**Consumes:**

* `GET /api/v2/bundles/{id}` \- Bundle details  
* `GET /api/v2/bundles/{id}/components` \- Full component metadata  
* `GET /api/v2/bundles/{id}/dependencies` \- Dependency tree

**Data Flow:**

const { data: bundle } \= useBundle(id);  
const { data: components } \= useBundleComponents(id);  
const { data: dependencies } \= useBundleDependencies(id);

### **User Dashboard**

#### **OrderCard Component**

**Consumes:**

* `GET /api/v2/orders` \- List user orders  
* `DELETE /api/v2/orders/{id}` \- Delete order

**Props:**

interface OrderCardProps {  
  order: Order;  
  onDelete?: (orderId: string) \=\> void;  
  onNavigate?: (orderId: string) \=\> void;  
}

#### **OrderDetail Component**

**Consumes:**

* `GET /api/v2/orders/{id}` \- Order details with bundle and assets  
* `PUT /api/v2/orders/{id}` \- Update order name/status  
* `POST /api/v2/orders/{id}/notes` \- Update notes  
* `POST /api/v2/orders/{id}/workflows` \- Attach workflow  
* `POST /api/v2/orders/{id}/datasets` \- Attach dataset

**State:**

const { data: order, mutate: refreshOrder } \= useOrder(id);  
const { mutate: updateOrder } \= useUpdateOrder();  
const { mutate: attachWorkflow } \= useAttachWorkflow();  
const { mutate: attachDataset } \= useAttachDataset();

### **Model Management**

#### **ModelDownloadButton Component**

**Consumes:**

* `POST /api/v2/models/download` \- Initiate download  
* `GET /api/v2/models/status/{job_id}` \- Poll progress

**Implementation:**

const ModelDownloadButton: React.FC\<{ model: Model }\> \= ({ model }) \=\> {  
  const \[jobId, setJobId\] \= useState\<string | null\>(null);  
  const { data: status, isLoading } \= useModelDownloadStatus(jobId, {  
    refreshInterval: 2000, // Poll every 2 seconds  
    enabled: \!\!jobId  
  });

  const handleDownload \= async () \=\> {  
    const result \= await initiateDownload({ model\_id: model.id });  
    setJobId(result.job\_id);  
  };

  return (  
    \<Button onClick={handleDownload}\>  
      {status ? \`${status.progress\_percent}%\` : 'Download'}  
    \</Button\>  
  );  
};

#### **ModelList Component**

**Consumes:**

* `GET /api/v2/models` \- List available/downloaded models

**Filters:**

const { data: models } \= useModels({  
  source: 'huggingface',  
  status: 'available',  
  tags: \['llm', '8b-params'\]  
});

### **Service Discovery**

#### **SearchBar Component**

**Consumes:**

* `GET /api/v2/services/search` \- Advanced search

**Implementation:**

const SearchBar: React.FC \= () \=\> {  
  const \[query, setQuery\] \= useState('');  
  const \[filters, setFilters\] \= useState\<ServiceSearchFilters\>({});  
    
  const { data: results } \= useServiceSearch(query, filters, {  
    enabled: query.length \>= 3  
  });

  return (  
    \<div\>  
      \<Input value={query} onChange={(e) \=\> setQuery(e.target.value)} /\>  
      \<Filters filters={filters} onChange={setFilters} /\>  
      \<SearchResults results={results?.results} /\>  
    \</div\>  
  );  
};

#### **DependencyTree Component**

**Consumes:**

* `GET /api/v2/bundles/{id}/dependencies` \- Dependency graph

**Visualization:**

const DependencyTree: React.FC\<{ bundleId: string }\> \= ({ bundleId }) \=\> {  
  const { data: deps } \= useBundleDependencies(bundleId);

  // Use D3.js or React Flow to visualize  
  return \<TreeVisualization data={deps} /\>;  
};

---

## **UI Component Specifications**

### **BundleCard**

**Purpose:** Display bundle in catalog/grid view

**Design:**

┌─────────────────────────────────────┐  
│ \[Icon\] LLM Starter Pack         ⭐ │  
│                                     │  
│ Everything for production LLM apps  │  
│                                     │  
│ 🔧 n8n · Ollama · Qdrant           │  
│                                     │  
│ ⏱️ 30 min  💾 16GB  🖥️ 4 cores     │  
│                                     │  
│ \[Save to Dashboard\]  \[Deploy\]       │  
└─────────────────────────────────────┘

**Props:**

interface BundleCardProps {  
  bundle: Bundle;  
  variant?: 'compact' | 'detailed';  
  showActions?: boolean;  
  onSave?: () \=\> void;  
  onDeploy?: () \=\> void;  
}

**Styling:**

* Aceternity card component base  
* Hover: subtle lift effect, glow border  
* Rating stars (if avg\_rating present)  
* Tags displayed as pills

---

### **ServiceCard (Enhanced)**

**Purpose:** Display service with 90% metadata usage

**Design:**

┌─────────────────────────────────────┐  
│ \[Icon\] n8n                      🏷️  │  
│ Workflow Automation                 │  
│                                     │  
│ Ports: 5678 (Web UI)                │  
│ Volumes: 3 (critical backup)        │  
│ GPU: Not required                   │  
│ Network: Chirashi (simple)          │  
│                                     │  
│ Health: /healthz every 30s          │  
│ Scaling: 1-3 replicas (CPU)         │  
│                                     │  
│ \[View Details\]  \[Add to Bundle\]     │  
└─────────────────────────────────────┘

**Props:**

interface ServiceCardProps {  
  service: ComponentDetail;  
  showFullMetadata?: boolean; // Show volumes/health/scaling  
  onAddToBundle?: () \=\> void;  
}

**New Sections:**

* Volumes list with backup priority badges  
* Network profile indicator  
* Health check endpoint \+ interval  
* Scaling config (min/max replicas, metric)

---

### **BundleDetail Page**

**Layout:**

┌───────────────────────────────────────────────┐  
│ \[Back\] LLM Starter Pack                  ⭐4.7│  
│ Combo · Public                                │  
├───────────────────────────────────────────────┤  
│ Description (markdown rendered)               │  
│                                               │  
│ Complete LLM deployment with vector DB...     │  
├───────────────────────────────────────────────┤  
│ Components (3)                                │  
│ ┌───────────────────────────────────────┐    │  
│ │ n8n (hosomaki.n8n)                    │    │  
│ │ Ports: 5678 · Volumes: 3 · GPU: No    │    │  
│ │ \[Expand for full details ▼\]            │    │  
│ └───────────────────────────────────────┘    │  
│ ┌───────────────────────────────────────┐    │  
│ │ Ollama (futomaki.ollama)              │    │  
│ │ ...                                    │    │  
│ └───────────────────────────────────────┘    │  
├───────────────────────────────────────────────┤  
│ Dependency Tree                               │  
│ \[Tree visualization with D3 or React Flow\]    │  
├───────────────────────────────────────────────┤  
│ Hardware Requirements                         │  
│ RAM: 16GB · CPU: 4 cores · Storage: 100GB    │  
│ GPU: Required (NVIDIA)                        │  
├───────────────────────────────────────────────┤  
│ Setup Time: \~30 minutes                       │  
├───────────────────────────────────────────────┤  
│ \[Save to Dashboard\]  \[Deploy Now\]             │  
└───────────────────────────────────────────────┘

**API Calls:**

1. `GET /api/v2/bundles/{id}` \- Basic info  
2. `GET /api/v2/bundles/{id}/components` \- Full component metadata  
3. `GET /api/v2/bundles/{id}/dependencies` \- Dependency tree  
4. `POST /api/v2/orders` \- When user clicks "Save to Dashboard"

---

### **OrderDetail Page (Dashboard)**

**Layout:**

┌───────────────────────────────────────────────┐  
│ \[Back to Dashboard\] My Production AI Stack    │  
│ Based on: LLM Starter Pack (Combo)            │  
│ Status: Active                                │  
├───────────────────────────────────────────────┤  
│ Notes (Markdown editor)                       │  
│ \[Rich text editor with preview\]               │  
│ \[Save Notes\]                                  │  
├───────────────────────────────────────────────┤  
│ Attached Assets                               │  
│ Workflows (2)                                 │  
│ • Customer Support Workflow                   │  
│ • Email Processing Pipeline                   │  
│ \[+ Attach Workflow\]                           │  
│                                               │  
│ Datasets (1)                                  │  
│ • Customer FAQs Vector DB (2.4GB)            │  
│ \[+ Attach Dataset\]                            │  
├───────────────────────────────────────────────┤  
│ Bundle Details                                │  
│ \[Embedded BundleDetail component\]             │  
├───────────────────────────────────────────────┤  
│ \[Deploy\]  \[Archive\]  \[Delete\]                 │  
└───────────────────────────────────────────────┘

**API Calls:**

1. `GET /api/v2/orders/{id}` \- Load order with embedded bundle \+ assets  
2. `POST /api/v2/orders/{id}/notes` \- Save notes  
3. `POST /api/v2/orders/{id}/workflows` \- Attach workflow  
4. `POST /api/v2/orders/{id}/datasets` \- Attach dataset  
5. `PUT /api/v2/orders/{id}` \- Update status/name

---

### **ModelDownloadButton with Progress**

**States:**

Not Downloaded:  \[Download Model\]  
Queued:         \[Queued... 0%\]  
Downloading:    \[Downloading... 42% (3.6GB / 8.5GB)\]  
Extracting:     \[Extracting... 90%\]  
Completed:      \[✓ Downloaded\]  
Failed:         \[⚠ Failed \- Retry\]

**Implementation:**

const ModelDownloadButton: React.FC\<{ model: Model }\> \= ({ model }) \=\> {  
  const \[jobId, setJobId\] \= useState\<string | null\>(null);  
  const { data: status } \= useModelDownloadStatus(jobId, {  
    refreshInterval: jobId ? 2000 : false,  
  });

  const handleDownload \= async () \=\> {  
    const job \= await initiateDownload({ model\_id: model.id });  
    setJobId(job.job\_id);  
  };

  if (model.status \=== 'ready') {  
    return \<Badge\>✓ Downloaded\</Badge\>;  
  }

  if (status?.status \=== 'failed') {  
    return \<Button onClick={handleDownload}\>⚠ Retry\</Button\>;  
  }

  if (status?.status \=== 'downloading') {  
    return (  
      \<div\>  
        \<ProgressBar value={status.progress\_percent} /\>  
        \<Text\>  
          {status.progress\_percent}%   
          ({formatBytes(status.bytes\_downloaded)} / {formatBytes(status.bytes\_total)})  
        \</Text\>  
      \</div\>  
    );  
  }

  return \<Button onClick={handleDownload}\>Download Model\</Button\>;  
};

---

### **SearchBar with Faceted Filters**

**Layout:**

┌─────────────────────────────────────────────┐  
│ \[🔍 Search services...                   \]  │  
├─────────────────────────────────────────────┤  
│ Filters:                                    │  
│ Category: \[All ▼\]  GPU: \[Any ▼\]            │  
│ RAM: \[Any ▼\]  Tags: \[llm\] \[x\]              │  
└─────────────────────────────────────────────┘

**API Call:**

const { data: results } \= useServiceSearch(query, {  
  category: 'futomaki',  
  gpu\_required: true,  
  min\_ram\_gb: 16,  
  tags: \['llm', 'vector-db'\]  
});

---

### **Admin Bundle Form**

**Layout:**

┌─────────────────────────────────────────────┐  
│ Create New Bundle                           │  
├─────────────────────────────────────────────┤  
│ Name: \[                                   \] │  
│ Type: \[Combo ▼\]                             │  
│ Tagline: \[                                \] │  
│ Description: \[Markdown editor             \] │  
│                                             │  
│ Components:                                 │  
│ \[+ Add Component\]                           │  
│ 1\. \[n8n ▼\] Quantity: \[1\] Optional: \[ \]     │  
│ 2\. \[Ollama ▼\] Quantity: \[1\] Optional: \[ \]  │  
│                                             │  
│ Visibility: \[Public ▼\]                      │  
│ Tags: \[llm\] \[workflow\] \[+ Add\]              │  
│                                             │  
│ Hardware Requirements:                      │  
│ RAM: \[16\] GB  CPU: \[4\] cores                │  
│ Storage: \[100\] GB  GPU: \[✓\]                 │  
│                                             │  
│ Setup Time: \[30\] minutes                    │  
│                                             │  
│ \[Preview\]  \[Save Draft\]  \[Publish\]          │  
└─────────────────────────────────────────────┘

**Validation:**

* Name: 3-100 chars, alphanumeric \+ spaces/hyphens  
* Components: At least 1, max 20  
* Tagline: Max 200 chars  
* Description: Max 1000 chars  
* Setup time: 5-1440 minutes

**API Calls:**

1. `POST /api/v2/bundles` \- Create  
2. `PUT /api/v2/bundles/{id}` \- Update  
3. `GET /api/v2/services` \- For component dropdown

---

## **Testing Strategy**

### **OpenAPI Contract Testing**

// tests/api/contract.test.ts  
import { validateAgainstOpenAPI } from 'openapi-validator';  
import openApiSpec from '@/openapi.yaml';

describe('API Contract Tests', () \=\> {  
  it('POST /bundles validates request against schema', async () \=\> {  
    const invalidRequest \= {  
      name: 'AB', // Too short (min 3\)  
      bundle\_type: 'combo',  
      components: \[\]  
    };

    const response \= await fetch('/api/v2/bundles', {  
      method: 'POST',  
      body: JSON.stringify(invalidRequest)  
    });

    expect(response.status).toBe(400);  
    const error \= await response.json();  
    expect(error.error\_code).toBe('INVALID\_BUNDLE\_DATA');  
  });

  it('GET /bundles/{id} returns valid Bundle schema', async () \=\> {  
    const response \= await fetch('/api/v2/bundles/test-id');  
    const bundle \= await response.json();

    const validation \= validateAgainstOpenAPI(  
      bundle,  
      openApiSpec.components.schemas.Bundle  
    );  
    expect(validation.valid).toBe(true);  
  });  
});

### **Playwright E2E Tests**

// tests/e2e/bundle-creation.spec.ts  
import { test, expect } from '@playwright/test';

test('admin can create new bundle', async ({ page }) \=\> {  
  // Login as admin  
  await page.goto('/login');  
  await page.fill('\[name="email"\]', 'admin@test.com');  
  await page.fill('\[name="password"\]', 'password');  
  await page.click('button\[type="submit"\]');

  // Navigate to create bundle  
  await page.goto('/admin/bundles/new');

  // Fill form  
  await page.fill('\[name="name"\]', 'Test Bundle');  
  await page.selectOption('\[name="bundle\_type"\]', 'combo');  
  await page.fill('\[name="tagline"\]', 'A test bundle');  
  await page.fill('\[name="description"\]', 'Full description here');

  // Add components  
  await page.click('button:has-text("Add Component")');  
  await page.selectOption('select\[name="components\[0\].service\_id"\]', 'hosomaki.n8n');  
  await page.fill('input\[name="components\[0\].quantity"\]', '1');

  // Submit  
  await page.click('button:has-text("Publish")');

  // Verify success  
  await expect(page).toHaveURL(/\\/admin\\/bundles\\/\[a-f0-9-\]+/);  
  await expect(page.locator('h1')).toContainText('Test Bundle');  
});

test('user can save bundle to dashboard', async ({ page }) \=\> {  
  // Login as user  
  await page.goto('/login');  
  // ... login

  // View bundle  
  await page.goto('/combos/test-bundle-id');

  // Save to dashboard  
  await page.click('button:has-text("Save to Dashboard")');

  // Verify saved  
  await page.goto('/dashboard/orders');  
  await expect(page.locator('.order-card')).toContainText('Test Bundle');  
});

### **Unit Tests (Backend)**

\# tests/api/test\_bundles.py  
import pytest  
from fastapi.testclient import TestClient

def test\_create\_bundle\_validates\_name\_length(client: TestClient, admin\_token: str):  
    response \= client.post(  
        "/api/v2/bundles",  
        json={  
            "name": "AB",  \# Too short  
            "bundle\_type": "combo",  
            "components": \[{"service\_id": "hosomaki.n8n", "quantity": 1}\]  
        },  
        headers={"Authorization": f"Bearer {admin\_token}"}  
    )  
      
    assert response.status\_code \== 400  
    assert response.json()\["error\_code"\] \== "INVALID\_BUNDLE\_DATA"

def test\_get\_bundle\_components\_includes\_full\_metadata(client: TestClient):  
    bundle\_id \= "test-bundle-uuid"  
      
    response \= client.get(f"/api/v2/bundles/{bundle\_id}/components")  
      
    assert response.status\_code \== 200  
    data \= response.json()  
      
    \# Verify all components have full details  
    for component in data\["components"\]:  
        assert "details" in component  
        assert "volumes" in component\["details"\]  
        assert "scaling" in component\["details"\]  
        assert "network\_profile" in component\["details"\]

---

## **Success Criteria**

### **Phase 2 Completion (API Hardening)**

✅ **All 13+ Critical Endpoints Implemented**

* Bundle CRUD (5 endpoints)  
* Order CRUD (5 endpoints)  
* Order assets (3 endpoints)  
* Model downloads (3 endpoints)  
* Enhanced search (3 endpoints)

✅ **Data Exposure Target: 90%+**

* Volumes, scaling, health checks, networks exposed  
* Full component metadata available via `/bundles/{id}/components`

✅ **OpenAPI Specification**

* Complete OpenAPI 3.1 YAML file  
* Example requests/responses for every endpoint  
* Automated validation in CI/CD

✅ **Authentication & Authorization**

* JWT validation middleware  
* RLS policies for all tables  
* RBAC enforcement (user vs. admin)

✅ **Performance**

* API p95 \< 500ms (catalog endpoints)  
* API p95 \< 2s (compose generation)

✅ **Test Coverage**

* 70%+ backend unit/integration tests  
* Contract tests for all endpoints

---

### **Phase 3 Completion (Frontend Build)**

✅ **All P0 Pages Functional**

* `/menu` \- Service catalog (rolls only)  
* `/bundles` \- Bundle catalog with tabs  
* `/rolls/[cat]/[slug]` \- Roll detail (90% data usage)  
* `/combos/[id]`, `/bento-boxes/[id]`, `/platters/[id]` \- Bundle details  
* `/dashboard` \- User dashboard with orders  
* `/admin/bundles` \- Admin bundle management

✅ **Component Implementation**

* All reusable components built (20+ components)  
* Component-to-endpoint mapping validated  
* State management (Context \+ SWR) implemented

✅ **UI/UX Quality**

* Responsive design (mobile/tablet/desktop)  
* Lighthouse: 90+ performance, 100 accessibility, 90+ SEO  
* Aceternity UI design system consistency

✅ **Test Coverage**

* 40%+ frontend critical path coverage  
* Playwright E2E tests for key flows

---

## **Implementation Timeline**

### **Phase 2: API Hardening (4-6 weeks)**

**Week 1: Foundation**

* API versioning infrastructure  
* Auth middleware (JWT \+ RLS)  
* Error handling framework  
* OpenAPI spec generation setup

**Week 2: Bundle Management**

* POST /bundles (create)  
* GET /bundles/{id} (read)  
* PUT /bundles/{id} (update)  
* DELETE /bundles/{id} (delete)  
* GET /bundles/{id}/components (full metadata)

**Week 3: User Orders**

* POST /orders (save bundle)  
* GET /orders (list)  
* GET /orders/{id} (details)  
* PUT /orders/{id} (update)  
* DELETE /orders/{id} (delete)

**Week 4: User Assets**

* POST /orders/{id}/notes  
* POST /orders/{id}/workflows  
* POST /orders/{id}/datasets

**Week 5: Model Downloads** (parallel with Weeks 2-4)

* GET /models  
* POST /models/download  
* GET /models/status/{job\_id}

**Week 6: Enhanced Search**

* GET /services/search (faceted)  
* GET /services/{id}/bundles  
* GET /bundles/{id}/dependencies  
* POST /recommendations

---

### **Phase 3: Frontend Build (4-5 weeks)**

**Week 1: Core Pages**

* Refactor `/menu` (rolls only)  
* Build `/bundles` (tabbed catalog)  
* Create bundle detail page template

**Week 2: Enhanced Detail Pages**

* Roll detail pages (90% data usage)  
* Add VolumeInfo, NetworkProfiles, ScalingInfo components  
* Implement DependencyTree visualization

**Week 3: User Dashboard**

* Orders list page  
* Order detail page  
* Notes editor  
* Asset attachments UI  
* Model download button with progress

**Week 4: Admin CMS**

* Bundle list page  
* Bundle create/edit form  
* Validation and error handling

**Week 5: Polish & Testing**

* Responsive design pass  
* Accessibility audit  
* Playwright E2E tests  
* Performance optimization

---

## **Storage Implementation Notes**

### **Model Download Storage Options**

**Option 1: Supabase Storage**

* Pros: Integrated auth, CDN, simple API  
* Cons: 1GB free limit (Pro: $10/100GB/month)  
* Best for: MVP, small-scale deployments

**Option 2: S3-Compatible (Backblaze B2)**

* Pros: $5/TB/month, unlimited egress to Cloudflare  
* Cons: Additional service to manage  
* Best for: Production, high-volume

**Option 3: Local Filesystem**

* Pros: Zero cost, full control  
* Cons: No CDN, harder to scale horizontally  
* Best for: Self-hosted only

**Recommendation for Phase 2:**

* Start with Supabase Storage for simplicity  
* Add abstraction layer to swap providers later  
* Document migration path to B2/S3 for production

### **Storage API Design**

// lib/storage/index.ts  
interface StorageProvider {  
  upload(file: File, path: string): Promise\<string\>;  
  download(path: string): Promise\<Blob\>;  
  delete(path: string): Promise\<void\>;  
  getPresignedUrl(path: string, expiresIn: number): Promise\<string\>;  
}

class SupabaseStorage implements StorageProvider {  
  // Implementation  
}

class S3Storage implements StorageProvider {  
  // Implementation  
}

// Factory  
export const storage: StorageProvider \=   
  process.env.STORAGE\_PROVIDER \=== 's3'   
    ? new S3Storage()   
    : new SupabaseStorage();

---

## **Rate Limiting (Future)**

### **Implementation Plan**

// Placeholder for Redis-based rate limiting  
// NOT required for Phase 2, but API designed to support it

// Rate limit tiers  
const RATE\_LIMITS \= {  
  free: { requests: 100, window: 60 \* 60 \* 24 }, // 100/day  
  pro: { requests: 1000, window: 60 \* 60 \* 24 }, // 1000/day  
  team: { requests: 10000, window: 60 \* 60 \* 24 }, // 10k/day  
  enterprise: { requests: Infinity, window: 0 }  
};

// Middleware (pseudo-code)  
async function rateLimitMiddleware(req, res, next) {  
  const userId \= req.user.id;  
  const tier \= req.user.subscription\_tier;  
    
  const key \= \`rate\_limit:${userId}\`;  
  const current \= await redis.incr(key);  
    
  if (current \=== 1\) {  
    await redis.expire(key, RATE\_LIMITS\[tier\].window);  
  }  
    
  if (current \> RATE\_LIMITS\[tier\].requests) {  
    return res.status(429).json({  
      error\_code: 'RATE\_LIMIT\_EXCEEDED',  
      message: \`Rate limit exceeded: ${RATE\_LIMITS\[tier\].requests} requests per ${RATE\_LIMITS\[tier\].window}s\`  
    });  
  }  
    
  res.setHeader('X-RateLimit-Limit', RATE\_LIMITS\[tier\].requests);  
  res.setHeader('X-RateLimit-

