window.onbeforeunload = function() {
    localStorage.setItem('isNewSession', 'true');
};
window.onload = function () {
    if (!localStorage.getItem("isNewSession")) {
        localStorage.setItem('boards', JSON.stringify({
            well: [],
            improve: [],
            start: [],
            stop: [],
        }))
    }
  
}

var restoreDate = function ()
{
    if(localStorage.length > 0)
    {
        console.log(localStorage)
        let data = JSON.parse(localStorage.getItem('boards'));
       // let sectionId = `${cardBox.id}Section`;
    }
}

function addWall(param) {
    let cardBox = param.parentElement.parentElement;
    let sectionId = `${cardBox.id}Section`;
    let sections = document.getElementById(sectionId);
    if(sections.children[0].tagName === "P")
    sections.children[0].remove()
    let divTag = document.createElement('div');
    let textArea = document.createElement('textArea');
    let spanTag = document.createElement('span');

    spanTag.setAttribute("onclick", "removeItem(this)");
    spanTag.setAttribute('class', 'close-icon');
    divTag.setAttribute('class', 'sticky-text');
    textArea.setAttribute('name', 'textarea');
    textArea.setAttribute('autocomplete', 'off');
    textArea.setAttribute('autofocus', true);
    textArea.onchange = (event) => {
        let id = new Date().getUTCMilliseconds();
        console.log(event.target.value);
        let data = JSON.parse(localStorage.getItem('boards'));
        let sectionData = data[cardBox.id];
        if (sectionData.length > 0) {
            sectionData.map((section) => {
                if (section.id === Number(textArea.id)) {
                    return {
                        ...section,
                        value: event.target.value
                    }
                }
            })
        } else {
            textArea.setAttribute('id', id);
            sectionData.push({
                id,
                value: event.target.value
            });
        }
        data[cardBox.id] = sectionData;
        localStorage.setItem('boards', JSON.stringify(data))
    }
    textArea.className = 'textarea';

    divTag.appendChild(textArea);
    divTag.appendChild(spanTag);
    sections.appendChild(divTag);
}

function removeItem(param) {
    param.previousElementSibling.remove();
    param.remove();
}

function filterResult(param) {
    var el = param.options[param.selectedIndex].value;
    var items = document.querySelectorAll('.wall div');
    (items).forEach(function (item) {
        if (el == "showAll") {
            item.classList.add('view')
        } else if (item.id == el) {
            item.classList.add('view')

        }
        if (item.id !== el && el !== "showAll") {
            item.classList.remove('view')
        }
    })

}