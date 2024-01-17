import { ReactNode } from "react";
import Header from "./header";
import HeaderScrollingText from "~/components/HeaderScrollingText";



export default function Layout ({children}: {children: ReactNode}) {



    return (
        <div className="flex flex-col w-full min-h-screen mx-auto relative">
             <HeaderScrollingText />
            <Header />

            <div>
                {children}
            </div>
        </div>
    )
}