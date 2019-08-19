var Counter = React.createClass({
    //metoda określająca początkowy stan komponentu
    //faza inicjalizacji
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    //logika zwiększająca o 1 (inkrementacja)
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    //logika zmniejszająca o 1 (dekrementacja)
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    //faza aktualizacji
    render: function() {
        return React.createElement('div', {}, 
            React.createElement('button', {onClick: this.increment}, 'Plus 1'),
            React.createElement('button', {onClick: this.decrement}, 'Minus 1'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

//div z kolejnymi licznikami
var element = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
);
ReactDOM.render(element, document.getElementById('app'));