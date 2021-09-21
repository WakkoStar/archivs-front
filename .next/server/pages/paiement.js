(function() {
var exports = {};
exports.id = "pages/paiement";
exports.ids = ["pages/paiement"];
exports.modules = {

/***/ "./components/Adresses.js":
/*!********************************!*\
  !*** ./components/Adresses.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Adresses; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/AccountPage.module.scss */ "./styles/AccountPage.module.scss");
/* harmony import */ var _styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_dataFetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dataFetcher */ "./utils/dataFetcher.js");
/* harmony import */ var _utils_dataPoster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dataPoster */ "./utils/dataPoster.js");

var _jsxFileName = "C:\\Users\\HUGO\\Desktop\\PROJETS\\JEREMYCAPEAU\\archivs-front\\components\\Adresses.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Adresses({
  selectable = false,
  setCurrentAdress = () => {},
  currentAdress
}) {
  const form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const initialState = {
    prenom: "",
    nom: "",
    telephone: "",
    voie: "",
    ville: "",
    code_postal: "",
    pays: "",
    isNew: true
  };
  const {
    0: adresses,
    1: setAdresses
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: selectedAdress,
    1: setSelectedAdress
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState);
  const {
    0: openEditing,
    1: setOpenEditing
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const user =  false || {};
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchData = async () => {
      if (!user) {
        return;
      }

      const userFetched = await (0,_utils_dataFetcher__WEBPACK_IMPORTED_MODULE_2__.fetchDataFromAPI)(`/users/me`, {}, {
        headers: {
          Authorization: "Bearer " + user.jwt
        }
      });
      setAdresses(userFetched.adresses);
    };

    fetchData();
  }, []);

  const selectAdress = adresse => {
    setOpenEditing(true);
    form.current.scrollIntoView(true);
    setSelectedAdress(adresse);
  };

  const putAdressToApi = allAdresses => {
    (0,_utils_dataPoster__WEBPACK_IMPORTED_MODULE_3__.putDataToAPI)("/users-permissions/users/me", {
      adresses: allAdresses
    }, {
      headers: {
        Authorization: "Bearer " + user.jwt
      }
    }, response => {
      setAdresses(response.data.adresses);
      setSelectedAdress(initialState);
    });
  };

  const setAllAdresses = e => {
    e.preventDefault();
    let allAdresses = adresses || [];

    if (selectedAdress.isNew) {
      allAdresses = [...allAdresses, selectedAdress];
    } else {
      const index = allAdresses.findIndex(({
        id
      }) => selectedAdress.id == id);
      allAdresses[index] = selectedAdress;
    }

    putAdressToApi(allAdresses);
    window.scrollTo(0, 0);
    setOpenEditing(false);
  };

  const deleteAdress = selectedAdressId => {
    let allAdresses = adresses.filter(({
      id
    }) => selectedAdressId != id);
    putAdressToApi(allAdresses);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => {
          selectAdress(initialState);
        },
        children: "Cr\xE9er une nouvelle adresse"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), adresses !== null && adresses !== void 0 && adresses.length ? adresses.map(adresse => {
        const {
          prenom,
          nom,
          telephone,
          voie,
          ville,
          code_postal,
          pays,
          id
        } = adresse;
        const selected = (currentAdress === null || currentAdress === void 0 ? void 0 : currentAdress.id) == id;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: selected ? (_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().selectedAddress) : (_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().address),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().adressWrapper),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: [prenom, " ", nom]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: telephone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: voie
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: ville
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: code_postal
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: pays
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().adressWrapper),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => selectAdress(_objectSpread(_objectSpread({}, adresse), {}, {
                isNew: false
              })),
              children: "\u270F\uFE0F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => deleteAdress(id),
              className: (_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().secondButton),
              children: "\u274C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 17
          }, this), selectable && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => setCurrentAdress(adresse),
            className: selected ? (_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().selected) : null,
            children: selected ? "Sélectionné" : "Sélectionner"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 19
          }, this)]
        }, id, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 15
        }, this);
      }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().address),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          children: "Aucune adresse trouv\xE9e"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().newAdressContainer),
      ref: form,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          overflow: "hidden",
          height: openEditing ? "100%" : 0
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: selectedAdress.isNew ? "Nouvelle adresse" : "Mise à jour d'adresse"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: setAllAdresses,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            required: true,
            type: "text",
            placeholder: "Pr\xE9nom",
            value: selectedAdress === null || selectedAdress === void 0 ? void 0 : selectedAdress.prenom,
            onChange: e => setSelectedAdress(_objectSpread(_objectSpread({}, selectedAdress), {}, {
              prenom: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            required: true,
            type: "text",
            placeholder: "Nom",
            value: selectedAdress === null || selectedAdress === void 0 ? void 0 : selectedAdress.nom,
            onChange: e => setSelectedAdress(_objectSpread(_objectSpread({}, selectedAdress), {}, {
              nom: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            required: true,
            type: "tel",
            placeholder: "T\xE9l\xE9phone ",
            value: selectedAdress === null || selectedAdress === void 0 ? void 0 : selectedAdress.telephone,
            onChange: e => setSelectedAdress(_objectSpread(_objectSpread({}, selectedAdress), {}, {
              telephone: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            required: true,
            type: "text",
            placeholder: "Voie et compl\xE9ment d'adresse",
            value: selectedAdress === null || selectedAdress === void 0 ? void 0 : selectedAdress.voie,
            onChange: e => setSelectedAdress(_objectSpread(_objectSpread({}, selectedAdress), {}, {
              voie: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            required: true,
            type: "text",
            placeholder: "Ville",
            value: selectedAdress === null || selectedAdress === void 0 ? void 0 : selectedAdress.ville,
            onChange: e => setSelectedAdress(_objectSpread(_objectSpread({}, selectedAdress), {}, {
              ville: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            required: true,
            type: "number",
            placeholder: "Code postal",
            value: selectedAdress === null || selectedAdress === void 0 ? void 0 : selectedAdress.code_postal,
            onChange: e => setSelectedAdress(_objectSpread(_objectSpread({}, selectedAdress), {}, {
              code_postal: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            required: true,
            type: "text",
            placeholder: "Pays",
            value: selectedAdress === null || selectedAdress === void 0 ? void 0 : selectedAdress.pays,
            onChange: e => setSelectedAdress(_objectSpread(_objectSpread({}, selectedAdress), {}, {
              pays: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            children: selectedAdress.isNew ? "Ajouter" : "Modifier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/CheckoutForm.js":
/*!************************************!*\
  !*** ./components/CheckoutForm.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CheckoutForm; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_dataPoster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dataPoster */ "./utils/dataPoster.js");
/* harmony import */ var _styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/AccountPage.module.scss */ "./styles/AccountPage.module.scss");
/* harmony import */ var _styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-google-recaptcha */ "react-google-recaptcha");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\HUGO\\Desktop\\PROJETS\\JEREMYCAPEAU\\archivs-front\\components\\CheckoutForm.js";






function CheckoutForm({
  adresse
}) {
  const total =  false && 0;
  const user =  false || undefined;
  const {
    0: succeeded,
    1: setSucceeded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: processing,
    1: setProcessing
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: disabled,
    1: setDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: isHuman,
    1: setIsHuman
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useStripe)();
  const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useElements)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const cardStyle = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: "#484848",
        fontWeight: 400,
        fontFamily: "Montserrat, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#484848"
        },
        "::placeholder": {
          color: "#989898"
        }
      },
      invalid: {
        iconColor: "#981414",
        color: "#000"
      }
    }
  };

  const handleChange = async event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);
    const cart = localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"));
    const total = localStorage.getItem("total");
    const codePromoText = localStorage.getItem("code");

    if (!total || !cart) {
      setError(`Paiement impossible. Reprocédez au paiement depuis le panier`);
      return;
    }

    (0,_utils_dataPoster__WEBPACK_IMPORTED_MODULE_3__.postDataToAPI)("/commandes/checkPayment", {
      cart,
      total,
      codePromoText
    }, async response => {
      const {
        secretClient
      } = response.data;
      const payload = await stripe.confirmCardPayment(secretClient, {
        payment_method: {
          type: "card",
          card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardNumberElement),
          billing_details: {
            name: adresse.nom + " " + adresse.prenom
          }
        }
      });

      if (payload.error) {
        setError(`Paiement impossible. Impossible de créer la commande, ${error}`);
        setProcessing(false);
      }

      (0,_utils_dataPoster__WEBPACK_IMPORTED_MODULE_3__.postDataToAPI)("/commandes/createMe", {
        cart,
        total,
        codePromoText,
        adresse,
        paymentId: payload.paymentIntent.id
      }, res => {
        var _res$data;

        setError(null);
        setProcessing(false);
        setSucceeded(true);
        localStorage.removeItem("cart");
        localStorage.removeItem("code");
        localStorage.removeItem("total");
        router.replace("/paiement/succeed?commandeId=" + ((_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.commandeId));
      }, error => {
        console.log(error);
        setError(`Paiement impossible. Impossible de créer la commande, veuillez recommencer`);
        setProcessing(false);
      }, {
        headers: {
          Authorization: "Bearer " + user.jwt
        }
      });
    }, error => {
      var _error$response, _error$response$data;

      setError("Paiement impossible. " + ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message));
      setProcessing(false);
      console.log(error);
    }, {
      headers: {
        Authorization: "Bearer " + user.jwt
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    id: "payment-form",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().formRow),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Num\xE9ro de carte"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardNumberElement, {
        id: "card-element",
        className: (_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardElement),
        options: cardStyle,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().formRow),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Code de s\xE9curit\xE9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardCvcElement, {
        id: "card-element",
        options: cardStyle,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().formRow),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Date d'expiration"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardExpiryElement, {
        id: "card-element",
        options: cardStyle,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        justifyContent: "center",
        display: "flex",
        marginTop: "4vw"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_5___default()), {
        sitekey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
        onChange: () => setIsHuman(true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      disabled: processing || disabled || succeeded || !isHuman,
      id: "submit",
      children: processing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "spinner",
        id: "spinner",
        children: [" ", "En cours de paiement..."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 11
      }, this) : `Procéder au payement · ${total || 0} €`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-error",
      role: "alert",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().notificationText),
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }, this), succeeded && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().notificationText),
      children: "Paiement r\xE9ussi !"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 141,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/Layout.module.scss */ "./styles/Layout.module.scss");
/* harmony import */ var _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_logos_instagram_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/logos/instagram.png */ "./assets/logos/instagram.png");
/* harmony import */ var _assets_logos_facebook_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/logos/facebook.png */ "./assets/logos/facebook.png");
/* harmony import */ var _assets_logos_mail_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/logos/mail.png */ "./assets/logos/mail.png");
/* harmony import */ var _assets_logos_tel_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/logos/tel.png */ "./assets/logos/tel.png");
/* harmony import */ var _utils_dataFetcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/dataFetcher */ "./utils/dataFetcher.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_sendGridRequest__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/sendGridRequest */ "./utils/sendGridRequest.js");

var _jsxFileName = "C:\\Users\\HUGO\\Desktop\\PROJETS\\JEREMYCAPEAU\\archivs-front\\components\\Layout.js";












function Layout({
  children
}) {
  const {
    0: footerLinks,
    1: setFooterLinks
  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]);
  const {
    0: instagramLink,
    1: setInstagramLink
  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)('');
  const {
    0: facebookLink,
    1: setFacebookLink
  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)('');
  const {
    0: mail,
    1: setMail
  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)('');
  const {
    0: newsletterMail,
    1: setNewsletterMail
  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)('');
  const {
    0: tel,
    1: setTel
  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(() => {
    const fetchData = async () => {
      const data = await (0,_utils_dataFetcher__WEBPACK_IMPORTED_MODULE_9__.fetchDataFromAPI)('/a-propos', {});
      setFooterLinks(data.footer_liens);
      setInstagramLink(data.instagram_link);
      setFacebookLink(data.facebook_link);
      setMail(data.mail_personnel);
      setTel(data.tel_personel);
    };

    fetchData();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_12___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Archiv's - Boutique de posters et d\xE9riv\xE9s"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Boutique de posters, mugs, paysages, dessins"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_12___default().footer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_12___default().linksContainer),
        children: footerLinks.map(({
          lien,
          nom,
          id,
          pdf
        }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: pdf ? `${_utils_dataFetcher__WEBPACK_IMPORTED_MODULE_9__.BASE_URL}${pdf.url}` : lien,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: nom
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, this)
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_12___default().spacer)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_12___default().newsletterContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Veuillez saisir votre adresse e-mail pour vous abonner \xE0 la newsletter."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          placeholder: "Votre mail",
          onChange: e => setNewsletterMail(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => (0,_utils_sendGridRequest__WEBPACK_IMPORTED_MODULE_11__.addContact)(newsletterMail),
          children: "Souscrire"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_12___default().endContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "@2021 Archiv's"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navbar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_logos_account_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/logos/account.png */ "./assets/logos/account.png");
/* harmony import */ var _assets_logos_panier_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/logos/panier.png */ "./assets/logos/panier.png");
/* harmony import */ var _assets_logos_croix_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/logos/croix.png */ "./assets/logos/croix.png");
/* harmony import */ var _assets_logos_archivs_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/logos/archivs-logo.png */ "./assets/logos/archivs-logo.png");
/* harmony import */ var _assets_logos_menu_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/logos/menu.png */ "./assets/logos/menu.png");
/* harmony import */ var _styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Navbar.module.scss */ "./styles/Navbar.module.scss");
/* harmony import */ var _styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\HUGO\\Desktop\\PROJETS\\JEREMYCAPEAU\\archivs-front\\components\\Navbar.js";









function Navbar() {
  const {
    0: isConnected,
    1: setIsConnected
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  const count =  false || 0;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchData = () => {
      const user =  false || undefined;
      setIsConnected(user != undefined);
    };

    fetchData();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().companyNameContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            alt: "logo",
            src: _assets_logos_archivs_logo_png__WEBPACK_IMPORTED_MODULE_7__.default
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          display: 'flex'
        },
        children: [isConnected !== undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: isConnected ? '/mon-compte' : '/login',
          passHref: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            alt: "mon compte",
            src: _assets_logos_account_png__WEBPACK_IMPORTED_MODULE_4__.default
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/panier",
          passHref: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              alt: "panier",
              src: _assets_logos_panier_png__WEBPACK_IMPORTED_MODULE_5__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().badgeCount),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: count
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/paiement/index.js":
/*!*********************************!*\
  !*** ./pages/paiement/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PaiementElement; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/AccountPage.module.scss */ "./styles/AccountPage.module.scss");
/* harmony import */ var _styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CheckoutForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CheckoutForm */ "./components/CheckoutForm.js");
/* harmony import */ var _components_Adresses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Adresses */ "./components/Adresses.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\HUGO\\Desktop\\PROJETS\\JEREMYCAPEAU\\archivs-front\\pages\\paiement\\index.js";






 // Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.

const promise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__.loadStripe)("pk_test_51JCTNPAgwON7NAQgT7nz3jGZkrrGJKvTvyb83ShMdWu0hKovJziL02UJMwE1749FwFjEGIvip19B1I9XU8FS1Ibm00qnBGCUVB");
function PaiementElement() {
  const {
    0: pageType,
    1: setPageType
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("adresses");
  const {
    0: currentAdress,
    1: setCurrentAdress
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({});

  const goToPayment = () => {
    if (currentAdress.id) {
      setPageType("payement");
      window.scrollTo(0, 0);
    } else {
      alert("Veuillez sélectionner une adresse de livraison");
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_AccountPage_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          width: "90%",
          margin: "0 auto"
        },
        children: [pageType == "adresses" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            style: {
              padding: "5vw 0 0 0"
            },
            children: "Adresse de livraison"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            style: {
              textAlign: "center"
            },
            children: "Ou souhaitez vous \xEAtre livr\xE9 ?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adresses__WEBPACK_IMPORTED_MODULE_5__.default, {
            selectable: true,
            currentAdress: currentAdress,
            setCurrentAdress: adresse => setCurrentAdress(adresse)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: goToPayment,
            children: "Passer \xE0 l'\xE9tape suivante"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, this), pageType == "payement" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Paiement par carte"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.Elements, {
            stripe: promise,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CheckoutForm__WEBPACK_IMPORTED_MODULE_4__.default, {
              adresse: currentAdress
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/dataFetcher.js":
/*!******************************!*\
  !*** ./utils/dataFetcher.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": function() { return /* binding */ BASE_URL; },
/* harmony export */   "fetchDataFromAPI": function() { return /* binding */ fetchDataFromAPI; }
/* harmony export */ });
const BASE_URL = "http://192.168.1.24:1337"; //TODO

const fetchDataFromAPI = async (apiEndpoint, defaultObject, config = {}) => {
  const res = await fetch(`${BASE_URL}${apiEndpoint}`, config);
  let data;

  try {
    data = await res.json();
  } catch (error) {
    console.log("Unable to fetch data for ", apiEndpoint);
  }

  if (!data) {
    return defaultObject;
  }

  return data;
};

/***/ }),

