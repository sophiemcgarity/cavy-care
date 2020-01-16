import React from 'react';

function Housing(props) {
    return (
        <div className="container pageContainer">
            <div className="row">
                <div className="col">
                    <h2>Housing</h2>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <p>Guidelines set by the Humane Society of the United States</p>
                    <ul>
                        <li>
                            {`One guinea pig:  7.5 square feet cage (minimum), but more is better; generally 30" x 36" is a good size.`}
                        </li>
                        <li>
                            {`Two guinea pigs:  7.5 square feet (minimum), but 10.5 square feet is preferred; generally 30" x 50" is a good size.`}
                        </li>
                        <li>
                            {`Three guinea pigs: 10.5 square feet (minimum), but 13 square feet is preferred; generally 30" x 62" is a good size.`}
                        </li>
                        <li>
                            {`Four guinea pigs: 13 square feet (minimum), but more is better; generally 30" x 76" is a good size.`}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Housing;

