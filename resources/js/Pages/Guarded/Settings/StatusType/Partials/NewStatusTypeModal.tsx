import {Button} from "@/Components/ui/button";
import {Card, CardContent} from "@/Components/ui/card";
import {Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter} from "@/Components/ui/dialog";
import {useForm} from "@inertiajs/react";
import {Label} from "@radix-ui/react-dropdown-menu";
import {Input} from "@/Components/ui/input";

export default function NewStatusTypeModal(){
    const { data, setData, processing, post,errors } = useForm({type_name: ''});

    const onSubmit = () => {
        post(route("status-type.store"))
    }

    return (
        <Dialog>
            <DialogTrigger className={"float-end"}>
                <Button size={"sm"} >New</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>New Status Type</DialogTitle>
                </DialogHeader>
                <div>
                    <Label>Status Type</Label>
                    <Input value={data.type_name} onChange={e => setData('type_name', e.target.value)} />
                </div>
                <DialogFooter>
                    <Button type={"submit"} disabled={processing} onClick={onSubmit}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
