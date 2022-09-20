import '../BoardSquare/BoardSquare.css';

const BoardSquare = (props)=>{
    
    const clickHandler=(event, props)=>{
        props.sendInfoToParent(props.row,props.col);
        }
        

    return(
    <div className ={props.currplayer!==0?( props.currplayer===1?"clickedsquarebyplayer1":"clickedsquarebyplayer2"):"square"} onClick={(e)=>clickHandler(e, props)}>
    {props.currplayer===0?"_":(props.currplayer===1? "X":"O")}
    </div>);
}
export default BoardSquare;