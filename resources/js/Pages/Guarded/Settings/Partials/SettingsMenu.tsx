import {Link} from "@inertiajs/react";
import {cn} from "@/lib/utils";

export const settingsMenus = [
    {name: "general", title: "General", route: "#"},
    {name: "status-type", title: "Status Type", route: "#"},
    {name: "templates", title: "Templates", route: "#"},
];
export default function SettingsMenu({current}: { current: string }) {

    return (
        <nav
            className="grid gap-4 text-sm text-muted-foreground"
        >
            {settingsMenus.map(menu => (
                <Link
                    key={menu.name}
                    href={menu.route}
                    className={cn(current == menu.name && "font-semibold text-primary")}>{menu.title}</Link>
            ))}
        </nav>
    );
}
