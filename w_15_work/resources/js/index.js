"use strict";
let cells;
window.onload = (e) => {
    // cells = document.querySelectorAll('td:not(.disable)');
    $("td:not(.disable)").on('click', (e) => {
        renderDetail(e.currentTarget.childNodes[1]);
    });
    // renderDetail(cells[0].childNodes[1]);
}

const renderDetail = (cell) => {
    let day = cell.querySelector('.day').textContent;
    let detailContainer = document.querySelector('#todayDetail')
    detailContainer.innerHTML = '';
    detailContainer.scrollTop = 0;
    $("#todayDay")[0].textContent = day;
    let cellContentsNode = cell.querySelectorAll('span');
    cellContentsNode.forEach(node => {
        let nodeContents;

        nodeContents = node.childNodes[1].textContent;
        let element = document.createElement('div');
        let statusElement = document.createElement('div');
        let contentElement = document.createElement('div');
        element.setAttribute('class', 'todayContents');
        statusElement.setAttribute('class', 'status');
        if (node.querySelector('.start') != null) {
            statusElement.textContent = '시작';
            statusElement.style.color = "red";
        } else if (node.querySelector('.end') != null) {
            statusElement.textContent = '마감';
            statusElement.style.color = "blue";
        } else {
            statusElement.textContent = '예상'
        }

        statusElement.style.color
        contentElement.setAttribute('class', 'content');
        contentElement.textContent = nodeContents;
        element.appendChild(statusElement);
        element.appendChild(contentElement);
        detailContainer.appendChild(element);
    });
    console.log(cell);
}


