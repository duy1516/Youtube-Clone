"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
    const [data] = trpc.hello.useSuspenseQuery({
        text: "Duy"
    })

    return (
        <div>
            PageClient says :{data.greeting}
        </div>
    )
}