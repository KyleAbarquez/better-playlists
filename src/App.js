import React, { Component } from 'react';
import './App.css';

let fakeServerData = {
    user: {
        name: 'Kyle',
        playlists: [
            {
                name: 'Dad Songs',
                songs: [
                        {name: 'Pina Colada Song', duration: 1345},
                        {name:'Because', duration: 1200},
                        {name:'Dreams', duration: 1800}
                       ]
            },
            {
                name: 'Dad Songs',
                songs: [
                        {name: 'Pina Colada Song', duration: 1345},
                        {name:'Because', duration: 1800},
                        {name:'Dreams', duration: 1400}
                       ]
            },
            {
                name: 'Dad Songs',
                songs: [
                        {name: 'Pina Colada Song', duration: 1345},
                        {name:'Because', duration: 1200},
                        {name:'Dreams', duration: 1400}
                       ]
            },
            {
                name: 'Dad Songs',
                songs: [
                        {name: 'Pina Colada Song', duration: 1345},
                        {name:'Because', duration: 1200},
                        {name:'Dreams', duration: 1400}
                       ]
            }
        ]
    }
}

class PlaylistCounter extends Component {
    render () {
        return (
            <div style={{width: '40%', display: 'inline-block'}}>
                <h2 style={{color: '#ddd'}}>{this.props.playlists.length} Playlists</h2>
            </div>
        );
    }
}

class HourCounter extends Component {
    render () {
        let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
            return songs.concat(eachPlaylist.songs)
        }, [])
        let totalDuration = allSongs.reduce((sum, eachSong) => {
            return sum + eachSong.duration
        } ,0)
        return (
            <div style={{width: '40%', display: 'inline-block'}}>
                <h2 style={{color: '#ddd'}}>{Math.round(totalDuration/3600)} Hours</h2>
            </div>
        );
    }
}

class Filter extends Component {
    render() {
        return(
            <div>
                <img/>
                <input type="text"/>
            </div>
        );
    }
}

class Playlist extends Component {
    render() {
        return (
            <div style={{width: '25%', display: 'inline-block'}}>
                <img/>
                <h3>Playlist Name</h3>
                <ul style={{listStyle: 'none', margin: '0', padding: '0'}}>
                    <li>Song 1</li>
                    <li>Song 2</li>
                    <li>Song 3</li>
                </ul>
            </div>
        );
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {serverData: {}}
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({serverData: fakeServerData});
        }, 2000);
    }
    
  render() {
    
    
      
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
            <h1>{this.state.serverData.user.name}'s Playlists</h1>
            <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
            <HourCounter playlists={this.state.serverData.user.playlists}/>
            <Filter/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
        </div> : 'Loading...'} 
        
      </div>
    );
  }
}

export default App;
