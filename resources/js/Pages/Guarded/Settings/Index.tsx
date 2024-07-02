import {PageProps} from "@/types";
import Layout from "@/Pages/Guarded/Settings/Layout";
import {Head} from "@inertiajs/react";
import {Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator} from "@/Components/ui/breadcrumb";
import {Button} from "@/Components/ui/button";
import {Table, TableBody, TableCell, TableHeader, TableRow} from "@/Components/ui/table";

export default function Settings({}: PageProps) {
    return (
        <Layout current={'general'}>
            <Head title={'General Settings'}/>
            <div className={""}>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>Settings</BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>General</BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className={""}>

                </div>
            </div>
        </Layout>
    );
}
