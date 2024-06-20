const portfolioLink = document.querySelector('#portfolio-link')
const path = window.location.pathname.slice(13)

if (path === '/portfolio.html') {
    portfolioLink.classList.add('active-page')
}

console.log(portfolioLink)