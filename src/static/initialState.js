let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; //January is 0!

let yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
}
if(mm<10){
    mm='0'+mm;
}

let formattedDate = `${mm}/${dd}/${yyyy}`

let initialState = {
    metaData: {
        title: 'Manuscript Paper v2',
        footer: 'For Irini',
        createdAt: formattedDate,
    },
    settings: {
        paperSettings: {
          width: 210, // mm
          height: 278 // mm
        },
        stavesSettings: {
            numStaves: 6,
            marginX: 0, // mm
            marginY: -4 // mm
        },
        staffSettings: {
            staffType: 'piano',
            staffLineThickness: 0.5, // mm
            staffLineColor: '#aaa',
            staffLineSpacing: 2.2, // mm
            staffSpacing: 1, // mm
            clefColor: '#6699CC',
            clefThickness: 1.5, //mm,
            spaceBetweenGrandStaff: -5 //
        }
    }
}

export {initialState}