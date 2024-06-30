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
                    <Button size={"sm"} className={"float-end"}>New</Button>
                    <Table className={"my-2"}>
                        <TableHeader>
                            <TableRow>
                                <TableCell>Status Types</TableCell>
                                <TableCell>Status List</TableCell>
                            </TableRow>

                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Priority</TableCell>
                                <TableCell className={"flex flex-wrap gap-3"}>
                                    <span className={"p-2 border rounded-lg"}>Low</span>
                                    <span className={"p-2 border rounded-lg"}>Medium</span>
                                    <span className={"p-2 border rounded-lg"}>High</span>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </Layout>
    );
}
