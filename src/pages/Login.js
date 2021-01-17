import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { LOGIN, SET_LOGIN_STATUS } from "../store/auth/actions";

export default function Login() {

    const [credentials, setCredentials] = useState({
        email: null,
        password: null,
    })

    const dispatch = useDispatch();
    const { loginError, loginSuccess, loginPending } = useSelector(state => state.auth);
    const history = useHistory();

    const submit = (e) => {
        e.preventDefault();
        dispatch(LOGIN(credentials));
    }

    useEffect(() => {
        if (loginSuccess) {
            history.replace("/")
        }
    }, [loginSuccess])



    const change = ({ target }) => {

        if (loginError) dispatch(SET_LOGIN_STATUS(false));

        const { name, value } = target;
        setCredentials({
            ...credentials,
            [name]: value,
        })
    }

    return (
        <div>
            <div className="login-page">
                <div className="form" onSubmit={submit}>
                    <form className="login-form">
                        {loginError && <p className="danger">password/email incorrect</p>}
                        <input type="text" placeholder="username" name="email" onChange={change} />
                        <input type="password" placeholder="password" name="password" onChange={change} />
                        <button type="submit" disabled={loginPending}>{loginPending ? 'pending...' : 'Login'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
