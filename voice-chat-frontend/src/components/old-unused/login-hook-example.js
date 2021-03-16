function Form() {
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    });

    const { username, password } = formData;

    const handleInputChange = (e) => {
        setFormData({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.dir(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleInputChange}
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}