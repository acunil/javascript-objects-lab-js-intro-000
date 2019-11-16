var recipe = {
  "eggs" : 2,
  "rice" : "100g"
};

function updateObjectWithKeyAndValue(object, key, value){
  
  var newObject = Object.assign({}, object, {key:value});
  return newObject;
}

