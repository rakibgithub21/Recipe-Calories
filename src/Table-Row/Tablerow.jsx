import PropTypes from 'prop-types';

const Tablerow = ({ item, index, prepairing }) => {
    const { recipe_name, preparing_time, calories } = item;
    // console.log(item);
    return (
        <tr className='text-xs md:text-base'>
            <th>{index + 1}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <td><button onClick={() => prepairing(item)} className="md:font-medium px-2 py-2 bg-[#0BE58A] md:py-2 md:px-4 rounded-2xl">Preparing</button></td>
        </tr>
    );
};
Tablerow.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
    prepairing: PropTypes.func,

};

export default Tablerow;