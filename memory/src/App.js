import React, { Component } from 'react';
import './App.css';
import Card from './Card'
import GuessCount from './GuessCount'
import shuffle from 'lodash.shuffle'
import HallOfFame,{FAKE_HOF} from './HallOfFame'

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'
const won = new Date().getMinutes() % 2 === 0;


class App extends Component {

    cards = this.generateCards()

    generateCards() {
        const result = []
        const size = SIDE * SIDE
        const candidates = shuffle(SYMBOLS)
        while (result.length < size) {
            const card = candidates.pop()
            result.push(card, card)
        }
        return shuffle(result)
    }

    handleCardClick(card) {
        console.log(card, 'clicked')
    }


    render() {
        return (
            <div className="memory">
                <GuessCount guesses={0} />
                {this.cards.map((card, index) => (
                    <Card
                        card={card}
                        feedback="visible"
                        key={index}
                        onClick={this.handleCardClick}
                    />
                ))}
                {won && <HallOfFame entries={FAKE_HOF}/>}
            </div>
        )
    }
}



export default App;
