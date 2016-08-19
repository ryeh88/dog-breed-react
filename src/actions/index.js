export const selectDog = (dog) => {
	console.log('selected: ', dog.first);
	return {
		type: 'DOG_SELECTED',
		payload: dog
	}
};