import ReactDOM from 'react-dom';

function addReactElement(element){
    console.log(element);
    const { containerStyle } = element.props.state;
    const style = containerStyle ? containerStyle.join('; ') : ''
    const id = 'react-element-' + Math.random();
    const html = `<div id="${id}" style="${style}"></div>`;
    document.getElementById('dom-container').insertAdjacentHTML('beforeend', html);
    ReactDOM.render(
      element,
      document.getElementById(id)
    );
}

export default class ReactScene extends Phaser.Scene{
    constructor(config){
        super(config);
        this.react = {
            add: addReactElement
        };
    }
}