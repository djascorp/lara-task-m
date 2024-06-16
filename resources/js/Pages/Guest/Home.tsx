import { Head, Link } from "@inertiajs/react";
import {PageProps} from "@/types";
import Guest from "@/Layouts/GuestLayout";
import {Button} from "@/Components/ui/button";

export default function Home({ auth }: PageProps){
    return (
        <Guest>
            <Head title="Your fully customizable Task Managment" />
            <div className={"flex-1 flex items-center"}>
                <div className="container flex flex-col md:flex-row pb-24">
                    <div className="flex-1 h-full flex flex-col gap-3">
                        <h1 className="text-3xl">
                            Make Your Own
                            Project Management
                        </h1>
                        <h3 className={"text-lg text-muted-foreground"}>
                            Create, customize, Extend your own project management or use what the others created for you
                        </h3>
                        <div className={"flex flex-col sm:flex-row gap-2"}>
                            <Link href={route("login")}>
                                <Button>Getting Started</Button>
                            </Link>

                            <Button>Browse Template</Button>
                        </div>
                    </div>
                    <div className="flex-1 h-full"></div>
                </div>
            </div>

        </Guest>
    );
}
