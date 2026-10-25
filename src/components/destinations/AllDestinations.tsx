
'use client'
import {
    NativeSelect,
    NativeSelectOption,
} from "@/components/ui/native-select"
import { useState } from "react";
import type { IDestination } from '@/types/destinationType'
import DestinationCard from './DestinationCard';


type PriceRange = { label: string; min: number; max: number }

const priceRanges = [
    { label: 'Budget (under 10,000)', min: 0, max: 10000 },
    { label: 'Standard (10,000 - 50,000)', min: 10000, max: 50000 },
    { label: 'Premium (50,000 - 150,000)', min: 50000, max: 150000 },
    { label: 'Luxury (150,000+)', min: 150000, max: Infinity },
]



const AllDestinations = ({ destinations }: { destinations: IDestination[] }) => {
    const [category, setCategory] = useState<string>('')
    const [country, setCountry] = useState<string>('')
    const [priceRange, setPriceRange] = useState<PriceRange | null>(null)

    const categories = [...new Set(destinations.map(destination => destination.category))]
    const countries = [...new Set(destinations.map(destination => destination.country))]
    const filteredDestinations = destinations.filter((destination) => {
        const price = Number(destination.price)
        const matchCategory = !category || destination.category === category
        const matchPrice = !priceRange || (price >= priceRange.min && price < priceRange.max)
        const matchCountry = !country || destination.country===country
        return matchCategory && matchPrice && matchCountry
    })

    return (
        <div className="my-10">
            <div className="space-y-1">
                <h2 className="text-3xl">Explore All Destinations</h2>
                <p className="text-neutral-400">Find your perfect travel experience from our curated collection</p>
            </div>
            <div className="flex items-center justify-between gap-4 my-3">
                <div className="flex-1">
                    <NativeSelect className="w-full" onChange={(e) => setCategory(e.target.value)} value={category}>
                        <NativeSelectOption value="">CATEGORY</NativeSelectOption>
                        {
                            categories.map((category, index) => <NativeSelectOption key={index} value={category} className="text-black">{category}</NativeSelectOption>)
                        }

                    </NativeSelect>
                </div>
                <div className="flex-1">
                    <NativeSelect value={priceRange?.label ?? ''} onChange={(e) => setPriceRange(priceRanges.find((r) => r.label === e.target.value) ?? null)} className="w-full" >
                        <NativeSelectOption value={0}>PRICE</NativeSelectOption>
                        {
                            priceRanges.map((range, index) => <NativeSelectOption key={index} value={range.label}>{range.label}</NativeSelectOption>)
                        }

                    </NativeSelect>
                </div>
                <div className="flex-1">
                    <NativeSelect className="w-full" value={country} onChange={(e)=>setCountry(e.target.value as string)}>
                        <NativeSelectOption value="">COUNTRY</NativeSelectOption>
                        {
                            countries.map((country, index)=><NativeSelectOption key={index} value={country}> {country}</NativeSelectOption>)
                        }

                    </NativeSelect>
                </div>
            </div>


            <div>
                <p>Showing {destinations.length} destinations</p>
            </div>
            <div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-4">
                    {
                        filteredDestinations.length>0? filteredDestinations.map((destination: IDestination) => <DestinationCard key={destination._id} destination={destination}></DestinationCard>):
                        <div className="flex items-center justify-center my-20">
                            <div className="max-w-3xl mx-auto">
                                <h2 className="text-3xl text-red-600 text-center ">No Match Found</h2>
                            </div>
                        </div>
                    }
                </div> 

            </div>

        </div>
    );
};

export default AllDestinations;