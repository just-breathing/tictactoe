import { useEffect, useState } from "react";
import BoardItem from "./boardItem";

const Board:React.FC = () => {
    enum Player {
        p1='X',
        p2='O'
    }
    type Counter={
        [Player.p1]:0,
        [Player.p2]:0
    }
    const [values,setValues]=useState<string[]>(Array(9).fill(null))
    const [current,setCurrent]=useState<Player>(Player.p1);
    const [counter,setCounter]=useState<Counter>({X:0,O:0});
const checkWinner = (values:string[]):boolean => {

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (values[a] && values[a] === values[b] && values[a] === values[c]) {
            return true;
        }
    }

    return false;

}

    const handleClick = async(idx:number) => {
        if(values[idx]){
            alert(`Already Filled by player ${values[idx]}`);
            return
        }
        const newValues = [...values]
        newValues[idx] = current
        setValues(()=>[...newValues])

        const win = checkWinner(newValues);
        if(win)
            {
                setTimeout(()=>{alert(`Winner is ${current}`)},1);
                console.log("Found winner");
            }
        setCurrent((current)=>(current===Player.p1)?Player.p2:Player.p1)

        setCounter(counter=>{
            return {...counter,[current]:counter[current]+1}})

    }



    return ( 
        <div className="text-3xl font-bold grid justify-center " >
            <h3>Tic Tac Toe Board </h3>
            <div className="grid grid-cols-2  " >
            <h5 className=" grid place-items-center" >Total Moves</h5>
            <div className="grid grid-rows-2" >
                <h5>{Player.p1}: {counter.X}</h5>

                <h5>{Player.p2}: {counter.O}</h5>
            </div>
            </div>
        <div className="grid grid-cols-3 justify-center w-max h-max mt-[50px]" >
        {
            values.map((value:string|null,idx:number)=> {return <BoardItem value={value} key={idx} handleClick={() => handleClick(idx)} />})
        }
        </div>
        <h5 className="mt-5" >Current Player : {current}</h5>

        </div> 
    );
}
 
export default Board;