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
        title: 'Manuscript Paper v1',
        footer: 'Irini Is Beautiful',
        createdAt: formattedDate,
    },
    settings: {
        paperSettings: {
          width: 210, // mm
          height: 297 // mm
        },
        stavesSettings: {
            numStaves: 10,
            marginX: 15, // mm
            marginY: 10 // mm
        },
        staffSettings: {
            staffType: 'piano',
            staffLineThickness: 0.4, // mm
            staffLineColor: '#aaa',
            staffLineSpacing: 4.0, // mm
            staffSpacing: 3, // mm
            clefColor: 'black',
            clefThickness: 1.3, //mm,
            spaceBetweenGrandStaff: 2 //
        }
    }
}

export {initialState}