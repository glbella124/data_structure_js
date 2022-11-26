const buildGuid = function(options) {
  var text = "";
  var mar = options || 'default';
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 18; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
  return mar + '_' + (new Date()).getTime().toString() + text;
}

const soilLabelData = {
  基本农田被违规占用: [
    {
      id: buildGuid(),
      name: "疑点1",
    },
    {
      id: buildGuid(),
      name: "疑点2",
    },
    {
      id: buildGuid(),
      name: "疑点3",
    },
    {
      id: buildGuid(),
      name: "疑点4",
    },
    {
      id: buildGuid(),
      name: "疑点5",
    },
  ],
  基本农田种林: [
    {
      id: buildGuid(),
      name: "疑点1",
    },
    {
      id: buildGuid(),
      name: "疑点2",
    },
    {
      id: buildGuid(),
      name: "疑点3",
    },
    {
      id: buildGuid(),
      name: "疑点4",
    },
    {
      id: buildGuid(),
      name: "疑点5",
    },
  ],
};

for(let key in soilLabelData){
  console.log(key);
}


