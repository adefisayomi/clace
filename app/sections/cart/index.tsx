import {ShoppingCart} from 'lucide-react'
import { Button } from "~/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"

export default function Cart() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="link">
            <ShoppingCart className='w-5 h-5'/>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          </div>
      </PopoverContent>
    </Popover>
  )
}
