import React,  {Component }from 'react'; 

class Content extends Component {
    constructor() {
        super()
        this.content = '<div>content</div>'
    }
    render() {
        return ( < div >  {this.content} </div > 
        ); 
    }
}

export default Content; 
