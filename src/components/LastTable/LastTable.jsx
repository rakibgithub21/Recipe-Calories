import LastRow from "../LastRow/LastRow";
import PropTypes from 'prop-types';
import Total from "../Total/Total";

const LastTable = ({ arrays }) => {
    return (
        <div className="overflow-x-auto mt-8">
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
                        arrays.map((array, idx) => <LastRow
                            key={idx}
                            array={array}
                            index={idx}
                        ></LastRow>)
                    }


                </tbody>
            </table>
            <Total arrays={arrays}></Total>
        </div>
    );
};

LastTable.propTypes = {
    arrays: PropTypes.array,
};

export default LastTable;