import React, {useState} from 'react'

function YarnCalculator() {
    const [squareCount, setSquareCount] = useState();
    const [beforeOunce, setBeforeOunce] = useState();
    const [afterOunce, setAfterOunce] = useState();
    const [ounceLabel, setOunceLabel] = useState();


    const ounceCount = Math.floor(beforeOunce - afterOunce);
    const totalOunce = Math.floor(ounceCount * squareCount);
    const ballCount = totalOunce / ounceLabel;

    return (
        <>
            <div className="breadcrumbs">
                <h2>Yarn Calculator</h2>
            </div>
            <div className="grannySquareCalculator">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                            <h3>Yarn Calculator</h3>
                            <p className="fst-italic">
                            Now We Know How Many Squares We Need
                            </p>
                            <p>
                            Let me figure out how many balls of yarn you will need. Run this calculator for each color.</p>
                        </div>
                    </div>

                </div>

                <div>
                    <div>
                        <h3>How Many Balls Do You Need for Each Color?</h3>
                        <p>Complete the Granny Square Calculator to give us the number of squares you are wanting to complete.</p>
                    </div>

                    <div>
                        <label>How Many Squares Are you Going to Do?</label>
                        <div>
                            <input type="number" value={squareCount} onChange={e => setSquareCount(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <label>Do this Per Color: How many ounces was your ball before you started your square? Round to nearest ounce.</label>
                        <div>
                            <input type="number" value={beforeOunce} onChange={e => setBeforeOunce(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <label>Do this Per Color: How many ounces was your ball after you finished your sample square? Round to nearest ounce.</label>
                        <div>
                            <input type="number" value={afterOunce} onChange={e => setAfterOunce(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <label>This is how many ounces you used to complete 1 square for that color.</label>
                        <div>
                            <input type="text" value={ounceCount || 0} readOnly />
                        </div>
                    </div>
                    <div>
                        <label>Tell me How Many Ounces Does the Label Say on the Ball?</label>
                        <div>
                            <input type="number" value={ounceLabel} onChange={e => setOunceLabel(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <label>You will need this many ounces to create your afghan for this color.</label>
                        <div>
                            <input type="text" value={totalOunce || 0} readOnly />
                        </div>
                    </div>
                    <div>
                        <label>This is how many balls of yarn you will need to use this color in this blanket/afghan. You will end up with a decimal point.
                            <br />For example, if it shows 1.2. That's 1 ball and a portion of another. If it shows less than 1. It means it's less than 1 ball of yarn.</label>
                        <div>
                            <input type="text" value={ballCount || 0} readOnly />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default YarnCalculator
