import React from 'react';

	
	
	
	
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
	
	

	function VocList() {

		return (
			<div className="vocList">
				<table className="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Word</th>
							<th>Translation</th>
							<th> Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{words.map(word => (
							<ListFrame
								key={word.id}
								word={word}
								translation={translation}
								 />
	
						))
						}
					</tbody>
				</table>
			</div>
		);
	}
	
	export default VocList;