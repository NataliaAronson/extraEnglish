import React from 'react';
	import './TableList.css';
	import Table from './Table';
	
	
	const words = [
	    { id: "1", word: "go",transliteration:"гоу",translation: "идти" },
	    { id: "2", word: "do",transliteration: "ду", translation: "делать" },
	    { id: "3", word: "buy", transliteration: "бай", translation: "покупать"},
	    { id: "4", word: "understand", transliteration: 'андерстанд', translation: "понимать" },
	    { id: "5", word: "begin",transliteration: "бегин",translation: "начать" },
	   
	
	];
	
	
	
	function TableList() {
	
	    return (
	        <div className="tableList">
	            <table className="table">
	                <thead>
	                    <tr>
	                        <th>#</th>
	                        <th>Word</th>
	                        <th>Transliteration</th>
	                        <th>Translation</th>
	                        <th>Delete/Edit</th>
	                    </tr>
	                </thead>
	                <tbody>
	                    {words.map(word => (
	                        <Table
	                            key={word.id}
	                            word={word} />
	
	                    ))
	                    }
	                </tbody>
	            </table>
	        </div>
	    );
	}
	
	export default TableList;
