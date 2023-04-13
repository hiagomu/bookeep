import { FieldValues, UseFormRegister } from "react-hook-form"

export interface PostType {
    id: string
    user: User
    price: string
    likes?: Like[]
    title: string
    seller: string
    coupon?: string
    category: string
    status: "rejected" | "pending" | "published"
    saleLink: string
    comments?: Comment[]
    createdAt: Date
    updatedAt: Date
    marketplace: string
    description?: string
    bookImageURL: string
    userProfileURL: string
    isUserVerified: boolean
    isMarketplaceVerified: boolean
}

export interface PostBoxType {
    id: string
    user: User
    price: string
    likes?: Like[]
    title: string
    seller: string
    coupon: string
    category: string,
    saleLink: string,
    comments?: Comment[]
    status: "rejected" | "pending" | "published"
    createdAt: Date
    updatedAt: Date
    marketplace: string
    description: string
    bookImageURL: string
    interactions?: boolean 
    userProfileURL: string
    isUserVerified: boolean
    isMarketplaceVerified: boolean
}

export interface PostDetailedType {
    id: string
    user: User
    title: string
    price: string
    likes?: Like[]
    seller: string
    comments?: Comment[]
    createdAt: Date
    status: "rejected" | "pending" | "published"
    description?: string
    bookImageURL: string
}

export interface Like {
    id: string
    postId: string
    userId: string
}

export interface Comment {
    id: string
    user: User
    userId: string
    postId: string
    message: string
    createdAt: string
}

export interface User {
    id: string
    bio?: string
    createdAt: Date
    interests: string[]
    name: string
    email: string
    image: string
    emailVerified: boolean | null
}

export interface InteractionsType {
    id: string
    likes?: Like[]
    little?: boolean
    comments: number
}

export interface ImageInputType {
    id: string
    alt: string
    name: string
    title: string
    register: UseFormRegister<FieldValues>
    innerText: string
    errorMessage: string
    setProductImage: (productImage: string) => void
}

export interface PostInputType {
    id: string
    name: string
    type?: "text" | "url" | "number"
    title: string
    element: "input" | "select" | "textarea"
    isSmall?: boolean
    options?: {
        value: string
        name: string
    }[]
    register: UseFormRegister<FieldValues>
    placeholder?: string
    errorMessage: string
}

export interface PostSkeletonType {
    skeletonColorsLight: {
        baseColor: string
        highlightColor: string
    }
    skeletonColorsDark: {
        baseColor: string
        highlightColor: string
    }
}

export interface PricingBoxType {
    price: string
    seller: string
    coupon?: string
    saleLink: string
}