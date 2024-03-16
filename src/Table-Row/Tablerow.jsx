import PropTypes from 'prop-types';

const Tablerow = ({ item, index, prepairing }) => {
    const { recipe_name, preparing_time, calories } = item;
    // console.log(item);
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <td><button onClick={() => prepairing(item)} className="font-medium bg-[#0BE58A] py-2 px-4 rounded-2xl">Preparing</button></td>
        </tr>
    );
};
Tablerow.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
    prepairing: PropTypes.func,

};

export default Tablerow;