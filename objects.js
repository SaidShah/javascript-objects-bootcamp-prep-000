
var playlist = {name:title}

function updatePlaylist(playlist, name, title){
  
  playlist.assign({},{[title]:name})
  return playlist
}