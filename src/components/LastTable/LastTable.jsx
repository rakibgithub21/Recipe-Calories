import LastRow from "../LastRow/LastRow";


const LastTable = ({ arrays }) => {
    return (
        <div className="overflow-x-auto mt-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
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
        </div>
    );
};

export default LastTable;