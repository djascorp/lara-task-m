import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import GuestHeader from "@/Layouts/Partials/GuestHeader";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <GuestHeader />
            <div className="flex-1 flex">
                {children}
            </div>
        </div>
    );
}
