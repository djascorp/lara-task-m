import {PropsWithChildren} from 'react';

export default function AuthLayout({children}: PropsWithChildren) {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <div className="flex-1 flex">
                <div className={"flex-1 flex items-center justify-center"}>
                    {children}
                </div>
            </div>
        </div>
    );
}
