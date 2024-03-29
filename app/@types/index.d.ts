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

export interface EditPostType {
    id: string
    title: string
    bookImageURL: string
    category: string
    coupon?: string
    description?: string
    saleLink: string
    status: "rejected" | "pending" | "published"
    seller: string
    price: string
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
    isOwner: boolean
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
    category: string
    coupon?: string
    saleLink: string
    comments?: Comment[]
    marketplace: string
    createdAt: Date
    status: "rejected" | "pending" | "published"
    isOwner: boolean
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
    value?: string
    title: string
    register: UseFormRegister<FieldValues>
    innerText: string
    errorMessage: string
    setProductImage: (productImage: string) => void
}

export interface EditImageInputType {
    id: string
    alt: string
    name: string
    value?: string
    title: string
    innerText: string
    setProductImage: (productImage: string) => void
}

export interface PostInputType {
    id: string
    name: string
    value?: any
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

export interface EditPostInputType {
    id: string
    name: string
    value?: any
    type?: "text" | "url" | "number"
    title: string
    element: "input" | "select" | "textarea"
    isSmall?: boolean
    options?: {
        value: string
        name: string
    }[]
    placeholder?: string
    currentPostData: EditPostType
    setCurrentPostData: (currentPostData: EditPostType) => void
}

export interface SelectFilterType {
    id: string
    name: string
    title: string
    options?: {
        value: string
        name: string
    }[]
    register: UseFormRegister<FieldValues>
}

export interface RangeInputType {
    id: string
    name: string
    title: string
    defaultValue: number[]
    register: UseFormRegister<FieldValues>
}

export interface FilterQueryParams {
    orderBy: string
    category: string
    min: number
    max: number
    search: string
}

export interface BookstoresType {
    business_status: string
    vicinity?: string
    formatted_address?: string
    geometry: {
        location: {
            lat: number
            lng: number
        }
        viewport: {
            northeast: {
                lat: number
                lng: number
            }
            southwest: {
                lat: number
                lng: number
            }
        }
    }
    icon: string
    icon_background_color: string
    icon_mask_base_uri: string
    name: string
    opening_hours?: {
        open_now: boolean
    }
    photos?: {
        height: number,
        html_attributions: string[],
        photo_reference: string
        width: number
    }[]
    place_id: string,
    plus_code: {
        compound_code: string,
        global_code: string
    },
    rating: number,
    reference: string
    types: string[]
    user_ratings_total: number
}

export interface SkeletonType {
    skeletonColorsLight: {
        baseColor: string
        highlightColor: string
    }
    skeletonColorsDark: {
        baseColor: string
        highlightColor: string
    }
}

export interface InteractionsSkeletonType {
    skeletonColorsLight: {
        baseColor: string
        highlightColor: string
    }
    skeletonColorsDark: {
        baseColor: string
        highlightColor: string
    }
    isSmall?: boolean
}

export interface PricingBoxType {
    postId: string
    price: string
    seller: string
    coupon?: string
    saleLink: string
}