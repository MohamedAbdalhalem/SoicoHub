"use server"

export const signupAction = async function ( prevState : any ,  formData: FormData) {
    console.log(formData)
    const yourName = formData.get('name')?.toString() || '';
    const userName = formData.get('userName')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const date = formData.get('date')?.toString() || '';
    const gender = formData.get('gender');
    const password = formData.get('password')?.toString() || '';
    const repassword = formData.get('repassword')?.toString() || '';

    const savedValues = {
        yourName,
        userName,
        email,
        date,
        gender,
        password,
        repassword
    }

    const errors: any = {
        nameError: null,
        userNameError: null,
        emailError: null,
        dateError:null,
        passwordError: null,
        repasswordError: null,
    }
    if (yourName?.length < 3) {
        errors.nameError = 'the name must be atleast 3 char';
    }
    if (userName?.length < 3) {
        errors.userName = 'the name must be atleast 3 char';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.emailError = 'invalid email'
    }
    if (date === '') {
        errors.emailError = 'date required'
    }
    if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)) {
        errors.passwordError = 'invalid password your password must have be alleast 8 char, have capital letter, small letter and one special character (#?!@$%^&*-)'
    }
    if (password !== repassword) {
        errors.repasswordError = 'Passwords do not match.'
    }

    if (errors.nameError ||
        errors.userNameError ||
        errors.emailError ||
        errors.dateError ||
        errors.passwordError ||
        errors.repasswordError
    ) {
        return {
            errors,
            savedValues
        }
    }

    return {
        errors : null
    }
}