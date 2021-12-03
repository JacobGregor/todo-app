import { useState } from 'react';

const useForm = (callback) => {
	const [values, setValues] = useState({});
	console.log('values before the call', values);

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		callback(values);
	};

	const handleChange = (event) => {
		event.persist();
		console.log('values after an add', values);
		setValues((values) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	return {
		handleChange,
		handleSubmit,
		values,
	};
};

export default useForm;
