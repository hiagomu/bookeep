"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"

const queryClient = new QueryClient()

interface IQueryWrapper {
    children: ReactNode
}

const QueryWrapper = ({children}: IQueryWrapper) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Toaster />
            {children}
        </QueryClientProvider>
    )
}

export default QueryWrapper