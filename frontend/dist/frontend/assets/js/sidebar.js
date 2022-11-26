function sidebarSelector() {

    let list = document.querySelectorAll('.list');
   
    let i = 0;

    for (let i = 0; i < list.length; i++) {


        list[i].onclick = function () {

            let j = 0;

            while (j < list.length) {

                list[j++].className = 'list';
            }

            list[i].className = 'list active';
        }
    }
}