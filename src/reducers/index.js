import {combineReducers} from "redux";

const songsReducer = () => {
    return [
        { title: 'First song', duration: '4:05'},
        { title: 'Second song', duration: '6:05'},
        { title: 'Third song', duration: '3:05'},
        { title: 'Fourth song', duration: '5:05'},
    ];
 };

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
