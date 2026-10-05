export type postType = {
    _id: string
    body: string
    privacy: string
    user: {
        _id: string
        name: string
        username: string
        photo: string
    }
    sharedPost: unknown | null
    likes: string[]
    createdAt: string
    commentsCount: number
    topComment: unknown | null
    sharesCount: number
    likesCount: number
    isShare: boolean
    id: string
    bookmarked: boolean
}

export type userType = {
    name: string,
    photo: string,
    _id:string
}
export type commentType = {
    content: string,
    commentCreator: userType
    _id: string
}

export type userDataType = {
    name: string,
    email: string,
    gender: string,
    dateOfBirth: string,
    photo: string,
    _id: string
}


