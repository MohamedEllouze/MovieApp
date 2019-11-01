import  React, {Component} from 'react'
import "./LoadingHOC.css";



const BasicHoc = (WarppedComponent) =>{
    return class BasicHoc extends Component {
        constructor(props){
            super(props)
            this.state={
                load : true
            }
        }
        componentDidMount(){
            setTimeout(()=>{
           this.setState({
               load : false
           })
            },2000)
        }
        render(){
           return  ( this.state.load ? <div class="loader"></div> : <WarppedComponent{...this.props}/>)
        }}}
        export default BasicHoc;