/***/ "./utils/dataPoster.js":
/*!*****************************!*\
  !*** ./utils/dataPoster.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postDataToAPI": function() { return /* binding */ postDataToAPI; },
/* harmony export */   "putDataToAPI": function() { return /* binding */ putDataToAPI; }
/* harmony export */ });
/* harmony import */ var _dataFetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataFetcher */ "./utils/dataFetcher.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const postDataToAPI = async (apiEndpoint, body, resolve, reject = () => {}, config = {}) => {
  axios__WEBPACK_IMPORTED_MODULE_1___default().post(_dataFetcher__WEBPACK_IMPORTED_MODULE_0__.BASE_URL + apiEndpoint, body, config).then(response => {
    resolve(response);
  }).catch(error => {
    var _error$response;

    console.log('An error occurred:', (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data);
    reject(error);
    return;
  });
};
const putDataToAPI = async (apiEndpoint, body, config = {}, resolve, reject = () => {}) => {
  axios__WEBPACK_IMPORTED_MODULE_1___default().put(_dataFetcher__WEBPACK_IMPORTED_MODULE_0__.BASE_URL + apiEndpoint, body, config).then(response => {
    resolve(response);
  }).catch(error => {
    console.log('An error occurred:', error.response.data);
    reject(error);
    return;
  });
};

/***/ }),

/***/ "./utils/sendGridRequest.js":
/*!**********************************!*\
  !*** ./utils/sendGridRequest.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addContact": function() { return /* binding */ addContact; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const addContact = mail => {
  if (mail == '') {
    alert('Impossible de vous ajouter, vérifiez votre adresse mail');
    return;
  }

  axios__WEBPACK_IMPORTED_MODULE_0___default().put('https://api.sendgrid.com/v3/marketing/contacts', {
    contacts: [{
      email: mail
    }]
  }, {
    headers: {
      Authorization: 'Bearer ' + "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",
      'Content-Type': 'application/json'
    }
  }).then(response => {
    console.log(response);
    alert('Vous êtes bien ajouté à la newsletter');
  }).catch(error => {
    console.log('An error occurred:', error.response.data);
    alert('Impossible de vous ajouter, vérifiez votre adresse mail');
    return;
  });
};

/***/ }),

/***/ "./assets/logos/account.png":
/*!**********************************!*\
  !*** ./assets/logos/account.png ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/account.c52256e3e95698cca5e2b33efb4a3b49.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASklEQVR42m3NIQ6AMBREwQkkWM4E50Bje4c66hDQBCwH5Se1XTHJU6u/UZZDLdgVxd5qwOx2ha1MNo83nIDqs1jDCiSn4ghT5/AHxHQMQz3c0WsAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/archivs-logo.png":
/*!***************************************!*\
  !*** ./assets/logos/archivs-logo.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/archivs-logo.d836cf85a8fa951c95334437f3975389.png","height":187,"width":1000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAK0lEQVR4nGM8dbXd9N27H25//jP+YGRn+fjrH4Pgz19/3/z6+e8vAwvTcwBSohQoPi2W1gAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/croix.png":
/*!********************************!*\
  !*** ./assets/logos/croix.png ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/croix.6841a50dcbccdf46a04f80c039793ffc.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAANklEQVR42mNgYGQAASYgBAEwT5RBEsyRBLKgjP0MMkC4HywBUgrk7AZCGRAPQwBDC6ah6NYCABqKB/kXtX60AAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/facebook.png":
/*!***********************************!*\
  !*** ./assets/logos/facebook.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/facebook.5ca33290e5c7c9523962ac9568249281.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAVklEQVR42mNg+MPwHwr/AfEfBiDxl2EKQxjDMzDrP0jgGpCMZfgAFvgHEsgHCrQzfIdqAoq6AkkzhjcILceA5Guwgf8hWnYBBW5BTICo2AMk70BV/AEAJj4510r41gUAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/instagram.png":
/*!************************************!*\
  !*** ./assets/logos/instagram.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/instagram.65c51f1da0a8ee8d372c893d998fc398.png","height":600,"width":600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAWElEQVR42j3NsQmEQBRF0dOFwe9k2cjkd/BTw4GxAMFYbGNtYHt0EuVkDx4XQtOtFhOES0mzzd9EUzjt0mahS4ePr91sfYfhlPpzOQZKI/yUHMol3uzQBDdf9hQ4igMNQwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/mail.png":
/*!*******************************!*\
  !*** ./assets/logos/mail.png ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/mail.f6041d8457b2195bbc71c24b3d4ca7b3.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAUklEQVR42mXNsQ1AAABE0TeDQmEBLKRRikKiEBNoVGoRNrSF692rfnX+azx2V+yelNFrVcbqTZkMOkd0hpRZjzboUxabQhWFLaV2O11xutW/0w8btxKzbXs/RAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/menu.png":
/*!*******************************!*\
  !*** ./assets/logos/menu.png ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/menu.d00ba6275b417bfc997910d78dee418f.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAPElEQVR42mWNsQkAIBADDwvBMQTdyE74Qb62+LFNn1yVQBJcjclmic2UY5AUTxQpR+cQXBEcugVWsVE7/Tl5DDkbN2EsAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/panier.png":
/*!*********************************!*\
  !*** ./assets/logos/panier.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/panier.0771131279921c67b174f742f8ba771e.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAY0lEQVR42lXMMQqCYABA4c+GDhDU1A1agyDoBAkNQUtjxwgET6CDICLu4uItRPFS/ouD79sfH1ebYqNCFZRye0j8sfPTAge9t5fOGbgZJDJfEXDRSIN63d9NYPYATmJR8HRkAZwbEI+PZ4CgAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/tel.png":
/*!******************************!*\
  !*** ./assets/logos/tel.png ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/tel.10667b945cfb00353294a805b284ff7a.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAR0lEQVR42kXIIQ6AIAAAwFOLczNQpPEe/6X/oDESnenjTMyLB4fAL3hUM8Ou6CImgOzGypA0G6IJFpyaS1eFUUlWvA5GsQt8jHIKgsGAhkEAAAAASUVORK5CYII="});

/***/ }),

