
    // creat const variable for all 4 sticky
  const resize = document.getElementsByClassName("wall");
  const first =document.getElementsByClassName("_firstWall");
  const second =document.getElementsByClassName("_secondWall");
  const third =document.getElementsByClassName("_thirdWall");
  const fourth =document.getElementsByClassName("_fourthWall");


window.onload = function() {
    sessionStorage.setItem('boards', JSON.stringify({
        whatWentWell: [],
        whatCanBeImproved: [],
        startDoing: [],
        actionItems: [],
    }))
}


function addWall(param){
    const cardBox =param.parentElement.parentElement;
    const sectionId = `${cardBox.id}Section`;
    const sections = document.getElementById(sectionId);
    const textArea = document.createElement('textArea');
    textArea.setAttribute('name', 'textarea');
    textArea.setAttribute('autocomplete', 'off');
    textArea.setAttribute('autofocus', true);
    textArea.onchange =  (event) => {
        const id = new Date().getUTCMilliseconds();
        console.log(event.target.value);
        const data = JSON.parse(sessionStorage.getItem('boards'));
        let sectionData = data[cardBox.id];
        if (sectionData.length > 0) {
            sectionData.map((section) => {
                if(section.id === Number(textArea.id)) {
                    return {
                        ...section,
                        value: event.target.value
                    }
                }
            })
        }  else {
            textArea.setAttribute('id', id);
            sectionData.push({
                id,
                value: event.target.value
            });
        }
        data[cardBox.id] = sectionData;
        sessionStorage.setItem('boards', JSON.stringify(data))
    }
    textArea.className='textarea';
    sections.appendChild(textArea);
}
function filterResult(param){
    const selectedEventType = param.options[param.selectedIndex].value;
    if (selectedEventType == "keep") {
        second[0].style.display="none";
        third[0].style.display="none";
        fourth[0].style.display="none";   
         resize[0].id="filter-result";
    }
    else if (selectedEventType == "Leave") {
        first[0].style.display="none";
        third[0].style.display="none";
        fourth[0].style.display="none";   
        second[0].style.display="block";
        resize[0].id="filter-result";
    }
    else if (selectedEventType == "start") {
        second[0].style.display="none";
        first[0].style.display="none";
        fourth[0].style.display="none";   
        third[0].style.display="block";   
        resize[1].id="filter-result";
       
    }
    else if  (selectedEventType == "action") {
        second[0].style.display="none";
        third[0].style.display="none";
        first[0].style.display="none";   
        fourth[0].style.display="block";   
        resize[1].id="filter-result";
    }
    else if  (selectedEventType == "all") {
        first[0].style.display="block";
        second[0].style.display="block";
        third[0].style.display="block";
        fourth[0].style.display="block";   
        resize[0].id="filter-result";
       
    }
}

  const sum=(a,b)=>  a+b;
    module.exports = sum;
