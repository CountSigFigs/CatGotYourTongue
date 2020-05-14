import React, { Component } from 'react';



class Results extends Component {

    render() {
        if (this.props.readyToFind) {
            const { error, isLoaded, wordList } = this.props;
            if (error) {
                return <div>Error: {error.message}</div>
            } else if (!isLoaded) {
                return <div>Loading...</div>;
            } else {
                return (
                    <ol>
                        {wordList.map(item => (
                            <li key={item.name}>
                                {item.word}
                            </li>
                        ))}
                    </ol>
                )
            }
        }
        else {
            return <div></div>
        }
    }
}
export default Results;
