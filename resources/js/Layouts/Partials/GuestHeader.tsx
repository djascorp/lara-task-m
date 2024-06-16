import {Link} from "@inertiajs/react";
import {Button} from "@/Components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/Components/ui/sheet";
import {Menu, Package2, Search} from "lucide-react";
import {Input} from "@/Components/ui/input";

export const menus = [
    {title: "Docs", route: "#"},
    {title: "Community", route: "#"},
];
export const WebMenuList = () => (
    <nav
        className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
            <Package2 className="h-6 w-6"/>
            <span className="sr-only">Acme Inc</span>
        </Link>
        {menus.map(menu => (
            <Link
                key={menu.title}
                href={menu.route}
                className="text-muted-foreground transition-colors hover:text-foreground"
            >
                {menu.title}
            </Link>
        ))}

    </nav>
);

export const MobileMenuList = () => (
    <nav className="grid gap-6 text-lg font-medium">
        <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
        >
            <Package2 className="h-6 w-6"/>
            <span className="sr-only">Acme Inc</span>
        </Link>
        {menus.map(menu => (
            <Link
                key={menu.title}
                href={menu.route}
                className="text-muted-foreground hover:text-foreground"
            >
                {menu.title}
            </Link>
        ))}
    </nav>
);
export default function GuestHeader() {
    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <WebMenuList/>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5"/>
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <MobileMenuList/>
                </SheetContent>
            </Sheet>
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="ml-auto flex-1 sm:flex-initial">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                        <Input
                            type="search"
                            placeholder="Search templates..."
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                        />
                    </div>
                </form>
            </div>
        </header>
    );
}

