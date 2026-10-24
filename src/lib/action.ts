"use server"
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'

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
            throw new Error(data.message);
        }
        myCookies.set('tkn', data.data.token, {
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        myCookies.set('name', data.data.user.name, {
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        myCookies.set('username', data.data.user.username, {
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        myCookies.set('photo', data.data.user.photo, {
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
    revalidatePath('/')
    redirect('/', 'replace')
}

export const signinAction = async function (prevState: any, formData: FormData) {
    const myCookies = await cookies()
    const email = formData.get('email')?.toString() || '';
    const password = formData.get('password')?.toString() || '';

    const savedValues = {
        email,
        password
    }

    const errors: any = {
        emailError: null,
        passwordErorr: null
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.emailError = 'invalid email'
    }

    if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)) {
        errors.passwordErorr = 'invalid password your password must have be alleast 8 char, have capital letter, small letter and one special character (#?!@$%^&*-)'
    }

    if (errors.emailError || errors.passwordErorr) {
        return {
            errors,
            savedValues
        }
    }

    try {
        const response = await fetch('https://route-posts.routemisr.com/users/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message);
        }

        myCookies.set('tkn', data.data.token, {
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        myCookies.set('name', data.data.user.name, {
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        myCookies.set('username', data.data.user.username, {
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        myCookies.set('photo', data.data.user.photo, {
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

    } catch (error) {
        if (error) {
            return {
                signErrors: error instanceof Error && error.message,
                savedValues
            }
        } else {
            return {
                errors: null
            }
        }
    }
    revalidatePath('/')
    redirect('/', 'replace')

}

export const signoutAction = async function () {
    const cookieStore = await cookies()
    cookieStore.set('tkn', '')
    cookieStore.set('name', '')
    cookieStore.set('username', '')
    cookieStore.set('photo', '')
    redirect('/sign-in')
}

export const toggleLikeAction = async function (postId: string) {
    const myCookies = await cookies()
    const res = await fetch(`https://route-posts.routemisr.com/posts/${postId}/like`, {
        method: "PUT",
        headers: {
            token: myCookies.get('tkn')?.value || ''
        }
    })
    revalidatePath('/')
    revalidatePath('/bookmarks')
    if (!res.ok) {
        throw new Error('fiald to like this post')
    }
}

export const modifyPageAction = async function (pageNumber: number) {
    const myCookies = await cookies()
    myCookies.set('page', pageNumber.toString())
}

export const createPostAction = async function (prevState: any, formData: FormData) {
    const myCookies = await cookies();
    const token = myCookies.get('tkn')?.value;

    const content = formData.get('body')?.toString().trim() || '';
    const image = (formData.get('image')) as File;

    const hasImage =
        image instanceof File &&
        image.size > 0 &&
        image.type.startsWith('image/');

    if (!content && !hasImage) {
        return {
            errors: {
                createPostError: "You can't create an empty post.",
                submittedAt: Date.now(),
            },
        };
    }

    const body = new FormData();

    if (content) {
        body.append('body', content);
    }

    if (hasImage) {
        body.append('image', image);
    }

    const res = await fetch(
        'https://route-posts.routemisr.com/posts',
        {
            method: 'POST',
            headers: {
                token: token || '',
            },
            body,
        }
    );
    const data = await res.json()
    console.log(data)
    revalidatePath('/profile');
    redirect('/profile');
};

export const deletePostAction = async function (prevState: any, id: string) {
    const myCookies = await cookies();
    const token = myCookies.get('tkn')?.value!;

    const res = await fetch(`https://route-posts.routemisr.com/posts/${id}`, {
        method: "DELETE",
        headers: {
            token,
        }
    })

    if (!res.ok) {
        throw new Error('fialed to delete this post')
    }

    revalidatePath('/profile');
    redirect('/profile');
}

export const sharePostAction = async function (id : string) {
    const myCookies = await cookies();
    const token = myCookies.get('tkn')?.value!;
    const res = await fetch(`https://route-posts.routemisr.com/posts/${id}/share`,{
        method : "POST",
        headers : {
            token,
        }
    })
    const data = await res.json() as ({message : string});
    revalidatePath('/')
    return data;
}