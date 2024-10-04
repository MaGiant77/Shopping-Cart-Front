
export default function ShowCars({cars}){
    return (
        <ul className="group flex-col px-80 py-44 bg-amber-300 h-screen">
            {cars.map((car, id)=>(
                <li key={id} className="p-2 flex" >
                    <span className="w-32">{car.productName}</span><span >{car.value}</span>
                </li>
            ))}
        </ul>
    );
}

