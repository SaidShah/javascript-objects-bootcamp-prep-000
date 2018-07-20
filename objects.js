
var playlist = {name:title}

function updatePlaylist(playlist, name, title){
  
  playlist.assign({},{[name]:title})
  return playlist
}