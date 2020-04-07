import React from 'react';
import './App.css';
import Navigation from './components/nav/Navigation';
import Logo from './components/logo/Logo';
import Rank from './Rank';
import Imglinkform from './components/form/Imglinkform';
import Face from './components/face/Face';
import Signin from './components/Signin/Signin'
import Register from './components/Signin/Register'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const styling={
  "particles": {
    "number": {
        "value": 200,
        "density": {
            "enable": false
        }
    },
    "size": {
        "value": 10,
        "random": true
    },
    "move": {
        "direction": "top",
        "out_mode": "in"
    },
    "line_linked": {
        "enable": false
    }
},
"interactivity": {
    "events": {
        "onclick": {
            "enable": true,
            "mode": "remove"
        }
    },
    "modes": {
        "remove": {
            "particles_nb": 5
        }
    }
}
}


const app=new Clarifai.App({
  apiKey:'fc0c6ab61218441a9226f3e6f596d00d'
});


class App extends React.Component {
  constructor(){
    super()
    this.state={
      input:"",
      imgurl:"",
      box:{},
      route:"signin",
      issignedin:false
    }
    this.inputchange=this.inputchange.bind(this);
    this.clickchange=this.clickchange.bind(this);
    this.pointingface=this.pointingface.bind(this);
    this.routechange=this.routechange.bind(this)
  }
  pointingface(data){
      const face=data.outputs[0].data.regions[0].region_info.bounding_box
      const point=document.getElementById('faces');
      const width=Number(point.width);
      const height=Number(point.height);
      return {
        leftcol:face.left_col*width,
        topcol:face.top_row*height,
        rightcol:width - (face.right_col*width),
        bottomcol:height - (face.bottom_row * height)
      }
    }
    displayfacebox(box){
      this.setState({
        box:box
      })
      console.log(this.state.box)
    }
  inputchange(event){
    this.setState({
      input:event.target.value
    })
  }
  clickchange(){
    this.setState({
      imgurl:this.state.input
    })
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
    this.state.input)
    .then((res)=>{
      this.displayfacebox(this.pointingface(res));
    }).catch(err=>console.log(err))
  }
  routechange(route){
    if(route === 'signout'){
      this.setState({
        issignedin:false
      })
    }
    else if(route === 'home'){
      this.setState({
        issignedin:true
      })
    }
    this.setState({route:route})
  }

  render(){
  return (
    <div className="App">
      <Particles className="particles" 
         params={styling} />
      <Navigation issignedin={this.state.issignedin} routechange={this.routechange} />
      <Logo />
      { this.state.route === 'home' ?
      <div>
        <Rank />
        <Imglinkform clickchange={this.clickchange} inputvalue={this.state.input} inputchange={this.inputchange} />
        <Face imgurl={this.state.imgurl} box={this.state.box} />
      </div> 
        :(
          this.state.route === 'signin' ?
                <Signin routechange={this.routechange}/>
          :<Register routechange={this.routechange}/>
        )
      }
    </div>
  );
}
}
export default App;
