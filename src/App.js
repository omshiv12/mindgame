import './App.css';

import React , {useState, useEffect} from "react";
import Card from './Card';
function App() {

	function shuffle(array) {
 
   return array.sort( ()=>Math.random()-0.5 );
 
}
	function generate() {
  var text = "";
  
  let board=["A","B","C","D","E","F","G","H"];
  board=[...board,...board]; 
  return shuffle(board);
 
}
function onCardClick(text,i){
	console.log(text,i,cardflip,flippedCard)
	if(cardflip){
		if(text==board[flippedCard]){
			
			let updatedBoard=[...board]
			updatedBoard[i]=""
			updatedBoard[flippedCard]=""
			console.log(updatedBoard)
			setBoard(updatedBoard)
			setFlippedCard(-1)
			setCardFlip(false)
			setMatches(match+1)
		}

	}
	else{
		setCardFlip(true);
		setFlippedCard(i);

	}
	setCount(count+1)
}

const [board,setBoard]=useState(generate());
const [cardflip,setCardFlip]=useState(false);
const [flippedCard,setFlippedCard]=useState(-1);
const [count,setCount]=useState(0);
const [match,setMatches]=useState(0);
console.log(generate());
    return ( 
        <div className = "App" >
        <div className="left-section">
		<div className="matches" >{match}</div>
		<div className="menu" >{count}</div>
		</div>
        <div className="Board">
        {board.map((card,i) =>(
        	<Card text={card} key={i} onClickHandler={onCardClick} index={i} isVisible={i==flippedCard}/>
        	))}
        </div>
        </div>
    );
}

export default App;