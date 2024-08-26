const openDataModal = document.querySelectorAll('[data-modal-target]')
const closeDataModal = document.querySelectorAll('[data-close]')
const overlay = document.getElementById('overlay')

openDataModal.forEach(i => {
  i.addEventListener('click', () => {
    const modal = document.querySelector(i.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal-content.active-modal')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeDataModal.forEach(i => {
  i.addEventListener('click', () => {
    const modal = i.closest('.modal-content')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active-modal')
  overlay.classList.add('active-modal')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active-modal')
  overlay.classList.remove('active-modal')
}