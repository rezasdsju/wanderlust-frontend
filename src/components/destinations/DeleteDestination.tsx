'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { authClient } from "@/lib/auth-client"
import getTokenFromClient from "@/lib/getTokenFromClient"
import { IDestination } from "@/types/destinationType"
import { useRouter } from "next/navigation"
import React from "react"

import { LuTrash2 } from "react-icons/lu"
import { toast } from "react-toastify"

export default function DeleteDestination({ destination }: { destination: IDestination }) {
    const router = useRouter()
    const {data:session} = authClient.useSession()
    const user = session?.user
    const role = user?.role
    const handleDelete = async () => {
        if (role!=='admin'){
            toast.error('Only admin can delete')
            return
        }
        const token = await getTokenFromClient()
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/destinations/${destination._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        if (!res.ok) {
            console.log('Resposne not okay')
            return
        }
        const result = await res.json()
        // console.log(result)
        if (result.acknowledged) {
            console.log('Delete Successfull')
            router.replace('/all-destinations')
        }
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger render={
                <button
                    type="button"
                    className="inline-flex h-9 items-center gap-2 rounded-md border border-red-300 bg-white px-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
                >
                    <LuTrash2 className="size-3.5" />
                    Delete
                </button>
            } />
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete destination from servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
