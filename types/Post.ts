export interface Post {
    _id?: string
    title: string
    slug: string
    description: string
    content: string
    imageURL: string
    date: string
    tags?: string[]
    url?: string
    isExternal?: boolean
    createdAt?: string
    updatedAt?: string
}
