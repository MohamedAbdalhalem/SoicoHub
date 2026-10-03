"use server"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const signupAction = async function (prevState: any, formData: FormData) {
    const myCookies = await cookies()
    const yourName = formData.get('Name')?.toString() || '';
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
        dateError: null,
        passwordError: null,
        repasswordError: null,
    }
    if (yourName?.length < 3) {
        errors.nameError = 'the name must be atleast 3 char';
    }
    if (!/^[a-z0-9_]{3,30}$/.test(userName)) {
        errors.userNameError = 'Username must be 3–30 characters, lowercase letters, numbers, or _.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.emailError = 'invalid email'
    }
    if (date === '') {
        errors.dateError = 'date required'
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

    try {
        const res = await fetch('https://route-posts.routemisr.com/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: yourName,
                username: userName,
                email: email,
                dateOfBirth: date,
                gender: gender,
                password: password,
                rePassword: repassword,
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || 'Signup failed');
        }
        myCookies.set('tkn', data.data.token, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
    } catch (error: unknown) {
        if (error) {
            return {
                userExists: error instanceof Error && error.message,
                savedValues
            }
        } else {
            return {
                errors: null
            }
        }
    }
    redirect('/', 'replace')
}

export const signoutAction = async function () {
     const cookieStore = await cookies()
    cookieStore.set('tkn', '')
    redirect('/sign-in')
}