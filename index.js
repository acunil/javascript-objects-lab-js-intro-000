var recipe = {
  "eggs" : 2,
  "rice" : "100g"
};

function updateObjectWithKeyAndValue(object, key, value){
  
  var newObject = {key:value}
  newObject = Object.assign({}, object, newObject);
  return newObject;
}

