import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import { SettingsContext } from '../../context/settings';
import { DataGrid } from '@mui/x-data-grid';
import { Box, TextField, Button } from '@mui/material';
import TableForm from '../form/table-form.js';

import { v4 as uuid } from 'uuid';

const ToDo = () => {
	let SettingsValues = useContext(SettingsContext); // This is how you bring in context and how you opt into using context in your component.

	const [list, setList] = useState([]);
	const [incomplete, setIncomplete] = useState([]);
	const [endIndex, setEndIndex] = useState(SettingsValues.pagination);
	const [deletedRow, setDeletedRows] = useState([]);
	const [id, setId] = useState([]);

	const { handleChange, handleSubmit } = useForm(addItem);

	function addItem(item) {
		item.id = uuid();
		item.complete = false;
		item.toggle;
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

	function toggleComplete(params) {
		console.log(params);
		const items = list.filter((item) => {
			if (item.id !== params.id) {
				return;
			}
			if (item.id == params.id) {
				item.complete = !item.complete;
			}
			return item;
		});
		console.log(params.id);
		setList(...list, items);
		console.log(list);
	}

	// useEffect(() => {
	// 	let incompleteCount = list.filter((item) => !item.complete).length;
	// 	setIncomplete(incompleteCount);
	// 	document.title = `To Do List: ${incomplete}`;
	// }, [list]);

	const columns = [
		{
			field: 'id',
			headerName: 'Item',
			width: 200,
			valueGetter: toggleComplete,
		},
		{
			field: 'complete',
			headerName: 'Complete',
			width: 100,
			editable: true,
		},
		{ field: 'text', headerName: 'To-Do', width: 400 },
		{ field: 'assignee', headerName: 'Assigned To', width: 130 },
		{
			field: 'difficulty',
			headerName: 'Difficulty',
			type: 'number',
			width: 200,
		},
		{
			field: 'toggle',
			headerName: 'Complete?',
			width: 200,
			renderCell: () => <button onClick={toggleComplete}>Complete</button>,
		},
	];

	// function handleCheck(params) {
	// 	// console.log(e.t);
	// 	console.log('params log', params.row);
	// 	// setId(params.id);
	// 	if (params.id === list.filter((item) => item.id)) {
	// 		item.complete = true;
	// 	}

	// console.log(id);
	// setDeletedRows(selection.list);
	// console.log('deleted rows after click', deletedRow);
	// }
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
			{/* <button variant='contained' color='danger' onClick={handleCheck}>
				Delete
			</button> */}
			<div style={{ height: 400, width: '100%' }}>
				<DataGrid
					rows={list}
					columns={columns}
					pageSize={SettingsValues.pagination}
					rowsPerPageOptions={[5]}
					checkboxSelection
					// handleCheck={handleCheck}
				/>
			</div>
		</>
	);
};

export default ToDo;
