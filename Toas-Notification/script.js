const btnToast = document.querySelector('.btn-toast');
let toastBox = document.getElementById('toastBox');
let successMessage = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMessage = '<i class="fa-solid fa-bug"></i> Error! Please fix it';
let invalidMessage = '<i class="fa-solid fa-triangle-exclamation"></i> Invalid input, try again';

// btnToast.addEventListener('click', () => {
//     showToast(successMessage);
// })

function showToast(msg) {
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if(msg.includes('Error')) {
    toast.classList.add('error');
  }
  if(msg.includes('Invalid')) {
    toast.classList.add('invalid');
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);

}

