import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
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
const AddDestinationPage = () => {
    return (
        <div className="max-w-3xl mx-auto my-10 px-2">
            <div>
                <h2 className="text-3xl pb-5">Add New Travel Package</h2>
            </div>
            <div>
                <form className="space-y-2">
                    <Field>
                        <FieldLabel htmlFor="destination">Destination Name</FieldLabel>
                        <Input
                            id="destination"
                            name="destination"
                            type="text"
                            placeholder="Sajek"
                        />
                    </Field>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field>
                            <FieldLabel htmlFor="country">Country</FieldLabel>
                            <Select name="country">
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
                            <Select name="category">
                                <SelectTrigger id="category" className="w-full">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
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
                                placeholder="$1200"
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="duration">Duration</FieldLabel>
                            <Input
                                id="duration"
                                name="duration"
                                type="text"
                                placeholder="5 days"
                            />
                        </Field>
                    </div>

                    <Field>
                        <FieldLabel htmlFor="departure_date">Departure Date</FieldLabel>
                        <Input
                            id="departure_date"
                            name="departure_date"
                            type="date"
                        />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="image_url">Image URL</FieldLabel>
                        <Input
                            id="image_url"
                            name="image_url"
                            type="url"
                            placeholder="https://..."
                        />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="description">Description</FieldLabel>
                        <Textarea
                            id="description"
                            name="description"
                            placeholder="Write a short description"
                        />
                    </Field>

                    <button
                        type="submit"
                        className="rounded-md bg-blue-600 my-5 px-4 py-2 text-white"
                    >
                        Add Package
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddDestinationPage;