'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    ArrowUpRight,
    BadgeCheck,
    CalendarDays,
    Camera,
    Check,
    ChevronRight,
    Compass,
    LogOut,
    Mail,
    ShieldCheck,
    Ticket,
    User,
    UserRound,
} from "lucide-react";
import { cn } from "cn";

import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import EditProfileForm from "@/components/profile/EditProfileForm";

const formatMemberSince = (value?: Date | string | null) => {
    if (!value) {
        return "Not available";
    }

    const date = typeof value === "string" ? new Date(value) : value;

    if (Number.isNaN(date.getTime())) {
        return "Not available";
    }

    return new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
    }).format(date);
};

const getInitials = (name?: string) =>
    name
        ?.trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part.charAt(0).toUpperCase())
        .join("") || "?";

const DetailRow = ({
    icon: Icon,
    label,
    value,
}: {
    icon: typeof User;
    label: string;
    value: string;
}) => (
    <div className="flex min-w-0 items-center gap-3 rounded-xl border border-border/70 bg-muted/30 p-3.5 transition-colors hover:bg-muted/50">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-background text-muted-foreground ring-1 ring-border">
            <Icon className="size-4" />
        </span>
        <div className="min-w-0">
            <dt className="text-[11px] font-medium tracking-wider text-muted-foreground uppercase">
                {label}
            </dt>
            <dd className="mt-0.5 truncate text-sm font-medium">{value}</dd>
        </div>
    </div>
);

const StatTile = ({
    icon: Icon,
    label,
    value,
    tone = "default",
}: {
    icon: typeof User;
    label: string;
    value: string;
    tone?: "default" | "success" | "info";
}) => {
    const tileTones = {
        default: "border-border/70 bg-muted/30",
        success: "border-emerald-500/20 bg-emerald-500/[0.06]",
        info: "border-sky-500/20 bg-sky-500/[0.06]",
    }[tone];

    const iconTones = {
        default: "bg-background text-muted-foreground",
        success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        info: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    }[tone];

    return (
        <div className={cn("rounded-xl border p-3.5", tileTones)}>
            <span
                className={cn(
                    "flex size-8 items-center justify-center rounded-lg ring-1 ring-border/60",
                    iconTones
                )}
            >
                <Icon className="size-4" />
            </span>
            <p className="mt-3 text-[11px] font-medium tracking-wider text-muted-foreground uppercase">
                {label}
            </p>
            <p className="mt-0.5 truncate text-sm font-semibold">{value}</p>
        </div>
    );
};

const QuickLink = ({
    href,
    icon: Icon,
    title,
    description,
}: {
    href: string;
    icon: typeof Ticket;
    title: string;
    description: string;
}) => (
    <Link
        href={href}
        className="group flex items-center gap-3 rounded-xl border border-border/70 p-3.5 transition-colors outline-none hover:border-border hover:bg-muted/50 focus-visible:ring-3 focus-visible:ring-ring/50"
    >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-background group-hover:text-foreground">
            <Icon className="size-4" />
        </span>
        <span className="min-w-0 flex-1">
            <span className="block text-sm font-medium">{title}</span>
            <span className="block truncate text-xs text-muted-foreground">{description}</span>
        </span>
        <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </Link>
);

const ProfileSkeleton = () => (
    <div aria-busy="true" className="animate-pulse">
        <div className="grid items-start gap-6 lg:grid-cols-[20rem_minmax(0,1fr)]">
            <div className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
                <div className="h-24 bg-muted" />
                <div className="px-5 pb-5">
                    <div className="-mt-10 size-20 rounded-full bg-muted ring-4 ring-card" />
                    <div className="mt-3 h-5 w-32 rounded-md bg-muted" />
                    <div className="mt-2 h-4 w-44 max-w-full rounded-md bg-muted" />
                    <div className="mt-5 h-20 rounded-xl bg-muted" />
                    <div className="mt-5 h-8 rounded-lg bg-muted" />
                    <div className="mt-2 h-8 rounded-lg bg-muted" />
                </div>
            </div>
            

            <div className="space-y-6">
                <div className="space-y-4 rounded-xl bg-card p-5 ring-1 ring-foreground/10">
                    <div className="h-5 w-40 rounded-md bg-muted" />
                    <div className="grid gap-3 sm:grid-cols-2">
                        <div className="h-16 rounded-xl bg-muted" />
                        <div className="h-16 rounded-xl bg-muted" />
                    </div>
                </div>
                <div className="space-y-4 rounded-xl bg-card p-5 ring-1 ring-foreground/10">
                    <div className="h-5 w-36 rounded-md bg-muted" />
                    <div className="grid gap-3 sm:grid-cols-3">
                        <div className="h-24 rounded-xl bg-muted" />
                        <div className="h-24 rounded-xl bg-muted" />
                        <div className="h-24 rounded-xl bg-muted" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const MyProfilePage = () => {
    const router = useRouter();
    const { data, isPending } = authClient.useSession();
    const user = data?.user;
    const [isSigningOut, setIsSigningOut] = useState(false);

    const profileCompletion = user
        ? Math.round(
              ([
                  Boolean(user.name),
                  Boolean(user.email),
                  Boolean(user.image),
                  Boolean(user.emailVerified),
              ].filter(Boolean).length /
                  4) *
                  100
          )
        : 0;

    const handleSignOut = async () => {
        setIsSigningOut(true);
        const { data, error } = await authClient.signOut();

        if (error || !data) {
            setIsSigningOut(false);
            return;
        }

        router.replace("/");
        router.refresh();
    };

    return (
        <div className="relative isolate">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-linear-to-b from-sky-100/70 via-cyan-50/40 to-transparent dark:from-sky-950/25 dark:via-cyan-950/10"
            />

            <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
                <nav
                    aria-label="Breadcrumb"
                    className="mb-5 flex items-center gap-1.5 text-xs text-muted-foreground"
                >
                    <Link href="/" className="transition-colors hover:text-foreground">
                        Home
                    </Link>
                    <ChevronRight className="size-3.5" aria-hidden="true" />
                    <span className="font-medium text-foreground">Profile</span>
                </nav>

                <header className="mb-6 sm:mb-8">
                    <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                        Account
                    </p>
                    <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                        My profile
                    </h1>
                    <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
                        Manage your personal information, review your account status, and jump back
                        into your travel plans.
                    </p>
                </header>

                {isPending && <ProfileSkeleton />}

                {!isPending && !user && (
                    <Card className="items-center py-10 text-center sm:py-14">
                        <CardContent className="flex max-w-md flex-col items-center gap-4">
                            <span className="flex size-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                                <UserRound className="size-6" />
                            </span>
                            <div className="space-y-1.5">
                                <h2 className="text-lg font-semibold tracking-tight">
                                    You&apos;re not signed in
                                </h2>
                                <p className="text-sm text-muted-foreground text-pretty">
                                    Sign in to view and update your profile, or create an account to
                                    start planning your next adventure.
                                </p>
                            </div>
                            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                                <Button render={<Link href="/signin">Sign in</Link>} />
                                <Button
                                    variant="outline"
                                    render={<Link href="/signup">Create account</Link>}
                                />
                            </div>
                        </CardContent>
                    </Card>
                )}

                {!isPending && user && (
                    <div className="grid items-start gap-6 lg:grid-cols-[20rem_minmax(0,1fr)]">
                        <aside className="lg:sticky lg:top-24">
                            <Card className="gap-0 overflow-hidden py-0">
                                <div className="relative h-24 w-full overflow-hidden bg-[linear-gradient(135deg,#0284c7_0%,#06b6d4_50%,#2563eb_100%)]">
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0 opacity-60"
                                        style={{
                                            backgroundImage:
                                                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
                                            backgroundSize: "16px 16px",
                                        }}
                                    />
                                    <div
                                        aria-hidden="true"
                                        className="absolute -top-12 -right-10 size-36 rounded-full bg-white/15 blur-2xl"
                                    />
                                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white ring-1 ring-white/25 backdrop-blur-sm">
                                        <Compass className="size-3" aria-hidden="true" />
                                        Traveler
                                    </span>
                                </div>

                                <CardContent className="relative px-5 pb-5">
                                    <div className="relative -mt-10 inline-block">
                                        <Avatar className="size-20 shadow-lg ring-4 ring-card">
                                            <AvatarImage src={user.image || ""} alt={user.name} />
                                            <AvatarFallback className="bg-linear-to-br from-sky-500 to-blue-600 text-2xl font-semibold text-white">
                                                {getInitials(user.name)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <span
                                            className="absolute right-0 bottom-0 flex size-6 items-center justify-center rounded-full bg-emerald-500 text-white ring-4 ring-card"
                                            title="Account active"
                                        >
                                            <BadgeCheck className="size-3.5" aria-hidden="true" />
                                            <span className="sr-only">Account active</span>
                                        </span>
                                    </div>

                                    <h2 className="mt-3 truncate text-xl font-semibold tracking-tight">
                                        {user.name}
                                    </h2>
                                    <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                                        <Mail className="size-3.5 shrink-0" aria-hidden="true" />
                                        <span className="truncate">{user.email}</span>
                                    </p>

                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                                            <BadgeCheck className="size-3.5" aria-hidden="true" />
                                            {user.emailVerified ? "Verified account" : "Account active"}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 text-[11px] font-medium text-sky-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-400">
                                            <CalendarDays className="size-3.5" aria-hidden="true" />
                                            Since {formatMemberSince(user.createdAt)}
                                        </span>
                                    </div>

                                    <div className="mt-5 rounded-xl border border-border/70 bg-muted/30 p-3.5">
                                        <div className="flex items-center justify-between gap-2 text-xs">
                                            <span className="font-medium">Profile completion</span>
                                            <span className="font-medium tabular-nums text-muted-foreground">
                                                {profileCompletion}%
                                            </span>
                                        </div>
                                        <div
                                            role="progressbar"
                                            aria-label="Profile completion"
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            aria-valuenow={profileCompletion}
                                            className="mt-2 h-1.5 overflow-hidden rounded-full bg-border/70"
                                        >
                                            <div
                                                className="h-full rounded-full bg-linear-to-r from-sky-500 to-blue-600 transition-[width] duration-500"
                                                style={{ width: `${profileCompletion}%` }}
                                            />
                                        </div>
                                        <p className="mt-2 flex items-start gap-1.5 text-[11px] leading-relaxed text-muted-foreground">
                                            {profileCompletion === 100 ? (
                                                <>
                                                    <Check
                                                        className="mt-px size-3.5 shrink-0"
                                                        aria-hidden="true"
                                                    />
                                                    Nice — your profile is all set.
                                                </>
                                            ) : !user.image ? (
                                                <>
                                                    <Camera
                                                        className="mt-px size-3.5 shrink-0"
                                                        aria-hidden="true"
                                                    />
                                                    Add a profile photo to finish your profile.
                                                </>
                                            ) : (
                                                <>
                                                    <ShieldCheck
                                                        className="mt-px size-3.5 shrink-0"
                                                        aria-hidden="true"
                                                    />
                                                    Verify your email to secure your account.
                                                </>
                                            )}
                                        </p>
                                    </div>

                                    <div className="mt-5 flex flex-col gap-2">
                                        <EditProfileForm user={user} />
                                        <Button
                                            variant="destructive"
                                            onClick={handleSignOut}
                                            disabled={isSigningOut}
                                            className="w-full"
                                        >
                                            <LogOut />
                                            {isSigningOut ? "Signing out..." : "Sign out"}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </aside>

                        <div className="space-y-6">
                            <Card>
                                <CardHeader className="border-b">
                                    <CardTitle className="flex items-center gap-2">
                                        <User className="size-4 text-muted-foreground" />
                                        Personal information
                                    </CardTitle>
                                    <CardDescription>
                                        The details linked to your Wanderlust account.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <dl className="grid gap-3 sm:grid-cols-2">
                                        <DetailRow
                                            icon={User}
                                            label="Full name"
                                            value={user.name || "Not provided"}
                                        />
                                        <DetailRow
                                            icon={Mail}
                                            label="Email address"
                                            value={user.email}
                                        />
                                    </dl>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="border-b">
                                    <CardTitle className="flex items-center gap-2">
                                        <ShieldCheck className="size-4 text-muted-foreground" />
                                        Account overview
                                    </CardTitle>
                                    <CardDescription>
                                        A quick look at your account status.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-3 sm:grid-cols-3">
                                        <StatTile
                                            icon={BadgeCheck}
                                            label="Email status"
                                            value={user.emailVerified ? "Verified" : "Unverified"}
                                            tone={user.emailVerified ? "success" : "info"}
                                        />
                                        <StatTile
                                            icon={CalendarDays}
                                            label="Member since"
                                            value={formatMemberSince(user.createdAt)}
                                            tone="info"
                                        />
                                        <StatTile
                                            icon={Compass}
                                            label="Account type"
                                            value="Traveler"
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                                        <ShieldCheck className="mt-0.5 size-4 shrink-0" />
                                        Your account details are kept private and are only used to
                                        personalize your experience.
                                    </p>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader className="border-b">
                                    <CardTitle className="flex items-center gap-2">
                                        <Compass className="size-4 text-muted-foreground" />
                                        Quick actions
                                    </CardTitle>
                                    <CardDescription>Pick up where you left off.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        <QuickLink
                                            href="/my-bookings"
                                            icon={Ticket}
                                            title="My bookings"
                                            description="View and manage upcoming trips"
                                        />
                                        <QuickLink
                                            href="/all-destinations"
                                            icon={Compass}
                                            title="Explore destinations"
                                            description="Find your next adventure"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyProfilePage;
