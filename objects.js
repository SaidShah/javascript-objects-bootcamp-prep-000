
var playlist = {artistName:"michael jackson",songTitle:"thriller"}

function updatePlaylist(playlist, artistName, songTitle){
  
  playlist.assign({},playlist,{[artistName]:songTitle})
  
  return playlist
}