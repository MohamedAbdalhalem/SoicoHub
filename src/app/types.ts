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
    image : string
}

export type userType = {
    _id: string
    name: string
    username: string
    email: string
    dateOfBirth: string
    gender: string
    photo: string
    cover: string
    bookmarks: unknown[]
    followers: unknown[]
    following: unknown[]
    createdAt: string
    followersCount: number
    followingCount: number
    bookmarksCount: number
    id: string
    
}

export type commentType = {
    content: string,
    commentCreator: userType
    _id: string
}




