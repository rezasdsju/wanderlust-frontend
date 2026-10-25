'use client'
import {
    Dialog,

    DialogContent,
    DialogDescription,

    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { LuPencil } from "react-icons/lu"
import { Textarea } from "../ui/textarea"
import { IDestination } from "@/types/destinationType"
import React from "react"
import { useRouter } from "next/navigation"




const categories = [
    "Beach",
    "Mountain",
    "Adventure",
    "Cultural",
    "Historical",
    "Wildlife",
    "City Tour",
    "Island",
    "Desert",
    "Religious",
];
const countries = [
    "Bangladesh",
    "India",
    "Nepal",
    "Bhutan",
    "Sri Lanka",
    "Maldives",
    "Thailand",
    "Malaysia",
    "Indonesia",
    "Singapore",
    "Japan",
    "Switzerland",
    "France",
    "Italy",
    "United States",
];



export function EditDestination({ destination }: { destination: IDestination }) {
    const router = useRouter()
    const handleUpdate = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const updatedData = Object.fromEntries(formData.entries())
        // console.log('updatedData: ', updatedData)

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/destinations/${destination._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        })
        if (!res.ok){
            console.log('Not Okay')
            return
        }
        const result = await res.json()
        // console.log('result: ',result)
        if (result.acknowledged){
            console.log('Update Successfull')
            router.refresh()
        }
    }
    return (
        <Dialog>

            <DialogTrigger render={<button
                type="button"
                className="inline-flex h-9 items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 text-sm font-medium text-neutral-700 shadow-sm transition hover:bg-neutral-50"
            >
                <LuPencil className="size-3.5" />Edit
            </button>} />
            <DialogContent className="sm:max-w-sm max-h-[92vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re
                        done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleUpdate} className="space-y-2">
                    <Field>
                        <FieldLabel htmlFor="destination">Destination Name</FieldLabel>
                        <Input
                            id="destination"
                            name="destination"
                            type="text"
                            defaultValue={destination.destination}
                        />
                    </Field>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field>
                            <FieldLabel htmlFor="country">Country</FieldLabel>
                            <Select name="country" defaultValue={destination.country}>
                                <SelectTrigger id="country" className="w-full">
                                    <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                                <SelectContent>
                                    {countries.map((country) => (
                                        <SelectItem key={country} value={country}>
                                            {country}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="category">Category</FieldLabel>
                            <Select name="category" defaultValue={destination.category}>
                                <SelectTrigger id="category" className="w-full">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent >
                                    {categories.map((cat) => (
                                        <SelectItem key={cat} value={cat}>
                                            {cat}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field>
                            <FieldLabel htmlFor="price">Price</FieldLabel>
                            <Input
                                id="price"
                                name="price"
                                type="text"
                                defaultValue={destination.price}
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="duration">Duration</FieldLabel>
                            <Input
                                id="duration"
                                name="duration"
                                type="text"
                                defaultValue={destination.duration}
                            />
                        </Field>
                    </div>

                    <Field>
                        <FieldLabel htmlFor="departure_date">Departure Date</FieldLabel>
                        <Input
                            id="departure_date"
                            name="departure_date"
                            type="date"
                            defaultValue={destination.departure_date}
                        />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="image_url">Image URL</FieldLabel>
                        <Input
                            id="image_url"
                            name="image_url"
                            type="url"
                            defaultValue={destination.image_url}
                        />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="description">Description</FieldLabel>
                        <Textarea
                            id="description"
                            name="description"
                            defaultValue={destination.description}
                        />
                    </Field>

                    <button
                        type="submit"
                        className="rounded-md bg-blue-600 my-5 px-4 py-2 text-white"
                    >
                        Submit
                    </button>
                </form>
            </DialogContent>

        </Dialog>
    )
}