/***/ "./styles/AccountPage.module.scss":
/*!****************************************!*\
  !*** ./styles/AccountPage.module.scss ***!
  \****************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"main": "AccountPage_main__1TeLg",
	"formRow": "AccountPage_formRow__cuw2Z",
	"secondButton": "AccountPage_secondButton__2Xfp2",
	"categoryContainer": "AccountPage_categoryContainer__2n9u1",
	"container": "AccountPage_container__2PDJb",
	"address": "AccountPage_address__1BUbm",
	"selectedAddress": "AccountPage_selectedAddress__3Hv74",
	"adressWrapper": "AccountPage_adressWrapper__2TJ2V",
	"selected": "AccountPage_selected__25ei6",
	"newAdressContainer": "AccountPage_newAdressContainer__1DHQv",
	"notificationText": "AccountPage_notificationText__3lyXq",
	"suceedContainer": "AccountPage_suceedContainer__I_aEB",
	"commandContainer": "AccountPage_commandContainer__3XAZY"
};


/***/ }),

/***/ "./styles/Layout.module.scss":
/*!***********************************!*\
  !*** ./styles/Layout.module.scss ***!
  \***********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Layout_container__3Msas",
	"main": "Layout_main__18HQ4",
	"footer": "Layout_footer__2HGdY",
	"brandContainer": "Layout_brandContainer__12iM7",
	"linksContainer": "Layout_linksContainer__2eI6T",
	"newsletterContainer": "Layout_newsletterContainer__2EDxy",
	"coordContainer": "Layout_coordContainer__qBUiw",
	"spacer": "Layout_spacer__1ik0s",
	"endContainer": "Layout_endContainer__1s4up"
};


/***/ }),

