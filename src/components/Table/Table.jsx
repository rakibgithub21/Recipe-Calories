import Tablerow from "../../Table-Row/Tablerow";
import PropTypes from 'prop-types';


const Table = ({ items, prepairing }) => {
    // console.log(items);
    return (
        <div className="overflow-x-auto my-8">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-base">
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, idx) => <Tablerow
                            key={idx}
                            item={item}
                            index={idx}
                            prepairing={prepairing}
                        ></Tablerow>)
                    }


                </tbody>
            </table>


        </div>
    );
};

Table.propTypes = {
    items: PropTypes.array,
    prepairing: PropTypes.func,
};

export default Table;