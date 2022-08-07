const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$('.content__tabs .content__tabs-item');
let tabActive = document.querySelector('.content__tabs-item.active');
const contents = $$('.content_body-item');
const line = $('.content__tabs .line');
line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';
console.log(line.style.width);
let keyNext = true;
let nextTab = function (index, contentActive, tabActive) {
    index++;
    if (index == 4) {
        index = 0;
    }
    line.style.left = tabs[index].offsetLeft + 'px';
    line.style.width = tabs[index].offsetWidth + 'px';
    tabActive.classList.remove('active');
    contentActive.classList.remove('active');
    contents[index].classList.add('active');
    tabs[index].classList.add('active');
}
let nextTabPrepare = function()
{
    tabActive =document.querySelector('.content__tabs-item.active'); 
    tabs.forEach(function(tab,index){
        if(tab ==  tabActive)
        {
            nextTab(index, contents[index], tabActive);
        }
    })
};
let InterNextTab = setInterval(nextTabPrepare,4500);

tabs.forEach(function (tab, index) {
    const content = contents[index];
    tab.onclick = function () {
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
        $('.content__tabs-item.active').classList.remove('active');
        $('.content_body-item.active').classList.remove('active');
        content.classList.add('active');
        this.classList.add('active');
        clearInterval(InterNextTab);
        setTimeout(InterNextTab = setInterval(nextTabPrepare,4500),4500);
    }
})

