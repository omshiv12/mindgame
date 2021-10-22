import './card.css';

function Card({text,onClickHandler,index,isVisible}) {
    return ( 
        <div className = "Card"  onClick={()=>onClickHandler(text,index)}>
        <div className="backFace"></div>
        <div className="frontFace" >{isVisible && text}</div>
        </div>
    );
}

export default Card;