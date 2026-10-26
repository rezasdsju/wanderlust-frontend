import Link from "next/link"
import { FaUser } from "react-icons/fa6"
import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
const PopOverUserIcon = () => {
        const [open, setOpen] = useState(false)
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
                render={
                    <button
                        type="button"
                        aria-label="Account menu"
                        className="flex size-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition hover:border-blue-500 hover:text-blue-600 sm:hidden"
                    >
                        <FaUser className="size-4" />
                    </button>
                }
            />
            <PopoverContent align="end" className="w-56 p-3">
                <PopoverHeader className="mb-3">
                    <PopoverTitle>Welcome to Wanderlust</PopoverTitle>
                    <PopoverDescription>
                        Log in to book trips and manage your bookings.
                    </PopoverDescription>
                </PopoverHeader>

                <div className="flex flex-col gap-2">
                    <Link
                        href="/signin"
                        onClick={() => setOpen(false)}
                        className="rounded-md border border-neutral-200 px-3 py-2 text-center text-sm font-medium text-neutral-700 transition hover:bg-neutral-50"
                    >
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        onClick={() => setOpen(false)}
                        className="rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                        Sign Up
                    </Link>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default PopOverUserIcon