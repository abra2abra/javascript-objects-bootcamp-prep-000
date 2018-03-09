var firstMeal = 'breakfast';
var meals = {
  [firstMeal]: 'oatmeal'
};
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  
  return obj;
}

const recipe = {
  eggs: 3
}

//console.log(destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups'));
//console.log(recipe)

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value})
}

//console.log(updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup'));
//console.log(recipe);

function updateObjectWithObject(targetObject, updateObject){
  return Object.assign({}, targetObject, updateObject)
}

//console.log(updateObjectWithObject(recipe, {'hei' :'heia'}));

var playlist = new Object();

function updatePlaylist(obj, artist, song){
  obj[artist] = song;
  return obj;
}
//console.log(updatePlaylist(playlist, 'hey', 'heii'))

function removeFromPlaylist(obj, artist){
  delete obj.artist;
  return obj;
}

var hey = {"Kanye": "Gold Digger"};
delete hey['Kanye'];
console.log(hey);
//console.log(removeFromPlaylist(hey, hey.Kaney))









