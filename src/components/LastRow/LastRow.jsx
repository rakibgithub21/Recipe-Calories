import PropTypes from 'prop-types';

const LastRow = ({ array, index }) => {
    console.log(array);
    const { calories, recipe_name, preparing_time } = array;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
        </tr>
    );
};
LastRow.propTypes = {
    array: PropTypes.object,
    index: PropTypes.number,
};
export default LastRow;