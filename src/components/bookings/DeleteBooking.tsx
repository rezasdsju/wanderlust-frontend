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
import getTokenFromClient from "@/lib/getTokenFromClient"
import { IBooking } from "@/types/bookingType"
import { useRouter } from "next/navigation"
import { LuTrash2 } from "react-icons/lu"


export default function DeleteBooking({ booking }: { booking: IBooking }) {
    const router = useRouter()
    
    const handleDelete = async()=>{
        const token = await getTokenFromClient()
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/my-bookings/${booking._id}`,{
            method:'DELETE',
            headers:{
                authorization: `Bearer ${token}`
            }
        })
        const result = await res.json()
        // console.log(result)
        if (result.acknowledged){
            console.log('Deleted this item')
            router.refresh()

        }
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger render={
                <button
                    type="button"
                    className="inline-flex h-8 items-center gap-1.5 rounded-md border border-red-300 bg-white px-3 text-sm font-medium text-red-500 transition hover:bg-red-50 hover:text-red-600"
                >
                    <LuTrash2 className="size-4" />
                    Cancel
                </button>
            } />
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        booking from our servers.
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
