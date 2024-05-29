
import { FC } from "react";

interface BoardItemProps {
    value: string | null;
    handleClick: () => void;
  }


const BoardItem:FC<BoardItemProps> = ({value,handleClick}) => {

    return ( 
        <div className="text-5xl font-bold border-2 border-black sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] grid place-content-center" onClick={() => handleClick()} >{value}</div>
     );
}
 
export default BoardItem;




