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

destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups');
