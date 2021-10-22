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
	if(i==flippedCard || matched.includes(i)){
		return
	}
	setVisible([...visible,i])
	setTimeout(()=>{
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
			setMatched([...matched,i,flippedCard])
		}
		else{
			setCardFlip(false)
			setFlippedCard(-1)
		}
		setVisible([])


	}
	else{
		setCardFlip(true);
		setFlippedCard(i);

	}
	},300)
	
	setCount(count+1)
}

const [board,setBoard]=useState(generate());
const [cardflip,setCardFlip]=useState(false);
const [flippedCard,setFlippedCard]=useState(-1);
const [count,setCount]=useState(0);
const [match,setMatches]=useState(0);
const [visible,setVisible]=useState([])
const [matched,setMatched]=useState([])

console.log(generate());
	useEffect(()=>{
		window.addEventListener('beforeunload', function (e) {
            e.preventDefault();
            e.returnValue = '';
        });

	},[])
    return ( 
        <div className = "App" >
        <div className="left-section">
		<div className="matches" ><h3>Matches</h3><p>{match}</p></div>
		<div className="menu" ><h3>Turns</h3><p>{count}</p></div>
		</div>
		<div className="container">
        <div className="Board">
        {board.map((card,i) =>(
        	<Card text={card} key={i} onClickHandler={onCardClick} index={i} isVisible={visible.includes(i)} isMatched={matched.includes(i)}/>
        	))}
        </div>
        </div>
        </div>
    );
}

export default App;