
var playlist = {name:'jon',title:'hello'}

function updatePlaylist(playlist, name, title){
  
  playlist.assign({},{[title]:name})
  return playlist
}