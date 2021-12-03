import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import { SettingsContext } from '../../context/settings';
import { DataGrid } from '@mui/x-data-grid';
import { Box, TextField, Slider } from '@mui/material';

import { v4 as uuid } from 'uuid';

const ToDo = () => {
	let SettingsValues = useContext(SettingsContext); // This is how you bring in context and how you opt into using context in your component.

	const [list, setList] = useState([]);
	const [incomplete, setIncomplete] = useState([]);
	const [endIndex, setEndIndex] = useState(SettingsValues.pagination);
	console.log(list);
	const { handleChange, handleSubmit } = useForm(addItem);

	function addItem(item) {
		console.log(list);
		item.id = uuid();
		item.complete = false;
		if (!list.includes(item)) {
			setList([...list, item]);
		} else {
			return alert('This Item Already Exists');
		}
	}

	function deleteItem(id) {
		const items = list.filter((item) => item.id !== id);
		setList(items);
	}

	function toggleComplete(id) {
		const items = list.map((item) => {
			if (item.id == id) {
				item.complete = !item.complete;
			}
			return item;
		});

		setList(items);
	}

	useEffect(() => {
		let incompleteCount = list.filter((item) => !item.complete).length;
		setIncomplete(incompleteCount);
		document.title = `To Do List: ${incomplete}`;
	}, [list]);

	const columns = [
		{ field: 'id', headerName: 'Item', width: 200 },
		{ field: 'complete', headerName: 'Complete', width: 200 },
		{ field: 'text', headerName: 'To-Do', width: 400 },
		{ field: 'assignee', headerName: 'Assigned To', width: 130 },
		{
			field: 'difficulty',
			headerName: 'Difficulty',
			type: 'number',
			width: 90,
		},
		// {
		// 	field: 'difficulty',
		// 	headerName: 'Difficulty',
		// 	type: 'number',
		// 	width: 90,
		// },
	];
	return (
		<>
			<Box
				component='form'
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete='off'
				onSubmit={handleSubmit}
			>
				<div>
					<TextField
						required
						name='assignee'
						label='Assign-To'
						placeholder='Full Name'
						multiline
						maxRows={4}
						onChange={handleChange}
						variant='standard'
						helperText='Required'
					/>
					<TextField
						required
						name='difficulty'
						label='Difficulty'
						placeholder='Scale(1-5)'
						multiline
						variant='standard'
						onChange={handleChange}
						helperText='Required'
					/>

					<TextField
						required
						name='text'
						label='To-Do'
						placeholder='What do you need To-Do?'
						multiline
						maxRows={4}
						onChange={handleChange}
						variant='standard'
						helperText='Required'
					/>
					<button type='submit'>Add Item</button>
				</div>
			</Box>
			<div style={{ height: 400, width: '100%' }}>
				<DataGrid
					rows={list}
					columns={columns}
					pageSize={SettingsValues.pagination}
					rowsPerPageOptions={[5]}
					checkboxSelection
					disableMultipleSelection
				/>
			</div>
		</>
	);
};

export default ToDo;
