
import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import Layout from "~/sections/layout/layout"

export function loader () {
    return {}
}

export default function ProductDetails () {
  return (
    <Layout>
    <div className="w-full h-screen flex items-center justify-center flex-col">
    <Carousel className="w-full max-w-xs ">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus qui reiciendis illo vitae !</h1>

    </div>
    </Layout>
  )
}
