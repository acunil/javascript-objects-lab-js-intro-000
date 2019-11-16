var recipe = {
  "eggs" : 2,
  "rice" : "100g"
};

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({}, object, {key:value})
}

