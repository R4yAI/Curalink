// ---------------------------
// REUSABLE VALIDATION RULES
// ---------------------------

console.log("Script is working");

const validators = {
  required(value) {
    return value.trim() !== "" ? true : "This field is required.";
  },

  email(value) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value) ? true : "Enter a valid email.";
  },

  min(value, length) {
    return value.trim().length >= length
      ? true
      : `Must be at least ${length} characters.`;
  },

  match(value, targetSelector) {
    const target = document.querySelector(targetSelector);
    return value === target.value ? true : "Values do not match.";
  },
};

// ---------------------------
// RUN VALIDATION ON A FIELD
// ---------------------------
function validateField(input) {
  const rules = (input.dataset.validate || "").split("|");
  let errorMessage = "";

  for (let rule of rules) {
    if (!rule) continue;

    // Parse rule: ruleName:param
    const [ruleName, param] = rule.split(":");

    if (validators[ruleName]) {
      const result = validators[ruleName](input.value, param);

      if (result !== true) {
        errorMessage = result;
        break;
      }
    }
  }

  // Show / clear error
  const errorEl = input.closest(".form-group").querySelector(".error-msg");
  if (errorMessage) {
    input.classList.add("error");
    if (errorEl) errorEl.textContent = errorMessage;
  } else {
    input.classList.remove("error");
    if (errorEl) errorEl.textContent = "";
  }

  return !errorMessage; // return valid or not
}

// ---------------------------
// VALIDATE A FULL FORM
// ---------------------------
function validateForm(form) {
  const inputs = form.querySelectorAll("[data-validate]");
  let isValid = true;

  inputs.forEach((input) => {
    const ok = validateField(input);
    if (!ok) isValid = false;
  });

  return isValid;
}

// ---------------------------
// ATTACH LISTENERS TO FORMS
// ---------------------------

// Add your form IDs here:
const formIds = [
  "create-request-form",
  "create-medicine-form",
  "edit-profile-form",
  "signup-form",
  "login-form",
];

formIds.forEach((id) => {
  const form = document.getElementById(id);
  if (!form) return;

  console.log("Entered validation on form" + id);
  // Validate on submit
  form.addEventListener("submit", (e) => {
    if (!validateForm(form)) {
      e.preventDefault();
      console.log("default prevented");
    }
  });

  // Live validation as user types
  form.querySelectorAll("[data-validate]").forEach((input) => {
    input.addEventListener("input", () => validateField(input));
  });
});
