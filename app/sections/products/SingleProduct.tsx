import * as React from "react"

import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "~/components/ui/carousel"

export default function SingleProduct () {
  const [hover, setHover] = React.useState(false)


  return (
      <Carousel
        className="w-full lg:w-1/2"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="rounded-none border-0">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={`left-1 border-0 hidden transition ${hover && "flex"}`}/>
        <CarouselNext
            className={`right-1 border-0 hidden transition ${hover && "flex"}`}
        />
      </Carousel>
  )
}
