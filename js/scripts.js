
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

function HeadScroll(e, t) {
        document.addEventListener("click", (function (e) {
                if (e.target && (e.target.classList.contains("scrollto") || e.target.closest(".scrollto"))) {
                        var t = e.target.classList.contains("scrollto") ? e.target : e.target.closest(".scrollto"),
                                i = t.hash;
                        if (document.querySelectorAll(i).length) {
                                var a = window.document.scrollingElement || window.document.body || window.document.documentElement,
      ;                                  n = document.querySelector(i).getBoundingClientRect().top,
                                        s = window.scrollY,
                                        r = a.clientTop,
                                        o = document.querySelector(".header.is-fixed").offsetHeight,
                                        l = Math.round(n + s - r);
                                "#" === t.getAttribute("href").charAt(0) && (e.preventDefault(), window.scroll({
                                        top: l - o,
                                        behavior: "smooth"
                                }), window.onscroll = function (e) {
                                        (window.pageYOffset || document.documentElement.scrollTop) === l && (window.onscroll = null)
                                })
                        }
                }
        }))
}
//HeadScroll()


function HeadScrollInfo(e, t) {
        var i = document.querySelector(".header");
        if (i) {
                var a = function () {
                        window.scrollY > 0 ? i.classList.add("is-fixed") : i.classList.remove("is-fixed")
                };
                a(),
                window.addEventListener("scroll", a)
        }
}
HeadScrollInfo()

