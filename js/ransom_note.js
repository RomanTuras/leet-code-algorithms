var canConstruct = function (ransomNote, magazine) {
  let magazineList = [...magazine];
  const ransomNoteList = [...ransomNote];
  let chars = new Map()
  let index = 0

  for (let n = 0; n < ransomNoteList.length; n++) {
      index = magazineList.indexOf(ransomNoteList[n])
      if (index == -1) return false
      magazineList.splice(index, 1)
  }

  return true
};


console.log(canConstruct("aa", "aab"));