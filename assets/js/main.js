let bar = document.querySelector("#bar")
let cancle = document.querySelector("#cancle")
let mainNav = document.querySelector('.main-header .main-nav')
let searchIcon = document.querySelector(".main-header .search")
let searchBar = document.querySelector('.main-header .search-box')
let searchInput = document.querySelector('.main-header .search-box .search-input')
let mainNavList = document.querySelector('.main-header .main-nav ul')
let listSearch = document.createElement('li')
listSearch.innerHTML = `<a href="" class="search-list-tag">Search</a>`;
let searchListEl = document.querySelector('.main-header .main-nav ul a.search-list-tag')


cancle.addEventListener('click', () => {
  mainNav.style.right = '-40%'
  bar.style.display = 'block'
})

bar.addEventListener('click', () => {
  mainNav.style.right = '0'
  bar.style.display = 'none'
  mainNavList.appendChild(listSearch)
})

searchIcon.addEventListener('click', () => {
  searchBar.style.right= "7vw"
  searchIcon.style.display = 'none'
  setTimeout(() => {
    searchBar.style.right = "-150%";
    searchIcon.style.display = "block";
  },20000)
})

searchInput.addEventListener('blur', () => {
  setTimeout(() => {
    searchBar.style.right = "-150%";
    searchIcon.style.display = "block";
  }, 5000)
})


