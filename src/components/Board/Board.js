import BoardSquare from "../BoardSquare/BoardSquare";
import '../Board/Board.css';
import { useEffect, useState } from "react";

const CustomBoardCreation =({row,col}) => {
    const [player,setPlayer] = useState([0,0,0,0,0,0,0,0,0]);
    const [count,setCount]= useState(0);
    const [win,setWin] = useState(false);
    

    const showAndReset=(msg)=>{
        setWin(true);
        if(win)
        {
            alert(msg);
        }
    }
    useEffect(()=>{
        if(player[0]!== 0 && player[0]===player[1] && player[1]===player[2])
        showAndReset(`player ${player[0]} wins`);
        if(player[3]!== 0 && player[3]===player[4] && player[4]===player[5])
        showAndReset(`player ${player[3]} wins`);
        if(player[6]!== 0 && player[6]===player[7] && player[7]===player[8])
        showAndReset(`player ${player[6]} wins`);
        
        if(player[0]!== 0 && player[0]===player[3] && player[3]===player[6])
        showAndReset(`player ${player[0]} wins`);
        if(player[1]!== 0 && player[1]===player[4] && player[4]===player[7])
        showAndReset(`player ${player[1]} wins`);
        if(player[2]!== 0 && player[2]===player[5] && player[5]===player[8])
        showAndReset(`player ${player[2]} wins`);

        if(player[0]!== 0 && player[0]===player[4] && player[4]===player[8])
        showAndReset(`player ${player[0]} wins`);
        if(player[2]!== 0 && player[2]===player[4] && player[4]===player[6])
        showAndReset(`player ${player[2]} wins`);
    });
    
    const CollectInfo=(row,col)=>{
        if(win)
        {
            return;
        }
        console.log("row="+row+",col="+col);
        let index = (row*3)+col;
        let curr=0;
        let isvictory=true;
        if(player[index]===0)
        {
            if(count%2===0)
            {
                setPlayer(p=> {
                    p[index]=1;
                    return p
                });
                curr=1;
            }
            else{
                setPlayer(p=> {
                    p[index]=2;
                    return p
                });
                curr=2;
            }
            console.log(player);
            for(let i =row;isvictory && i<3;i++)
            {
                if(player[i][col]!==curr)
                {
                    isvictory=false;
                    break;
                }
            }
            
            setCount(count+1);
        }
    }
    
    const squares = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            squares.push(
            <BoardSquare key={i*10+j} row={i} col ={j} currplayer={player[i*3+j]} sendInfoToParent={CollectInfo}></BoardSquare>);
        }
        
    }
    return squares;
}

const Board = (props) => {
    return (
        <div className="SquareWrapper">
        <CustomBoardCreation row={3} col={3}/>
        </div>);
}
export default Board;