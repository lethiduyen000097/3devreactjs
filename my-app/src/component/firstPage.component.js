import { useHistory } from "react-router-dom";
const FirstPage = props => {
    let history = useHistory();

    const someEventHandler = event => {
        history.push({
            pathname: '/secondpage',
            search: '?query=abc',
            state: { detail: 'some_value'}
        });
    };
};

export default FirstPage;