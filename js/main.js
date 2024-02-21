window.addEventListener("DOMContentLoaded", () => {
  const t = document.querySelector(".chat-content-list-1"),
    e = document.querySelector(".chat-content-list-2"),
    s = document.querySelector(".chat-content-list-3"),
    n = document.querySelector(".chat-content-list-4"),
    c = document.querySelector(".user--name"),
    o = document.querySelector(".user--email"),
    a = document.querySelector(".user--phone"),
    i = document.querySelector(".form--button"),
    r = [
      "Hola, bienvenidos al nuevo proyecto sobre ganancias seguras en Internet! Mi nombre es Antonio, soy representante de AI TRADING y te ayudaré a entender las oportunidades que te brinda nuestra plataforma para ganar dinero en el cambio de divisas",
      "Puede decirme, por favor, cómo puedo dirigirme a usted?",
      "Dígame, ha operado alguna vez en bolsa?",
      "Gracias por su respuesta. En nuestro proyecto todo funciona automáticamente para maximizar la seguridad de nuestros clientes. Por lo tanto, una vez realizado el trabajo, usted recibe un informe sobre el trabajo realizado y un recibo de pago. Por favor, indique su dirección de correo electrónico (por ejemplo: example@gmail.com).",
      "Gracias! Enhorabuena, se le ha aprobado el acceso a nuestra plataforma! Si está listo para empezar a ganar hoy mismo, por favor escriba su número de teléfono a continuación para que podamos ponernos en contacto con usted y activar su oficina privada",
    ],
    l = [],
    d = [
      {
        item: [
          "Sí, he tenido esa experiencia",
          "No, no he tenido esa experiencia.",
          "Sigo haciéndolo",
        ],
      },
    ];
  let u = 0,
    m = 0;
  const L = 6;
  function v(i) {
    c.classList.contains("show") ||
      o.classList.contains("show") ||
      a.classList.contains("show") ||
      t.insertAdjacentHTML("beforeend", i),
      !c.classList.contains("show") ||
        o.classList.contains("show") ||
        a.classList.contains("show") ||
        e.insertAdjacentHTML("beforeend", i),
      c.classList.contains("show") &&
        o.classList.contains("show") &&
        !a.classList.contains("show") &&
        s.insertAdjacentHTML("beforeend", i),
      c.classList.contains("show") &&
        o.classList.contains("show") &&
        a.classList.contains("show") &&
        n.insertAdjacentHTML("beforeend", i);
  }
  function h(t) {
    !(function (t) {
      const e = `<div class="chat-flex">\n\t\t\t\t<img src="logo.svg" alt="">\n\t\t\t\t<div class="chat-content-item manager ">\n\t\t\t\t\t<div class="chat-content-desc">\n\t\t\t\t\t\t<div class="chat-content-desc-item manager">\n\t\t\t\t\t\t\t<p class="text">${t}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t`;
      v(e);
    })(Object.values(t)[u]),
      u++;
  }
  function p(t) {
    const e = `\n            <div class="chat-content-item user item-active">\n                <div class="chat-content-desc">\n                    <div class="chat-content-desc-item user">\n                        <p class="text">${t}</p>\n                    </div>\n                </div>\n            </div>`;
    return v(e), e;
  }
  function w(t) {
    const e = Object.values(t[m]),
      s = document.createElement("div");
    s.classList.add("user-answer_list");
    for (let t of e[0]) {
      const e = document.createElement("div");
      e.classList.add,
        e.classList.add("user--answer", "chat-content-buttons-gender-block"),
        (e.innerHTML = t),
        s.appendChild(e);
    }
    return m++, s;
  }
  function g() {
    const t = document.querySelector("input[name=email]");
    return (
      document
        .querySelector("[data-btn-email]")
        .addEventListener("click", (e) => {
          !1 ===
          (function (t) {
            return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
              String(t).toLowerCase()
            );
          })(t.value)
            ? (t.classList.add("error"),
              (t.value = ""),
              (t.placeholder = "Introduzca su dirección de correo electrónico"))
            : (t.classList.remove("error"), e.target.remove(), S());
        }),
      !1
    );
  }
  function f() {
    i.classList.remove("hide"), i.classList.add("show");
  }
  function y(i, r) {
    if (i !== L)
      return 2 === i
        ? (c.classList.add("show"),
          void (function () {
            const t = document.querySelector("input[name=first_name]"),
              e = document.querySelector("input[name=last_name]");
            document
              .querySelector("[data-btn-name]")
              .addEventListener("click", (s) =>
                t.value
                  ? e.value
                    ? (t.classList.remove("error"),
                      e.classList.remove("error"),
                      s.target.remove(),
                      void S())
                    : (e.classList.add("error"),
                      void (e.placeholder = "Introduzca su apellido"))
                  : (t.classList.add("error"),
                    void (t.placeholder = "Introduzca su nombre"))
              );
          })())
        : 3 === i
        ? (c.classList.contains("show") ||
            o.classList.contains("show") ||
            a.classList.contains("show") ||
            t.append(w(d)),
          !c.classList.contains("show") ||
            o.classList.contains("show") ||
            a.classList.contains("show") ||
            e.append(w(d)),
          c.classList.contains("show") &&
            o.classList.contains("show") &&
            !a.classList.contains("show") &&
            s.append(w(d)),
          c.classList.contains("show") &&
            o.classList.contains("show") &&
            a.classList.contains("show") &&
            n.append(w(d)),
          void (function () {
            const t = document.querySelectorAll(".user--answer");
            for (let e = 0; e < t.length; e++)
              t[e].addEventListener("click", (t) => {
                p(t.target.textContent),
                  t.target.parentElement.remove(),
                  l.push(t.target.textContent),
                  S();
              });
          })())
        : 4 === i
        ? (o.classList.add("show"), void g())
        : 5 === i
        ? (a.classList.add("show"),
          void (function () {
            const t = document.querySelector("input[name=phns]");
            document
              .querySelector("[data-btn-phone]")
              .addEventListener("click", (e) => {
                t.value
                  ? (t.classList.remove("error"), e.target.remove(), S())
                  : (t.classList.add("error"),
                    (t.placeholder = "Introduzca su número de teléfono"));
              }),
              f();
          })())
        : (S(), i);
    f();
  }
  function S() {
    v(
      '\n\t\t\t<div class="message-loader" data-loader>\n\t\t\t\t<p style="color: #F0F0F0; font-style: italic; font-size: 18px; color: rgba(0, 0, 0, 0.6);">Meta Support печатает…</p>\n\t\t\t</div>\n\t\t'
    ),
      setTimeout(() => {
        document.querySelector("[data-loader]").remove(), h(r), y(u);
      }, 2e3);
  }
  S(),
    (function () {
      const t = document.querySelector("[data-modal]"),
        e = document.querySelector("[data-modal-close]"),
        s = document.querySelector(".header__modal");
      t.addEventListener("click", () => {
        s.classList.toggle("active");
      }),
        e.addEventListener("click", () => {
          s.classList.remove("active");
        });
    })(),
    (function () {
      const t = document.querySelector(".main__sup-btn"),
        e = document.querySelector(".meta__sup-text");
      t.addEventListener("click", () => {
        t.classList.toggle("active"), e.classList.toggle("active");
      });
    })(),
    (document.querySelector(".message-time").innerHTML = (function () {
      const t = new Date();
      let e = t.getMinutes() < 10 ? `0${t.getMinutes()}` : t.getMinutes();
      return `${t.getHours() < 10 ? `0${t.getHours()}` : t.getHours()}:${e}`;
    })());
});
