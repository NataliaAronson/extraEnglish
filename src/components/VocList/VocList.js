import React from 'react';
	import './styles/tableList.css';
	import ListFrame from './VocList';
	
	
	
	
	const words = [
	    { id: "1", word: "идти", translation: "go, went, gone" },
	    { id: "2", word: "делать", translation: "do, did, done" },
	    { id: "3", word: "покупать",  translation: "buy, bought, bought"},
	    { id: "4", word: "понимать",  translation: "understand, understood, understood" },
	    { id: "5", word: "начать",translation: "begin, began, begun" },
	    { id: "6", word: "приходить", translation: "come, came come" },
	    { id: "7", word: "читать", translation: "read, read, read" },
	    { id: "8", word: "резать ", translation: "cut, cut, cut" },
	    { id: "9", word: "находить",translation: "find, found, found" }
	
	];
	
	

	const styles = {
		ul: {
		  listStyle: 'none',
		  margin: 0,
		  padding: 0
		}
	  }
	  
	  function VocList(props) {
		return (
		  <ul style={styles.ul}>
			{props.words.map((word, index) => {
			  return (
				<VocList
				 word={word}
				  key={word.id}
				  index={index}
				  onChange={props.onToggle}
				/>
			  )
			})}
		  </ul>
		)
	  }
	  
	  TodoList.propTypes = {
		todos: PropTypes.arrayOf(PropTypes.object).isRequired,
		onToggle: PropTypes.func.isRequired
	  }
	  
	  export default VocList;