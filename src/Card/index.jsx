import './card.css';

function Card({text,onClickHandler,index,isVisible,isMatched}) {
    return ( 
        <div className = {`Card ${isVisible?"card-front":"card-back"} ${isMatched?"card-matched":" "} `}  onClick={()=>onClickHandler(text,index)}>
        <div className="backFace"></div>
        <div className="frontFace" >{ text}</div>
        </div>
    );
}

export default Card;