import React from 'react';
// import StoryblokClient from 'storyblok-js-client'
import {Header} from "./header/header.jsx"

import fire from './fire';


// var Storyblok = new StoryblokClient({
//     accessToken: 'tbw0YCJdIaQSLuSy5Oxwngtt' // Your preview token
//   })

class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { 
            filmy: [] 
        }; // <- set up react state
       
    }

    componentWillMount(){
        /* Create reference to messages in Firebase Database */
        let messagesRef = fire.database().ref('filmy').orderByKey().limitToLast(100);
        messagesRef.on('child_added', snapshot => {
          /* Update React state when message is added at Firebase Database */
          let message = { text: snapshot.val(), id: snapshot.key };
          this.setState({ filmy: [message].concat(this.state.filmy) });
        })
      }
      addMessage(e){
        e.preventDefault(); // <- prevent form submit from reloading the page
        /* Send the message to Firebase */
        fire.database().ref('filmy').push( this.inputEl.value );
        this.inputEl.value = ''; // <- clear the input
      }
    componentDidMount() {
            // Storyblok
            // .get('cdn/spaces/46297/stories')
            // .then( response => {
            //     console.log(response)
            //     // this.setState({
            //     //     data: response.data.story.content.teaser_image
            //     // })
               
            // })
      
    }
    render(){
console.log(this.state.filmy)

        return  <form onSubmit={this.addMessage.bind(this)}>
            <input type="text" ref={ el => this.inputEl = el }/>
            <input type="submit"/>
            <ul>
            { /* Render the list of messages */
                this.state.filmy.map( (movie,i) => <li key={i}>{movie.title}</li> )
            }
            </ul>
        </form>
    }
}


export {App}

