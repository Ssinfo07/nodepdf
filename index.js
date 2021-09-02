var pdf = require("pdf-creator-node");
var fs = require("fs");
var path =require("path");



var html = fs.readFileSync("./template.html", "utf8");


 // ADD DATE HERE

//DATE END

var options = {
    format: "A4",
    orientation: "portrait",
    border: "5mm",
    header: {
        height: "10mm",
        contents: '<div style="text-align: center;">saurabh pdf</div>'
    
    },

    footer: {
        height: "10mm",
        contents: {
            first: '',
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: '',
        }
    }
};

var users = [
    {

    }
  ];

  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./output.pdf"
  };

  pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });