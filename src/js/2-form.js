const formData = {
  email: "",
  message: ""
};

function saveToLocalStorage() {
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function loadFromLocalStorage() {
  const savedData = localStorage.getItem("feedback-form-state");
  if (savedData) {
    return JSON.parse(savedData);
  }
  return null;
}

function updateFormFields() {
  const emailField = document.querySelector('[name="email"]');
  const messageField = document.querySelector('[name="message"]');
  
  emailField.value = formData.email;
  messageField.value = formData.message;
}

document.querySelector('.feedback-form').addEventListener('input', (event) => {
  if (event.target.name in formData) {
    formData[event.target.name] = event.target.value.trim();
    saveToLocalStorage();
  }
});

const savedData = loadFromLocalStorage();
  if (savedData) {
    formData.email = savedData.email || "";
    formData.message = savedData.message || "";
    updateFormFields();
  }

document.querySelector('.feedback-form').addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
  } else {
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    updateFormFields();
  }
});