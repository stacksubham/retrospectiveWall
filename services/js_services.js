console.log("i am js sservice");

var filterOption = [
   
   {id:"showAll", name: "All"},
   {id:"well",    name: "What went Well"},
   {id:"improve", name: "What to Improve"},
   {id:"start" ,  name: "What to Start"},
   {id:"stop" ,   name: "What to Stop"}
]
var filterTagCreation = function () {
    let filterBtn = document.getElementById("filter");
    let selectTag = document.createElement('select');
    selectTag.setAttribute("onchange", "filterResult(this)");
  
    filterOption.forEach(function (value) {
       
        let optionTag = document.createElement('option');
        optionTag.innerHTML = value.name;
        optionTag.value = value.id;
        selectTag.appendChild(optionTag);
        filterBtn.appendChild(selectTag);
    })
}

var render = function () {
    this.filterTagCreation();
    this.restoreDate()
}
this.render();