openapi: 3.1.0 info: title: Sushi Kitchen API version: 2.0.0 description: | Sushi Kitchen API for curated AI infrastructure deployment. This is v2 of the API with enhanced bundle management, user orders, and model downloads.

\#\# Authentication

All authenticated endpoints require a Bearer token (Supabase JWT) in the Authorization header.

\#\# Rate Limiting

\- Free tier: 100 requests/day

\- Pro tier: 1,000 requests/day

\- Team tier: 10,000 requests/day

\- Enterprise tier: Unlimited

contact: name: Sushi Kitchen Support email: [support@sushikitchen.io](mailto:support@sushikitchen.io) license: name: MIT url: [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)

servers:

- url: [https://api.sushikitchen.io/api/v2](https://api.sushikitchen.io/api/v2) description: Production server  
- url: [http://localhost:8000/api/v2](http://localhost:8000/api/v2) description: Local development server

security:

- BearerAuth: \[\]

tags:

- name: Bundles description: Bundle management operations  
- name: Admin description: Admin-only operations  
- name: Orders description: User order management  
- name: Assets description: Order asset attachments (workflows, datasets)  
- name: Models description: Model download management  
- name: Services description: Service discovery and search  
- name: Search description: Advanced search functionality  
- name: Discovery description: Bundle and service discovery  
- name: Dependencies description: Dependency management  
- name: Updates description: Update tracking

components: securitySchemes: BearerAuth: type: http scheme: bearer bearerFormat: JWT description: Supabase JWT token

schemas: \# \============================================ \# BUNDLE SCHEMAS \# \============================================

BundleType:

  type: string

  enum: \[combo, bento\_box, platter\]

  description: Type of bundle

  example: combo

BundleVisibility:

  type: string

  enum: \[public, private, unlisted\]

  description: Who can see this bundle

  example: public

ComponentReference:

  type: object

  required:

    \- service\_id

    \- quantity

  properties:

    service\_id:

      type: string

      description: Service identifier (e.g., "hosomaki.n8n")

      example: hosomaki.n8n

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

HardwareRequirements:

  type: object

  properties:

    min\_ram\_gb:

      type: integer

      minimum: 1

      example: 16

    min\_cpu\_cores:

      type: integer

      minimum: 1

      example: 4

    min\_storage\_gb:

      type: integer

      minimum: 10

      example: 100

    gpu\_required:

      type: boolean

      default: false

BundleStats:

  type: object

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

      example: LLM Starter Pack

    slug:

      type: string

      pattern: '^\[a-z0-9\\-\]+$'

      description: URL-friendly slug (auto-generated if not provided)

      example: llm-starter-pack

    bundle\_type:

      $ref: '\#/components/schemas/BundleType'

    description:

      type: string

      maxLength: 1000

      description: Markdown-formatted description

      example: A complete LLM deployment stack with vector database and workflow automation

    tagline:

      type: string

      maxLength: 200

      description: Short tagline for cards

      example: Everything you need for production LLM apps

    components:

      type: array

      minItems: 1

      maxItems: 20

      items:

        $ref: '\#/components/schemas/ComponentReference'

    visibility:

      $ref: '\#/components/schemas/BundleVisibility'

    tags:

      type: array

      items:

        type: string

      maxItems: 10

      example: \[llm, vector-db, workflows\]

    estimated\_setup\_time\_minutes:

      type: integer

      minimum: 5

      maximum: 1440

      description: Estimated setup time in minutes

      example: 30

    hardware\_requirements:

      $ref: '\#/components/schemas/HardwareRequirements'

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

      $ref: '\#/components/schemas/HardwareRequirements'

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

      example: 550e8400-e29b-41d4-a716-446655440000

    name:

      type: string

      example: LLM Starter Pack

    slug:

      type: string

      example: llm-starter-pack

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

      $ref: '\#/components/schemas/HardwareRequirements'

    created\_by:

      type: string

      format: uuid

      description: User ID of creator

    created\_at:

      type: string

      format: date-time

      example: '2025-10-09T10:30:00Z'

    updated\_at:

      type: string

      format: date-time

    stats:

      $ref: '\#/components/schemas/BundleStats'

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

      example: hosomaki.n8n

    name:

      type: string

      example: n8n

    category:

      type: string

      example: hosomaki

    description:

      type: string

    image:

      type: string

      description: Docker image

      example: n8nio/n8n:latest

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

          example: /healthz

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

      example: \[database.postgres, cache.redis\]

    provides:

      type: array

      items:

        type: string

      description: Provided capabilities

      example: \[workflow.automation\]

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

  example: active

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

      example: My Production AI Stack

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

WorkflowAsset:

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

DatasetAsset:

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

OrderAssets:

  type: object

  properties:

    workflows:

      type: array

      items:

        $ref: '\#/components/schemas/WorkflowAsset'

    datasets:

      type: array

      items:

        $ref: '\#/components/schemas/DatasetAsset'

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

      $ref: '\#/components/schemas/OrderAssets'

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

  example: huggingface

ModelStatus:

  type: string

  enum: \[available, downloading, ready, failed\]

  description: Download/availability status

  example: available

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

      example: llama-3.1-8b-instruct

    name:

      type: string

      example: Llama 3.1 8B Instruct

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

      example: Q4\_K\_M

    tags:

      type: array

      items:

        type: string

      example: \[llm, instruction-following, 8b-params\]

    license:

      type: string

      example: Llama 3.1 Community License

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

      example: llama-3.1-8b-instruct

    storage\_location:

      type: string

      description: Optional custom storage path

      example: /data/models/llama-3.1

DownloadStatus:

  type: string

  enum: \[queued, downloading, extracting, completed, failed\]

  example: downloading

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

      $ref: '\#/components/schemas/DownloadStatus'

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

      example: futomaki

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

      example: Provides required capability database.postgres

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

      example: BUNDLE\_NOT\_FOUND

    message:

      type: string

      description: Human-readable error message

      example: Bundle with ID '123' does not exist

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

# \============================================

# ENDPOINTS

# \============================================

paths:

# \============================================

# BUNDLE MANAGEMENT

# \============================================

/bundles: post: summary: Create new bundle tags: \[Bundles, Admin\] security: \- BearerAuth: \[\] requestBody: required: true content: application/json: schema: $ref: '\#/components/schemas/BundleCreate' example: name: LLM Starter Pack bundle\_type: combo description: Complete LLM deployment with vector DB and workflows tagline: Everything for production LLM apps components: \- service\_id: hosomaki.n8n quantity: 1 \- service\_id: futomaki.ollama quantity: 1 \- service\_id: futomaki.qdrant quantity: 1 visibility: public tags: \[llm, vector-db, workflows\] estimated\_setup\_time\_minutes: 30 hardware\_requirements: min\_ram\_gb: 16 min\_cpu\_cores: 4 min\_storage\_gb: 100 gpu\_required: true responses: '201': description: Bundle created successfully content: application/json: schema: $ref: '\#/components/schemas/Bundle' '400': description: Invalid request content: application/json: schema: $ref: '\#/components/schemas/Error' example: error\_code: INVALID\_BUNDLE\_DATA message: Bundle name must be 3-100 characters details: field: name constraint: minLength request\_id: req\_abc123 timestamp: '2025-10-09T10:30:00Z' '401': $ref: '\#/components/responses/Unauthorized' '403': $ref: '\#/components/responses/Forbidden'

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

/bundles/{id}: parameters: \- name: id in: path required: true schema: type: string format: uuid description: Bundle UUID

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

            error\_code: BUNDLE\_NOT\_FOUND

            message: Bundle with ID '550e8400-e29b-41d4-a716-446655440000' does not exist

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

      $ref: '\#/components/responses/BadRequest'

    '401':

      $ref: '\#/components/responses/Unauthorized'

    '403':

      $ref: '\#/components/responses/Forbidden'

    '404':

      $ref: '\#/components/responses/NotFound'

delete:

  summary: Delete bundle

  tags: \[Bundles, Admin\]

  security:

    \- BearerAuth: \[\]

  responses:

    '204':

      description: Bundle deleted successfully

    '401':

      $ref: '\#/components/responses/Unauthorized'

    '403':

      $ref: '\#/components/responses/Forbidden'

    '404':

      $ref: '\#/components/responses/NotFound'

/bundles/{id}/components: parameters: \- name: id in: path required: true schema: type: string format: uuid

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

    '404':

      $ref: '\#/components/responses/NotFound'

# \============================================

# USER ORDERS

# \============================================

/orders: post: summary: Save bundle to user account tags: \[Orders\] security: \- BearerAuth: \[\] requestBody: required: true content: application/json: schema: $ref: '\#/components/schemas/OrderCreate' example: bundle\_id: 550e8400-e29b-41d4-a716-446655440000 custom\_name: My Production AI Stack notes: | \# Deployment Notes

            Using this for production workloads

  responses:

    '201':

      description: Order created

      content:

        application/json:

          schema:

            $ref: '\#/components/schemas/Order'

    '400':

      $ref: '\#/components/responses/BadRequest'

    '401':

      $ref: '\#/components/responses/Unauthorized'

    '404':

      description: Bundle not found

      content:

        application/json:

          schema:

            $ref: '\#/components/schemas/Error'

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

      $ref: '\#/components/responses/Unauthorized'

/orders/{id}: parameters: \- name: id in: path required: true schema: type: string format: uuid

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

      $ref: '\#/components/responses/Unauthorized'

    '403':

      $ref: '\#/components/responses/Forbidden'

    '404':

      $ref: '\#/components/responses/NotFound'

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

      $ref: '\#/components/responses/BadRequest'

    '401':

      $ref: '\#/components/responses/Unauthorized'

    '403':

      $ref: '\#/components/responses/Forbidden'

    '404':

      $ref: '\#/components/responses/NotFound'

delete:

  summary: Delete order

  tags: \[Orders\]

  security:

    \- BearerAuth: \[\]

  responses:

    '204':

      description: Order deleted

    '401':

      $ref: '\#/components/responses/Unauthorized'

    '403':

      $ref: '\#/components/responses/Forbidden'

    '404':

      $ref: '\#/components/responses/NotFound'

# \============================================

# ORDER ASSETS

# \============================================

/orders/{id}/notes: parameters: \- name: id in: path required: true schema: type: string format: uuid

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

  responses:

    '200':

      description: Notes updated

      content:

        application/json:

          schema:

            $ref: '\#/components/schemas/Order'

    '400':

      $ref: '\#/components/responses/BadRequest'

    '401':

      $ref: '\#/components/responses/Unauthorized'

    '403':

      $ref: '\#/components/responses/Forbidden'

    '404':

      $ref: '\#/components/responses/NotFound'

/orders/{id}/workflows: parameters: \- name: id in: path required: true schema: type: string format: uuid

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

          name: Customer Support Workflow

          url: https://n8n.example.com/workflow/customer-support-v2

          metadata:

            workflow\_id: workflow\_abc123

            version: '2.1'

  responses:

    '201':

      description: Workflow attached

      content:

        application/json:

          schema:

            $ref: '\#/components/schemas/Order'

    '400':

      $ref: '\#/components/responses/BadRequest'

    '401':

      $ref: '\#/components/responses/Unauthorized'

    '403':

      $ref: '\#/components/responses/Forbidden'

    '404':

      $ref: '\#/components/responses/NotFound'

/orders/{id}/datasets: parameters: \- name: id in: path required: true schema: type: string format: uuid

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

          name: Customer FAQs Vector DB

          url: s3://my-bucket/datasets/customer-faqs-vectors.parquet

          metadata:

            format: parquet

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

      $ref: '\#/components/responses/BadRequest'

    '401':

      $ref: '\#/components/responses/Unauthorized'

    '403':

      $ref: '\#/components/responses/Forbidden'

    '404':

      $ref: '\#/components/responses/NotFound'

# \============================================

# MODEL DOWNLOADS

# \============================================

/models: get: summary: List available and downloaded models tags: \[Models\] security: \- BearerAuth: \[\] parameters: \- name: source in: query schema: $ref: '\#/components/schemas/ModelSource' \- name: status in: query schema: $ref: '\#/components/schemas/ModelStatus' \- name: tags in: query schema: type: array items: type: string style: form explode: true \- name: page in: query schema: type: integer default: 1 \- name: page\_size in: query schema: type: integer default: 20 responses: '200': description: List of models content: application/json: schema: type: object properties: models: type: array items: $ref: '\#/components/schemas/Model' meta: $ref: '\#/components/schemas/PaginationMeta' '401': $ref: '\#/components/responses/Unauthorized'

/models/download: post: summary: Initiate model download tags: \[Models\] security: \- BearerAuth: \[\] requestBody: required: true content: application/json: schema: $ref: '\#/components/schemas/ModelDownloadRequest' example: model\_id: llama-3.1-8b-instruct storage\_location: /data/models/llama-3.1 responses: '202': description: Download initiated content: application/json: schema: $ref: '\#/components/schemas/ModelDownloadStatus' example: job\_id: job\_abc123xyz model\_id: llama-3.1-8b-instruct status: queued progress\_percent: 0 bytes\_downloaded: 0 bytes\_total: 8589934592 started\_at: '2025-10-09T10:30:00Z' '400': $ref: '\#/components/responses/BadRequest' '401': $ref: '\#/components/responses/Unauthorized' '409': description: Model already downloaded or download in progress content: application/json: schema: $ref: '\#/components/schemas/Error'

/models/status/{job\_id}: parameters: \- name: job\_id in: path required: true schema: type: string

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

            job\_id: job\_abc123xyz

            model\_id: llama-3.1-8b-instruct

            status: downloading

            progress\_percent: 42.5

            bytes\_downloaded: 3650722201

            bytes\_total: 8589934592

            estimated\_completion\_seconds: 180

            started\_at: '2025-10-09T10:30:00Z'

    '401':

      $ref: '\#/components/responses/Unauthorized'

    '404':

      $ref: '\#/components/responses/NotFound'

# \============================================

# ADVANCED SEARCH

# \============================================

/services/search: get: summary: Advanced service search with faceted filtering tags: \[Services, Search\] parameters: \- name: q in: query required: true schema: type: string description: Search query example: vector database \- name: category in: query schema: type: string example: futomaki \- name: gpu in: query schema: type: boolean description: Filter by GPU requirement \- name: min\_ram\_gb in: query schema: type: integer \- name: tags in: query schema: type: array items: type: string style: form explode: true \- name: provides in: query schema: type: array items: type: string style: form explode: true description: Filter by provided capabilities \- name: page in: query schema: type: integer default: 1 \- name: page\_size in: query schema: type: integer default: 20 responses: '200': description: Search results content: application/json: schema: $ref: '\#/components/schemas/ServiceSearchResponse'

/services/{id}/bundles: parameters: \- name: id in: path required: true schema: type: string example: hosomaki.n8n

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

      $ref: '\#/components/responses/NotFound'

/bundles/{id}/dependencies: parameters: \- name: id in: path required: true schema: type: string format: uuid

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

    '404':

      $ref: '\#/components/responses/NotFound'

/recommendations: post: summary: Get personalized bundle recommendations tags: \[Discovery\] security: \- BearerAuth: \[\] requestBody: required: true content: application/json: schema: type: object properties: use\_case: type: string example: AI chatbot with RAG preferences: type: object properties: max\_setup\_time\_minutes: type: integer max\_ram\_gb: type: integer gpu\_available: type: boolean responses: '200': description: Recommended bundles content: application/json: schema: type: object properties: recommendations: type: array items: type: object properties: bundle: $ref: '\#/components/schemas/Bundle' score: type: number format: float description: Relevance score (0-1) reasoning: type: string description: Why this bundle was recommended '400': $ref: '\#/components/responses/BadRequest' '401': $ref: '\#/components/responses/Unauthorized'

# \============================================

# UPDATE TRACKING

# \============================================

/orders/{id}/updates: parameters: \- name: id in: path required: true schema: type: string format: uuid

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

            order\_id: order\_abc123

            updates\_available: true

            saved\_version: 1.2.0

            current\_version: 1.3.0

            changes:

              \- type: component\_updated

                description: n8n upgraded from 1.20.0 to 1.25.0

                breaking: false

              \- type: component\_added

                description: Added optional Grafana monitoring

                breaking: false

    '401':

      $ref: '\#/components/responses/Unauthorized'

    '404':

      $ref: '\#/components/responses/NotFound'

# \============================================

# REUSABLE RESPONSES

# \============================================

components: responses: BadRequest: description: Invalid request content: application/json: schema: $ref: '\#/components/schemas/Error'

Unauthorized:

  description: Unauthorized \- authentication required

  content:

    application/json:

      schema:

        $ref: '\#/components/schemas/Error'

      example:

        error\_code: UNAUTHORIZED

        message: Authentication required

Forbidden:

  description: Forbidden \- insufficient permissions

  content:

    application/json:

      schema:

        $ref: '\#/components/schemas/Error'

      example:

        error\_code: FORBIDDEN

        message: You do not have permission to perform this action

NotFound:

  description: Resource not found

  content:

    application/json:

      schema:

        $ref: '\#/components/schemas/Error'

      example:

        error\_code: RESOURCE\_NOT\_FOUND

        message: The requested resource does not exist  
