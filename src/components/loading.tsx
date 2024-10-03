
interface LoadingProps{
    text:string
}

export default function LoadingComponent({text}:LoadingProps){
    return(
        <div className="min-h-52 bg-gray-900 bg-opacity-20">
            {text}
        </div>
    )
}