/***/ "./styles/Navbar.module.scss":
/*!***********************************!*\
  !*** ./styles/Navbar.module.scss ***!
  \***********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"main": "Navbar_main__3GZq4",
	"formRow": "Navbar_formRow__ZVX88",
	"secondButton": "Navbar_secondButton__AESRL",
	"categoryContainer": "Navbar_categoryContainer__BHioJ",
	"container": "Navbar_container__1nJDD",
	"badgeCount": "Navbar_badgeCount__2u5xG",
	"navContainer": "Navbar_navContainer__1CM7I",
	"companyNameContainer": "Navbar_companyNameContainer__2ks1W",
	"links": "Navbar_links__FUcUY"
};


/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "@stripe/react-stripe-js":
/*!******************************************!*\
  !*** external "@stripe/react-stripe-js" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/react-stripe-js");;

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/stripe-js");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-google-recaptcha":
/*!*****************************************!*\
  !*** external "react-google-recaptcha" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-google-recaptcha");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/paiement/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250Ly4vY29tcG9uZW50cy9BZHJlc3Nlcy5qcyIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250Ly4vY29tcG9uZW50cy9DaGVja291dEZvcm0uanMiLCJ3ZWJwYWNrOi8vamVyZW15LWNhcGVhdS1mcm9udC8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vamVyZW15LWNhcGVhdS1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vamVyZW15LWNhcGVhdS1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vamVyZW15LWNhcGVhdS1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vamVyZW15LWNhcGVhdS1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vamVyZW15LWNhcGVhdS1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanMiLCJ3ZWJwYWNrOi8vamVyZW15LWNhcGVhdS1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vamVyZW15LWNhcGVhdS1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vamVyZW15LWNhcGVhdS1mcm9udC8uL3BhZ2VzL3BhaWVtZW50L2luZGV4LmpzIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi91dGlscy9kYXRhRmV0Y2hlci5qcyIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250Ly4vdXRpbHMvZGF0YVBvc3Rlci5qcyIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250Ly4vdXRpbHMvc2VuZEdyaWRSZXF1ZXN0LmpzIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi9hc3NldHMvbG9nb3MvYWNjb3VudC5wbmciLCJ3ZWJwYWNrOi8vamVyZW15LWNhcGVhdS1mcm9udC8uL2Fzc2V0cy9sb2dvcy9hcmNoaXZzLWxvZ28ucG5nIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi9hc3NldHMvbG9nb3MvY3JvaXgucG5nIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi9hc3NldHMvbG9nb3MvZmFjZWJvb2sucG5nIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi9hc3NldHMvbG9nb3MvaW5zdGFncmFtLnBuZyIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250Ly4vYXNzZXRzL2xvZ29zL21haWwucG5nIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi9hc3NldHMvbG9nb3MvbWVudS5wbmciLCJ3ZWJwYWNrOi8vamVyZW15LWNhcGVhdS1mcm9udC8uL2Fzc2V0cy9sb2dvcy9wYW5pZXIucG5nIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi9hc3NldHMvbG9nb3MvdGVsLnBuZyIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250Ly4vc3R5bGVzL0FjY291bnRQYWdlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi9zdHlsZXMvTGF5b3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi9zdHlsZXMvTmF2YmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vamVyZW15LWNhcGVhdS1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vamVyZW15LWNhcGVhdS1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vamVyZW15LWNhcGVhdS1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vamVyZW15LWNhcGVhdS1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvZXh0ZXJuYWwgXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvZXh0ZXJuYWwgXCJAc3RyaXBlL3N0cmlwZS1qc1wiIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vamVyZW15LWNhcGVhdS1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250L2V4dGVybmFsIFwicmVhY3QtZ29vZ2xlLXJlY2FwdGNoYVwiIiwid2VicGFjazovL2plcmVteS1jYXBlYXUtZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9qZXJlbXktY2FwZWF1LWZyb250L2lnbm9yZWR8QzpcXFVzZXJzXFxIVUdPXFxEZXNrdG9wXFxQUk9KRVRTXFxKRVJFTVlDQVBFQVVcXGFyY2hpdnMtZnJvbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJBZHJlc3NlcyIsInNlbGVjdGFibGUiLCJzZXRDdXJyZW50QWRyZXNzIiwiY3VycmVudEFkcmVzcyIsImZvcm0iLCJ1c2VSZWYiLCJpbml0aWFsU3RhdGUiLCJwcmVub20iLCJub20iLCJ0ZWxlcGhvbmUiLCJ2b2llIiwidmlsbGUiLCJjb2RlX3Bvc3RhbCIsInBheXMiLCJpc05ldyIsImFkcmVzc2VzIiwic2V0QWRyZXNzZXMiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkQWRyZXNzIiwic2V0U2VsZWN0ZWRBZHJlc3MiLCJvcGVuRWRpdGluZyIsInNldE9wZW5FZGl0aW5nIiwidXNlciIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInVzZXJGZXRjaGVkIiwiZmV0Y2hEYXRhRnJvbUFQSSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiand0Iiwic2VsZWN0QWRyZXNzIiwiYWRyZXNzZSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsInB1dEFkcmVzc1RvQXBpIiwiYWxsQWRyZXNzZXMiLCJwdXREYXRhVG9BUEkiLCJyZXNwb25zZSIsImRhdGEiLCJzZXRBbGxBZHJlc3NlcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4IiwiZmluZEluZGV4IiwiaWQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImRlbGV0ZUFkcmVzcyIsInNlbGVjdGVkQWRyZXNzSWQiLCJmaWx0ZXIiLCJsZW5ndGgiLCJtYXAiLCJzZWxlY3RlZCIsInN0eWxlcyIsIm92ZXJmbG93IiwiaGVpZ2h0IiwidGFyZ2V0IiwidmFsdWUiLCJDaGVja291dEZvcm0iLCJ0b3RhbCIsImxvY2FsU3RvcmFnZSIsInVuZGVmaW5lZCIsInN1Y2NlZWRlZCIsInNldFN1Y2NlZWRlZCIsImVycm9yIiwic2V0RXJyb3IiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJpc0h1bWFuIiwic2V0SXNIdW1hbiIsInN0cmlwZSIsInVzZVN0cmlwZSIsImVsZW1lbnRzIiwidXNlRWxlbWVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjYXJkU3R5bGUiLCJpY29uU3R5bGUiLCJzdHlsZSIsImJhc2UiLCJpY29uQ29sb3IiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250U21vb3RoaW5nIiwiaW52YWxpZCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiZW1wdHkiLCJtZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZXYiLCJjYXJ0IiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImNvZGVQcm9tb1RleHQiLCJwb3N0RGF0YVRvQVBJIiwic2VjcmV0Q2xpZW50IiwicGF5bG9hZCIsImNvbmZpcm1DYXJkUGF5bWVudCIsInBheW1lbnRfbWV0aG9kIiwidHlwZSIsImNhcmQiLCJnZXRFbGVtZW50IiwiQ2FyZE51bWJlckVsZW1lbnQiLCJiaWxsaW5nX2RldGFpbHMiLCJuYW1lIiwicGF5bWVudElkIiwicGF5bWVudEludGVudCIsInJlcyIsInJlbW92ZUl0ZW0iLCJyZXBsYWNlIiwiY29tbWFuZGVJZCIsImNvbnNvbGUiLCJsb2ciLCJqdXN0aWZ5Q29udGVudCIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImZvb3RlckxpbmtzIiwic2V0Rm9vdGVyTGlua3MiLCJpbnN0YWdyYW1MaW5rIiwic2V0SW5zdGFncmFtTGluayIsImZhY2Vib29rTGluayIsInNldEZhY2Vib29rTGluayIsIm1haWwiLCJzZXRNYWlsIiwibmV3c2xldHRlck1haWwiLCJzZXROZXdzbGV0dGVyTWFpbCIsInRlbCIsInNldFRlbCIsImZvb3Rlcl9saWVucyIsImluc3RhZ3JhbV9saW5rIiwiZmFjZWJvb2tfbGluayIsIm1haWxfcGVyc29ubmVsIiwidGVsX3BlcnNvbmVsIiwibGllbiIsInBkZiIsIkJBU0VfVVJMIiwidXJsIiwic3BhY2VyIiwiYWRkQ29udGFjdCIsIk5hdmJhciIsImlzQ29ubmVjdGVkIiwic2V0SXNDb25uZWN0ZWQiLCJjb3VudCIsImxvZ29QaWMiLCJhY2NvdW50UGljIiwicGFuaWVyUGljIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiSW1hZ2UiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJkZWZhdWx0IiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImIiLCJnZXRXaWR0aHMiLCJ3aWR0aCIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJzIiwia2luZCIsIlNldCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0IiwiaSIsImpvaW4iLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsInJlbW92ZVBsYWNlaG9sZGVyIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9yZWYiLCJwcmlvcml0eSIsImxvYWRpbmciLCJjbGFzc05hbWUiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJ3YXJuIiwiVkFMSURfQkxVUl9FWFQiLCJpc0xhenkiLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50IiwiYWx0Iiwicm9sZSIsInRvQmFzZTY0IiwiT2JqZWN0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWYiLCJlbGVtZW50Iiwia2V5IiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiVVJMIiwiZXJyIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJpbmRleE9mIiwiTGluayIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInNldEludGVyc2VjdGlvblJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImhhcyIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsInRlc3QiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJwYXRobmFtZSIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsInRvTG93ZXJDYXNlIiwic3BsaWNlIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4Iiwib2JqIiwiX19lc01vZHVsZSIsImRldGVjdERvbWFpbkxvY2FsZSIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcCIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcDIiLCJfb3B0aW9ucyRzY3JvbGwiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsInkiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZvcm1hdFVybCIsInF1ZXJ5c3RyaW5nIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNsYXNoZWRQcm90b2NvbHMiLCJ1cmxPYmoiLCJhdXRoIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJpdGVtIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImZyb20iLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJwcm9taXNlIiwibG9hZFN0cmlwZSIsIlBhaWVtZW50RWxlbWVudCIsInBhZ2VUeXBlIiwic2V0UGFnZVR5cGUiLCJnb1RvUGF5bWVudCIsImFsZXJ0IiwidGV4dEFsaWduIiwiYXBpRW5kcG9pbnQiLCJkZWZhdWx0T2JqZWN0IiwiY29uZmlnIiwiYXhpb3MiLCJjb250YWN0cyIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQWtCO0FBQy9CQyxZQUFV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S0FBcUMsRUFBRSxFQUUxQztBQUNELEVBQUUsa0pBQXlEO0FBQzNEOzs7Ozs7Ozs7Ozs7QUNOQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvcGFpZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0FjY291bnRQYWdlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IGZldGNoRGF0YUZyb21BUEkgfSBmcm9tIFwiLi4vdXRpbHMvZGF0YUZldGNoZXJcIjtcclxuaW1wb3J0IHsgcHV0RGF0YVRvQVBJIH0gZnJvbSBcIi4uL3V0aWxzL2RhdGFQb3N0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkcmVzc2VzKHtcclxuICBzZWxlY3RhYmxlID0gZmFsc2UsXHJcbiAgc2V0Q3VycmVudEFkcmVzcyA9ICgpID0+IHt9LFxyXG4gIGN1cnJlbnRBZHJlc3MsXHJcbn0pIHtcclxuICBjb25zdCBmb3JtID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHByZW5vbTogXCJcIixcclxuICAgIG5vbTogXCJcIixcclxuICAgIHRlbGVwaG9uZTogXCJcIixcclxuICAgIHZvaWU6IFwiXCIsXHJcbiAgICB2aWxsZTogXCJcIixcclxuICAgIGNvZGVfcG9zdGFsOiBcIlwiLFxyXG4gICAgcGF5czogXCJcIixcclxuICAgIGlzTmV3OiB0cnVlLFxyXG4gIH07XHJcbiAgY29uc3QgW2FkcmVzc2VzLCBzZXRBZHJlc3Nlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQWRyZXNzLCBzZXRTZWxlY3RlZEFkcmVzc10gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gIGNvbnN0IFtvcGVuRWRpdGluZywgc2V0T3BlbkVkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHVzZXIgPVxyXG4gICAgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpICYmXHJcbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSkgfHxcclxuICAgIHt9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdXNlckZldGNoZWQgPSBhd2FpdCBmZXRjaERhdGFGcm9tQVBJKFxyXG4gICAgICAgIGAvdXNlcnMvbWVgLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB1c2VyLmp3dCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgc2V0QWRyZXNzZXModXNlckZldGNoZWQuYWRyZXNzZXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdEFkcmVzcyA9IChhZHJlc3NlKSA9PiB7XHJcbiAgICBzZXRPcGVuRWRpdGluZyh0cnVlKTtcclxuICAgIGZvcm0uY3VycmVudC5zY3JvbGxJbnRvVmlldyh0cnVlKTtcclxuICAgIHNldFNlbGVjdGVkQWRyZXNzKGFkcmVzc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHB1dEFkcmVzc1RvQXBpID0gKGFsbEFkcmVzc2VzKSA9PiB7XHJcbiAgICBwdXREYXRhVG9BUEkoXHJcbiAgICAgIFwiL3VzZXJzLXBlcm1pc3Npb25zL3VzZXJzL21lXCIsXHJcbiAgICAgIHsgYWRyZXNzZXM6IGFsbEFkcmVzc2VzIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHVzZXIuand0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldEFkcmVzc2VzKHJlc3BvbnNlLmRhdGEuYWRyZXNzZXMpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkQWRyZXNzKGluaXRpYWxTdGF0ZSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0QWxsQWRyZXNzZXMgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGFsbEFkcmVzc2VzID0gYWRyZXNzZXMgfHwgW107XHJcbiAgICBpZiAoc2VsZWN0ZWRBZHJlc3MuaXNOZXcpIHtcclxuICAgICAgYWxsQWRyZXNzZXMgPSBbLi4uYWxsQWRyZXNzZXMsIHNlbGVjdGVkQWRyZXNzXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gYWxsQWRyZXNzZXMuZmluZEluZGV4KCh7IGlkIH0pID0+IHNlbGVjdGVkQWRyZXNzLmlkID09IGlkKTtcclxuICAgICAgYWxsQWRyZXNzZXNbaW5kZXhdID0gc2VsZWN0ZWRBZHJlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0QWRyZXNzVG9BcGkoYWxsQWRyZXNzZXMpO1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgc2V0T3BlbkVkaXRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUFkcmVzcyA9IChzZWxlY3RlZEFkcmVzc0lkKSA9PiB7XHJcbiAgICBsZXQgYWxsQWRyZXNzZXMgPSBhZHJlc3Nlcy5maWx0ZXIoKHsgaWQgfSkgPT4gc2VsZWN0ZWRBZHJlc3NJZCAhPSBpZCk7XHJcbiAgICBwdXRBZHJlc3NUb0FwaShhbGxBZHJlc3Nlcyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3RBZHJlc3MoaW5pdGlhbFN0YXRlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ3LDqWVyIHVuZSBub3V2ZWxsZSBhZHJlc3NlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAge2FkcmVzc2VzPy5sZW5ndGggPyAoXHJcbiAgICAgICAgICBhZHJlc3Nlcy5tYXAoKGFkcmVzc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgIHByZW5vbSxcclxuICAgICAgICAgICAgICBub20sXHJcbiAgICAgICAgICAgICAgdGVsZXBob25lLFxyXG4gICAgICAgICAgICAgIHZvaWUsXHJcbiAgICAgICAgICAgICAgdmlsbGUsXHJcbiAgICAgICAgICAgICAgY29kZV9wb3N0YWwsXHJcbiAgICAgICAgICAgICAgcGF5cyxcclxuICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgfSA9IGFkcmVzc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gY3VycmVudEFkcmVzcz8uaWQgPT0gaWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzZWxlY3RlZCA/IHN0eWxlcy5zZWxlY3RlZEFkZHJlc3MgOiBzdHlsZXMuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHJlc3NXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAge3ByZW5vbX0ge25vbX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD57dGVsZXBob25lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+e3ZvaWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD57dmlsbGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD57Y29kZV9wb3N0YWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD57cGF5c308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRyZXNzV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0QWRyZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWRyZXNzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNOZXc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDinI/vuI9cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVBZHJlc3MoaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIOKdjFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3NlbGVjdGFibGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudEFkcmVzcyhhZHJlc3NlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdGVkID8gc3R5bGVzLnNlbGVjdGVkIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZCA/IFwiU8OpbGVjdGlvbm7DqVwiIDogXCJTw6lsZWN0aW9ubmVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkcmVzc30+XHJcbiAgICAgICAgICAgIDxoND5BdWN1bmUgYWRyZXNzZSB0cm91dsOpZTwvaDQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdBZHJlc3NDb250YWluZXJ9IHJlZj17Zm9ybX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogb3BlbkVkaXRpbmcgPyBcIjEwMCVcIiA6IDAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAge3NlbGVjdGVkQWRyZXNzLmlzTmV3XHJcbiAgICAgICAgICAgICAgPyBcIk5vdXZlbGxlIGFkcmVzc2VcIlxyXG4gICAgICAgICAgICAgIDogXCJNaXNlIMOgIGpvdXIgZCdhZHJlc3NlXCJ9XHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NldEFsbEFkcmVzc2VzfT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcsOpbm9tXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRBZHJlc3M/LnByZW5vbX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEFkcmVzcyh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGVkQWRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICBwcmVub206IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRBZHJlc3M/Lm5vbX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEFkcmVzcyh7IC4uLnNlbGVjdGVkQWRyZXNzLCBub206IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVMOpbMOpcGhvbmUgXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRBZHJlc3M/LnRlbGVwaG9uZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEFkcmVzcyh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGVkQWRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICB0ZWxlcGhvbmU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVm9pZSBldCBjb21wbMOpbWVudCBkJ2FkcmVzc2VcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZEFkcmVzcz8udm9pZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEFkcmVzcyh7IC4uLnNlbGVjdGVkQWRyZXNzLCB2b2llOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWaWxsZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkQWRyZXNzPy52aWxsZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEFkcmVzcyh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGVkQWRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICB2aWxsZTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvZGUgcG9zdGFsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRBZHJlc3M/LmNvZGVfcG9zdGFsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQWRyZXNzKHtcclxuICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0ZWRBZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgIGNvZGVfcG9zdGFsOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBheXNcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZEFkcmVzcz8ucGF5c31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEFkcmVzcyh7IC4uLnNlbGVjdGVkQWRyZXNzLCBwYXlzOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAge3NlbGVjdGVkQWRyZXNzLmlzTmV3ID8gXCJBam91dGVyXCIgOiBcIk1vZGlmaWVyXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICB1c2VTdHJpcGUsXHJcbiAgdXNlRWxlbWVudHMsXHJcbiAgQ2FyZE51bWJlckVsZW1lbnQsXHJcbiAgQ2FyZEN2Y0VsZW1lbnQsXHJcbiAgQ2FyZEV4cGlyeUVsZW1lbnQsXHJcbn0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XHJcbmltcG9ydCB7IHBvc3REYXRhVG9BUEkgfSBmcm9tIFwiLi4vdXRpbHMvZGF0YVBvc3RlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQWNjb3VudFBhZ2UubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZUNBUFRDSEEgZnJvbSBcInJlYWN0LWdvb2dsZS1yZWNhcHRjaGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrb3V0Rm9ybSh7IGFkcmVzc2UgfSkge1xyXG4gIGNvbnN0IHRvdGFsID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvdGFsXCIpO1xyXG4gIGNvbnN0IHVzZXIgPVxyXG4gICAgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpICYmXHJcbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSkgfHxcclxuICAgIHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3QgW3N1Y2NlZWRlZCwgc2V0U3VjY2VlZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwcm9jZXNzaW5nLCBzZXRQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2lzSHVtYW4sIHNldElzSHVtYW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgY2FyZFN0eWxlID0ge1xyXG4gICAgaWNvblN0eWxlOiBcInNvbGlkXCIsXHJcbiAgICBzdHlsZToge1xyXG4gICAgICBiYXNlOiB7XHJcbiAgICAgICAgaWNvbkNvbG9yOiBcIiNjNGYwZmZcIixcclxuICAgICAgICBjb2xvcjogXCIjNDg0ODQ4XCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiTW9udHNlcnJhdCwgT3BlbiBTYW5zLCBTZWdvZSBVSSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICAgICAgICBmb250U21vb3RoaW5nOiBcImFudGlhbGlhc2VkXCIsXHJcbiAgICAgICAgXCI6LXdlYmtpdC1hdXRvZmlsbFwiOiB7XHJcbiAgICAgICAgICBjb2xvcjogXCIjNDg0ODQ4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIjo6cGxhY2Vob2xkZXJcIjoge1xyXG4gICAgICAgICAgY29sb3I6IFwiIzk4OTg5OFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGludmFsaWQ6IHtcclxuICAgICAgICBpY29uQ29sb3I6IFwiIzk4MTQxNFwiLFxyXG4gICAgICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBzZXREaXNhYmxlZChldmVudC5lbXB0eSk7XHJcbiAgICBzZXRFcnJvcihldmVudC5lcnJvciA/IGV2ZW50LmVycm9yLm1lc3NhZ2UgOiBcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXYpID0+IHtcclxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRQcm9jZXNzaW5nKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGNhcnQgPVxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikgJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikpO1xyXG4gICAgY29uc3QgdG90YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvdGFsXCIpO1xyXG4gICAgY29uc3QgY29kZVByb21vVGV4dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29kZVwiKTtcclxuXHJcbiAgICBpZiAoIXRvdGFsIHx8ICFjYXJ0KSB7XHJcbiAgICAgIHNldEVycm9yKGBQYWllbWVudCBpbXBvc3NpYmxlLiBSZXByb2PDqWRleiBhdSBwYWllbWVudCBkZXB1aXMgbGUgcGFuaWVyYCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBvc3REYXRhVG9BUEkoXHJcbiAgICAgIFwiL2NvbW1hbmRlcy9jaGVja1BheW1lbnRcIixcclxuICAgICAgeyBjYXJ0LCB0b3RhbCwgY29kZVByb21vVGV4dCB9LFxyXG4gICAgICBhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zdCB7IHNlY3JldENsaWVudCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgc3RyaXBlLmNvbmZpcm1DYXJkUGF5bWVudChzZWNyZXRDbGllbnQsIHtcclxuICAgICAgICAgIHBheW1lbnRfbWV0aG9kOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiY2FyZFwiLFxyXG4gICAgICAgICAgICBjYXJkOiBlbGVtZW50cy5nZXRFbGVtZW50KENhcmROdW1iZXJFbGVtZW50KSxcclxuICAgICAgICAgICAgYmlsbGluZ19kZXRhaWxzOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogYWRyZXNzZS5ub20gKyBcIiBcIiArIGFkcmVzc2UucHJlbm9tLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocGF5bG9hZC5lcnJvcikge1xyXG4gICAgICAgICAgc2V0RXJyb3IoXHJcbiAgICAgICAgICAgIGBQYWllbWVudCBpbXBvc3NpYmxlLiBJbXBvc3NpYmxlIGRlIGNyw6llciBsYSBjb21tYW5kZSwgJHtlcnJvcn1gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgc2V0UHJvY2Vzc2luZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBvc3REYXRhVG9BUEkoXHJcbiAgICAgICAgICBcIi9jb21tYW5kZXMvY3JlYXRlTWVcIixcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY2FydCxcclxuICAgICAgICAgICAgdG90YWwsXHJcbiAgICAgICAgICAgIGNvZGVQcm9tb1RleHQsXHJcbiAgICAgICAgICAgIGFkcmVzc2UsXHJcbiAgICAgICAgICAgIHBheW1lbnRJZDogcGF5bG9hZC5wYXltZW50SW50ZW50LmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICAgICAgICAgIHNldFByb2Nlc3NpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRTdWNjZWVkZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2FydFwiKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjb2RlXCIpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRvdGFsXCIpO1xyXG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZShcclxuICAgICAgICAgICAgICBcIi9wYWllbWVudC9zdWNjZWVkP2NvbW1hbmRlSWQ9XCIgKyByZXMuZGF0YT8uY29tbWFuZGVJZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHNldEVycm9yKFxyXG4gICAgICAgICAgICAgIGBQYWllbWVudCBpbXBvc3NpYmxlLiBJbXBvc3NpYmxlIGRlIGNyw6llciBsYSBjb21tYW5kZSwgdmV1aWxsZXogcmVjb21tZW5jZXJgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHNldFByb2Nlc3NpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdXNlci5qd3QsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IoXCJQYWllbWVudCBpbXBvc3NpYmxlLiBcIiArIGVycm9yLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlKTtcclxuICAgICAgICBzZXRQcm9jZXNzaW5nKGZhbHNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHVzZXIuand0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGlkPVwicGF5bWVudC1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybVJvd30+XHJcbiAgICAgICAgPGxhYmVsPk51bcOpcm8gZGUgY2FydGU8L2xhYmVsPlxyXG4gICAgICAgIDxDYXJkTnVtYmVyRWxlbWVudFxyXG4gICAgICAgICAgaWQ9XCJjYXJkLWVsZW1lbnRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEVsZW1lbnR9XHJcbiAgICAgICAgICBvcHRpb25zPXtjYXJkU3R5bGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Sb3d9PlxyXG4gICAgICAgIDxsYWJlbD5Db2RlIGRlIHPDqWN1cml0w6k8L2xhYmVsPlxyXG4gICAgICAgIDxDYXJkQ3ZjRWxlbWVudFxyXG4gICAgICAgICAgaWQ9XCJjYXJkLWVsZW1lbnRcIlxyXG4gICAgICAgICAgb3B0aW9ucz17Y2FyZFN0eWxlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtUm93fT5cclxuICAgICAgICA8bGFiZWw+RGF0ZSBkJ2V4cGlyYXRpb248L2xhYmVsPlxyXG4gICAgICAgIDxDYXJkRXhwaXJ5RWxlbWVudFxyXG4gICAgICAgICAgaWQ9XCJjYXJkLWVsZW1lbnRcIlxyXG4gICAgICAgICAgb3B0aW9ucz17Y2FyZFN0eWxlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luVG9wOiBcIjR2d1wiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8UmVDQVBUQ0hBXHJcbiAgICAgICAgICBzaXRla2V5PVwiNkxlSXhBY1RBQUFBQUpjWlZScXlIaDcxVU1JRUdOUV9NWGppWktoSVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0SXNIdW1hbih0cnVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBkaXNhYmxlZD17cHJvY2Vzc2luZyB8fCBkaXNhYmxlZCB8fCBzdWNjZWVkZWQgfHwgIWlzSHVtYW59XHJcbiAgICAgICAgaWQ9XCJzdWJtaXRcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3Byb2Nlc3NpbmcgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIiBpZD1cInNwaW5uZXJcIj5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICBFbiBjb3VycyBkZSBwYWllbWVudC4uLlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIGBQcm9jw6lkZXIgYXUgcGF5ZW1lbnQgwrcgJHt0b3RhbCB8fCAwfSDigqxgXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtlcnJvciAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWVycm9yXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ub3RpZmljYXRpb25UZXh0fT57ZXJyb3J9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7c3VjY2VlZGVkICYmIChcclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ub3RpZmljYXRpb25UZXh0fT5QYWllbWVudCByw6l1c3NpICE8L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9MYXlvdXQubW9kdWxlLnNjc3MnO1xyXG5cclxuaW1wb3J0IEluc3RhUGljIGZyb20gJy4uL2Fzc2V0cy9sb2dvcy9pbnN0YWdyYW0ucG5nJztcclxuaW1wb3J0IEZhY2Vib29rUGljIGZyb20gJy4uL2Fzc2V0cy9sb2dvcy9mYWNlYm9vay5wbmcnO1xyXG5pbXBvcnQgTWFpbFBpYyBmcm9tICcuLi9hc3NldHMvbG9nb3MvbWFpbC5wbmcnO1xyXG5pbXBvcnQgVGVsUGljIGZyb20gJy4uL2Fzc2V0cy9sb2dvcy90ZWwucG5nJztcclxuaW1wb3J0IHsgQkFTRV9VUkwsIGZldGNoRGF0YUZyb21BUEkgfSBmcm9tICcuLi91dGlscy9kYXRhRmV0Y2hlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGFkZENvbnRhY3QgfSBmcm9tICcuLi91dGlscy9zZW5kR3JpZFJlcXVlc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtmb290ZXJMaW5rcywgc2V0Rm9vdGVyTGlua3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbnN0YWdyYW1MaW5rLCBzZXRJbnN0YWdyYW1MaW5rXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZmFjZWJvb2tMaW5rLCBzZXRGYWNlYm9va0xpbmtdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttYWlsLCBzZXRNYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbmV3c2xldHRlck1haWwsIHNldE5ld3NsZXR0ZXJNYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdGVsLCBzZXRUZWxdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhRnJvbUFQSSgnL2EtcHJvcG9zJywge30pO1xyXG4gICAgICBzZXRGb290ZXJMaW5rcyhkYXRhLmZvb3Rlcl9saWVucyk7XHJcbiAgICAgIHNldEluc3RhZ3JhbUxpbmsoZGF0YS5pbnN0YWdyYW1fbGluayk7XHJcbiAgICAgIHNldEZhY2Vib29rTGluayhkYXRhLmZhY2Vib29rX2xpbmspO1xyXG4gICAgICBzZXRNYWlsKGRhdGEubWFpbF9wZXJzb25uZWwpO1xyXG4gICAgICBzZXRUZWwoZGF0YS50ZWxfcGVyc29uZWwpO1xyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkFyY2hpdidzIC0gQm91dGlxdWUgZGUgcG9zdGVycyBldCBkw6lyaXbDqXM8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgIGNvbnRlbnQ9J0JvdXRpcXVlIGRlIHBvc3RlcnMsIG11Z3MsIHBheXNhZ2VzLCBkZXNzaW5zJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzQ29udGFpbmVyfT5cclxuICAgICAgICAgIHtmb290ZXJMaW5rcy5tYXAoKHsgbGllbiwgbm9tLCBpZCwgcGRmIH0pID0+IChcclxuICAgICAgICAgICAgPExpbmsgaHJlZj17cGRmID8gYCR7QkFTRV9VUkx9JHtwZGYudXJsfWAgOiBsaWVufSBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICA8YT57bm9tfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcGFjZXJ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3c2xldHRlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgVmV1aWxsZXogc2Fpc2lyIHZvdHJlIGFkcmVzc2UgZS1tYWlsIHBvdXIgdm91cyBhYm9ubmVyIMOgIGxhXHJcbiAgICAgICAgICAgIG5ld3NsZXR0ZXIuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1ZvdHJlIG1haWwnXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3c2xldHRlck1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkQ29udGFjdChuZXdzbGV0dGVyTWFpbCl9PlNvdXNjcmlyZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW5kQ29udGFpbmVyfT5cclxuICAgICAgICAgIDxwPkAyMDIxIEFyY2hpdidzPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IGFjY291bnRQaWMgZnJvbSAnLi4vYXNzZXRzL2xvZ29zL2FjY291bnQucG5nJztcclxuaW1wb3J0IHBhbmllclBpYyBmcm9tICcuLi9hc3NldHMvbG9nb3MvcGFuaWVyLnBuZyc7XHJcbmltcG9ydCBjbG9zZVBpYyBmcm9tICcuLi9hc3NldHMvbG9nb3MvY3JvaXgucG5nJztcclxuaW1wb3J0IGxvZ29QaWMgZnJvbSAnLi4vYXNzZXRzL2xvZ29zL2FyY2hpdnMtbG9nby5wbmcnO1xyXG5pbXBvcnQgbWVudVBpYyBmcm9tICcuLi9hc3NldHMvbG9nb3MvbWVudS5wbmcnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTmF2YmFyLm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCBbaXNDb25uZWN0ZWQsIHNldElzQ29ubmVjdGVkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcblxyXG4gIGNvbnN0IGNvdW50ID1cclxuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpICYmXHJcbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkucmVkdWNlKCh0b3RhbCwgeyBxdWFudGl0eSB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICh0b3RhbCArPSBxdWFudGl0eSk7XHJcbiAgICAgIH0sIDApKSB8fFxyXG4gICAgMDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgdXNlciA9XHJcbiAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpICYmXHJcbiAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpKSB8fFxyXG4gICAgICAgIHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIHNldElzQ29ubmVjdGVkKHVzZXIgIT0gdW5kZWZpbmVkKTtcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55TmFtZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8TGluayBocmVmPScvJyBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPEltYWdlIGFsdD0nbG9nbycgc3JjPXtsb2dvUGljfSAvPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAge2lzQ29ubmVjdGVkICE9PSB1bmRlZmluZWQgJiYgKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtpc0Nvbm5lY3RlZCA/ICcvbW9uLWNvbXB0ZScgOiAnL2xvZ2luJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgPEltYWdlIGFsdD0nbW9uIGNvbXB0ZScgc3JjPXthY2NvdW50UGljfSAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wYW5pZXInIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBhbHQ9J3Bhbmllcicgc3JjPXtwYW5pZXJQaWN9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWRnZUNvdW50fT5cclxuICAgICAgICAgICAgICAgIDxwPntjb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1JbWFnZTt2YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfaGVhZD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvaGVhZFwiKSk7dmFyIF90b0Jhc2U9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0XCIpO3ZhciBfaW1hZ2VDb25maWc9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWdcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpeztnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEPXRydWU7fWNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTPVsnbGF6eScsJ2VhZ2VyJyx1bmRlZmluZWRdO2NvbnN0IGxvYWRlcnM9bmV3IE1hcChbWydpbWdpeCcsaW1naXhMb2FkZXJdLFsnY2xvdWRpbmFyeScsY2xvdWRpbmFyeUxvYWRlcl0sWydha2FtYWknLGFrYW1haUxvYWRlcl0sWydkZWZhdWx0JyxkZWZhdWx0TG9hZGVyXV0pO2NvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVM9WydmaWxsJywnZml4ZWQnLCdpbnRyaW5zaWMnLCdyZXNwb25zaXZlJyx1bmRlZmluZWRdO2Z1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpe3JldHVybiBzcmMuZGVmYXVsdCE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKXtyZXR1cm4gc3JjLnNyYyE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKXtyZXR1cm4gdHlwZW9mIHNyYz09PSdvYmplY3QnJiYoaXNTdGF0aWNSZXF1aXJlKHNyYyl8fGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO31jb25zdHtkZXZpY2VTaXplczpjb25maWdEZXZpY2VTaXplcyxpbWFnZVNpemVzOmNvbmZpZ0ltYWdlU2l6ZXMsbG9hZGVyOmNvbmZpZ0xvYWRlcixwYXRoOmNvbmZpZ1BhdGgsZG9tYWluczpjb25maWdEb21haW5zfT1wcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUU3x8X2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDsvLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzPVsuLi5jb25maWdEZXZpY2VTaXplcywuLi5jb25maWdJbWFnZVNpemVzXTtjb25maWdEZXZpY2VTaXplcy5zb3J0KChhLGIpPT5hLWIpO2FsbFNpemVzLnNvcnQoKGEsYik9PmEtYik7ZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyl7aWYoc2l6ZXMmJihsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJykpey8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG5jb25zdCB2aWV3cG9ydFdpZHRoUmU9LyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7Y29uc3QgcGVyY2VudFNpemVzPVtdO2ZvcihsZXQgbWF0Y2g7bWF0Y2g9dmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpO21hdGNoKXtwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO31pZihwZXJjZW50U2l6ZXMubGVuZ3RoKXtjb25zdCBzbWFsbGVzdFJhdGlvPU1hdGgubWluKC4uLnBlcmNlbnRTaXplcykqMC4wMTtyZXR1cm57d2lkdGhzOmFsbFNpemVzLmZpbHRlcihzPT5zPj1jb25maWdEZXZpY2VTaXplc1swXSpzbWFsbGVzdFJhdGlvKSxraW5kOid3J307fXJldHVybnt3aWR0aHM6YWxsU2l6ZXMsa2luZDondyd9O31pZih0eXBlb2Ygd2lkdGghPT0nbnVtYmVyJ3x8bGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpe3JldHVybnt3aWR0aHM6Y29uZmlnRGV2aWNlU2l6ZXMsa2luZDondyd9O31jb25zdCB3aWR0aHM9Wy4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbi8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4vLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbi8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbi8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuW3dpZHRoLHdpZHRoKjIvKiwgd2lkdGggKiAzKi9dLm1hcCh3PT5hbGxTaXplcy5maW5kKHA9PnA+PXcpfHxhbGxTaXplc1thbGxTaXplcy5sZW5ndGgtMV0pKV07cmV0dXJue3dpZHRocyxraW5kOid4J307fWZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGgscXVhbGl0eSxzaXplcyxsb2FkZXJ9KXtpZih1bm9wdGltaXplZCl7cmV0dXJue3NyYyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07fWNvbnN0e3dpZHRocyxraW5kfT1nZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKTtjb25zdCBsYXN0PXdpZHRocy5sZW5ndGgtMTtyZXR1cm57c2l6ZXM6IXNpemVzJiZraW5kPT09J3cnPycxMDB2dyc6c2l6ZXMsc3JjU2V0OndpZHRocy5tYXAoKHcsaSk9PmAke2xvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d30pfSAke2tpbmQ9PT0ndyc/dzppKzF9JHtraW5kfWApLmpvaW4oJywgJyksLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbi8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbi8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbi8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4vLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbi8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94Llxuc3JjOmxvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d2lkdGhzW2xhc3RdfSl9O31mdW5jdGlvbiBnZXRJbnQoeCl7aWYodHlwZW9mIHg9PT0nbnVtYmVyJyl7cmV0dXJuIHg7fWlmKHR5cGVvZiB4PT09J3N0cmluZycpe3JldHVybiBwYXJzZUludCh4LDEwKTt9cmV0dXJuIHVuZGVmaW5lZDt9ZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKXtjb25zdCBsb2FkPWxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7aWYobG9hZCl7cmV0dXJuIGxvYWQoKDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtyb290OmNvbmZpZ1BhdGh9LGxvYWRlclByb3BzKSk7fXRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTt9Ly8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHJlbW92ZVBsYWNlaG9sZGVyKGltZyxwbGFjZWhvbGRlcil7aWYocGxhY2Vob2xkZXI9PT0nYmx1cicmJmltZyl7Y29uc3QgaGFuZGxlTG9hZD0oKT0+e2lmKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpe2NvbnN0IHA9J2RlY29kZSdpbiBpbWc/aW1nLmRlY29kZSgpOlByb21pc2UucmVzb2x2ZSgpO3AuY2F0Y2goKCk9Pnt9KS50aGVuKCgpPT57aW1nLnN0eWxlLmZpbHRlcj0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRTaXplPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlPSdub25lJzt9KTt9fTtpZihpbWcuY29tcGxldGUpey8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbmhhbmRsZUxvYWQoKTt9ZWxzZXtpbWcub25sb2FkPWhhbmRsZUxvYWQ7fX19ZnVuY3Rpb24gSW1hZ2UoX3JlZil7bGV0e3NyYyxzaXplcyx1bm9wdGltaXplZD1mYWxzZSxwcmlvcml0eT1mYWxzZSxsb2FkaW5nLGNsYXNzTmFtZSxxdWFsaXR5LHdpZHRoLGhlaWdodCxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb24sbG9hZGVyPWRlZmF1bHRJbWFnZUxvYWRlcixwbGFjZWhvbGRlcj0nZW1wdHknLGJsdXJEYXRhVVJMfT1fcmVmLGFsbD0oMCxfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZixbXCJzcmNcIixcInNpemVzXCIsXCJ1bm9wdGltaXplZFwiLFwicHJpb3JpdHlcIixcImxvYWRpbmdcIixcImNsYXNzTmFtZVwiLFwicXVhbGl0eVwiLFwid2lkdGhcIixcImhlaWdodFwiLFwib2JqZWN0Rml0XCIsXCJvYmplY3RQb3NpdGlvblwiLFwibG9hZGVyXCIsXCJwbGFjZWhvbGRlclwiLFwiYmx1ckRhdGFVUkxcIl0pO2xldCByZXN0PWFsbDtsZXQgbGF5b3V0PXNpemVzPydyZXNwb25zaXZlJzonaW50cmluc2ljJztpZignbGF5b3V0J2luIHJlc3Qpey8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG5pZihyZXN0LmxheW91dClsYXlvdXQ9cmVzdC5sYXlvdXQ7Ly8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuZGVsZXRlIHJlc3RbJ2xheW91dCddO31sZXQgc3RhdGljU3JjPScnO2lmKGlzU3RhdGljSW1wb3J0KHNyYykpe2NvbnN0IHN0YXRpY0ltYWdlRGF0YT1pc1N0YXRpY1JlcXVpcmUoc3JjKT9zcmMuZGVmYXVsdDpzcmM7aWYoIXN0YXRpY0ltYWdlRGF0YS5zcmMpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9Ymx1ckRhdGFVUkw9Ymx1ckRhdGFVUkx8fHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtzdGF0aWNTcmM9c3RhdGljSW1hZ2VEYXRhLnNyYztpZighbGF5b3V0fHxsYXlvdXQhPT0nZmlsbCcpe2hlaWdodD1oZWlnaHR8fHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7d2lkdGg9d2lkdGh8fHN0YXRpY0ltYWdlRGF0YS53aWR0aDtpZighc3RhdGljSW1hZ2VEYXRhLmhlaWdodHx8IXN0YXRpY0ltYWdlRGF0YS53aWR0aCl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9fX1zcmM9dHlwZW9mIHNyYz09PSdzdHJpbmcnP3NyYzpzdGF0aWNTcmM7Y29uc3Qgd2lkdGhJbnQ9Z2V0SW50KHdpZHRoKTtjb25zdCBoZWlnaHRJbnQ9Z2V0SW50KGhlaWdodCk7Y29uc3QgcXVhbGl0eUludD1nZXRJbnQocXVhbGl0eSk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKCFzcmMpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHt3aWR0aCxoZWlnaHQscXVhbGl0eX0pfWApO31pZighVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4od2lkdGhJbnQpfHx0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmlzTmFOKGhlaWdodEludCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO31pZighVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHByaW9yaXR5JiZsb2FkaW5nPT09J2xhenknKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7fWlmKHBsYWNlaG9sZGVyPT09J2JsdXInKXtpZihsYXlvdXQhPT0nZmlsbCcmJih3aWR0aEludHx8MCkqKGhlaWdodEludHx8MCk8MTYwMCl7Y29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTt9aWYoIWJsdXJEYXRhVVJMKXtjb25zdCBWQUxJRF9CTFVSX0VYVD1bJ2pwZWcnLCdwbmcnLCd3ZWJwJ107Ly8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG50aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTt9fX1sZXQgaXNMYXp5PSFwcmlvcml0eSYmKGxvYWRpbmc9PT0nbGF6eSd8fHR5cGVvZiBsb2FkaW5nPT09J3VuZGVmaW5lZCcpO2lmKHNyYyYmc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpey8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG51bm9wdGltaXplZD10cnVlO2lzTGF6eT1mYWxzZTt9Y29uc3Rbc2V0UmVmLGlzSW50ZXJzZWN0ZWRdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnLGRpc2FibGVkOiFpc0xhenl9KTtjb25zdCBpc1Zpc2libGU9IWlzTGF6eXx8aXNJbnRlcnNlY3RlZDtsZXQgd3JhcHBlclN0eWxlO2xldCBzaXplclN0eWxlO2xldCBzaXplclN2ZztsZXQgaW1nU3R5bGU9KDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZzowLGJvcmRlcjonbm9uZScsbWFyZ2luOidhdXRvJyxkaXNwbGF5OidibG9jaycsd2lkdGg6MCxoZWlnaHQ6MCxtaW5XaWR0aDonMTAwJScsbWF4V2lkdGg6JzEwMCUnLG1pbkhlaWdodDonMTAwJScsbWF4SGVpZ2h0OicxMDAlJyxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb259LHBsYWNlaG9sZGVyPT09J2JsdXInP3tmaWx0ZXI6J2JsdXIoMjBweCknLGJhY2tncm91bmRTaXplOidjb3ZlcicsYmFja2dyb3VuZEltYWdlOmB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWB9OnVuZGVmaW5lZCk7aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmbGF5b3V0IT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG5jb25zdCBxdW90aWVudD1oZWlnaHRJbnQvd2lkdGhJbnQ7Y29uc3QgcGFkZGluZ1RvcD1pc05hTihxdW90aWVudCk/JzEwMCUnOmAke3F1b3RpZW50KjEwMH0lYDtpZihsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmdUb3B9O31lbHNlIGlmKGxheW91dD09PSdpbnRyaW5zaWMnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsbWF4V2lkdGg6JzEwMCUnLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17Ym94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidibG9jaycsbWF4V2lkdGg6JzEwMCUnfTtzaXplclN2Zz1gPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDt9ZWxzZSBpZihsYXlvdXQ9PT0nZml4ZWQnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbndyYXBwZXJTdHlsZT17b3ZlcmZsb3c6J2hpZGRlbicsYm94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidpbmxpbmUtYmxvY2snLHBvc2l0aW9uOidyZWxhdGl2ZScsd2lkdGg6d2lkdGhJbnQsaGVpZ2h0OmhlaWdodEludH07fX1lbHNlIGlmKHR5cGVvZiB3aWR0aEludD09PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50PT09J3VuZGVmaW5lZCcmJmxheW91dD09PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O31lbHNley8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO319bGV0IGltZ0F0dHJpYnV0ZXM9e3NyYzonZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07aWYoaXNWaXNpYmxlKXtpbWdBdHRyaWJ1dGVzPWdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp3cmFwcGVyU3R5bGV9LHNpemVyU3R5bGU/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6c2l6ZXJTdHlsZX0sc2l6ZXJTdmc/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIix7c3R5bGU6e21heFdpZHRoOicxMDAlJyxkaXNwbGF5OidibG9jaycsbWFyZ2luOjAsYm9yZGVyOidub25lJyxwYWRkaW5nOjB9LGFsdDpcIlwiLFwiYXJpYS1oaWRkZW5cIjp0cnVlLHJvbGU6XCJwcmVzZW50YXRpb25cIixzcmM6YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCxfdG9CYXNlLnRvQmFzZTY0KShzaXplclN2Zyl9YH0pOm51bGwpOm51bGwsIWlzVmlzaWJsZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSkse2RlY29kaW5nOlwiYXN5bmNcIixzdHlsZTppbWdTdHlsZSxjbGFzc05hbWU6Y2xhc3NOYW1lfSkpKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxpbWdBdHRyaWJ1dGVzLHtkZWNvZGluZzpcImFzeW5jXCIsY2xhc3NOYW1lOmNsYXNzTmFtZSxyZWY6ZWxlbWVudD0+e3NldFJlZihlbGVtZW50KTtyZW1vdmVQbGFjZWhvbGRlcihlbGVtZW50LHBsYWNlaG9sZGVyKTt9LHN0eWxlOmltZ1N0eWxlfSkpLHByaW9yaXR5Py8qI19fUFVSRV9fKi8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4vLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4vL1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OidfX25pbWctJytpbWdBdHRyaWJ1dGVzLnNyYytpbWdBdHRyaWJ1dGVzLnNyY1NldCtpbWdBdHRyaWJ1dGVzLnNpemVzLHJlbDpcInByZWxvYWRcIixhczpcImltYWdlXCIsaHJlZjppbWdBdHRyaWJ1dGVzLnNyY1NldD91bmRlZmluZWQ6aW1nQXR0cmlidXRlcy5zcmMvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc3Jjc2V0OmltZ0F0dHJpYnV0ZXMuc3JjU2V0Ly8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc2l6ZXM6aW1nQXR0cmlidXRlcy5zaXplc30pKTpudWxsKTt9Ly9CVUlMVCBJTiBMT0FERVJTXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKXtyZXR1cm4gc3JjWzBdPT09Jy8nP3NyYy5zbGljZSgxKTpzcmM7fWZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG5jb25zdCBwYXJhbXM9WydhdXRvPWZvcm1hdCcsJ2ZpdD1tYXgnLCd3PScrd2lkdGhdO2xldCBwYXJhbXNTdHJpbmc9Jyc7aWYocXVhbGl0eSl7cGFyYW1zLnB1c2goJ3E9JytxdWFsaXR5KTt9aWYocGFyYW1zLmxlbmd0aCl7cGFyYW1zU3RyaW5nPSc/JytwYXJhbXMuam9pbignJicpO31yZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YDt9ZnVuY3Rpb24gYWthbWFpTG9hZGVyKHtyb290LHNyYyx3aWR0aH0pe3JldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7fWZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuY29uc3QgcGFyYW1zPVsnZl9hdXRvJywnY19saW1pdCcsJ3dfJyt3aWR0aCwncV8nKyhxdWFsaXR5fHwnYXV0bycpXTtsZXQgcGFyYW1zU3RyaW5nPXBhcmFtcy5qb2luKCcsJykrJy8nO3JldHVybmAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO31mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG1pc3NpbmdWYWx1ZXM9W107Ly8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG5pZighc3JjKW1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7aWYoIXdpZHRoKW1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtpZihtaXNzaW5nVmFsdWVzLmxlbmd0aD4wKXt0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7c3JjLHdpZHRoLHF1YWxpdHl9KX1gKTt9aWYoc3JjLnN0YXJ0c1dpdGgoJy8vJykpe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFzcmMuc3RhcnRzV2l0aCgnLycpJiZjb25maWdEb21haW5zKXtsZXQgcGFyc2VkU3JjO3RyeXtwYXJzZWRTcmM9bmV3IFVSTChzcmMpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gK2BTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7fX19cmV0dXJuYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHl8fDc1fWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJywnZG9tYWluTG9jYWxlcyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO313aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0FjY291bnRQYWdlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcclxuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcclxuaW1wb3J0IENoZWNrb3V0Rm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DaGVja291dEZvcm1cIjtcclxuaW1wb3J0IEFkcmVzc2VzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FkcmVzc2VzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBNYWtlIHN1cmUgdG8gY2FsbCBsb2FkU3RyaXBlIG91dHNpZGUgb2YgYSBjb21wb25lbnTigJlzIHJlbmRlciB0byBhdm9pZFxyXG4vLyByZWNyZWF0aW5nIHRoZSBTdHJpcGUgb2JqZWN0IG9uIGV2ZXJ5IHJlbmRlci5cclxuLy8gbG9hZFN0cmlwZSBpcyBpbml0aWFsaXplZCB3aXRoIHlvdXIgcmVhbCB0ZXN0IHB1Ymxpc2hhYmxlIEFQSSBrZXkuXHJcbmNvbnN0IHByb21pc2UgPSBsb2FkU3RyaXBlKHByb2Nlc3MuZW52LlNUUklQRV9QUklWQVRFX0tFWSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWllbWVudEVsZW1lbnQoKSB7XHJcbiAgY29uc3QgW3BhZ2VUeXBlLCBzZXRQYWdlVHlwZV0gPSB1c2VTdGF0ZShcImFkcmVzc2VzXCIpO1xyXG4gIGNvbnN0IFtjdXJyZW50QWRyZXNzLCBzZXRDdXJyZW50QWRyZXNzXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgZ29Ub1BheW1lbnQgPSAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudEFkcmVzcy5pZCkge1xyXG4gICAgICBzZXRQYWdlVHlwZShcInBheWVtZW50XCIpO1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIlZldWlsbGV6IHPDqWxlY3Rpb25uZXIgdW5lIGFkcmVzc2UgZGUgbGl2cmFpc29uXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiOTAlXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cclxuICAgICAgICAgIHtwYWdlVHlwZSA9PSBcImFkcmVzc2VzXCIgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBwYWRkaW5nOiBcIjV2dyAwIDAgMFwiIH19PkFkcmVzc2UgZGUgbGl2cmFpc29uPC9oMj5cclxuICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgT3Ugc291aGFpdGV6IHZvdXMgw6p0cmUgbGl2csOpID9cclxuICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgIDxBZHJlc3Nlc1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0YWJsZVxyXG4gICAgICAgICAgICAgICAgY3VycmVudEFkcmVzcz17Y3VycmVudEFkcmVzc31cclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRBZHJlc3M9eyhhZHJlc3NlKSA9PiBzZXRDdXJyZW50QWRyZXNzKGFkcmVzc2UpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb1RvUGF5bWVudH0+UGFzc2VyIMOgIGwnw6l0YXBlIHN1aXZhbnRlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtwYWdlVHlwZSA9PSBcInBheWVtZW50XCIgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMj5QYWllbWVudCBwYXIgY2FydGU8L2gyPlxyXG4gICAgICAgICAgICAgIDxFbGVtZW50cyBzdHJpcGU9e3Byb21pc2V9PlxyXG4gICAgICAgICAgICAgICAgPENoZWNrb3V0Rm9ybSBhZHJlc3NlPXtjdXJyZW50QWRyZXNzfSAvPlxyXG4gICAgICAgICAgICAgIDwvRWxlbWVudHM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgQkFTRV9VUkwgPSBcImh0dHA6Ly8xOTIuMTY4LjEuMjQ6MTMzN1wiOyAvL1RPRE9cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaERhdGFGcm9tQVBJID0gYXN5bmMgKFxyXG4gIGFwaUVuZHBvaW50LFxyXG4gIGRlZmF1bHRPYmplY3QsXHJcbiAgY29uZmlnID0ge31cclxuKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9JHthcGlFbmRwb2ludH1gLCBjb25maWcpO1xyXG4gIGxldCBkYXRhO1xyXG4gIHRyeSB7XHJcbiAgICBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gZmV0Y2ggZGF0YSBmb3IgXCIsIGFwaUVuZHBvaW50KTtcclxuICB9XHJcblxyXG4gIGlmICghZGF0YSkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHRPYmplY3Q7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gJy4vZGF0YUZldGNoZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5leHBvcnQgY29uc3QgcG9zdERhdGFUb0FQSSA9IGFzeW5jIChcclxuICBhcGlFbmRwb2ludCxcclxuICBib2R5LFxyXG4gIHJlc29sdmUsXHJcbiAgcmVqZWN0ID0gKCkgPT4ge30sXHJcbiAgY29uZmlnID0ge31cclxuKSA9PiB7XHJcbiAgYXhpb3NcclxuICAgIC5wb3N0KEJBU0VfVVJMICsgYXBpRW5kcG9pbnQsIGJvZHksIGNvbmZpZylcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5yZXNwb25zZT8uZGF0YSk7XHJcbiAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHB1dERhdGFUb0FQSSA9IGFzeW5jIChcclxuICBhcGlFbmRwb2ludCxcclxuICBib2R5LFxyXG4gIGNvbmZpZyA9IHt9LFxyXG4gIHJlc29sdmUsXHJcbiAgcmVqZWN0ID0gKCkgPT4ge31cclxuKSA9PiB7XHJcbiAgYXhpb3NcclxuICAgIC5wdXQoQkFTRV9VUkwgKyBhcGlFbmRwb2ludCwgYm9keSwgY29uZmlnKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb250YWN0ID0gKG1haWwpID0+IHtcclxuICBpZiAobWFpbCA9PSAnJykge1xyXG4gICAgYWxlcnQoJ0ltcG9zc2libGUgZGUgdm91cyBham91dGVyLCB2w6lyaWZpZXogdm90cmUgYWRyZXNzZSBtYWlsJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGF4aW9zXHJcbiAgICAucHV0KFxyXG4gICAgICAnaHR0cHM6Ly9hcGkuc2VuZGdyaWQuY29tL3YzL21hcmtldGluZy9jb250YWN0cycsXHJcbiAgICAgIHsgY29udGFjdHM6IFt7IGVtYWlsOiBtYWlsIH1dIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBwcm9jZXNzLmVudi5TR19QUklWQVRFX0tFWSxcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgYWxlcnQoJ1ZvdXMgw6p0ZXMgYmllbiBham91dMOpIMOgIGxhIG5ld3NsZXR0ZXInKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgYWxlcnQoJ0ltcG9zc2libGUgZGUgdm91cyBham91dGVyLCB2w6lyaWZpZXogdm90cmUgYWRyZXNzZSBtYWlsJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9hY2NvdW50LmM1MjI1NmUzZTk1Njk4Y2NhNWUyYjMzZWZiNGEzYjQ5LnBuZ1wiLFwiaGVpZ2h0XCI6NDgsXCJ3aWR0aFwiOjQ4LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFTa2xFUVZSNDJtM05JUTZBTUJSRXdRa2tXTTRFNTBCamU0YzY2aERRQkN3SDVTZTFYVEhKVTZ1L1VaWkRMZGdWeGQ1cXdPeDJoYTFNTm84M25JRHFzMWpEQ2lTbjRnaFQ1L0FIeEhRTVF6M2MwV3NBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9hcmNoaXZzLWxvZ28uZDgzNmNmODVhOGZhOTUxYzk1MzM0NDM3ZjM5NzUzODkucG5nXCIsXCJoZWlnaHRcIjoxODcsXCJ3aWR0aFwiOjEwMDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFCQ0FZQUFBRGpBTzlEQUFBQUswbEVRVlI0bkdNOGRiWGQ5TjI3SDI1Ly9qUCtZR1JuK2Zqckg0UGd6MTkvMy96NitlOHZBd3ZUY3dCU29oUW9QaTJXMWdBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvY3JvaXguNjg0MWE1MGRjYmNjZGY0NmEwNGY4MGMwMzk3OTNmZmMucG5nXCIsXCJoZWlnaHRcIjo0OCxcIndpZHRoXCI6NDgsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQU5rbEVRVlI0Mm1OZ1lHUUFBU1lnQkFFd1Q1UkJFc3lSQkxLZ2pQME1Na0M0SHl3QlVncms3QVpDR1JBUFF3QkRDNmFoNk5ZQ0FCcUtCL2tYdFg2MEFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZmFjZWJvb2suNWNhMzMyOTBlNWM3Yzk1MjM5NjJhYzk1NjgyNDkyODEucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBVmtsRVFWUjQybU5nK01Qd0h3ci9BZkVmQmlEeGwyRUtReGpETXpEclAwamdHcENNWmZnQUZ2Z0hFc2dIQ3JRemZJZHFBb3E2QWtremhqY0lMY2VBNUd1d2dmOGhXbllCQlc1QlRJQ28yQU1rNzBCVi9BRUFKajQ1MTByNDFnVUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2luc3RhZ3JhbS42NWM1MWYxZGEwYThlZThkMzcyYzg5M2Q5OThmYzM5OC5wbmdcIixcImhlaWdodFwiOjYwMCxcIndpZHRoXCI6NjAwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFXRWxFUVZSNDJqM05zUW1FUUJSRjBkT0Z3ZTlrMmNqa2QvQlR3NEd4QU1GWWJHTnRZSHQwRXVWa0R4NFhRdE90RmhPRVMwbXp6ZDlFVXpqdDBtYWhTNGVQcjkxc2ZZZmhsUHB6T1FaS0kveVVITW9sM3V6UUJEZGY5aFE0aWdNTlF3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL21haWwuZjYwNDFkODQ1N2IyMTk1YmJjNzFjMjRiM2Q0Y2E3YjMucG5nXCIsXCJoZWlnaHRcIjo0OCxcIndpZHRoXCI6NDgsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQVVrbEVRVlI0Mm1YTnNRMUFBQUJFMFRlRFFtRUJMS1JSaWtLaUVCTm9WR29STnJTRjY5MnJmblgrYXp4MlYreWVsTkZyVmNicVRaa01Pa2QwaHBSWmp6Ym9VeGFiUWhXRkxhVjJPMTF4dXRXLzB3OGJ0eEt6YlhzL1JBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL21lbnUuZDAwYmE2Mjc1YjQxN2JmYzk5NzkxMGQ3OGRlZTQxOGYucG5nXCIsXCJoZWlnaHRcIjo0OCxcIndpZHRoXCI6NDgsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQVBFbEVRVlI0Mm1XTnNRa0FJQkFERHd2Qk1RVGR5RTc0UWI2MitMRk5uMXlWUUJKY2pjbG1pYzJVWTVBVVR4UXBSK2NRWEJFY3VnVldzVkU3L1RsNUREa2JOMkVzQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9wYW5pZXIuMDc3MTEzMTI3OTkyMWM2N2IxNzRmNzQyZjhiYTc3MWUucG5nXCIsXCJoZWlnaHRcIjo0OCxcIndpZHRoXCI6NDgsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQVkwbEVRVlI0MmxYTU1RcUNZQUJBNGMrR0RoRFUxQTFhZ3lEb0JBa05RVXRqeHdnRVQ2Q0RJQ0x1NHVJdFJQRlMvb3VENzlzZkgxZWJZcU5DRlpSeWUwajhzZlBUQWdlOXQ1Zk9HYmdaSkRKZkVYRFJTSU42M2Q5TllQWUFUbUpSOEhSa0Fad2JFSStQWjRDZ0FBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvdGVsLjEwNjY3Yjk0NWNmYjAwMzUzMjk0YTgwNWIyODRmZjdhLnBuZ1wiLFwiaGVpZ2h0XCI6NDgsXCJ3aWR0aFwiOjQ4LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFSMGxFUVZSNDJrWElJUTZBSUFBQXdGT0xjek5RcFBFZS82WC9vREVTbmVualRNeUxCNGZBTDNoVU04T3U2Q0ltZ096R3lwQTBHNklKRnB5YVMxZUZVVWxXdkE1R3NRdDhqSElLZ3NHQWhrRUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJBY2NvdW50UGFnZV9tYWluX18xVGVMZ1wiLFxuXHRcImZvcm1Sb3dcIjogXCJBY2NvdW50UGFnZV9mb3JtUm93X19jdXcyWlwiLFxuXHRcInNlY29uZEJ1dHRvblwiOiBcIkFjY291bnRQYWdlX3NlY29uZEJ1dHRvbl9fMlhmcDJcIixcblx0XCJjYXRlZ29yeUNvbnRhaW5lclwiOiBcIkFjY291bnRQYWdlX2NhdGVnb3J5Q29udGFpbmVyX18ybjl1MVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkFjY291bnRQYWdlX2NvbnRhaW5lcl9fMlBESmJcIixcblx0XCJhZGRyZXNzXCI6IFwiQWNjb3VudFBhZ2VfYWRkcmVzc19fMUJVYm1cIixcblx0XCJzZWxlY3RlZEFkZHJlc3NcIjogXCJBY2NvdW50UGFnZV9zZWxlY3RlZEFkZHJlc3NfXzNIdjc0XCIsXG5cdFwiYWRyZXNzV3JhcHBlclwiOiBcIkFjY291bnRQYWdlX2FkcmVzc1dyYXBwZXJfXzJUSjJWXCIsXG5cdFwic2VsZWN0ZWRcIjogXCJBY2NvdW50UGFnZV9zZWxlY3RlZF9fMjVlaTZcIixcblx0XCJuZXdBZHJlc3NDb250YWluZXJcIjogXCJBY2NvdW50UGFnZV9uZXdBZHJlc3NDb250YWluZXJfXzFESFF2XCIsXG5cdFwibm90aWZpY2F0aW9uVGV4dFwiOiBcIkFjY291bnRQYWdlX25vdGlmaWNhdGlvblRleHRfXzNseVhxXCIsXG5cdFwic3VjZWVkQ29udGFpbmVyXCI6IFwiQWNjb3VudFBhZ2Vfc3VjZWVkQ29udGFpbmVyX19JX2FFQlwiLFxuXHRcImNvbW1hbmRDb250YWluZXJcIjogXCJBY2NvdW50UGFnZV9jb21tYW5kQ29udGFpbmVyX18zWEFaWVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTGF5b3V0X2NvbnRhaW5lcl9fM01zYXNcIixcblx0XCJtYWluXCI6IFwiTGF5b3V0X21haW5fXzE4SFE0XCIsXG5cdFwiZm9vdGVyXCI6IFwiTGF5b3V0X2Zvb3Rlcl9fMkhHZFlcIixcblx0XCJicmFuZENvbnRhaW5lclwiOiBcIkxheW91dF9icmFuZENvbnRhaW5lcl9fMTJpTTdcIixcblx0XCJsaW5rc0NvbnRhaW5lclwiOiBcIkxheW91dF9saW5rc0NvbnRhaW5lcl9fMmVJNlRcIixcblx0XCJuZXdzbGV0dGVyQ29udGFpbmVyXCI6IFwiTGF5b3V0X25ld3NsZXR0ZXJDb250YWluZXJfXzJFRHh5XCIsXG5cdFwiY29vcmRDb250YWluZXJcIjogXCJMYXlvdXRfY29vcmRDb250YWluZXJfX3FCVWl3XCIsXG5cdFwic3BhY2VyXCI6IFwiTGF5b3V0X3NwYWNlcl9fMWlrMHNcIixcblx0XCJlbmRDb250YWluZXJcIjogXCJMYXlvdXRfZW5kQ29udGFpbmVyX18xczR1cFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcIk5hdmJhcl9tYWluX18zR1pxNFwiLFxuXHRcImZvcm1Sb3dcIjogXCJOYXZiYXJfZm9ybVJvd19fWlZYODhcIixcblx0XCJzZWNvbmRCdXR0b25cIjogXCJOYXZiYXJfc2Vjb25kQnV0dG9uX19BRVNSTFwiLFxuXHRcImNhdGVnb3J5Q29udGFpbmVyXCI6IFwiTmF2YmFyX2NhdGVnb3J5Q29udGFpbmVyX19CSGlvSlwiLFxuXHRcImNvbnRhaW5lclwiOiBcIk5hdmJhcl9jb250YWluZXJfXzFuSkREXCIsXG5cdFwiYmFkZ2VDb3VudFwiOiBcIk5hdmJhcl9iYWRnZUNvdW50X18ydTV4R1wiLFxuXHRcIm5hdkNvbnRhaW5lclwiOiBcIk5hdmJhcl9uYXZDb250YWluZXJfXzFDTTdJXCIsXG5cdFwiY29tcGFueU5hbWVDb250YWluZXJcIjogXCJOYXZiYXJfY29tcGFueU5hbWVDb250YWluZXJfXzJrczFXXCIsXG5cdFwibGlua3NcIjogXCJOYXZiYXJfbGlua3NfX0ZVY1VZXCJcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3N0cmlwZS1qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1yZWNhcHRjaGFcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==