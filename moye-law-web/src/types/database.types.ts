export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            articles: {
                Row: {
                    id: string
                    slug: string
                    title: string
                    summary: string | null
                    content: string | null
                    image_url: string | null
                    author: string | null
                    tags: string[] | null
                    published_at: string | null
                    created_at: string | null
                }
                Insert: {
                    id?: string
                    slug: string
                    title: string
                    summary?: string | null
                    content?: string | null
                    image_url?: string | null
                    author?: string | null
                    tags?: string[] | null
                    published_at?: string | null
                    created_at?: string | null
                }
                Update: {
                    id?: string
                    slug?: string
                    title?: string
                    summary?: string | null
                    content?: string | null
                    image_url?: string | null
                    author?: string | null
                    tags?: string[] | null
                    published_at?: string | null
                    created_at?: string | null
                }
            }
            podcasts: {
                Row: {
                    id: string
                    slug: string
                    title: string
                    description: string | null
                    audio_url: string | null
                    transcript: string | null
                    duration: string | null
                    published_at: string | null
                    created_at: string | null
                }
                Insert: {
                    id?: string
                    slug: string
                    title: string
                    description?: string | null
                    audio_url?: string | null
                    transcript?: string | null
                    duration?: string | null
                    published_at?: string | null
                    created_at?: string | null
                }
                Update: {
                    id?: string
                    slug?: string
                    title?: string
                    description?: string | null
                    audio_url?: string | null
                    transcript?: string | null
                    duration?: string | null
                    published_at?: string | null
                    created_at?: string | null
                }
            }
            books: {
                Row: {
                    id: string
                    title: string
                    author: string
                    description: string | null
                    cover_url: string | null
                    purchase_link: string | null
                    featured: boolean | null
                    created_at: string | null
                }
                Insert: {
                    id?: string
                    title: string
                    author: string
                    description?: string | null
                    cover_url?: string | null
                    purchase_link?: string | null
                    featured?: boolean | null
                    created_at?: string | null
                }
                Update: {
                    id?: string
                    title?: string
                    author?: string
                    description?: string | null
                    cover_url?: string | null
                    purchase_link?: string | null
                    featured?: boolean | null
                    created_at?: string | null
                }
            }
            faqs: {
                Row: {
                    id: string
                    question: string
                    answer: string
                    category: string | null
                    order_index: number | null
                    created_at: string | null
                }
                Insert: {
                    id?: string
                    question: string
                    answer: string
                    category?: string | null
                    order_index?: number | null
                    created_at?: string | null
                }
                Update: {
                    id?: string
                    question?: string
                    answer?: string
                    category?: string | null
                    order_index?: number | null
                    created_at?: string | null
                }
            }
            case_studies: {
                Row: {
                    id: string
                    slug: string
                    title: string
                    client_type: string | null
                    challenge: string | null
                    solution: string | null
                    result: string | null
                    image_url: string | null
                    created_at: string | null
                }
                Insert: {
                    id?: string
                    slug: string
                    title: string
                    client_type?: string | null
                    challenge?: string | null
                    solution?: string | null
                    result?: string | null
                    image_url?: string | null
                    created_at?: string | null
                }
                Update: {
                    id?: string
                    slug?: string
                    title?: string
                    client_type?: string | null
                    challenge?: string | null
                    solution?: string | null
                    result?: string | null
                    image_url?: string | null
                    created_at?: string | null
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
    }
}
