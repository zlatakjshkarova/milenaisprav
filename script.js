let tablist = document.querySelector('#tablist')

let tabcontent = document.querySelectorAll('.tabcontent')
let tabbtns = document.querySelectorAll('.tab-btn')

//getComputedStyle - позволяет получить значение любого СSS свойства , даже из CSS файла


tablist.addEventListener('click', (event) => {

    let targetBtn = event.target;//кнопка на который произашол клик*\
    //объект dataset -содержит пользование (data)атрибут указанного элемента
    let datalang = targetBtn.dataset.lang;
    console.log(datalang);

    //удалть класс active'
    for (let tab of tabcontent) {
        tab.classList.remove('active');
        //проверяем что id вкладки такой 
    }
    for (let tab of tabcontent) {
        if (tab.id === datalang) {
            //
            tab.classList.add('active');

            for (let btn of tabbtns) {
                btn.classList.remove('active');

            }
            targetBtn.classList.add('active')
        }
    }
})





