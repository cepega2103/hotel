 var gallery3 = document.querySelector('.gallery4');

        function scrollGallery(direction) {
            gallery3.scrollBy({ left: gallery1.clientWidth * direction, behavior: 'smooth' });
        }

        function showModal(imageUrl) {
            var modal = document.querySelector('.modal');
            var modalImg = document.getElementById('modal-img');
            modal.style.display = 'block';
            modalImg.src = imageUrl;
        }

        function hideModal() {
            var modal = document.querySelector('.modal');
            modal.style.display = 'none';
        }


         // Добавляем класс "zoomed" после задержки для увеличения объекта
    setTimeout(function() {
        document.querySelector('.gallery').classList.add('zoomed');
    }, 1000); // Увеличение произойдет через 1 секунду (1000 миллисекунд)

     function showModal(imageUrl) {
            var modal = document.querySelector('.modal');
            var modalImg = document.getElementById('modal-img');
            modal.style.display = 'block';
            modalImg.src = imageUrl;
        }

        function hideModal() {
            var modal = document.querySelector('.modal');
            modal.style.display = 'none';
        }
        //
 // window.onscroll = function() {
    //if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
     // document.getElementById("header").style.top = "0";
   // } else {
    //  document.getElementById("header").style.top = "-50px";
   // }
 // };
