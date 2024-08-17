
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/src/component/ui/dialog"
  

function DonateBox(){
    return(
        <>
            <div className="flex justify-between items-center mb-8">
                <div className="text-4xl font-bold">13 Unique Donors</div>
                <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
            </div>

        </>
    );
};
export default DonateBox;

