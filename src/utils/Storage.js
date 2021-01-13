const USER = 'user';
const REMEMBER = 'remember';

const GetUser = () => {
    let user = JSON.parse(localStorage.getItem(USER))
    return user;
}

const SetUser = (user) => {
    localStorage.setItem(USER, JSON.stringify(user));
}

const RemoveUser = () => {
    localStorage.removeItem('user');
}

export {
    GetUser,
    SetUser,
    RemoveUser,
}