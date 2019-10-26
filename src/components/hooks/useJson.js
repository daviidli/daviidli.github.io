import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useJson(url, initial) {
	const [data, setData] = useState(initial);

	useEffect(() => {
		let mounted = true;
		axios.get(url)
			.then((response) => {
				mounted && setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		
		return () => { mounted = false; }
	}, [setData, url]);

	return data;
}

export default useJson;