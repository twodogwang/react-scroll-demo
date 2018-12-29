import React from 'react'
import './index.less'; 
import './App.css'
import Content from './components.jsx'
class Login extends React.Component {
    constructor() {
        super()
        this.state =  {
            b:5555, 
            isLogin:false, 
            xPosition:0, 
            startX:0, 
            MoveStartX:0, 
            barStyle: {width:0, transform:'translateX(0)'}
        }
    }
    touchStart = e =>  {
        e.stopPropagation()
        if (this.xPosition == 0) {
            console.log(this.xPosition)
            return}; 
        this.setState( {
            MoveStartX:e.touches[0].pageX
        })
    }
    touchMove = e =>  {
        if (this.xPosition == 0) {
            console.log(this.xPosition)
            return}; 
        let moveX = e.touches[0].pageX
        this.setState( {
                xPosition:this.state.startX + (moveX - this.state.MoveStartX), 
                barStyle: {width:document.documentElement.clientWidth/document.querySelector('.carousel-wrapper').clientWidth * 100 + '%', transform:'translateX(' +  - this.state.xPosition/document.querySelector('.carousel-wrapper').clientWidth * document.documentElement.clientWidth + 'px)'}
            })
    }
    touchEnd = e =>  {
        this.setState((prev, props) =>  {return {
            startX:this.state.xPosition, 
        }})
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.xPosition > 0) {
            this.setState( {
                xPosition:0, 
                barStyle: {width:document.documentElement.clientWidth/document.querySelector('.carousel-wrapper').clientWidth * 100 + '%', transform:'translateX(0)'}
            })
        }
    }
    componentDidMount() {
        console.log(document.querySelector('.carousel-wrapper'))
        this.setState( {
            barStyle: {width:document.documentElement.clientWidth/document.querySelector('.carousel-wrapper').clientWidth * 100 + '%', transform:'translateX(0)'}
        })
    }
    render() {
        let carouselStyle = [ {background:'#42a5f2'},  {'backgroundColor':'#40a5f2'},  {transform:`translateX($ {this.state.xPosition})`}
    ], 
    handler =  {onTouchStart:this.touchStart, onTouchMove:this.touchMove, onTouchEnd:this.touchEnd}
    
        return ( < div className = "carousel" >< div {...handler}className = "carousel-wrapper"style =  { {transform:'translateX(' + this.state.xPosition + 'px)'}} >  < div className = "carousel-pic"style =  {carouselStyle[0]} > slide </div >  < div className = "carousel-pic" > slide </div >  < div className = "carousel-pic"style =  {carouselStyle[1]} > slide </div >  < div className = "carousel-pic" > slide </div >  < div className = "carousel-pic" > slide </div ></div >< div className = "bar"style =  {this.state.barStyle} ></div >  </div > )
    }
}

class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.state =  {
            isLogin:'true', 
            number:0
        }
        this.timeout = null
    }
    componentDidMount() {
        this.changeIsLogin()
        setTimeout(() =>  {
            clearTimeout(this.timeout)
        }, 10000); 
    }
    test() {
        console.log(this.state.isLogin, 'from son')
    }
    changeIsLogin() {
        this.timeout = setTimeout(() =>  {
            this.setState((prevState, props) => ( {isLogin:prevState.isLogin + '-', number:prevState.number + 1}))
            this.changeIsLogin()
        }, 1000); 
    }
    render() {
        let temp =  < div > Greeting"s temp</div>, 
        text = null; 
        if (this.state.number >= 5) {
            text = <h1>Blue Mary</h1>
        }else {
            text = 'Terry Bogard'
        }
        return ( < div onClick =  {this.test.bind(this)} >
        < Login isLogin =  {this.state.isLogin}a =  {'a'} ></Login >
          {temp} {text} </div > )
    }
}
export default Greeting