var playlist = {miguel: "girl with the tattoo", party: "break from toronto", frank: "nights", kanye: "saint pablo"}

function updatePlaylist(obj, String, value) {
  return Object.assign({}, obj, {[String], value}) 
}

function removeFromPlaylist(obj, string) {
   delete playlist.String;
   return playlist
}