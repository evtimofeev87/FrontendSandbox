const { get } = require("http");

const fetch = require("node-fetch");

getBeeToken = async function () {
  let result = await fetch("https://auth.getbee.io/apiauth", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "client_id=6b3054fd-83aa-4048-8cb7-3eba61be4306&client_secret=tEv4OfT58KA9kRtDKkEiwW3RTdRShA7dKVWMlmPaMjQP0VD9vsHH",
  });
  return await result.json();
};

getRows = function () {
  return [
    {
      columns: [
        {
          "grid-columns": 12,
          modules: [
            {
              descriptor: {
                computedStyle: { hideContentOnMobile: false },
                style: {
                  "padding-bottom": "10px",
                  "padding-left": "10px",
                  "padding-right": "10px",
                  "padding-top": "10px",
                },
                text: {
                  computedStyle: { linkColor: "#0068A5" },
                  html:
                    '<div class="txtTinyMce-wrapper" style="line-height: 14px; font-size: 12px;" data-mce-style="line-height: 14px; font-size: 12px;"><p style="font-size: 14px; line-height: 16px; word-break: break-word;" data-mce-style="font-size: 14px; line-height: 16px; word-break: break-word;">Введите свой текст здесьdddddd.</p></div>',
                  style: {
                    color: "#555555",
                    "font-family": "inherit",
                    "line-height": "120%",
                  },
                },
              },
              type: "mailup-bee-newsletter-modules-text",
              uuid: "7fe25afa-b472-4f9c-b6d5-09e209d79d81",
            },
            {
              type: "mailup-bee-newsletter-modules-image",
              descriptor: {
                image: { alt: "Альтернативный текст", src: "", href: "" },
                style: {
                  width: "100%",
                  "padding-top": "0px",
                  "padding-right": "0px",
                  "padding-bottom": "0px",
                  "padding-left": "0px",
                },
                computedStyle: {
                  class: "center autowidth",
                  width: "100px",
                  hideContentOnMobile: false,
                },
              },
              uuid: "e3908071-d710-4b42-b95d-dea3bba320dc",
            },
            {
              descriptor: {
                computedStyle: { hideContentOnMobile: false },
                style: {
                  "padding-bottom": "10px",
                  "padding-left": "10px",
                  "padding-right": "10px",
                  "padding-top": "10px",
                },
                text: {
                  computedStyle: { linkColor: "#0068A5" },
                  html:
                    '<div class="txtTinyMce-wrapper" style="line-height: 14px; font-size: 12px;" data-mce-style="line-height: 14px; font-size: 12px;"><p style="font-size: 14px; line-height: 16px; word-break: break-word; text-align: center;" data-mce-style="font-size: 14px; line-height: 16px; word-break: break-word; text-align: center;"><a style="text-decoration: underline;" href="{{Unsubscribe}}" target="_blank" rel="noopener">Отписаться от рассылки</a></p></div>',
                  style: {
                    color: "#555555",
                    "font-family": "inherit",
                    "line-height": "120%",
                  },
                },
              },
              type: "mailup-bee-newsletter-modules-text",
              uuid: "659de8bc-5a5b-40c1-8961-c5c3aa8831de",
            },
          ],
          style: {
            "background-color": "transparent",
            "border-bottom": "0px solid transparent",
            "border-left": "0px solid transparent",
            "border-right": "0px solid transparent",
            "border-top": "0px solid transparent",
            "padding-bottom": "5px",
            "padding-left": "0px",
            "padding-right": "0px",
            "padding-top": "5px",
          },
          uuid: "6b84b755-22bb-4548-9b4a-6cf61256235b",
        },
      ],
      container: {
        style: {
          "background-color": "transparent",
          "background-image": "none",
          "background-position": "top left",
          "background-repeat": "no-repeat",
        },
      },
      content: {
        computedStyle: {
          rowColStackOnMobile: true,
          rowReverseColStackOnMobile: false,
        },
        style: {
          "background-color": "transparent",
          "background-image": "none",
          "background-position": "top left",
          "background-repeat": "no-repeat",
          color: "var(--black)",
          width: "500px",
        },
      },
      type: "one-column-empty",
      uuid: "4bf3b810-029e-4b49-a5bd-ec98b3d1b392",
      metadata: { name: "My Saved Row", tags: "product, two columns, blue" },
    },
  ];
};

module.exports = {
  getBeeToken,
  getRows
};
