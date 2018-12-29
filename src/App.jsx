import React from 'react';

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            headerTitle: '这是标题'
        }
    }
    render() {
         return (
            <div className="test">
                <div className="headertitle">
                标题
                </div>
            </div>
        )
    }
}

export default Header