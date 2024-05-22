import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";

 function GetDialog({setDistVal}:any) {
  const [getVal,setVal]=useState(null);
        function handleChange(e:any){
           setVal(e.target.value);
        }

 async function handleSubmit(){
  try {
    const response = await fetch(`http://localhost:8080/get/${getVal}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      const result = await response.json();
      setDistVal(result);
    } else {
      alert('Error deleting data');
    }
  } catch (error) {
    console.error('Error:', error);
  }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Get LRU</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogDescription>
            Enter the Key value of the LRU.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Lru Key
            </Label>
            <Input
              id="getKey"
              className="col-span-3"
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>Get Value</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default GetDialog;