const formDom = document.querySelector('#form-contact')


formDom.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries())
    formDom.reset();
    console.log(data)
  });