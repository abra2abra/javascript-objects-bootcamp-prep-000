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

console.log(updateObjectWithObject(recipe, 'hei', 'heia'));