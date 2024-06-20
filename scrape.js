console.log("scrape js loaded.")

// check if logged in
function isLoggedIn() {
  // if class "myPage active" exist -> true, otherwise false
  const menu = document.getElementsByClassName("myPage active");
  console.log(menu);
  if(menu.length != 0) return true;
  return false;
}

// for each season, get all progress percentages
// get the average of percentages

/**
 * 1. 전 시즌 종합 진도율
 * 2. 시즌별 종합 진도율
 * + 시즌 선택 기능
 */
console.log(isLoggedIn());