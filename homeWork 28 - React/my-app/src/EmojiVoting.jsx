import React, { useState } from 'react';

function EmojiVoting() {
    const [votes, setVotes] = useState([0, 0, 0, 0, 0]);
    const [resultsVisible, setResultsVisible] = useState(false);

    const vote = (index) => {
        const updatedVotes = [...votes];
        updatedVotes[index]++;
        setVotes(updatedVotes);
    };

    const showResults = () => {
        setResultsVisible(true);
    };

    const maxVotes = Math.max(...votes);
    const winningSmiley = votes.indexOf(maxVotes);

    return (
        <div>
            <h1>Голосування за найкращий смайлик</h1>
            <div>
                {votes.map((count, index) => (
                    <div key={index} onClick={() => vote(index)}>
                        {getSmiley(index)} {count > 0 && <span>({count})</span>}
                    </div>
                ))}
            </div>
            <div>
            <button onClick={showResults}>Show Results</button>
            </div>
            {resultsVisible && (
                <div>
                    <h2>Результати голосування:</h2>
                    <div>
                        <h3>Переможець:</h3>
                        <div>{getSmiley(winningSmiley)}</div>
                        <p>Кількість голосів: {maxVotes}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

function getSmiley(index) {
    const smileys = ['😀', '😊', '😎', '🤩', '😍'];
    return smileys[index];
}

export default EmojiVoting;