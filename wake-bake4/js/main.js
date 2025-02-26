(function() {
    
// burger

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        
        const brgIcon = e.target.closest('.burger-icon')
        const brgNavLink = e.target.closest('.nav__link')

        if (!brgIcon && !brgNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

// modalka

    const modal = document.querySelector('.modal')
    const modalBtn = document.querySelector(".about__img-button")

    modalBtn.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target 

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }

    }

// taby

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

    const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return
        
        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-content--show')
        const activeContent = document.querySelector('.tab-controls__link--active')

        activeControl.classList.remove('tab-content--show')
        activeContent.classList.remove('tab-controls__link--active')
        
        tabContent.classList.add('tab-content--show')
        tabControl.classList.add('tab-controls__link--active')
}

// аккордеоны
const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            accordionOpenedContent.style.maxHeight = null;
        }
        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }

    });

});

})()



