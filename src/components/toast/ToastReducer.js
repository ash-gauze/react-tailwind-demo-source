'use client'


const toastEvent = {
  eventType: '',
  data: { id: '', toastType: '' }
}

const toastBody = {
  toastStyle:'control-button w-24 mx-8',
  toastMessage:'default message',
  id:''
}


const toastReducer = (toastArray, toastEvent) => {
  // take the data from the 'toastEvent' and append it to the array 

  if (toastEvent.eventType === 'ADD_TOAST') {
    const newToast = {};
    newToast.id = crypto.randomUUID();
    newToast.toastMessage = 'default message'
    newToast.toastStyle = 'toast-body'
    //add toast body here 
    const newArr = toastArray.map((toast) => toast);
    newArr.push(newToast);
    return (newArr);
  }

  else if (toastEvent.eventType === 'DEL_TOAST') {
    const newArr = toastArray.filter((toast) => toast.id !== toastEvent.id);
    return (newArr);
  }
}

export {toastReducer}
