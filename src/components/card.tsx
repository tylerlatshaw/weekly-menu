import * as React from "react";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ ...props }, ref) => (
    <div ref={ref} className={"group flex items-center justify-center rounded-lg bg-gradient-to-br from-green-500 via-cyan-500 via-blue-500 to-purple-500 p-[1.5px] transition duration-300 ease-in-out hover:bg-gradient-to-tl hover:shadow-lg hover:shadow-purple-600/20 hover:transition"}
        {...props}
    />
));
Card.displayName = "Card";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ ...props }, ref) => (
    <div ref={ref} className={"p-5 sm:p-8 h-full w-full items-center rounded-lg bg-gray-800 text-center font-medium tracking-tight transition ease-in-out hover:transition"}
        {...props}
    />
));
CardContent.displayName = "CardContent";

export { Card, CardContent };