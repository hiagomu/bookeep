import AuthContext from "@/app/auth/AuthContext";
import type { Meta, StoryObj } from "@storybook/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Post } from "./Post"

const queryClient = new QueryClient()

const meta: Meta<typeof Post> = {
    component: Post,
    title: "Post",
    decorators: [
        (Story) => (
            <QueryClientProvider client={queryClient}>
                <Story />
            </QueryClientProvider>
        ),
        (Story) => (
            <AuthContext>
                <Story />
            </AuthContext>
        ),
    ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Published: Story = {
    args: {
        bookImageURL: "https://bookeep-images.s3.amazonaws.com/eb3f3mammr8-corredor_jpg",
        category: "terror",
        createdAt: new Date(),
        updatedAt: new Date(),
        isOwner: true,
        id: "1",
        isUserVerified: true,
        isMarketplaceVerified: true,
        interactions: true,
        userProfileURL: "https://profile-example.com",
        saleLink: "https://sale-example.com",
        title: "Por um corredor escuro",
        marketplace: "Amazon",
        price: "15",
        status: "published",
        seller: "Amazon",
        user: {
            createdAt: new Date(),
            email: "hiagomuuu@gmail.com",
            emailVerified: true,
            id: "1",
            image: "https://lh3.googleusercontent.com/a/AAcHTtdvomh5gWfFDJf3BdrF80YCn-NYfx-mltKgAw5maQ=s96-c",
            interests: ["books"],
            name: "John Doe",
        }
    }
}

export const PendingModView: Story = {
    args: {
        bookImageURL: "https://bookeep-images.s3.amazonaws.com/eb3f3mammr8-corredor_jpg",
        category: "terror",
        createdAt: new Date(),
        updatedAt: new Date(),
        isOwner: true,
        id: "1",
        isUserVerified: true,
        isMarketplaceVerified: true,
        interactions: false,
        userProfileURL: "https://profile-example.com",
        saleLink: "https://sale-example.com",
        title: "Por um corredor escuro",
        marketplace: "Amazon",
        price: "15",
        status: "pending",
        seller: "Amazon",
        user: {
            createdAt: new Date(),
            email: "hiagomuuu@gmail.com",
            emailVerified: true,
            id: "1",
            image: "https://lh3.googleusercontent.com/a/AAcHTtdvomh5gWfFDJf3BdrF80YCn-NYfx-mltKgAw5maQ=s96-c",
            interests: ["books"],
            name: "John Doe",
        }
    }
}

export const Rejected: Story = {
    args: {
        bookImageURL: "https://bookeep-images.s3.amazonaws.com/eb3f3mammr8-corredor_jpg",
        category: "terror",
        createdAt: new Date(),
        updatedAt: new Date(),
        isOwner: true,
        id: "1",
        isUserVerified: true,
        isMarketplaceVerified: true,
        interactions: true,
        userProfileURL: "https://profile-example.com",
        saleLink: "https://sale-example.com",
        title: "Por um corredor escuro",
        marketplace: "Amazon",
        price: "15",
        status: "rejected",
        seller: "Amazon",
        user: {
            createdAt: new Date(),
            email: "hiagomuuu@gmail.com",
            emailVerified: true,
            id: "1",
            image: "https://lh3.googleusercontent.com/a/AAcHTtdvomh5gWfFDJf3BdrF80YCn-NYfx-mltKgAw5maQ=s96-c",
            interests: ["books"],
            name: "John Doe",
        }
    }
}