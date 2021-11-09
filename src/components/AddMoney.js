import React from 'react'

function AddMoney(balance) {
    const handleAdd = (e) => {
        balance += e.target.value
    }

    return (
        <div>
            <input type="number" value="moreMoney" onChange={(e) => handleAdd(e)} />
        </div>
    )
}

export default AddMoney
