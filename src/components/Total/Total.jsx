

const Total = ({ arrays }) => {
    console.log(arrays);
    let totalTime = 0;
    let totalCalories = 0;
    for (const array of arrays) {
        totalTime = totalTime + array.preparing_time;
        totalCalories = totalCalories + array.calories;
    }
    
    return (
        <div className="flex justify-center gap-10 my-5">
            <div className="flex gap-5">
                <h1>Total Times=</h1>
                <p className="text-end">{totalTime}</p>
            </div>
            <div className="flex gap-5">
                <h1>Total Calories=</h1>
                <p>{totalCalories}</p>
            </div>
        </div>
    );
};

export default Total;