
$('#phone').bind("change keyup input click", function() {
if (this.value.match(/[^0-9]/g)) {
this.value = this.value.replace(/[^0-9]/g, '');
alert('Номер телефона может содержать только цифры')
}
});

$(".form").submit(function() {
        $.ajax({
            type: "POST",
            url: "/contact-form.php",
            data: $(this).serialize()
        }).done(function() {

  $('.popup-container').replaceWith(
`<div class="popup-container popup-container--active" id="popup-container" style="" data-popup="popup-success">
        <div class="popup-container__scroll">
            <div class="popup-container__wrapper" id="popup-container__wrapper"><div class="popup popup--success" data-popup="popup-success">
  <div class="popup__wrapper">
    <div class="popup-success">
      <h2 class="popup-success__title">Спасибо за заявку!</h2>
      <div class="popup-success__descr">
        Наш менеджер свяжется с Вами в ближайшее время.
      </div>
      <button class="btn" onclick="ModalClose()">ОК</button>
    </div>
  </div>
</div>
</div>
        </div>
    </div>`
);
    
    $('#phone').val('')
	});
        return false;
		
    });




function ModalOpen(){
  let modalWindow = document.querySelector('.popup-container')
modalWindow.classList.add('popup-container--active')
}
function ModalClose(){
  let modalWindow = document.querySelector('.popup-container')
  modalWindow.classList.remove('popup-container--active')
}


//HeadScroll()


function HeadScroll() {
        var i = document.querySelector(".header");
        if (i) {
                var a = function() {
                        window.scrollY > 0 ? i.classList.add("is-fixed") : i.classList.remove("is-fixed")
                };
                a(),
                window.addEventListener("scroll", a)
        }
}
HeadScroll()

