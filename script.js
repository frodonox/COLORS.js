let index = 0;
const btn = document.querySelector('.btn');
btn.addEventListener('click',function changecolors(){
    const colors = ["red","blue","green"];
    document.querySelector('body').style.background = colors[index++];
    if (index > colors.length - 1) {
        index = 0;
    }
})