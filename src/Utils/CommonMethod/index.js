
import { toast } from "react-toastify";

  export function validateForm(email, password) {
    console.log(email, password,555);
    
    const errors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
        errors.email = "Invalid email format.";
    }

    // Password validation
    if (!password) {
        errors.password = "Password is required.";
    } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters.";
    } else if (!/[A-Z]/.test(password)) {
        errors.password = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
        errors.password = "Password must contain at least one lowercase letter.";
    } else if (!/[0-9]/.test(password)) {
        errors.password = "Password must contain at least one digit.";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.password = "Password must contain at least one special character.";
    }
    Object.values(errors).forEach((error) => toast.error(error));
    return Object.keys(errors).length > 0 ? false : true;
}
