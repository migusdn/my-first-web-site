const Links = {
    setColor: (color) => {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}
const Body = {
    setBodyColor: (color) => {
        document.querySelector('body').style.color = color;
    },
    setBGColor: (color) => {
        document.querySelector('body').style.backgroundColor = color;
    }
}


function nightDayHandler(self) {
    var target = document.querySelector('body');

    if (self.value == 'night') {
        Body.setBGColor('black');
        Body.setBodyColor('white');
        self.value = 'day';
        Links.setColor('powderblue');

    } else {
        Body.setBGColor('white');
        Body.setBodyColor('black');
        self.value = 'night';
        Links.setColor('blue');
    }
}