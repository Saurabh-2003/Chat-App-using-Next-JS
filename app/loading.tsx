import { momentum } from 'ldrs'


export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <>
            <div className="w-screen h-screen gap-x-2 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full ease-in-out delay-75 bg-black animate-ping"></div>
                <div className="w-4 h-4 rounded-full ease-in-out delay-100 bg-black animate-ping"></div>
                <div className="w-4 h-4 rounded-full ease-in-out delay-150 bg-black animate-ping"></div>
            </div>
        </>
    )
}   