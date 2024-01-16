import { ReactNode } from "react";
import Header from "./header";



export default function Layout ({children}: {children: ReactNode}) {

    return (
        <div className="flex flex-col w-full min-h-screen mx-auto max-w-7xl relative">
            <Header />

            <div>
                {children}
            </div>
        </div>
    )
}