import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface SetDialogProps {
  setDistVal: (value: any) => void;
}

function SetDialog({ setDistVal }: SetDialogProps) {
  const [lruKey, setLruKey] = useState<number | null>(null);
  const [lruValue, setLruValue] = useState<number | null>(null);
  const [expiryTime, setExpiryTime] = useState<number>(0);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (lruKey === null || lruValue === null || expiryTime < 0) {
      alert("Please fill in all fields with valid values.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/set`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          'key':lruKey,
          'value':lruValue,
          'expiration':expiryTime
        })
      });
      if (response.ok) {
        console.log("done");
      } else {
        alert('Error setting LRU value');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Set LRU</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogDescription>
            Enter the values of the LRU.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="gap-4 py-4">
            <div className="flex flex-col items-center gap-4">
              <Label htmlFor="setKey" className="text-right">
                LRU Key
              </Label>
              <Input
                id="setKey"
                value={lruKey ?? ""}
                type="number"
                onChange={(e) => setLruKey(parseInt(e.target.value))}
                placeholder="Enter the key"
                className="col-span-3"
              />
              <Label htmlFor="setValue" className="text-right">
                LRU Value
              </Label>
              <Input
                id="setValue"
                value={lruValue ?? ""}
                type="number"
                onChange={(e) => setLruValue(parseInt(e.target.value))}
                placeholder="Enter the value"
                className="col-span-3"
              />
              <Label htmlFor="setExpiry" className="text-right">
                Expiration Time (s)
              </Label>
              <Input
                id="setExpiry"
                type="number"
                value={expiryTime}
                onChange={(e) => setExpiryTime(parseInt(e.target.value))}
                placeholder="Enter the expiration time in seconds"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Set Value</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default SetDialog;
