import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { s3Storage } from '@payloadcms/storage-s3';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: 'users',
    },
    collections: [
        {
            slug: 'users',
            auth: true,
            access: {
                delete: () => false,
                update: () => true,
            },
            fields: [],
        },
        {
            slug: 'media',
            upload: true,
            fields: [
                {
                    name: 'alt',
                    type: 'text',
                },
            ],
        },
        {
            slug: 'articles',
            admin: {
                useAsTitle: 'title',
            },
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'slug',
                    type: 'text',
                    required: true,
                    unique: true,
                    admin: {
                        position: 'sidebar'
                    }
                },
                {
                    name: 'content',
                    type: 'richText',
                    required: true,
                },
                {
                    name: 'publishedAt',
                    type: 'date',
                    admin: {
                        position: 'sidebar'
                    }
                }
            ],
        },
    ],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || '',
        },
    }),
    plugins: [
        s3Storage({
            collections: {
                media: true,
            },
            bucket: process.env.S3_BUCKET || 'uploads',
            config: {
                credentials: {
                    accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
                },
                region: process.env.S3_REGION || 'us-east-1',
                endpoint: process.env.S3_ENDPOINT || '',
                forcePathStyle: true,
            },
        }),
    ],
    sharp,
});
