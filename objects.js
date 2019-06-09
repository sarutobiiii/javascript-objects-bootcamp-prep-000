var playlist = {miguel: "girl with the tattoo", party: "break from toronto", frank: "nights", kanye: "saint pablo"}

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist.assign({}, playlist, {[artistName]: songTitle}) 
}

function removeFromPlaylist(obj, string) {
   delete playlist.String;
   return playlist
}