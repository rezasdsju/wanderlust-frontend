'use client'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import React, { useState } from "react";
import { ImageIcon, Loader2, Pencil } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const EditProfileForm = ({ user }: { user: { name: string, email: string, image?: string | null | undefined } }) => {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState(user.image ?? "");

    const handleOpenChange = (nextOpen: boolean) => {
        setOpen(nextOpen);

        if (!nextOpen) {
            setImageUrl(user.image ?? "");
        }

        setErrorMessage(null);
    };

    const handleUpdateProfile = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrorMessage(null)
        setIsSaving(true)

        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries()) as { name: string, image?: string | null | undefined }

        const { error } = await authClient.updateUser({
            name: userData.name,
            image: userData.image
        })

        if (error) {
            setErrorMessage(error.message ?? "We couldn't update your profile. Please try again.")
            setIsSaving(false)
            return
        }

        setIsSaving(false)
        setImageUrl(userData.image ?? "")
        setOpen(false)
        router.refresh()
    }

    return (
        <div>
            <Dialog open={open} onOpenChange={handleOpenChange}>
                <DialogTrigger render={
                    <Button variant="outline" className="w-full">
                        <Pencil />
                        Edit profile
                    </Button>
                } />
                <DialogContent className="sm:max-w-md">
                    <form onSubmit={handleUpdateProfile} className="flex flex-col gap-5">
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Update how your name and photo appear across Wanderlust.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="flex items-center gap-4 rounded-xl border border-border/70 bg-muted/30 p-3.5">
                            <Avatar className="size-14 shadow-sm ring-2 ring-background">
                                <AvatarImage src={imageUrl || ""} alt={user.name} />
                                <AvatarFallback className="bg-linear-to-br from-sky-500 to-blue-600 text-lg font-semibold text-white">
                                    {user.name?.charAt(0).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div className="min-w-0 text-sm">
                                <p className="font-medium">Profile photo</p>
                                <p className=" text-xs text-muted-foreground wrap-break-word">
                                    Paste an image URL to update your avatar.
                                </p>
                            </div>
                        </div>


                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="profile-name">Name</FieldLabel>
                                <Input
                                    id="profile-name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    defaultValue={user?.name}
                                    required
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="profile-image">
                                    <ImageIcon className="size-3.5 text-muted-foreground" />
                                    Profile image URL
                                </FieldLabel>
                                <Input
                                    id="profile-image"
                                    name="image"
                                    type="url"
                                    inputMode="url"
                                    placeholder="https://example.com/avatar.png"
                                    value={imageUrl}
                                    onChange={(event) => setImageUrl(event.target.value)}
                                />
                            </Field>

                            {errorMessage && <FieldError>{errorMessage}</FieldError>}
                        </FieldGroup>

                        <DialogFooter>
                            <DialogClose render={<Button variant="outline" disabled={isSaving}>Cancel</Button>} />
                            <Button type="submit" disabled={isSaving} className="min-w-32">
                                {isSaving && <Loader2 className="animate-spin" />}
                                {isSaving ? "Saving..." : "Save changes"}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default EditProfileForm;
