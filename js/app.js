const checkLogin = (_boolean, page) => {
  if (doesHttpOnlyCookieExist(`Authen-Cookie`) === _boolean)
    window.location.replace(`${page}`);
};

const doesHttpOnlyCookieExist = (cookiename) => {
  var d = new Date();
  d.setTime(d.getTime() + 1000);
  var expires = "expires=" + d.toUTCString();

  document.cookie = cookiename + "=new_value;path=/;" + expires;
  if (document.cookie.indexOf(cookiename + "=") == -1) {
    return true;
  } else {
    return false;
  }
};

const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const credits = () => {
  cId = getCookie(`X-Max-Username`);
//   console.log(cId);
fetch(`/api/me/credits/${cId}`).then((j) => j.json()).then((d) => {
    console.log(d.credit)
})
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

credits();
