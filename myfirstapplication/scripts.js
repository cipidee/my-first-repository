

let data0 = {
    photo: 'images/earth-g69b584aec_1920.jpg',
    title: 'Föld madártávlatból',
    description: 'A Föld (görögül: Γαῖα – Gaia, latinul: Terra vagy Tellus) a Naptól számított harmadik bolygó a Naprendszerben, ahol a legnagyobb átmérőjű, tömegű és sűrűségű Föld-típusú bolygó.'
};

let data1 = {
    photo: 'images/eclipse-gb758ea26c_1920.jpg',
    title: 'Napfogyatkozás',
    description: 'A napfogyatkozás csillagászati jelenség, amelynek során a Hold a megfigyelő számára részben vagy egészen eltakarja a Napot. Napfogyatkozás akkor jön létre, amikor a Hold pontosan a Föld és a Nap közé kerül, azaz újholdkor. De nem minden újholdkor, hanem csak akkor, ha a Föld körüli pálya leszálló, vagy felszálló csomópontjában van éppen újholdkor a Hold.',
};

let data2 = {
    photo: 'images/mars-g30df23221_1920.jpg',
    title: 'Mars, a vörös bolygó',
    description: 'A Mars a Naptól számított negyedik bolygó a Naprendszerben. Szabad szemmel is könnyedén látható az éjszakai égbolton. A római hadistenről nevezték el, de gyakran hívják „vörös bolygónak” is színe miatt, amit a Mars felszínét meghatározó vas-oxid okoz. A Mars a harmadik legnagyobb kőzetbolygó, számos rendkívüli felszíni képződménnyel.',
};

let data3 = {
    photo: 'images/space-g8b036b5a6_1920.jpg',
    title: 'Űr',
    description: 'A világűr a világegyetem égitestek közötti légüres térsége. A Föld légköre és a világűr között nincs éles határ. A legáltalánosabban elfogadott határvonal a Nemzetközi Asztronautikai Szövetség által meghatározott 100 kilométeres magasság (a Kármán-vonal),[1] de a funkcionalizmus hívei szerint a világűr ott kezdődik, ahol már létezhet orbitális mozgás. ',
};

let data4 = {
    photo: 'images/sun-ga68d42508_1920.jpg',
    title: 'Nap',
    description: 'A Nap a Naprendszer központi csillaga. Körülötte kering a Föld, valamint a Naprendszerhez tartozó bolygók, törpebolygók, kisbolygók, üstökösök stb. A Földtől körülbelül 150 millió km távolságra van, ami fénysebességgel 8,3 perc. A Nap tartalmazza a Naprendszer anyagának 99,8%-át, átmérője 109 földátmérő. 73,5%-ban hidrogénből áll, amely a központjában zajló magfúzió során héliummá alakul. ',
};

let data5 = {
    photo: 'images/universe-geddd8fc40_1920.jpg',
    title: 'Univerzum',
    description: 'A világegyetem (latinosan univerzum) csillagászati fogalom, minden létező összességét jelenti. Jelenlegi ismereteink szerint a világegyetem kora 13,8 milliárd év. A világegyetemben a becslések szerint 100-800 milliárd galaxis található.',
};

let data6 = {
    photo: 'images/planet-g4bafff5c2_1280.jpg',
    title: 'Hold',
    description: 'A Hold a Naprendszer egyik óriásholdja, a Föld egyetlen holdja. A Földtől mért átlagos távolsága 384 402 kilométer, ami nagyjából a Föld átmérőjének 30-szorosa – más mértékegységekben 0,002 CsE vagy 1,3 fénymásodperc. Átmérője 3476 kilométer, ami hozzávetőleg negyede a Földének.',
};

/*$('#photo').attr('src', data.photo);
// ...*/


let currentPhoto = 0;
let imagesData = [data0, data1, data2, data3, data4, data5, data6];

/*$('#photo').attr('src', imagesData[currentPhoto].photo);
// ...*/



function loadPhoto(photoNumber) {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photoTitle').text(imagesData[photoNumber].title);
    $('#photoDescription').text(imagesData[photoNumber].description);
    $(`.thumb[data-index=${photoNumber}]`).toggleClass(`thumbActive`);
    $(`.thumbActive[data-index != ${photoNumber}]`).toggleClass('thumbActive');
};

/*let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    // ...
  }*/

loadPhoto(currentPhoto);

/*$('#right-arrow').click(() => {
    currentPhoto++;
    loadPhoto(currentPhoto);
  })*/

$('#rightArrow').click(() => {
    if (currentPhoto < imagesData.length - 1) {
        currentPhoto++; 
    } else {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto); 
});

$('#leftArrow').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;    
    } else {
        currentPhoto = imagesData.length - 1;
    }
    loadPhoto(currentPhoto);
});

imagesData.forEach((arrayNumber, index) => {
    $('#thumbsContainer').append(`<div class="thumb" data-index=${index}></div>`);
    $('.thumb:last-of-type').css(`background-image`, `url(./${arrayNumber.photo})`);
    $('.thumb:last-of-type').append(`<div class="tooltip" data-index=${index}></div>`);
    $(`.tooltip[data-index=${index}]`).text(imagesData[index].title);
});

/*$(event.target).attr('data-number')*/

$('.thumb').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    let numberIndex = parseInt(indexClicked);  
    if (currentPhoto != numberIndex) {
        loadPhoto(numberIndex);
        currentPhoto = numberIndex;
    };
});
