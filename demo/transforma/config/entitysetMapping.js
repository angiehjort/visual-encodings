/*
if the URL points to one of the listed "chartTypes"
and contains keys among "entitySets": {key: value, anotherkey: anothervalue} in expressions like
"$" + key + "$/$in"
"$" + key + "="

these keys will be replaced with their corresponding values
"$" + value + "$/$in"
"$" + value + "="
*/

const toolsPage_entitysetMapping = {
  "chartTypes": [],
  "entitySets": {
  }
};
