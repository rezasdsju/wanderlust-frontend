'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { LogOut, User, CalendarCheck } from "lucide-react"
import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { authClient } from "@/lib/auth-client"

interface IUser {
    id: string
    name: string
    email: string
    image?: string | null
    createdAt: Date
    updatedAt: Date
}

const PopOver = ({ user }: { user: IUser }) => {
    const router = useRouter()

    const handleLogOut = async () => {
        await authClient.signOut()
        router.replace('/')
        router.refresh()
    }

    return (
        <Popover>
            <PopoverTrigger
                render={
                    <button
                        type="button"
                        aria-label="Account menu"
                        className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white py-1 pl-1 pr-3 transition hover:border-blue-500"
                    >
                        <Avatar className="size-8">
                            <AvatarImage src={user.image || ''} alt={user.name} />
                            <AvatarFallback className="bg-blue-100 text-sm font-semibold text-blue-700">
                                {user.name?.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <span className="hidden max-w-28 truncate text-sm font-medium text-neutral-700 sm:block">
                            {user.name}
                        </span>
                    </button>
                }
            />
            <PopoverContent align="end" className="w-64 p-0">
                <PopoverHeader className="flex-row items-center gap-3 border-b border-neutral-100 p-4">
                    <Avatar className="size-10">
                        <AvatarImage src={user.image || ''} alt={user.name} />
                        <AvatarFallback className="bg-blue-100 font-semibold text-blue-700">
                            {user.name?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                        <PopoverTitle className="truncate">{user.name}</PopoverTitle>
                        <PopoverDescription className="truncate text-xs">
                            {user.email}
                        </PopoverDescription>
                    </div>
                </PopoverHeader>

                <div className="flex flex-col p-1.5">
                    <Link
                        href="/profile"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-50"
                    >
                        <User className="size-4" />
                        Profile
                    </Link>
                    <Link
                        href="/my-bookings"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-50"
                    >
                        <CalendarCheck className="size-4" />
                        My Bookings
                    </Link>
                    <button
                        type="button"
                        onClick={handleLogOut}
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-rose-600 transition hover:bg-rose-50"
                    >
                        <LogOut className="size-4" />
                        Sign Out
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default PopOver